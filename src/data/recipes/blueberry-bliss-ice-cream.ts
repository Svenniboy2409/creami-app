import image from '../../assets/recipes/blueberry-bliss-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// From the "Discover a world of Ninja Creami flavours" cards, with the amounts
// shown there for a 24 oz pint, in millilitres and grams, and its photo cut
// from that card.
export const blueberryBlissIceCream: Recipe = {
  id: 'blueberry-bliss-ice-cream',
  origin: 'curated',
  name: 'Blueberry Bliss',
  tagline: 'Creamy ice cream with sweet blueberries',
  image,
  flavor: 'blueberry',
  category: 'ice-cream',
  tags: ['egg-free', 'gluten-free', 'fruity'],
  tastes: ['fruity', 'creamy'],
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
        { qty: 150, unit: 'g', name: 'blueberries', note: 'fresh or frozen' },
        { qty: 65, unit: 'g', name: 'sugar' },
        { qty: 1, unit: 'tsp', name: 'vanilla extract' },
        { qty: 30, unit: 'g', name: 'milk powder', note: 'optional, for creaminess' },
        { qty: 1, unit: 'tbsp', name: 'lemon juice', note: 'optional, to brighten the flavour' },
        { qty: 1, unit: 'pinch', name: 'salt' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Whisk the milk, cream, sugar, milk powder, vanilla, lemon juice and a pinch of salt until smooth. Blend the blueberries until smooth (or less, for a chunkier ice cream) and stir them through until well combined.',
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
  ],
  tips: [
    'Don’t skip the milk powder: it makes the texture richer and smoother.',
    'Wild blueberries give a more intense flavour and a beautiful colour.',
    'For extra zing, add a teaspoon of lemon zest or a swirl of blueberry jam after spinning.',
  ],
  translations: {
    nl: {
      name: 'Blauwebessengeluk',
      tagline: 'Romig ijs met zoete blauwe bessen',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 360, unit: 'ml', name: 'melk', note: 'elke soort' },
            { qty: 120, unit: 'ml', name: 'slagroom' },
            { qty: 150, unit: 'g', name: 'blauwe bessen', note: 'vers of diepvries' },
            { qty: 65, unit: 'g', name: 'suiker' },
            { qty: 1, unit: 'tsp', name: 'vanille-extract' },
            { qty: 30, unit: 'g', name: 'melkpoeder', note: 'optioneel, voor romigheid' },
            { qty: 1, unit: 'tbsp', name: 'citroensap', note: 'optioneel, voor een frissere smaak' },
            { qty: 1, unit: 'pinch', name: 'zout' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Klop de melk, de room, de suiker, het melkpoeder, de vanille, het citroensap en een snufje zout door elkaar tot alles glad is. Pureer de blauwe bessen glad (of minder fijn voor stukjes) en roer ze erdoor tot alles goed gemengd is.',
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
      ],
      tips: [
        'Sla het melkpoeder niet over: het maakt de structuur voller en gladder.',
        'Wilde blauwe bessen geven een intensere smaak en een prachtige kleur.',
        'Voor extra frisheid voeg je na het draaien een theelepel citroenrasp of een swirl blauwebessenjam toe.',
      ],
    },
  },
}
