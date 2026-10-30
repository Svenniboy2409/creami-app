import type { Recipe } from '../../types/recipe'
import { aperolSpritzSorbet } from './aperol-spritz-sorbet'
import { bananaCreamPieIceCream } from './banana-cream-pie-ice-cream'
import { bananaPuddingPieIceCream } from './banana-pudding-pie-ice-cream'
import { bananaSplitIceCream } from './banana-split-ice-cream'
import { birthdayCakeDreamIceCream } from './birthday-cake-dream-ice-cream'
import { birthdayCakeIceCream } from './birthday-cake-ice-cream'
import { biscoffIceCream } from './biscoff-ice-cream'
import { blackberryBlissIceCream } from './blackberry-bliss-ice-cream'
import { blueberryBlissIceCream } from './blueberry-bliss-ice-cream'
import { brownieBlastIceCream } from './brownie-blast-ice-cream'
import { brownieBlissIceCream } from './brownie-bliss-ice-cream'
import { butterPecanIceCream } from './butter-pecan-ice-cream'
import { cacaoDreamIceCream } from './cacao-dream-ice-cream'
import { cheesecakeDreamIceCream } from './cheesecake-dream-ice-cream'
import { cherryDelightIceCream } from './cherry-delight-ice-cream'
import { chipMintCoolIceCream } from './chip-mint-cool-ice-cream'
import { chocolateBase } from './chocolate-base'
import { chocolateDevotionIceCream } from './chocolate-devotion-ice-cream'
import { chocolateHazelnutIceCream } from './chocolate-hazelnut-ice-cream'
import { chocolateIceCream } from './chocolate-ice-cream'
import { cinnamonDreamIceCream } from './cinnamon-dream-ice-cream'
import { citronmaneIceCream } from './citronmane-ice-cream'
import { coconutCreamFrozenYogurt } from './coconut-cream-frozen-yogurt'
import { coconutMilkBase } from './coconut-milk-base'
import { coffeeIceCream } from './coffee-ice-cream'
import { condensedMilkVanillaIceCream } from './condensed-milk-vanilla-ice-cream'
import { cookieDoughIceCream } from './cookie-dough-ice-cream'
import { cookiesAndCreamIceCream } from './cookies-and-cream-ice-cream'
import { cottageCheeseBase } from './cottage-cheese-base'
import { cottonCandyIceCream } from './cotton-candy-ice-cream'
import { creamyMintChocolateChipIceCream } from './creamy-mint-chocolate-chip-ice-cream'
import { creamyStrawberryIceCream } from './creamy-strawberry-ice-cream'
import { elderflowerDreamIceCream } from './elderflower-dream-ice-cream'
import { greekYogurtBase } from './greek-yogurt-base'
import { hazelnutHeavenIceCream } from './hazelnut-heaven-ice-cream'
import { icedTeaDelightIceCream } from './iced-tea-delight-ice-cream'
import { keyLimePieIceCream } from './key-lime-pie-ice-cream'
import { mangoIceCream } from './mango-ice-cream'
import { mangoSorbet } from './mango-sorbet'
import { mapleCoffeeIceCream } from './maple-coffee-ice-cream'
import { marshmallowDreamIceCream } from './marshmallow-dream-ice-cream'
import { matchaDreamIceCream } from './matcha-dream-ice-cream'
import { matchaMagicIceCream } from './matcha-magic-ice-cream'
import { mintChocolateChipIceCream } from './mint-chocolate-chip-ice-cream'
import { mixedBerriesIceCream } from './mixed-berries-ice-cream'
import { pannaCottaDreamIceCream } from './panna-cotta-dream-ice-cream'
import { passionFruitIceCream } from './passion-fruit-ice-cream'
import { peachPerfectionIceCream } from './peach-perfection-ice-cream'
import { peachesAndCreamIceCream } from './peaches-and-cream-ice-cream'
import { peanutButterCupIceCream } from './peanut-butter-cup-ice-cream'
import { pearAndRumIceCream } from './pear-and-rum-ice-cream'
import { pineappleSorbet } from './pineapple-sorbet'
import { pistachioIceCream } from './pistachio-ice-cream'
import { pomegranateDelightIceCream } from './pomegranate-delight-ice-cream'
import { raspberryCheesecakeIceCream } from './raspberry-cheesecake-ice-cream'
import { saltedCaramelIceCream } from './salted-caramel-ice-cream'
import { smoresIceCream } from './smores-ice-cream'
import { strawberryBananaIceCream } from './strawberry-banana-ice-cream'
import { strawberryIceCream } from './strawberry-ice-cream'
import { strawberryMangoFruitWhip } from './strawberry-mango-fruit-whip'
import { strawberrySorbet } from './strawberry-sorbet'
import { tiramisuDreamIceCream } from './tiramisu-dream-ice-cream'
import { ultimatePeanutButterCupIceCream } from './ultimate-peanut-butter-cup-ice-cream'
import { vanillaBase } from './vanilla-base'
import { vanillaBeanIceCream } from './vanilla-bean-ice-cream'
import { watermelonHoneySorbet } from './watermelon-honey-sorbet'
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
  keyLimePieIceCream,
  ultimatePeanutButterCupIceCream,
  bananaSplitIceCream,
  cinnamonDreamIceCream,
  brownieBlastIceCream,
  peachesAndCreamIceCream,
  blueberryBlissIceCream,
  tiramisuDreamIceCream,
  chipMintCoolIceCream,
  blackberryBlissIceCream,
  cherryDelightIceCream,
  birthdayCakeDreamIceCream,
  hazelnutHeavenIceCream,
  mixedBerriesIceCream,
  creamyMintChocolateChipIceCream,
  pannaCottaDreamIceCream,
  icedTeaDelightIceCream,
  creamyStrawberryIceCream,
  strawberrySorbet,
  elderflowerDreamIceCream,
  pomegranateDelightIceCream,
  brownieBlissIceCream,
  butterPecanIceCream,
  matchaDreamIceCream,
  marshmallowDreamIceCream,
  peachPerfectionIceCream,
  birthdayCakeIceCream,
  cottonCandyIceCream,
  passionFruitIceCream,
  citronmaneIceCream,
  cacaoDreamIceCream,
  matchaMagicIceCream,
  coconutCreamFrozenYogurt,
  strawberryBananaIceCream,
  pearAndRumIceCream,
  pineappleSorbet,
  aperolSpritzSorbet,
  // From around the web
  condensedMilkVanillaIceCream,
  smoresIceCream,
  // Sara J Sweets on YouTube
  bananaPuddingPieIceCream,
  chocolateDevotionIceCream,
  mapleCoffeeIceCream,
  strawberryMangoFruitWhip,
  watermelonHoneySorbet,
  // The five bases, to flavour your own way
  vanillaBase,
  chocolateBase,
  greekYogurtBase,
  cottageCheeseBase,
  coconutMilkBase,
]
