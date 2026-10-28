import image from '../../assets/recipes/peaches-and-cream-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// From the "Discover a world of Ninja Creami flavours" cards, with the amounts
// shown there for a 24 oz pint, in millilitres and grams, and its photo cut
// from that card. The peach pieces and jam go in after the first spin, so they
// stay as fruity bursts and a swirl.
export const peachesAndCreamIceCream: Recipe = {
  id: 'peaches-and-cream-ice-cream',
  origin: 'curated',
  name: 'Peaches & Cream',
  tagline: 'Sweet, juicy peaches swirled into rich, creamy ice cream',
  image,
  flavor: 'peach',
  category: 'ice-cream',
  tags: ['egg-free', 'gluten-free', 'fruity'],
  models: ['original', 'breeze', 'deluxe', 'swirl'],
  program: 'Ice Cream',
  basePint: 24,
  servings: '4–6',
  difficulty: 'easy',
  times: { prepMin: 10, freezeHours: 24 },
  ingredients: [
    {
      title: 'Base',
      items: [
        { qty: 360, unit: 'ml', name: 'milk', note: 'any kind' },
        { qty: 120, unit: 'ml', name: 'heavy cream' },
        { qty: 50, unit: 'g', name: 'sugar' },
        { qty: 1, unit: 'tsp', name: 'vanilla extract' },
        { qty: 30, unit: 'g', name: 'milk powder', note: 'optional, for creaminess' },
        { qty: 1, unit: 'tbsp', name: 'unsalted butter', note: 'melted' },
        { qty: 1, unit: 'pinch', name: 'salt' },
      ],
    },
    {
      title: 'Mix-ins',
      items: [
        { qty: 130, unit: 'g', name: 'peaches', note: 'diced' },
        { qty: 2, unit: 'tbsp', name: 'peach jam', note: 'or preserves, plus a spoonful extra' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Whisk the milk, cream, sugar, milk powder, melted butter, vanilla and a pinch of salt until smooth.',
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
      text: 'Use a spoon to make a hole down the middle of the ice cream, add the diced peaches and the peach jam, and run the MIX-IN program. For a bigger ribbon of flavour, add an extra spoonful of jam first.',
      program: 'Mix-in',
    },
  ],
  tips: [
    'Don’t skip the milk powder: it makes the texture richer and smoother.',
    'Use ripe but firm peaches for the best texture and flavour. Fresh, frozen (thawed) or canned all work.',
  ],
  translations: {
    nl: {
      name: 'Perziken met room',
      tagline: 'Zoete, sappige perzik door rijk, romig ijs',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 360, unit: 'ml', name: 'melk', note: 'elke soort' },
            { qty: 120, unit: 'ml', name: 'slagroom' },
            { qty: 50, unit: 'g', name: 'suiker' },
            { qty: 1, unit: 'tsp', name: 'vanille-extract' },
            { qty: 30, unit: 'g', name: 'melkpoeder', note: 'optioneel, voor romigheid' },
            { qty: 1, unit: 'tbsp', name: 'ongezouten boter', note: 'gesmolten' },
            { qty: 1, unit: 'pinch', name: 'zout' },
          ],
        },
        {
          title: 'Mix-ins',
          items: [
            { qty: 130, unit: 'g', name: 'perzik', note: 'in blokjes' },
            { qty: 2, unit: 'tbsp', name: 'perzikjam', note: 'of confituur, plus een extra lepel' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Klop de melk, de room, de suiker, het melkpoeder, de gesmolten boter, de vanille en een snufje zout door elkaar tot alles glad is.',
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
          text: 'Maak met een lepel een kuiltje tot op de bodem, doe de perzikblokjes en de perzikjam erin en start het programma MIX-IN. Voor een mooiere swirl doe je er eerst nog een extra lepel jam bij.',
          program: 'Mix-in',
        },
      ],
      tips: [
        'Sla het melkpoeder niet over: het maakt de structuur voller en gladder.',
        'Gebruik rijpe maar stevige perziken voor de beste structuur en smaak. Vers, diepvries (ontdooid) of uit blik werkt allemaal.',
      ],
    },
  },
}
