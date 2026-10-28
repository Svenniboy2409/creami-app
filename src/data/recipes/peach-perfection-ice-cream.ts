import image from '../../assets/recipes/peach-perfection-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// From the "Discover a world of Ninja Creami flavours" cards, with the amounts
// shown there for a 24 oz pint, in millilitres and grams, and its photo cut
// from that card. Not the Peaches & Cream: the peach goes into the base here,
// with chunks as the mix-in.
export const peachPerfectionIceCream: Recipe = {
  id: 'peach-perfection-ice-cream',
  origin: 'curated',
  name: 'Peach Perfection',
  tagline: 'Sweet, juicy peach with a smooth, creamy finish',
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
        { qty: 65, unit: 'g', name: 'sugar' },
        { qty: 1, unit: 'tsp', name: 'vanilla extract' },
        { qty: 30, unit: 'g', name: 'milk powder', note: 'optional, for creaminess' },
        { qty: 2, unit: 'tbsp', name: 'peach puree', note: 'or to taste' },
        { qty: 1, unit: 'tsp', name: 'peach extract', note: 'optional' },
      ],
    },
    {
      title: 'Mix-ins',
      items: [
        { qty: 40, unit: 'g', name: 'peach chunks', note: 'optional' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Whisk the milk, cream, sugar, milk powder, vanilla, peach puree and peach extract (if using) until smooth.',
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
      text: 'Use a spoon to make a hole down the middle of the ice cream, add the peach chunks and run the MIX-IN program.',
      program: 'Mix-in',
    },
  ],
  tips: [
    'Don’t skip the milk powder: it makes the texture richer and smoother.',
    'For a bolder peach flavour, use a little more peach puree or a few extra chunks.',
  ],
  translations: {
    nl: {
      name: 'Perzikperfectie',
      tagline: 'Zoete, sappige perzik met een zachte, romige afdronk',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 360, unit: 'ml', name: 'melk', note: 'elke soort' },
            { qty: 120, unit: 'ml', name: 'slagroom' },
            { qty: 65, unit: 'g', name: 'suiker' },
            { qty: 1, unit: 'tsp', name: 'vanille-extract' },
            { qty: 30, unit: 'g', name: 'melkpoeder', note: 'optioneel, voor romigheid' },
            { qty: 2, unit: 'tbsp', name: 'perzikpuree', note: 'of naar smaak' },
            { qty: 1, unit: 'tsp', name: 'perzikextract', note: 'optioneel' },
          ],
        },
        {
          title: 'Mix-ins',
          items: [
            { qty: 40, unit: 'g', name: 'stukjes perzik', note: 'optioneel' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Klop de melk, de room, de suiker, het melkpoeder, de vanille, de perzikpuree en het perzikextract (als je dat gebruikt) door elkaar tot alles glad is.',
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
          text: 'Maak met een lepel een kuiltje tot op de bodem, doe de stukjes perzik erin en start het programma MIX-IN.',
          program: 'Mix-in',
        },
      ],
      tips: [
        'Sla het melkpoeder niet over: het maakt de structuur voller en gladder.',
        'Voor een uitgesprokener perziksmaak gebruik je wat meer perzikpuree of een paar extra stukjes.',
      ],
    },
  },
}
