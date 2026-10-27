import image from '../../assets/recipes/condensed-milk-vanilla-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// After George Eats, in our own words, weighed straight into the pint as the
// original does. The original gives 150–200 g condensed milk; the middle of
// that range goes in the list so it scales with the pint, the range in a tip.
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
      text: 'Enjoy it as it is, with mix-ins or alongside a dessert. Put the lid on whatever is left, freeze it again and process it once more when you want another scoop.',
    },
  ],
  tips: [
    'Use 150 to 200 g condensed milk, depending on how sweet you like it.',
    'For a lactose-free or low-FODMAP version, use lactose-free cream, condensed milk and milk.',
  ],
  credits: { author: 'George Eats', url: 'https://georgeats.com/recipes/ninja-creami-vanilla-ice-cream-recipe/' },
  translations: {
    nl: {
      name: 'Vanille-ijs met gecondenseerde melk',
      tagline: 'Eivrij en met maar vier ingrediënten',
      ingredients: [
        {
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
          text: 'Eet het zo, met mix-ins of bij een dessert. Doe het deksel op wat over is, vries het weer in en draai het nog een keer als je zin hebt in een volgend bolletje.',
        },
      ],
      tips: [
        'Gebruik 150 tot 200 g gecondenseerde melk, afhankelijk van hoe zoet je het wilt.',
        'Voor een lactosevrije of FODMAP-arme versie gebruik je lactosevrije room, gecondenseerde melk en melk.',
      ],
    },
  },
}
