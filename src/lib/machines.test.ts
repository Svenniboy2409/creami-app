import { describe, expect, it } from 'vitest'
import { machinesFor, missingPrograms, programGaps } from './machines'
import type { Recipe } from '../types/recipe'

const recipe = (program: string, models: Recipe['models'] = ['original', 'breeze', 'deluxe', 'swirl']) => ({
  program,
  models,
  steps: [{ text: 'Process.', program }, { text: 'Re-spin.', program: 'Re-spin' }],
})

describe('machines', () => {
  it('offers a recipe for every listed machine that has its programs', () => {
    expect(machinesFor(recipe('Ice Cream'))).toEqual(['original', 'breeze', 'deluxe', 'swirl'])
  })

  it('leaves out machines without a program the recipe needs', () => {
    expect(machinesFor(recipe('Frozen Yogurt'))).toEqual(['deluxe', 'swirl'])
    expect(missingPrograms(recipe('Frozen Yogurt'), 'original')).toEqual(['Frozen Yogurt'])
  })

  it('never adds a machine the recipe does not list', () => {
    expect(machinesFor(recipe('Ice Cream', ['deluxe']))).toEqual(['deluxe'])
  })

  it('lets a program typed into the form rule nothing out', () => {
    expect(machinesFor(recipe('Twist & Shout'))).toEqual(['original', 'breeze', 'deluxe', 'swirl'])
  })

  it('names the machines each missing program rules out', () => {
    expect(programGaps(recipe('Frozen Yogurt'))).toEqual([{ program: 'Frozen Yogurt', models: ['original', 'breeze'] }])
    expect(programGaps(recipe('Sorbet'))).toEqual([])
  })
})
