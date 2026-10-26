import { CATEGORIES } from '../data/creami'
import type { Category, CreamiModel, Recipe } from '../types/recipe'

export interface RecipeFilter {
  query?: string
  category?: Category | 'all'
  model?: CreamiModel | 'all'
}

function haystack(recipe: Recipe): string {
  return [
    recipe.name,
    recipe.tagline,
    recipe.program,
    CATEGORIES[recipe.category]?.label,
    ...recipe.tags,
    ...recipe.ingredients.flatMap((group) => group.items.map((item) => item.name)),
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase()
}

export function filterRecipes(recipes: Recipe[], { query = '', category = 'all', model = 'all' }: RecipeFilter): Recipe[] {
  const terms = query.toLowerCase().split(/\s+/).filter(Boolean)
  return recipes.filter((recipe) => {
    if (category !== 'all' && recipe.category !== category) return false
    if (model !== 'all' && !recipe.models.includes(model)) return false
    if (terms.length === 0) return true
    const text = haystack(recipe)
    return terms.every((term) => text.includes(term))
  })
}
