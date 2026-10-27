import type { Category, CreamiModel, Difficulty, PintSize } from '../types/recipe'

export type Tone = 'strawberry' | 'pistachio' | 'mango' | 'blueberry' | 'vanilla'

export const MODELS: Record<CreamiModel, { label: string; short: string; detail: string }> = {
  original: { label: 'CREAMi', short: 'Original', detail: '16 oz pints · NC299/NC300/NC301' },
  breeze: { label: 'CREAMi Breeze', short: 'Breeze', detail: '16 oz pints · NC100/NC201' },
  deluxe: { label: 'CREAMi Deluxe', short: 'Deluxe', detail: '24 oz pints · NC501' },
  swirl: { label: 'Swirl by CREAMi', short: 'Swirl', detail: 'Scoop & Swirl · soft serve · NC701' },
}

export const MODEL_ORDER: CreamiModel[] = ['original', 'breeze', 'deluxe', 'swirl']

export const PINT_SIZES: Record<PintSize, { label: string; detail: string }> = {
  16: { label: '16 oz', detail: '≈ 470 ml · Original, Breeze, Swirl' },
  24: { label: '24 oz', detail: '≈ 710 ml · Deluxe' },
}

/**
 * Program names differ slightly per model and region, so this is a pick-list
 * rather than a strict per-model mapping. The form also accepts custom text.
 */
export const PROGRAMS = [
  'Ice Cream',
  'Lite Ice Cream',
  'Gelato',
  'Sorbet',
  'Frozen Yogurt',
  'Milkshake',
  'Smoothie Bowl',
  'Italian Ice',
  'Slushi',
  'Frozen Drink',
  'Creamiccino',
  'Soft Serve',
  'Soft Serve Gelato',
  'Fruiti',
  'CreamiFit',
  'Mix-in',
  'Re-spin',
]

export const CATEGORIES: Record<Category, { label: string; tone: Tone }> = {
  'ice-cream': { label: 'Ice cream', tone: 'strawberry' },
  // A plain base to start from and flavour your own way.
  base: { label: 'Base', tone: 'vanilla' },
  gelato: { label: 'Gelato', tone: 'pistachio' },
  sorbet: { label: 'Sorbet', tone: 'mango' },
  'frozen-yogurt': { label: 'Frozen yogurt', tone: 'blueberry' },
  protein: { label: 'Protein', tone: 'vanilla' },
  milkshake: { label: 'Milkshake', tone: 'strawberry' },
  'smoothie-bowl': { label: 'Smoothie bowl', tone: 'blueberry' },
  'soft-serve': { label: 'Soft serve', tone: 'vanilla' },
  'frozen-drink': { label: 'Frozen drink', tone: 'mango' },
  other: { label: 'Other', tone: 'pistachio' },
}

export const CATEGORY_ORDER = Object.keys(CATEGORIES) as Category[]

export const DIFFICULTIES: Record<Difficulty, string> = {
  easy: 'Easy',
  medium: 'Medium',
  advanced: 'Advanced',
}

export const SUGGESTED_TAGS = [
  'high-protein',
  'egg-free',
  'low-sugar',
  'vegan',
  'dairy-free',
  'gluten-free',
  'fruity',
  'chocolate',
  'nutty',
  'kid-friendly',
]
