import 'fake-indexeddb/auto'
import { describe, expect, it } from 'vitest'
import type { Recipe } from '../types/recipe'
import type { Folder } from '../types/recipe'
import { toDraft } from './recipeDraft'
import {
  applyOrder,
  createBackup,
  deleteUserRecipe,
  getDrafts,
  getFavorites,
  getFolders,
  getRecipeOrder,
  listUserRecipes,
  newFolderId,
  newRecipeId,
  restoreBackup,
  saveUserRecipe,
  setDrafts,
  setFavorites,
  setFolders,
  setRecipeOrder,
} from './storage'

const recipe = (id: string, createdAt: string): Recipe => ({
  id,
  origin: 'user',
  name: `Recipe ${id}`,
  category: 'ice-cream',
  tags: [],
  models: ['original'],
  program: 'Ice Cream',
  basePint: 16,
  times: { prepMin: 5, freezeHours: 24 },
  ingredients: [{ items: [{ qty: 100, unit: 'g', name: 'sugar' }] }],
  steps: [{ text: 'Mix' }],
  createdAt,
})

describe('storage', () => {
  it('saves, lists newest first and deletes recipes', async () => {
    await saveUserRecipe(recipe('a', '2026-01-01'))
    await saveUserRecipe(recipe('b', '2026-02-01'))
    expect((await listUserRecipes()).map((r) => r.id)).toEqual(['b', 'a'])
    await deleteUserRecipe('a')
    await deleteUserRecipe('b')
    expect(await listUserRecipes()).toEqual([])
  })

  it('round-trips a backup and merges favorites', async () => {
    await saveUserRecipe(recipe('c', '2026-03-01'))
    await setFavorites(['c'])
    const backup = await createBackup()
    await deleteUserRecipe('c')
    await setFavorites(['curated-1'])

    expect(await restoreBackup(JSON.parse(JSON.stringify(backup)))).toBe(1)
    expect((await listUserRecipes()).map((r) => r.id)).toEqual(['c'])
    expect((await getFavorites()).sort()).toEqual(['c', 'curated-1'])
  })

  it('round-trips folders and the recipe order in a version 2 backup', async () => {
    const folder: Folder = { id: 'f1', name: 'Summer', recipeIds: ['c', 'white-chocolate-ice-cream'], createdAt: '2026-10-01' }
    await setFolders([folder])
    await setRecipeOrder(['c'])
    const backup = await createBackup()
    expect(backup.version).toBe(2)

    await setFolders([{ ...folder, name: 'Renamed', recipeIds: [] }, { id: 'f2', name: 'Party', recipeIds: [], createdAt: '2026-10-02' }])
    await setRecipeOrder(['x'])
    await restoreBackup(JSON.parse(JSON.stringify(backup)))

    // The folder from the backup replaces the one with its id; the other stays.
    expect(await getFolders()).toEqual([folder, { id: 'f2', name: 'Party', recipeIds: [], createdAt: '2026-10-02' }])
    expect(await getRecipeOrder()).toEqual(['c', 'x'])
  })

  it('still imports a version 1 backup, which has no folders', async () => {
    await setFolders([])
    const count = await restoreBackup({ app: 'creami-recipes', version: 1, exportedAt: '2026-01-01', recipes: [recipe('v1', '2026-01-01')], favorites: [] })
    expect(count).toBe(1)
    expect(await getFolders()).toEqual([])
  })

  it('skips folders in a backup that are not folders', async () => {
    await setFolders([])
    await restoreBackup({ app: 'creami-recipes', version: 2, recipes: [], folders: [{ id: 1 }, { id: 'ok', name: 'Fine', recipeIds: ['a', 2] }] })
    const folders = await getFolders()
    expect(folders.map((f) => [f.id, f.recipeIds])).toEqual([['ok', ['a']]])
  })

  it('keeps drafts in a backup and merges them back by id', async () => {
    const draft = toDraft()
    await setDrafts([{ id: 'd1', savedAt: '2026-10-01', draft: { ...draft, name: 'Half-done sorbet' } }])
    const backup = await createBackup()
    await setDrafts([{ id: 'd2', savedAt: '2026-10-02', draft }])
    await restoreBackup(JSON.parse(JSON.stringify(backup)))
    expect((await getDrafts()).map((d) => [d.id, d.draft.name])).toEqual([
      ['d1', 'Half-done sorbet'],
      ['d2', ''],
    ])
  })

  it('rejects files that are not a backup', async () => {
    await expect(restoreBackup({ hello: 'world' })).rejects.toThrow('not a Creami Recipes backup')
  })

  it('creates readable ids', () => {
    expect(newRecipeId('Crème Brûlée Gelato!')).toMatch(/^my-creme-brulee-gelato-[a-z0-9]{1,5}$/)
    expect(newFolderId()).toMatch(/^folder-[a-z0-9]+-[a-z0-9]+$/)
  })

  it('applies a saved order, with anything new first', () => {
    const items = ['new', 'a', 'b', 'c'].map((id) => ({ id }))
    expect(applyOrder(items, ['c', 'a', 'b', 'gone']).map((x) => x.id)).toEqual(['new', 'c', 'a', 'b'])
  })
})
