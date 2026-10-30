import type { Recipe } from '../types/recipe'
import { CURATED_RECIPES } from './recipes'

/**
 * Recipes that go together: the same flavour, or nearly the same name. Each
 * recipe in a group points to the others under "Also try these flavours", so
 * the links always run both ways. A recipe can be in more than one group.
 */
export const SIMILAR: string[][] = [
  ['strawberry-ice-cream', 'creamy-strawberry-ice-cream', 'strawberry-sorbet', 'strawberry-banana-ice-cream', 'strawberry-mango-fruit-whip', 'honey-strawberry-ice-cream'],
  ['vanilla-bean-ice-cream', 'condensed-milk-vanilla-ice-cream', 'vanilla-base'],
  ['chocolate-ice-cream', 'cacao-dream-ice-cream', 'chocolate-base', 'chocolate-devotion-ice-cream'],
  ['mint-chocolate-chip-ice-cream', 'creamy-mint-chocolate-chip-ice-cream', 'chip-mint-cool-ice-cream'],
  ['birthday-cake-ice-cream', 'birthday-cake-dream-ice-cream'],
  ['peanut-butter-cup-ice-cream', 'ultimate-peanut-butter-cup-ice-cream'],
  ['brownie-blast-ice-cream', 'brownie-bliss-ice-cream', 'chocolate-devotion-ice-cream'],
  ['cookie-dough-ice-cream', 'cookies-and-cream-ice-cream'],
  ['mango-ice-cream', 'mango-sorbet', 'strawberry-mango-fruit-whip', 'mango-yogurt-ice-cream', 'berry-mango-sorbet'],
  ['matcha-dream-ice-cream', 'matcha-magic-ice-cream'],
  ['peaches-and-cream-ice-cream', 'peach-perfection-ice-cream', 'peach-frozen-yogurt'],
  ['banana-cream-pie-ice-cream', 'banana-split-ice-cream', 'strawberry-banana-ice-cream', 'banana-pudding-pie-ice-cream'],
  ['blueberry-bliss-ice-cream', 'blackberry-bliss-ice-cream', 'mixed-berries-ice-cream'],
  ['raspberry-cheesecake-ice-cream', 'cheesecake-dream-ice-cream'],
  ['chocolate-hazelnut-ice-cream', 'hazelnut-heaven-ice-cream'],
  ['coconut-milk-base', 'coconut-cream-frozen-yogurt'],
  ['coffee-ice-cream', 'tiramisu-dream-ice-cream', 'maple-coffee-ice-cream'],
  ['key-lime-pie-ice-cream', 'citronmane-ice-cream'],
  ['smores-ice-cream', 'marshmallow-dream-ice-cream'],
  ['cookies-and-cream-ice-cream', 'oreo-ice-cream'],
  ['caramel-apple-pie-ice-cream', 'caramel-pretzel-date-ice-cream', 'salted-caramel-ice-cream'],
]

/** The recipes that go with this one, in the order Discover lists them. */
export function similarTo(id: string): Recipe[] {
  const ids = new Set(SIMILAR.filter((group) => group.includes(id)).flat())
  ids.delete(id)
  return CURATED_RECIPES.filter((recipe) => ids.has(recipe.id))
}
