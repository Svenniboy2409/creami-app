import image from '../../assets/recipes/condensed-milk-vanilla-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// After George Eats, in our own words, weighed straight into the pint as the
// original does. The original gives 150–200 g condensed milk; the middle of
// that range goes in the list so it scales with the pint, the range in a tip.
// Scaled to a 24 oz pint it lands at about 260 g, inside the 250–300 g the
// original recommends for a bigger tub.
export const condensedMilkVanillaIceCream: Recipe = {
  id: 'condensed-milk-vanilla-ice-cream',
  origin: 'curated',
  name: 'Condensed Milk Vanilla Ice Cream',
  tagline: 'Egg-free and made with just four ingredients',
  image,
  flavor: 'vanilla',
  category: 'ice-cream',
  tags: ['egg-free', 'gluten-free'],
  models: ['original', 'breeze', 'deluxe', 'swirl'],
  program: 'Ice Cream',
  basePint: 16,
  servings: '2–4',
  difficulty: 'easy',
  times: { prepMin: 5, freezeHours: 24 },
  ingredients: [
    {
      title: 'Base',
      items: [
        { qty: 200, unit: 'g', name: 'heavy cream', note: 'or whipping cream' },
        { qty: 175, unit: 'g', name: 'sweetened condensed milk', note: 'not evaporated milk' },
        { qty: 100, unit: 'g', name: 'full-fat milk' },
        { qty: 1, unit: 'tsp', name: 'vanilla bean paste', note: 'or vanilla bean extract' },
      ],
    },
  ],
  steps: [
    {
      title: 'Weigh it in',
      text: 'Put an empty CREAMi pint on the scales and weigh the cream, condensed milk, milk and vanilla straight into it.',
    },
    {
      title: 'Mix',
      text: 'Stir well until all of the condensed milk has mixed in and nothing is left at the bottom.',
    },
    {
      title: 'Freeze',
      text: 'Freeze without the lid on a level surface for up to 24 hours. Often 15 to 16 hours is already enough.',
    },
    {
      title: 'Process',
      text: 'Place the pint in the outer bowl and run the ICE CREAM program.',
      program: 'Ice Cream',
    },
    {
      title: 'Re-spin if needed',
      text: 'Has it balled up or does it look crumbly after the first spin? Run RE-SPIN until it is smooth.',
      program: 'Re-spin',
    },
    {
      title: 'Serve',
      text: 'Enjoy it as it is, with mix-ins or alongside a dessert. Put the lid on whatever is left, freeze it again and process it once more when you want another scoop. A half-full pint spins just fine.',
    },
  ],
  tips: [
    'In a 16\u00a0oz pint, 150\u00a0g condensed milk makes a less sweet ice cream and 200\u00a0g a sweeter one. Too much sugar keeps it from freezing firm: if it stays soft, use 25 to 50\u00a0g less.',
    'Only sweetened condensed milk works: it is the only sweetener, so don’t leave it out or swap in evaporated milk. Rather use sugar? Make the Vanilla Bean Ice Cream.',
    'Light cream and semi-skimmed milk work too; lactose-free ones make it lactose-free and low-FODMAP. A tiny pinch of salt brings out the flavour.',
    'In a 24\u00a0oz pint, keep the condensed milk to 250–300\u00a0g in total, or make the 16\u00a0oz amounts: the machine copes with a smaller volume.',
  ],
  credits: { author: 'George Eats', url: 'https://georgeats.com/recipes/ninja-creami-vanilla-ice-cream-recipe/' },
  translations: {
    nl: {
      name: 'Vanille-ijs met gecondenseerde melk',
      tagline: 'Eivrij en met maar vier ingrediënten',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 200, unit: 'g', name: 'slagroom' },
            { qty: 175, unit: 'g', name: 'gezoete gecondenseerde melk', note: 'geen ongezoete koffiemelk' },
            { qty: 100, unit: 'g', name: 'volle melk' },
            { qty: 1, unit: 'tsp', name: 'vanillepasta', note: 'of vanille-extract' },
          ],
        },
      ],
      steps: [
        {
          title: 'Afwegen',
          text: 'Zet een lege CREAMi-pint op de weegschaal en weeg de room, de gecondenseerde melk, de melk en de vanille er direct in af.',
        },
        {
          title: 'Mengen',
          text: 'Roer goed door tot alle gecondenseerde melk is opgenomen en er niets meer op de bodem ligt.',
        },
        {
          title: 'Invriezen',
          text: 'Vries zonder deksel in op een vlakke ondergrond, maximaal 24 uur. Vaak is 15 tot 16 uur al genoeg.',
        },
        {
          title: 'Draaien',
          text: 'Zet de pint in de buitenkom en start het programma ICE CREAM.',
          program: 'Ice Cream',
        },
        {
          title: 'Zo nodig re-spin',
          text: 'Is het na de eerste keer draaien een bal geworden of ziet het er kruimelig uit? Draai RE-SPIN tot het glad is.',
          program: 'Re-spin',
        },
        {
          title: 'Serveren',
          text: 'Eet het zo, met mix-ins of bij een dessert. Doe het deksel op wat over is, vries het weer in en draai het nog een keer als je zin hebt in een volgend bolletje. Een halfvolle pint draait prima.',
        },
      ],
      tips: [
        'In een 16\u00a0oz-pint geeft 150\u00a0g gecondenseerde melk minder zoet ijs en 200\u00a0g zoeter ijs. Met te veel suiker wordt het niet stevig: blijft het zacht, gebruik dan 25 tot 50\u00a0g minder.',
        'Alleen gezoete gecondenseerde melk werkt: het is de enige zoetstof, dus laat het niet weg en vervang het niet door ongezoete koffiemelk. Liever met suiker? Maak dan het Vanille-ijs.',
        'Lichte room en halfvolle melk werken ook; met lactosevrije varianten wordt het lactosevrij en FODMAP-arm. Een heel klein snufje zout brengt de smaak naar voren.',
        'In een 24\u00a0oz-pint houd je de gecondenseerde melk op 250–300\u00a0g in totaal, of maak je de hoeveelheden voor 16\u00a0oz: de machine kan een kleinere hoeveelheid aan.',
      ],
    },
  },
}
