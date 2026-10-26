import type { Category, CreamiModel, Difficulty, PintSize, Recipe } from '../types/recipe'
import { parseQty } from './quantity'
import { newRecipeId } from './storage'

// The recipe form works on text, exactly as typed, and only becomes a Recipe
// when it is saved. The same shape is what a draft keeps.

export interface DraftItem {
  key: string
  qty: string
  unit: string
  name: string
  note: string
}
export interface DraftGroup {
  key: string
  title: string
  items: DraftItem[]
}
export interface DraftStep {
  key: string
  text: string
  program: string
}
export interface Draft {
  name: string
  tagline: string
  description: string
  image?: string
  category: Category
  program: string
  models: CreamiModel[]
  basePint: PintSize
  prepMin: string
  freezeHours: string
  servings: string
  difficulty: Difficulty | ''
  groups: DraftGroup[]
  steps: DraftStep[]
  tips: string
  tags: string[]
}

/** An unfinished new recipe, put aside to carry on with later. */
export interface SavedDraft {
  id: string
  savedAt: string
  draft: Draft
}

let keySeed = 0
export const nextKey = () => `k${++keySeed}`

export const emptyItem = (): DraftItem => ({ key: nextKey(), qty: '', unit: '', name: '', note: '' })
export const emptyStep = (): DraftStep => ({ key: nextKey(), text: '', program: '' })

export function toDraft(recipe?: Recipe): Draft {
  if (!recipe) {
    return {
      name: '',
      tagline: '',
      description: '',
      category: 'ice-cream',
      program: 'Ice Cream',
      models: ['original'],
      basePint: 16,
      prepMin: '10',
      freezeHours: '24',
      servings: '',
      difficulty: 'easy',
      groups: [{ key: nextKey(), title: '', items: [emptyItem(), emptyItem(), emptyItem()] }],
      steps: [emptyStep(), emptyStep()],
      tips: '',
      tags: [],
    }
  }
  return {
    name: recipe.name,
    tagline: recipe.tagline ?? '',
    description: recipe.description ?? '',
    image: recipe.image,
    category: recipe.category,
    program: recipe.program,
    models: recipe.models,
    basePint: recipe.basePint,
    prepMin: String(recipe.times.prepMin),
    freezeHours: String(recipe.times.freezeHours),
    servings: recipe.servings ?? '',
    difficulty: recipe.difficulty ?? '',
    groups: recipe.ingredients.map((group) => ({
      key: nextKey(),
      title: group.title ?? '',
      items: group.items.map((item) => ({
        key: nextKey(),
        qty: item.qty === undefined ? '' : String(Math.round(item.qty * 100) / 100),
        unit: item.unit ?? '',
        name: item.name,
        note: item.note ?? '',
      })),
    })),
    steps: recipe.steps.map((step) => ({ key: nextKey(), text: step.text, program: step.program ?? '' })),
    tips: (recipe.tips ?? []).join('\n'),
    tags: recipe.tags,
  }
}

/** Fresh list keys for a draft read back from storage, so they can't clash with ones made since. */
export function rekey(draft: Draft): Draft {
  return {
    ...draft,
    groups: draft.groups.map((group) => ({ ...group, key: nextKey(), items: group.items.map((item) => ({ ...item, key: nextKey() })) })),
    steps: draft.steps.map((step) => ({ ...step, key: nextKey() })),
  }
}

/** Whether there is anything in the form worth keeping as a draft. */
export function hasContent(draft: Draft): boolean {
  return Boolean(
    draft.name.trim() ||
      draft.tagline.trim() ||
      draft.description.trim() ||
      draft.image ||
      draft.tips.trim() ||
      draft.groups.some((group) => group.title.trim() || group.items.some((item) => item.name.trim() || item.qty.trim())) ||
      draft.steps.some((step) => step.text.trim()),
  )
}

const toInt = (value: string, fallback: number) => {
  const n = Number.parseInt(value, 10)
  return Number.isFinite(n) && n >= 0 ? n : fallback
}
const clean = (value: string) => value.trim() || undefined

export function toRecipe(draft: Draft, existing?: Recipe): Recipe {
  const now = new Date().toISOString()
  const name = draft.name.trim()
  return {
    id: existing?.id ?? newRecipeId(name),
    origin: 'user',
    name,
    tagline: clean(draft.tagline),
    description: clean(draft.description),
    image: draft.image,
    category: draft.category,
    tags: draft.tags,
    models: draft.models.length ? draft.models : ['original'],
    program: draft.program.trim() || 'Ice Cream',
    basePint: draft.basePint,
    servings: clean(draft.servings),
    difficulty: draft.difficulty || undefined,
    times: { prepMin: toInt(draft.prepMin, 0), freezeHours: toInt(draft.freezeHours, 24) },
    ingredients: draft.groups
      .map((group) => ({
        title: clean(group.title),
        items: group.items
          .filter((item) => item.name.trim())
          .map((item) => ({ qty: parseQty(item.qty), unit: clean(item.unit), name: item.name.trim(), note: clean(item.note) })),
      }))
      .filter((group) => group.items.length > 0),
    steps: draft.steps.filter((step) => step.text.trim()).map((step) => ({ text: step.text.trim(), program: clean(step.program) })),
    tips: draft.tips
      .split('\n')
      .map((tip) => tip.trim())
      .filter(Boolean),
    createdAt: existing?.createdAt ?? now,
    updatedAt: now,
  }
}

export type DraftField = 'name' | 'ingredients' | 'steps'

/** The first thing a recipe still needs before it can be saved, with what to tell the cook (English, for `t()`). */
export function findProblem(draft: Draft): { field: DraftField; message: string } | null {
  if (!draft.name.trim()) return { field: 'name', message: 'Give your recipe a name.' }
  if (!draft.groups.some((group) => group.items.some((item) => item.name.trim()))) return { field: 'ingredients', message: 'Add at least one ingredient.' }
  if (!draft.steps.some((step) => step.text.trim())) return { field: 'steps', message: 'Add at least one step.' }
  return null
}

export function newDraftId(): string {
  return `draft-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`
}
