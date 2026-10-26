import 'fake-indexeddb/auto'
import { describe, expect, it } from 'vitest'
import type { Recipe } from '../types/recipe'
import {
  createBackup,
  deleteUserRecipe,
  getFavorites,
  listUserRecipes,
  newRecipeId,
  restoreBackup,
  saveUserRecipe,
  setFavorites,
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

  it('rejects files that are not a backup', async () => {
    await expect(restoreBackup({ hello: 'world' })).rejects.toThrow('not a Creami Recipes backup')
  })

  it('creates readable ids', () => {
    expect(newRecipeId('Crème Brûlée Gelato!')).toMatch(/^my-creme-brulee-gelato-[a-z0-9]{1,5}$/)
  })
})
