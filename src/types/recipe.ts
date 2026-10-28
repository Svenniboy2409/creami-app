export type CreamiModel = 'original' | 'breeze' | 'deluxe' | 'swirl'

export type Category =
  | 'ice-cream'
  | 'base'
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

/** Flavours with their own illustration, for recipes that have no photo. */
export type Flavor =
  | 'white-chocolate'
  | 'greek-yogurt'
  | 'cottage-cheese'
  | 'coconut'
  | 'chocolate'
  | 'vanilla'
  | 'strawberry'
  | 'mint-chip'
  | 'cookie-dough'
  | 'cookies-cream'
  | 'coffee'
  | 'banana'
  | 'peanut-butter'
  | 'raspberry-cheesecake'
  | 'mango'
  | 'chocolate-hazelnut'
  | 'salted-caramel'
  | 'cheesecake'
  | 'pistachio'
  | 'biscoff'
  | 'key-lime'
  | 'banana-split'
  | 'cinnamon'
  | 'brownie'
  | 'peach'
  | 'blueberry'
  | 'tiramisu'
  | 'blackberry'
  | 'cherry'
  | 'birthday-cake'
  | 'hazelnut'
  | 'mixed-berry'
  | 'panna-cotta'
  | 'iced-tea'
  | 'elderflower'
  | 'pomegranate'
  | 'butter-pecan'
  | 'matcha'
  | 'marshmallow'
  | 'cotton-candy'
  | 'passion-fruit'
  | 'lemon'
  | 'strawberry-banana'
  | 'pear'
  | 'pineapple'
  | 'aperol-spritz'

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

/** A flavour to make from a recipe, e.g. from a base; links to that recipe when the app has it. */
export interface RecipeIdea {
  name: string
  recipeId?: string
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
  /** Without a photo, the illustration is drawn in this flavour's colours instead of the category's. */
  flavor?: Flavor
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
  /** "Try these flavours": what else this recipe (usually a base) can become. */
  ideas?: RecipeIdea[]
  nutrition?: Nutrition
  /** Where a curated recipe came from. Kept for reference only; the app doesn't show it. */
  credits?: { author?: string; url?: string; translatedFrom?: string }
  /** The recipe's text in another interface language; anything left out stays as written. */
  translations?: { nl?: Partial<RecipeText> }
  createdAt?: string
  updatedAt?: string
}

/** The parts of a recipe that are words rather than settings, and so can be translated. */
export type RecipeText = Pick<Recipe, 'name' | 'tagline' | 'description' | 'servings' | 'ingredients' | 'steps' | 'tips' | 'ideas'>

export interface Folder {
  id: string
  name: string
  /** Data URL of a cover photo; without one the cover is a collage of the recipes inside. */
  image?: string
  /** Recipes in the order they are shown. Any recipe can go in, curated or your own. */
  recipeIds: string[]
  createdAt: string
}
