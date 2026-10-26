import { createStore, del, get, set, values, type UseStore } from 'idb-keyval'
import type { Recipe } from '../types/recipe'

// Opened lazily so a browser without IndexedDB still renders the curated recipes.
let recipeStore: UseStore | undefined
let prefStore: UseStore | undefined
const recipes = () => (recipeStore ??= createStore('creami-recipes', 'recipes'))
const prefs = () => (prefStore ??= createStore('creami-prefs', 'prefs'))

const FAVORITES_KEY = 'favorites'

export async function listUserRecipes(): Promise<Recipe[]> {
  const all = await values<Recipe>(recipes())
  return all.sort((a, b) => (b.createdAt ?? '').localeCompare(a.createdAt ?? ''))
}

export function saveUserRecipe(recipe: Recipe): Promise<void> {
  return set(recipe.id, recipe, recipes())
}

export function deleteUserRecipe(id: string): Promise<void> {
  return del(id, recipes())
}

export async function getFavorites(): Promise<string[]> {
  return (await get<string[]>(FAVORITES_KEY, prefs())) ?? []
}

export function setFavorites(ids: string[]): Promise<void> {
  return set(FAVORITES_KEY, ids, prefs())
}

/** Asks the browser not to evict our data under storage pressure (best effort). */
export async function requestPersistence(): Promise<void> {
  try {
    if (navigator.storage?.persist && !(await navigator.storage.persisted())) {
      await navigator.storage.persist()
    }
  } catch {
    // Not supported or denied; data stays in best-effort storage.
  }
}

export interface Backup {
  app: 'creami-recipes'
  version: 1
  exportedAt: string
  recipes: Recipe[]
  favorites: string[]
}

export async function createBackup(): Promise<Backup> {
  return {
    app: 'creami-recipes',
    version: 1,
    exportedAt: new Date().toISOString(),
    recipes: await listUserRecipes(),
    favorites: await getFavorites(),
  }
}

function isRecipe(value: unknown): value is Recipe {
  const r = value as Recipe
  return (
    typeof r === 'object' &&
    r !== null &&
    typeof r.id === 'string' &&
    typeof r.name === 'string' &&
    Array.isArray(r.ingredients) &&
    Array.isArray(r.steps)
  )
}

/** Merges a backup into the library; recipes with the same id are overwritten. Returns the number of recipes imported. */
export async function restoreBackup(data: unknown): Promise<number> {
  const backup = data as Partial<Backup>
  if (backup?.app !== 'creami-recipes' || !Array.isArray(backup.recipes)) {
    throw new Error('This file is not a Creami Recipes backup.')
  }
  const valid = backup.recipes.filter(isRecipe)
  await Promise.all(valid.map((recipe) => saveUserRecipe({ ...recipe, origin: 'user' })))
  if (Array.isArray(backup.favorites)) {
    const merged = new Set([...(await getFavorites()), ...backup.favorites.filter((id) => typeof id === 'string')])
    await setFavorites([...merged])
  }
  return valid.length
}

export function newRecipeId(name: string): string {
  const slug = name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 40)
  const suffix = Math.random().toString(36).slice(2, 7)
  return `my-${slug || 'recipe'}-${suffix}`
}
