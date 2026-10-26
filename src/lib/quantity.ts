const UNICODE_FRACTIONS: Record<string, number> = { '¼': 0.25, '½': 0.5, '¾': 0.75, '⅓': 1 / 3, '⅔': 2 / 3 }

/** Parses what people type as an amount: "150", "1,5", "1.5", "1/2", "1 1/2", "1½". */
export function parseQty(input: string): number | undefined {
  let text = input.trim().replace(',', '.')
  if (!text) return undefined

  let total = 0
  for (const [glyph, value] of Object.entries(UNICODE_FRACTIONS)) {
    if (text.includes(glyph)) {
      total += value
      text = text.replace(glyph, ' ').trim()
    }
  }

  for (const part of text.split(/\s+/).filter(Boolean)) {
    const fraction = part.match(/^(\d+)\/(\d+)$/)
    const value = fraction ? Number(fraction[1]) / Number(fraction[2]) : Number(part)
    if (!Number.isFinite(value)) return undefined
    total += value
  }
  return total > 0 ? total : undefined
}
