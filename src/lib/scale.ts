import type { IngredientGroup, PintSize } from '../types/recipe'

const METRIC_UNITS = new Set(['g', 'kg', 'ml', 'l', 'cl', 'dl'])

const FRACTIONS: [number, string][] = [
  [0, ''],
  [1 / 8, '⅛'],
  [1 / 4, '¼'],
  [1 / 3, '⅓'],
  [1 / 2, '½'],
  [2 / 3, '⅔'],
  [3 / 4, '¾'],
  [1, ''],
]

export function scaleFactor(from: PintSize, to: PintSize): number {
  return to / from
}

// A pinch is a pinch in any pint size: two thirds of one isn't something anyone
// can measure. It still counts once per pint when making more than one.
const UNSCALED_UNITS = new Set(['pinch'])

/** Amounts for `pints` pints of size `to`, from a recipe written for one pint of size `from`. */
export function scaleGroups(groups: IngredientGroup[], from: PintSize, to: PintSize, pints = 1): IngredientGroup[] {
  const factor = scaleFactor(from, to) * pints
  if (factor === 1 && pints === 1) return groups
  return groups.map((group) => ({
    ...group,
    items: group.items.map((item) => {
      if (item.qty === undefined) return item
      return { ...item, qty: item.unit && UNSCALED_UNITS.has(item.unit) ? item.qty * pints : item.qty * factor }
    }),
  }))
}

/** Formats an amount for display: metric units as (half) numbers, everything else with kitchen fractions. */
export function formatQty(qty: number, unit?: string): string {
  if (unit && METRIC_UNITS.has(unit.toLowerCase())) {
    const rounded = qty < 10 ? Math.round(qty * 2) / 2 : Math.round(qty)
    return String(rounded)
  }
  if (qty >= 10) return String(Math.round(qty))

  let whole = Math.floor(qty)
  const rest = qty - whole
  const [value, glyph] = FRACTIONS.reduce((best, candidate) =>
    Math.abs(candidate[0] - rest) < Math.abs(best[0] - rest) ? candidate : best,
  )
  if (value === 1) whole += 1
  if (!glyph) return String(whole)
  return whole === 0 ? glyph : `${whole} ${glyph}`
}

export function formatAmount(qty: number | undefined, unit: string | undefined): string {
  if (qty === undefined) return unit ?? ''
  const amount = formatQty(qty, unit)
  return unit ? `${amount} ${unit}` : amount
}

const NUMBER = /\d+(?:[.,]\d+)?/g

/**
 * Servings for another pint size, in whole portions: "4–6" from a 24 oz pint is
 * "3–4" from a 16 oz one. Undefined when there is no number in the text to scale.
 */
export function scaleServings(servings: string | undefined, factor: number): string | undefined {
  if (!servings) return undefined
  if (factor === 1) return servings
  if (!servings.match(NUMBER)) return undefined
  const scaled = servings.replace(NUMBER, (n) => String(Math.max(1, Math.round(Number(n.replace(',', '.')) * factor))))
  // A range whose two ends meet after rounding ("3–3") is just the one number.
  return scaled.replace(/^(\d+)\s*[–-]\s*\1$/, '$1')
}
