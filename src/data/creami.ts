import type { Category, CreamiModel, Difficulty, PintSize, Taste } from '../types/recipe'

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
 * Every program a recipe can name, as a pick-list. Which machine has which is
 * in MODEL_PROGRAMS; the form also accepts custom text.
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

/**
 * The programs on each machine, so a recipe is only offered for the machines
 * that can run it. Where models in one line differ (the NC300 and the NC100
 * lack Gelato and Smoothie Bowl), the line counts as having the program.
 */
export const MODEL_PROGRAMS: Record<CreamiModel, readonly string[]> = {
  original: ['Ice Cream', 'Lite Ice Cream', 'Gelato', 'Sorbet', 'Milkshake', 'Smoothie Bowl', 'Mix-in', 'Re-spin'],
  breeze: ['Ice Cream', 'Lite Ice Cream', 'Gelato', 'Sorbet', 'Milkshake', 'Smoothie Bowl', 'Mix-in', 'Re-spin'],
  deluxe: [
    'Ice Cream',
    'Lite Ice Cream',
    'Gelato',
    'Sorbet',
    'Frozen Yogurt',
    'Milkshake',
    'Italian Ice',
    'Slushi',
    'Frozen Drink',
    'Creamiccino',
    'Mix-in',
    'Re-spin',
  ],
  swirl: [
    'Ice Cream',
    'Lite Ice Cream',
    'Gelato',
    'Sorbet',
    'Frozen Yogurt',
    'Milkshake',
    'Soft Serve',
    'Soft Serve Gelato',
    'Fruiti',
    'CreamiFit',
    'Mix-in',
    'Re-spin',
  ],
}

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

/** The tastes, in the order the filter shows them. */
export const TASTES: Record<Taste, string> = {
  sweet: 'Sweet',
  fruity: 'Fruity',
  refreshing: 'Refreshing',
  creamy: 'Creamy',
  rich: 'Rich',
  chocolatey: 'Chocolatey',
  nutty: 'Nutty',
  healthy: 'Healthy',
}

export const TASTE_ORDER = Object.keys(TASTES) as Taste[]

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

/**
 * What holds for every pint, whatever the recipe. The recipe page folds these
 * away under the recipe's own tips, so a recipe's `tips` keep only what is
 * particular to it.
 */
export const BASIC_TIPS = [
  'Fill no higher than the MAX FILL line; a little left over makes a lovely milkshake.',
  'Always freeze the base for a full 24 hours, on a level surface.',
  'Crumbly after the first spin? Add a splash of milk and use RE-SPIN.',
  'Add mix-ins after the first spin: make a well down the middle, add them and run MIX-IN.',
  'Leftovers? Smooth the top, put the lid on and freeze; process again before serving.',
]
