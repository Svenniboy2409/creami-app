import type { Recipe } from '../../types/recipe'
import { bananaCreamPieIceCream } from './banana-cream-pie-ice-cream'
import { chocolateHazelnutIceCream } from './chocolate-hazelnut-ice-cream'
import { chocolateIceCream } from './chocolate-ice-cream'
import { coffeeIceCream } from './coffee-ice-cream'
import { cookieDoughIceCream } from './cookie-dough-ice-cream'
import { cookiesAndCreamIceCream } from './cookies-and-cream-ice-cream'
import { mangoIceCream } from './mango-ice-cream'
import { mintChocolateChipIceCream } from './mint-chocolate-chip-ice-cream'
import { peanutButterCupIceCream } from './peanut-butter-cup-ice-cream'
import { raspberryCheesecakeIceCream } from './raspberry-cheesecake-ice-cream'
import { strawberryIceCream } from './strawberry-ice-cream'
import { vanillaBeanIceCream } from './vanilla-bean-ice-cream'
import { whiteChocolateIceCream } from './white-chocolate-ice-cream'

/**
 * Hand-picked recipes shown on Discover, in this order. Add a recipe by creating
 * `src/data/recipes/<slug>.ts` (photo in `src/assets/recipes/`) and listing it here.
 */
export const CURATED_RECIPES: Recipe[] = [
  whiteChocolateIceCream,
  // The Ninja Creami flavour list
  chocolateIceCream,
  vanillaBeanIceCream,
  strawberryIceCream,
  mintChocolateChipIceCream,
  cookieDoughIceCream,
  cookiesAndCreamIceCream,
  coffeeIceCream,
  bananaCreamPieIceCream,
  peanutButterCupIceCream,
  raspberryCheesecakeIceCream,
  mangoIceCream,
  chocolateHazelnutIceCream,
]
