import { describe, expect, it } from 'vitest'
import { BASIC_TIPS, CATEGORIES, PROGRAMS, SUGGESTED_TAGS } from '../creami'
import { FLAVORS } from '../flavors'
import { machinesFor } from '../../lib/machines'
import { CURATED_RECIPES } from '.'

const UNITS = ['g', 'ml', 'tbsp', 'tsp', 'cup', 'scoop', 'pinch', 'pcs']

describe('curated recipes', () => {
  it('have unique ids', () => {
    const ids = CURATED_RECIPES.map((r) => r.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('have unique names in both languages, so a second card of the same recipe extends the first instead', () => {
    for (const names of [CURATED_RECIPES.map((r) => r.name), CURATED_RECIPES.map((r) => r.translations?.nl?.name)]) {
      const lower = names.map((name) => name?.toLowerCase())
      expect(lower.filter((name, index) => lower.indexOf(name) !== index)).toEqual([])
    }
  })

  it.each(CURATED_RECIPES.map((r) => [r.id, r] as const))('%s is complete and consistent', (_, recipe) => {
    // A photo, and a flavour to draw instead when illustrations are switched on in Settings.
    expect(recipe.image).toBeTruthy()
    expect(recipe.flavor !== undefined && recipe.flavor in FLAVORS).toBe(true)
    expect(recipe.category in CATEGORIES).toBe(true)
    expect(PROGRAMS).toContain(recipe.program)
    for (const step of recipe.steps) if (step.program) expect(PROGRAMS).toContain(step.program)
    // Only machines that have every program it runs.
    expect(machinesFor(recipe)).toEqual(recipe.models)
    for (const tag of recipe.tags) expect(SUGGESTED_TAGS).toContain(tag)
    for (const item of recipe.ingredients.flatMap((g) => g.items)) if (item.unit) expect(UNITS).toContain(item.unit)
    // Readable in Dutch too, step for step.
    const nl = recipe.translations?.nl
    expect(nl?.name).toBeTruthy()
    expect(nl?.steps?.length).toBe(recipe.steps.length)
    expect(nl?.steps?.map((s) => s.program)).toEqual(recipe.steps.map((s) => s.program))
    expect(nl?.tips?.length).toBe(recipe.tips?.length)
    // The basics show under every recipe already, folded away; tips are what is particular to this one.
    for (const tip of recipe.tips ?? []) expect(BASIC_TIPS).not.toContain(tip)
    // Ideas that link somewhere link to a recipe the app has, in both languages.
    const ids = new Set(CURATED_RECIPES.map((r) => r.id))
    for (const idea of recipe.ideas ?? []) if (idea.recipeId) expect(ids.has(idea.recipeId)).toBe(true)
    expect(nl?.ideas?.map((i) => i.recipeId)).toEqual(recipe.ideas?.map((i) => i.recipeId))
  })
})
