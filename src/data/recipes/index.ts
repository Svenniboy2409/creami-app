import type { Recipe } from '../../types/recipe'
import { bananaCreamPieIceCream } from './banana-cream-pie-ice-cream'
import { biscoffIceCream } from './biscoff-ice-cream'
import { cheesecakeDreamIceCream } from './cheesecake-dream-ice-cream'
import { chocolateBase } from './chocolate-base'
import { chocolateHazelnutIceCream } from './chocolate-hazelnut-ice-cream'
import { chocolateIceCream } from './chocolate-ice-cream'
import { coconutMilkBase } from './coconut-milk-base'
import { coffeeIceCream } from './coffee-ice-cream'
import { condensedMilkVanillaIceCream } from './condensed-milk-vanilla-ice-cream'
import { cookieDoughIceCream } from './cookie-dough-ice-cream'
import { cookiesAndCreamIceCream } from './cookies-and-cream-ice-cream'
import { cottageCheeseBase } from './cottage-cheese-base'
import { greekYogurtBase } from './greek-yogurt-base'
import { mangoIceCream } from './mango-ice-cream'
import { mangoSorbet } from './mango-sorbet'
import { mintChocolateChipIceCream } from './mint-chocolate-chip-ice-cream'
import { peanutButterCupIceCream } from './peanut-butter-cup-ice-cream'
import { pistachioIceCream } from './pistachio-ice-cream'
import { raspberryCheesecakeIceCream } from './raspberry-cheesecake-ice-cream'
import { saltedCaramelIceCream } from './salted-caramel-ice-cream'
import { strawberryIceCream } from './strawberry-ice-cream'
import { vanillaBase } from './vanilla-base'
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
  // Discover a world of Ninja Creami flavours
  saltedCaramelIceCream,
  cheesecakeDreamIceCream,
  pistachioIceCream,
  mangoSorbet,
  biscoffIceCream,
  // From around the web
  condensedMilkVanillaIceCream,
  // The five bases, to flavour your own way
  vanillaBase,
  chocolateBase,
  greekYogurtBase,
  cottageCheeseBase,
  coconutMilkBase,
]
