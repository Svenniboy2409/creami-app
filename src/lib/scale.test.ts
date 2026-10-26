import { describe, expect, it } from 'vitest'
import { formatAmount, formatQty, scaleGroups } from './scale'

describe('scaleGroups', () => {
  const groups = [{ title: 'Base', items: [{ qty: 100, unit: 'g', name: 'sugar' }, { name: 'pinch of salt' }] }]

  it('scales a 16 oz recipe up to a 24 oz Deluxe pint', () => {
    expect(scaleGroups(groups, 16, 24)[0].items[0].qty).toBe(150)
  })

  it('scales a 24 oz recipe down to 16 oz', () => {
    expect(scaleGroups(groups, 24, 16)[0].items[0].qty).toBeCloseTo(66.67, 1)
  })

  it('leaves items without a quantity untouched', () => {
    expect(scaleGroups(groups, 16, 24)[0].items[1]).toEqual({ name: 'pinch of salt' })
  })

  it('returns the same groups when no scaling is needed', () => {
    expect(scaleGroups(groups, 16, 16)).toBe(groups)
  })
})

describe('formatQty', () => {
  it('rounds metric amounts to whole numbers', () => {
    expect(formatQty(66.666, 'g')).toBe('67')
    expect(formatQty(337.5, 'ml')).toBe('338')
  })

  it('keeps half steps for small metric amounts', () => {
    expect(formatQty(1.5, 'g')).toBe('1.5')
    expect(formatQty(2.2, 'g')).toBe('2')
  })

  it('uses kitchen fractions for spoons and pieces', () => {
    expect(formatQty(1.5, 'tbsp')).toBe('1 ½')
    expect(formatQty(0.75, 'tsp')).toBe('¾')
    expect(formatQty(0.66, 'cup')).toBe('⅔')
    expect(formatQty(2)).toBe('2')
    expect(formatQty(2.95)).toBe('3')
  })
})

describe('formatAmount', () => {
  it('joins amount and unit', () => {
    expect(formatAmount(150, 'g')).toBe('150 g')
    expect(formatAmount(3, undefined)).toBe('3')
    expect(formatAmount(undefined, 'pinch')).toBe('pinch')
  })
})
