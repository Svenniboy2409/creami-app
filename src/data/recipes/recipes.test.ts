import { describe, expect, it } from 'vitest'
import { CATEGORIES, PROGRAMS, SUGGESTED_TAGS } from '../creami'
import { FLAVORS } from '../flavors'
import { CURATED_RECIPES } from '.'

const UNITS = ['g', 'ml', 'tbsp', 'tsp', 'cup', 'scoop', 'pinch', 'pcs']

describe('curated recipes', () => {
  it('have unique ids', () => {
    const ids = CURATED_RECIPES.map((r) => r.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it.each(CURATED_RECIPES.map((r) => [r.id, r] as const))('%s is complete and consistent', (_, recipe) => {
    // Something to look at: a photo, or a flavour to draw.
    expect(Boolean(recipe.image) || (recipe.flavor !== undefined && recipe.flavor in FLAVORS)).toBe(true)
    expect(recipe.category in CATEGORIES).toBe(true)
    expect(PROGRAMS).toContain(recipe.program)
    for (const step of recipe.steps) if (step.program) expect(PROGRAMS).toContain(step.program)
    for (const tag of recipe.tags) expect(SUGGESTED_TAGS).toContain(tag)
    for (const item of recipe.ingredients.flatMap((g) => g.items)) if (item.unit) expect(UNITS).toContain(item.unit)
    // Readable in Dutch too, step for step.
    const nl = recipe.translations?.nl
    expect(nl?.name).toBeTruthy()
    expect(nl?.steps?.length).toBe(recipe.steps.length)
    expect(nl?.steps?.map((s) => s.program)).toEqual(recipe.steps.map((s) => s.program))
  })
})
