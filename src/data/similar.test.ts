import { describe, expect, it } from 'vitest'
import { CURATED_RECIPES } from './recipes'
import { SIMILAR, similarTo } from './similar'

describe('similar recipes', () => {
  it('only name recipes the app has, each group at least two, none twice in a group', () => {
    const ids = new Set(CURATED_RECIPES.map((recipe) => recipe.id))
    for (const group of SIMILAR) {
      expect(group.filter((id) => !ids.has(id))).toEqual([])
      expect(group.length).toBeGreaterThanOrEqual(2)
      expect(new Set(group).size).toBe(group.length)
    }
  })

  it('link both ways, never to the recipe itself', () => {
    for (const recipe of CURATED_RECIPES) {
      for (const other of similarTo(recipe.id)) {
        expect(other.id).not.toBe(recipe.id)
        expect(similarTo(other.id).map((r) => r.id)).toContain(recipe.id)
      }
    }
  })

  it('joins the groups a recipe is in', () => {
    expect(similarTo('strawberry-banana-ice-cream').map((r) => r.id)).toEqual([
      'strawberry-ice-cream',
      'banana-cream-pie-ice-cream',
      'banana-split-ice-cream',
      'creamy-strawberry-ice-cream',
      'strawberry-sorbet',
      'banana-pudding-pie-ice-cream',
      'strawberry-mango-fruit-whip',
    ])
  })
})
