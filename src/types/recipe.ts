export type CreamiModel = 'original' | 'breeze' | 'deluxe' | 'swirl'

export type Category =
  | 'ice-cream'
  | 'gelato'
  | 'sorbet'
  | 'frozen-yogurt'
  | 'protein'
  | 'milkshake'
  | 'smoothie-bowl'
  | 'soft-serve'
  | 'frozen-drink'
  | 'other'

export type Difficulty = 'easy' | 'medium' | 'advanced'

/** Pint size in US fluid ounces: 16 oz for Original/Breeze/Swirl, 24 oz for Deluxe. */
export type PintSize = 16 | 24

export interface Ingredient {
  qty?: number
  unit?: string
  name: string
  note?: string
}

export interface IngredientGroup {
  title?: string
  items: Ingredient[]
}

export interface Step {
  title?: string
  text: string
  /** Creami program to run during this step, e.g. "Gelato" or "Re-spin". */
  program?: string
}

export interface Nutrition {
  per: 'pint' | 'serving'
  kcal?: number
  protein?: number
  carbs?: number
  sugar?: number
  fat?: number
}

export interface Recipe {
  id: string
  origin: 'curated' | 'user'
  name: string
  tagline?: string
  description?: string
  /** Image URL (curated recipes) or data URL (user recipes). */
  image?: string
  category: Category
  tags: string[]
  models: CreamiModel[]
  program: string
  basePint: PintSize
  /** Free text so ranges like "4–6" work. */
  servings?: string
  difficulty?: Difficulty
  times: { prepMin: number; freezeHours: number }
  ingredients: IngredientGroup[]
  steps: Step[]
  tips?: string[]
  nutrition?: Nutrition
  credits?: { author?: string; url?: string; translatedFrom?: string }
  createdAt?: string
  updatedAt?: string
}
