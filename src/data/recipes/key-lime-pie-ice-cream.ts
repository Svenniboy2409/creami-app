import image from '../../assets/recipes/key-lime-pie-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// From the "Discover a world of Ninja Creami flavours" cards, with the amounts
// shown there for a 24 oz pint, in millilitres and grams, and its photo cut
// from that card. The crunchy bits go in after the first spin rather than into
// the base, so they stay crunchy.
export const keyLimePieIceCream: Recipe = {
  id: 'key-lime-pie-ice-cream',
  origin: 'curated',
  name: 'Key Lime Pie',
  tagline: 'Tart and creamy, with a graham cracker crunch',
  image,
  flavor: 'key-lime',
  category: 'ice-cream',
  tags: ['egg-free', 'fruity'],
  tastes: ['fruity', 'refreshing', 'creamy'],
  models: ['original', 'breeze', 'deluxe', 'swirl'],
  program: 'Ice Cream',
  basePint: 24,
  servings: '4–6',
  difficulty: 'easy',
  times: { prepMin: 15, freezeHours: 24 },
  ingredients: [
    {
      title: 'Base',
      items: [
        { qty: 360, unit: 'ml', name: 'milk', note: 'any kind' },
        { qty: 120, unit: 'ml', name: 'heavy cream' },
        { qty: 150, unit: 'g', name: 'sweetened condensed milk' },
        { qty: 50, unit: 'g', name: 'sugar' },
        { qty: 1, unit: 'tsp', name: 'vanilla extract' },
        { qty: 1, unit: 'tbsp', name: 'lime zest' },
        { qty: 60, unit: 'ml', name: 'key lime juice', note: 'fresh; regular limes work too' },
        { qty: 1, unit: 'pinch', name: 'salt' },
      ],
    },
    {
      title: 'Mix-ins',
      items: [
        { qty: 4, unit: 'tbsp', name: 'graham crackers', note: 'crushed, or digestive biscuits' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Whisk the milk, cream, condensed milk, sugar, vanilla, lime zest, lime juice and a pinch of salt until smooth, then give it a quick blend in a blender until everything is well combined.',
    },
    {
      title: 'Freeze',
      text: 'Pour the base into an empty CREAMi pint, no higher than the MAX FILL line. Put the lid on and freeze on a level surface for 24 hours.',
    },
    {
      title: 'Process',
      text: 'Take the lid off, place the pint in the outer bowl and run the ICE CREAM program.',
      program: 'Ice Cream',
    },
    {
      title: 'Re-spin if needed',
      text: 'Looks crumbly? Add a tablespoon of milk and run RE-SPIN until it is smooth and creamy.',
      program: 'Re-spin',
    },
    {
      title: 'Add the mix-ins',
      text: 'Use a spoon to make a hole down the middle of the ice cream, add the cracker crumbs and run the MIX-IN program.',
      program: 'Mix-in',
    },
  ],
  tips: [
    'Use full-fat dairy for the richest, creamiest result.',
    'Want more zing? Stir in a little extra lime zest or juice after spinning.',
  ],
  translations: {
    nl: {
      name: 'Limoentaart-ijs',
      tagline: 'Fris en romig, met knapperige koekkruimels',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 360, unit: 'ml', name: 'melk', note: 'elke soort' },
            { qty: 120, unit: 'ml', name: 'slagroom' },
            { qty: 150, unit: 'g', name: 'gezoete gecondenseerde melk' },
            { qty: 50, unit: 'g', name: 'suiker' },
            { qty: 1, unit: 'tsp', name: 'vanille-extract' },
            { qty: 1, unit: 'tbsp', name: 'limoenrasp' },
            { qty: 60, unit: 'ml', name: 'limoensap', note: 'vers, van key limes of gewone limoenen' },
            { qty: 1, unit: 'pinch', name: 'zout' },
          ],
        },
        {
          title: 'Mix-ins',
          items: [
            { qty: 4, unit: 'tbsp', name: 'grahamcrackers', note: 'verkruimeld, of digestive biscuits' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Klop de melk, de room, de gecondenseerde melk, de suiker, de vanille, de limoenrasp, het limoensap en een snufje zout door elkaar tot alles glad is en mix het daarna kort in een blender tot alles goed gemengd is.',
        },
        {
          title: 'Invriezen',
          text: 'Giet de basis in een lege CREAMi-pint, niet hoger dan de MAX FILL-lijn. Doe het deksel erop en vries 24 uur in op een vlakke ondergrond.',
        },
        {
          title: 'Draaien',
          text: 'Haal het deksel eraf, zet de pint in de buitenkom en start het programma ICE CREAM.',
          program: 'Ice Cream',
        },
        {
          title: 'Zo nodig re-spin',
          text: 'Ziet het er kruimelig uit? Voeg een eetlepel melk toe en draai RE-SPIN tot het glad en romig is.',
          program: 'Re-spin',
        },
        {
          title: 'Mix-ins toevoegen',
          text: 'Maak met een lepel een kuiltje tot op de bodem, doe de koekkruimels erin en start het programma MIX-IN.',
          program: 'Mix-in',
        },
      ],
      tips: [
        'Gebruik volle zuivel voor het rijkste, romigste resultaat.',
        'Zin in meer frisheid? Roer er na het draaien nog wat extra limoenrasp of -sap door.',
      ],
    },
  },
}
