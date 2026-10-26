import { createStore, del, get, set, values, type UseStore } from 'idb-keyval'
import type { Folder, Recipe } from '../types/recipe'

// Opened lazily so a browser without IndexedDB still renders the curated recipes.
let recipeStore: UseStore | undefined
let prefStore: UseStore | undefined
const recipes = () => (recipeStore ??= createStore('creami-recipes', 'recipes'))
const prefs = () => (prefStore ??= createStore('creami-prefs', 'prefs'))

const FAVORITES_KEY = 'favorites'
const FOLDERS_KEY = 'folders'
const RECIPE_ORDER_KEY = 'recipe-order'

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

/** Folders in the order they are shown. */
export async function getFolders(): Promise<Folder[]> {
  return (await get<Folder[]>(FOLDERS_KEY, prefs())) ?? []
}

export function setFolders(folders: Folder[]): Promise<void> {
  return set(FOLDERS_KEY, folders, prefs())
}

/** The order you dragged your own recipes into. */
export async function getRecipeOrder(): Promise<string[]> {
  return (await get<string[]>(RECIPE_ORDER_KEY, prefs())) ?? []
}

export function setRecipeOrder(ids: string[]): Promise<void> {
  return set(RECIPE_ORDER_KEY, ids, prefs())
}

/**
 * Puts items in a saved order. Anything the order doesn't know yet (a recipe
 * added since the last rearranging) goes first, in the order it came in.
 */
export function applyOrder<T extends { id: string }>(items: T[], order: string[]): T[] {
  const rank = new Map(order.map((id, index) => [id, index]))
  const fresh = items.filter((item) => !rank.has(item.id))
  const known = items.filter((item) => rank.has(item.id)).sort((a, b) => rank.get(a.id)! - rank.get(b.id)!)
  return [...fresh, ...known]
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
  /** 1: recipes and favorites. 2: also folders and the order of your recipes. */
  version: 1 | 2
  exportedAt: string
  recipes: Recipe[]
  favorites: string[]
  folders?: Folder[]
  recipeOrder?: string[]
}

export async function createBackup(): Promise<Backup> {
  return {
    app: 'creami-recipes',
    version: 2,
    exportedAt: new Date().toISOString(),
    recipes: await listUserRecipes(),
    favorites: await getFavorites(),
    folders: await getFolders(),
    recipeOrder: await getRecipeOrder(),
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

function isFolder(value: unknown): value is Folder {
  const f = value as Folder
  return typeof f === 'object' && f !== null && typeof f.id === 'string' && typeof f.name === 'string' && Array.isArray(f.recipeIds)
}

const strings = (value: unknown): string[] => (Array.isArray(value) ? value.filter((id): id is string => typeof id === 'string') : [])

/** Ids from `extra` that `base` doesn't have yet, added after it. */
const union = (base: string[], extra: string[]) => [...new Set([...base, ...extra])]

/**
 * Merges a backup into the library: recipes and folders with the same id are
 * overwritten, favorites are combined. Returns the number of recipes imported.
 */
export async function restoreBackup(data: unknown): Promise<number> {
  const backup = data as Partial<Backup>
  if (backup?.app !== 'creami-recipes' || !Array.isArray(backup.recipes)) {
    throw new Error('This file is not a Creami Recipes backup.')
  }
  const valid = backup.recipes.filter(isRecipe)
  await Promise.all(valid.map((recipe) => saveUserRecipe({ ...recipe, origin: 'user' })))
  if (Array.isArray(backup.favorites)) {
    await setFavorites(union(await getFavorites(), strings(backup.favorites)))
  }
  if (Array.isArray(backup.folders)) {
    const incoming = backup.folders.filter(isFolder).map((folder) => ({
      id: folder.id,
      name: folder.name,
      image: typeof folder.image === 'string' ? folder.image : undefined,
      recipeIds: strings(folder.recipeIds),
      createdAt: typeof folder.createdAt === 'string' ? folder.createdAt : new Date().toISOString(),
    }))
    const current = await getFolders()
    const updated = current.map((folder) => incoming.find((f) => f.id === folder.id) ?? folder)
    const added = incoming.filter((folder) => !current.some((c) => c.id === folder.id))
    await setFolders([...updated, ...added])
  }
  if (Array.isArray(backup.recipeOrder)) {
    await setRecipeOrder(union(strings(backup.recipeOrder), await getRecipeOrder()))
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

export function newFolderId(): string {
  return `folder-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`
}
