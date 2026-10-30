// Forgiving recipe search.
//
// Two things a plain `includes()` gets wrong. It matches inside words, so
// "nut" also finds every "coconut" recipe; and it finds nothing the moment a
// letter is off, so "vanila" misses Vanilla. This matches at word starts
// instead, and falls back to a bounded edit distance so ordinary typos still
// land on the right recipe. Ported from the Mixly cocktail app.

import { CATEGORIES, DIFFICULTIES, MODELS, PROGRAMS, SUGGESTED_TAGS, TASTE_ORDER, TASTES } from '../data/creami'
import type { Category, CreamiModel, Recipe, Taste } from '../types/recipe'
import { machinesFor } from './machines'
import { NL } from './strings-nl'

export interface RecipeFilter {
  query?: string
  category?: Category | 'all'
  model?: CreamiModel | 'all'
  program?: string
  tag?: string
  taste?: Taste | 'all'
}

/** Lowercase, no accents, and everything else down to single spaces: "Crème-Brûlée" → "creme brulee". */
export function normalize(text: string | undefined): string {
  return (text ?? '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
}

// How many mistakes one word may have. Two letters is too little to guess
// from; up to six gets one mistake, longer words two.
function tolerance(term: string): number {
  if (term.length <= 2) return 0
  if (term.length <= 6) return 1
  return 2
}

// Damerau-Levenshtein distance, abandoned as soon as it is sure to exceed
// `max`. Swapping two neighbouring letters ("vanlila") counts as one mistake.
function editDistance(a: string, b: string, max: number): number {
  if (Math.abs(a.length - b.length) > max) return max + 1
  const n = b.length
  let prev2: number[] = []
  let prev = Array.from({ length: n + 1 }, (_, i) => i)
  let curr = new Array<number>(n + 1)
  for (let i = 1; i <= a.length; i++) {
    curr[0] = i
    let rowMin = i
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1
      let v = Math.min(prev[j] + 1, curr[j - 1] + 1, prev[j - 1] + cost)
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) v = Math.min(v, prev2[j - 2] + 1)
      curr[j] = v
      if (v < rowMin) rowMin = v
    }
    if (rowMin > max) return max + 1
    prev2 = prev
    prev = curr
    curr = new Array<number>(n + 1)
  }
  return prev[n]
}

// How well one term matches a list of words: 0 is no match, 6 an exact word,
// 5 the start of a word, 4 and below a typo — so a real match always wins.
function termScore(term: string, words: string[]): number {
  let best = 0
  const tol = tolerance(term)
  // On short terms one mistake is most of the word: the first letter has to be
  // right and only whole words count, so "mnt" reaches "mint" but not "melt".
  const short = term.length <= 3
  for (const word of words) {
    if (word === term) return 6
    if (word.startsWith(term)) {
      best = Math.max(best, 5)
      continue
    }
    if (!tol || best >= 4) continue
    if (short && word[0] !== term[0]) continue
    // Against the head of the word as well as the whole of it, so a typo in a
    // half-typed word ("pistach" for "pistachio") still finds it.
    let d = short ? tol + 1 : editDistance(term, word.slice(0, term.length), tol)
    if (d > tol) d = editDistance(term, word, tol)
    if (d <= tol) best = Math.max(best, 4 - d)
  }
  return best
}

const wordsOf = (...texts: (string | undefined)[]) => [...new Set(texts.flatMap((text) => normalize(text).split(' ')))].filter(Boolean)

interface SearchIndex {
  names: string[]
  nameWords: string[]
  categoryWords: string[]
  programWords: string[]
  ingredientWords: string[]
  tagWords: string[]
  /** What the filters and the recipe's facts say: its machines, its level, and whether it has mix-ins or toppings. */
  featureWords: string[]
  taglineWords: string[]
}

// "mix-ins", "mix in", "mixin": all one word, so they find the recipes with mix-ins.
const MIX_INS = /\bmix ?ins?\b/g

/** Whether a group of ingredients is the mix-ins or the toppings, whatever its exact spelling. */
function groupKind(title: string | undefined): 'mixins' | 'toppings' | undefined {
  const words = normalize(title).replace(MIX_INS, 'mixins')
  if (words.includes('mixins')) return 'mixins'
  if (words.includes('topping')) return 'toppings'
  return undefined
}

// Worked out once per recipe object and remembered.
const indexCache = new WeakMap<Recipe, SearchIndex>()

function indexOf(recipe: Recipe): SearchIndex {
  const cached = indexCache.get(recipe)
  if (cached) return cached

  // Every language a recipe can be read in can also be searched in.
  const versions = [recipe, recipe.translations?.nl ?? {}]
  const names = versions.map((v) => normalize(v.name)).filter(Boolean)
  const nameWords = wordsOf(...names)
  // The name with its spaces taken out too, so "whitechocolate" works.
  for (const name of names) if (name.includes(' ')) nameWords.push(name.replaceAll(' ', ''))

  const categoryLabel = CATEGORIES[recipe.category]?.label
  const entry: SearchIndex = {
    names,
    nameWords,
    categoryWords: wordsOf(categoryLabel, categoryLabel && NL[categoryLabel]),
    programWords: wordsOf(recipe.program, ...recipe.steps.map((step) => step.program)),
    ingredientWords: wordsOf(...versions.flatMap((v) => (v.ingredients ?? []).flatMap((group) => group.items.map((item) => item.name)))),
    // Tags and tastes alike: "zoet" finds the sweet ones.
    tagWords: wordsOf(...recipe.tags.flatMap((tag) => [tag, NL[tag]]), ...(recipe.tastes ?? []).flatMap((taste) => [TASTES[taste], NL[TASTES[taste]]])),
    featureWords: wordsOf(
      ...machinesFor(recipe).map((model) => MODELS[model].short),
      ...(recipe.difficulty ? [DIFFICULTIES[recipe.difficulty], NL[DIFFICULTIES[recipe.difficulty]]] : []),
      ...recipe.ingredients.filter((group) => group.items.length > 0).map((group) => groupKind(group.title)),
    ),
    taglineWords: wordsOf(...versions.map((v) => v.tagline)),
  }
  indexCache.set(recipe, entry)
  return entry
}

// Where a term can match and what that is worth. The quality of a match always
// outranks where it was found: the field only breaks ties.
const FIELDS: [keyof Omit<SearchIndex, 'names'>, number][] = [
  ['nameWords', 10],
  ['categoryWords', 4],
  ['programWords', 4],
  ['ingredientWords', 3],
  ['tagWords', 3],
  ['featureWords', 3],
  ['taglineWords', 2],
]

// A match is "strong" when the word really is there, spelling and all.
const STRONG = 5

function score(recipe: Recipe, terms: string[], query: string): { total: number; strong: boolean } {
  const idx = indexOf(recipe)
  let total = 0
  let strong = true
  for (const term of terms) {
    let best = 0
    for (const [field, weight] of FIELDS) {
      const quality = termScore(term, idx[field])
      if (quality) best = Math.max(best, quality * 100 + weight)
    }
    // Every term has to land somewhere.
    if (!best) return { total: 0, strong: false }
    if (Math.floor(best / 100) < STRONG) strong = false
    total += best
  }
  // A recipe whose name is exactly what you typed belongs at the very top.
  if (idx.names.includes(query)) total += 10000
  else if (idx.names.some((name) => name.startsWith(query))) total += 5000
  return { total, strong }
}

const MINUTES = 'm|min|mins|minute|minutes|minuut|minuten'
const HOURS = 'h|hr|hrs|hour|hours|u|uur|uren'
const PREP_WORDS = 'prep|preparation|bereiden|bereiding|bereidingstijd|voorbereiding|voorbereidingstijd'
const FREEZE_WORDS = 'freeze|freezing|vriezen|invriezen|vriestijd'
// In this order: a time named with its filter ("prep 10", "vriezen 12"), then
// one with its unit ("10 min", "24u"), then a bare number, which may be either.
const PREP_NAMED = new RegExp(`\\b(?:${PREP_WORDS}) ?(\\d+) ?(?:${MINUTES})?\\b`, 'g')
const FREEZE_NAMED = new RegExp(`\\b(?:${FREEZE_WORDS}) ?(\\d+) ?(?:${HOURS})?\\b`, 'g')
const PREP_UNIT = new RegExp(`\\b(\\d+) ?(?:${MINUTES})\\b`, 'g')
const FREEZE_UNIT = new RegExp(`\\b(\\d+) ?(?:${HOURS})\\b`, 'g')
const BARE_NUMBER = /\b(\d+)\b/g
// Words that only say which filter is meant, and find nothing on their own.
const FILTER_WORDS = new RegExp(
  `\\b(?:${PREP_WORDS}|${FREEZE_WORDS}|minutes?|mins?|minuut|minuten|hours?|uur|uren|level|niveau|difficulty|moeilijkheid|moeilijkheidsgraad|machine)\\b`,
  'g',
)

/** A search with its times taken out: "10 min" is the prep time, "24 u" the freezing time, a bare number either. */
interface Query {
  text: string
  prep: number[]
  freeze: number[]
  either: number[]
}

export function readQuery(query: string): Query {
  const read: Query = { text: normalize(query).replace(MIX_INS, 'mixins'), prep: [], freeze: [], either: [] }
  const take = (pattern: RegExp, into: number[]) => {
    read.text = read.text.replace(pattern, (_, n: string) => {
      into.push(Number(n))
      return ' '
    })
  }
  take(PREP_NAMED, read.prep)
  take(FREEZE_NAMED, read.freeze)
  take(PREP_UNIT, read.prep)
  take(FREEZE_UNIT, read.freeze)
  read.text = read.text.replace(FILTER_WORDS, ' ')
  take(BARE_NUMBER, read.either)
  read.text = read.text.replace(/ +/g, ' ').trim()
  return read
}

/** Whether a recipe has the times asked for; times are exact, so "10 min" never finds a recipe of 15. */
function hasTimes(recipe: Recipe, { prep, freeze, either }: Query): boolean {
  const { prepMin, freezeHours } = recipe.times
  return (
    prep.every((n) => n === prepMin) &&
    freeze.every((n) => n === freezeHours) &&
    either.every((n) => n === prepMin || n === freezeHours)
  )
}

/**
 * Recipes matching a free-text query, best match first. An empty query returns
 * the list as it was. Filters can be typed too: a machine, a level, "mix-ins",
 * "toppings", "10 min" for the prep time or "24 u" for the freezing time.
 */
export function searchRecipes(recipes: Recipe[], query: string): Recipe[] {
  const read = readQuery(query)
  const timed = read.prep.length || read.freeze.length || read.either.length ? recipes.filter((recipe) => hasTimes(recipe, read)) : recipes
  const q = read.text
  if (!q) return timed
  const terms = q.split(' ')
  const hits: { recipe: Recipe; total: number; strong: boolean; order: number }[] = []
  timed.forEach((recipe, order) => {
    const { total, strong } = score(recipe, terms, q)
    if (total > 0) hits.push({ recipe, total, strong, order })
  })
  // Forgiving spelling is a safety net, not a free-for-all: once something
  // really contains what you typed, the near misses are left out.
  const kept = hits.some((hit) => hit.strong) ? hits.filter((hit) => hit.strong) : hits
  kept.sort((a, b) => b.total - a.total || a.order - b.order)
  return kept.map((hit) => hit.recipe)
}

export function filterRecipes(recipes: Recipe[], { query = '', category = 'all', model = 'all', program = 'all', tag = 'all', taste = 'all' }: RecipeFilter): Recipe[] {
  const chosen = recipes.filter(
    (recipe) =>
      (category === 'all' || recipe.category === category) &&
      (model === 'all' || machinesFor(recipe).includes(model)) &&
      (program === 'all' || recipe.program === program) &&
      (tag === 'all' || recipe.tags.includes(tag)) &&
      (taste === 'all' || (recipe.tastes ?? []).includes(taste)),
  )
  return searchRecipes(chosen, query)
}

const byKnownOrder = (known: readonly string[]) => (a: string, b: string) => {
  const ia = known.indexOf(a)
  const ib = known.indexOf(b)
  if (ia === -1 && ib === -1) return a.localeCompare(b)
  if (ia === -1) return 1
  if (ib === -1) return -1
  return ia - ib
}

/** The categories, tastes, programs and tags that occur in these recipes, in their usual order, for filter chips. */
export function presentValues(recipes: Recipe[]): { categories: Category[]; tastes: Taste[]; programs: string[]; tags: string[] } {
  const categories = new Set(recipes.map((recipe) => recipe.category))
  return {
    categories: (Object.keys(CATEGORIES) as Category[]).filter((c) => categories.has(c)),
    tastes: TASTE_ORDER.filter((taste) => recipes.some((recipe) => recipe.tastes?.includes(taste))),
    programs: [...new Set(recipes.map((recipe) => recipe.program))].sort(byKnownOrder(PROGRAMS)),
    tags: [...new Set(recipes.flatMap((recipe) => recipe.tags))].sort(byKnownOrder(SUGGESTED_TAGS)),
  }
}
