import type { IngredientGroup, PintSize } from '../types/recipe'

const METRIC_UNITS = new Set(['g', 'kg', 'ml', 'l', 'cl', 'dl'])

const FRACTIONS: [number, string][] = [
  [0, ''],
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

export function scaleGroups(groups: IngredientGroup[], from: PintSize, to: PintSize): IngredientGroup[] {
  const factor = scaleFactor(from, to)
  if (factor === 1) return groups
  return groups.map((group) => ({
    ...group,
    items: group.items.map((item) => (item.qty === undefined ? item : { ...item, qty: item.qty * factor })),
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
