import { describe, expect, it } from 'vitest'
import { parseQty } from './quantity'

describe('parseQty', () => {
  it.each([
    ['150', 150],
    ['1,5', 1.5],
    ['1.5', 1.5],
    ['1/2', 0.5],
    ['1 1/2', 1.5],
    ['1½', 1.5],
    ['¾', 0.75],
  ])('parses %s', (input, expected) => {
    expect(parseQty(input)).toBeCloseTo(expected)
  })

  it.each(['', '  ', 'a pinch', '0', '1/0'])('returns undefined for %j', (input) => {
    expect(parseQty(input)).toBeUndefined()
  })
})
