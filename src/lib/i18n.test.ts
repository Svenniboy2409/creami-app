import { describe, expect, it } from 'vitest'
import { BASIC_TIPS, CATEGORIES, DIFFICULTIES, MODELS, SUGGESTED_TAGS, TASTES } from '../data/creami'
import { CURATED_RECIPES } from '../data/recipes'
import type { Recipe } from '../types/recipe'
import { localizeRecipe, translate } from './i18n'
import { NL } from './strings-nl'

describe('translate', () => {
  it('speaks English by default and fills in placeholders', () => {
    expect(translate('en', 'Show {n} recipes', { n: 3 })).toBe('Show 3 recipes')
  })

  it('translates to Dutch', () => {
    expect(translate('nl', 'Show {n} recipes', { n: 3 })).toBe('Toon 3 recepten')
  })

  it('falls back to the English text for anything untranslated', () => {
    expect(translate('nl', 'Not a real string {x}', { x: 'yet' })).toBe('Not a real string yet')
  })

  it('leaves placeholders it was not given alone', () => {
    expect(translate('en', '{a} and {b}', { a: 1 })).toBe('1 and {b}')
  })
})

describe('localizeRecipe', () => {
  const recipe = CURATED_RECIPES[0]

  it('returns the recipe itself in English', () => {
    expect(localizeRecipe(recipe, 'en')).toBe(recipe)
  })

  it('swaps in translated text but keeps everything else', () => {
    const nl = localizeRecipe(recipe, 'nl')
    expect(nl.name).toBe(recipe.translations?.nl?.name)
    expect(nl.id).toBe(recipe.id)
    expect(nl.program).toBe(recipe.program)
  })

  it('keeps a recipe without a translation as written', () => {
    const own = { ...recipe, translations: undefined } as Recipe
    expect(localizeRecipe(own, 'nl')).toBe(own)
  })

  it('translates curated recipes into ingredient lists of the same shape, so pint scaling still lines up', () => {
    for (const r of CURATED_RECIPES) {
      const nl = r.translations?.nl?.ingredients
      if (!nl) continue
      expect(nl.map((g) => g.items.map((i) => i.qty))).toEqual(r.ingredients.map((g) => g.items.map((i) => i.qty)))
    }
  })
})

// Every English string the code passes to t() or tn() as a literal, plus the
// data labels it translates by value. A string added without a Dutch version
// fails here instead of quietly showing up in English.
const sources = import.meta.glob(['../**/*.ts', '../**/*.tsx', '!../**/*.test.ts'], { query: '?raw', import: 'default', eager: true }) as Record<string, string>
const LITERAL = String.raw`'((?:[^'\\]|\\.)*)'`
const unescape = (text: string) => text.replace(/\\n/g, '\n').replace(/\\'/g, "'")

function usedKeys(): Set<string> {
  const keys = new Set<string>()
  for (const source of Object.values(sources)) {
    for (const m of source.matchAll(new RegExp(String.raw`\bt\(\s*` + LITERAL, 'g'))) keys.add(unescape(m[1]))
    for (const m of source.matchAll(new RegExp(String.raw`\bt\(\s*[^'()]*?\?\s*` + LITERAL + String.raw`\s*:\s*` + LITERAL, 'g'))) {
      keys.add(unescape(m[1]))
      keys.add(unescape(m[2]))
    }
    for (const m of source.matchAll(new RegExp(String.raw`\btn\(\s*[^,]+,\s*` + LITERAL + String.raw`\s*,\s*` + LITERAL, 'g'))) {
      keys.add(unescape(m[1]))
      keys.add(unescape(m[2]))
    }
  }
  return keys
}

describe('Dutch dictionary', () => {
  it('finds the strings it is checking', () => {
    expect(usedKeys().size).toBeGreaterThan(150)
  })

  it('has a translation for every interface string', () => {
    const missing = [...usedKeys()].filter((key) => !(key in NL))
    expect(missing).toEqual([])
  })

  it('has a translation for every data label', () => {
    const labels = [
      ...Object.values(CATEGORIES).map((c) => c.label),
      ...Object.values(DIFFICULTIES),
      ...Object.values(MODELS).map((m) => m.detail.split(' · ')[0]),
      ...SUGGESTED_TAGS,
      ...Object.values(TASTES),
      ...BASIC_TIPS,
      ...['tbsp', 'tsp', 'cup', 'scoop', 'pinch', 'pcs'],
      ...['Calories', 'Protein', 'Carbs', 'Sugar', 'Fat', 'per pint', 'per serving'],
      'This file is not a Creami Recipes backup.',
      // What findProblem() in recipeDraft.ts reports
      'Give your recipe a name.',
      'Add at least one ingredient.',
      'Add at least one step.',
    ]
    expect(labels.filter((label) => !(label in NL))).toEqual([])
  })

  it('keeps every placeholder of the English text', () => {
    const placeholders = (text: string) => [...text.matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort()
    const broken = Object.entries(NL).filter(([en, nl]) => placeholders(en).join() !== placeholders(nl).join())
    expect(broken).toEqual([])
  })
})
