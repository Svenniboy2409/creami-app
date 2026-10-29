import image from '../../assets/recipes/matcha-dream-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// From the "Discover a world of Ninja Creami flavours" cards, with the amounts
// shown there for a 24 oz pint, in millilitres and grams, and its photo cut
// from that card.
export const matchaDreamIceCream: Recipe = {
  id: 'matcha-dream-ice-cream',
  origin: 'curated',
  name: 'Matcha Dream',
  tagline: 'Smooth green tea ice cream, delicate and slightly sweet',
  image,
  flavor: 'matcha',
  category: 'ice-cream',
  tags: ['egg-free', 'gluten-free'],
  tastes: ['creamy'],
  models: ['original', 'breeze', 'deluxe', 'swirl'],
  program: 'Ice Cream',
  basePint: 24,
  servings: '4–6',
  difficulty: 'easy',
  times: { prepMin: 5, freezeHours: 24 },
  ingredients: [
    {
      title: 'Base',
      items: [
        { qty: 360, unit: 'ml', name: 'milk', note: 'any kind' },
        { qty: 120, unit: 'ml', name: 'heavy cream' },
        { qty: 2, unit: 'tbsp', name: 'matcha powder', note: 'culinary grade' },
        { qty: 65, unit: 'g', name: 'sugar' },
        { qty: 1, unit: 'tsp', name: 'vanilla extract' },
        { qty: 30, unit: 'g', name: 'milk powder', note: 'optional, for creaminess' },
        { qty: 1, unit: 'tbsp', name: 'honey', note: 'optional, for subtle sweetness' },
        { qty: 1, unit: 'pinch', name: 'salt' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Whisk the matcha, sugar, milk powder and salt together first, so the matcha doesn’t clump. Then whisk in the milk, cream, vanilla and honey (if using) until smooth.',
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
    'Use culinary-grade matcha for the best flavour and a vibrant green colour.',
    'For a twist, add white chocolate chips with the MIX-IN program, or a drizzle of honey after spinning.',
  ],
  translations: {
    nl: {
      name: 'Matchadroom',
      tagline: 'Zacht groenetee-ijs, verfijnd en licht zoet',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 360, unit: 'ml', name: 'melk', note: 'elke soort' },
            { qty: 120, unit: 'ml', name: 'slagroom' },
            { qty: 2, unit: 'tbsp', name: 'matchapoeder', note: 'culinaire kwaliteit' },
            { qty: 65, unit: 'g', name: 'suiker' },
            { qty: 1, unit: 'tsp', name: 'vanille-extract' },
            { qty: 30, unit: 'g', name: 'melkpoeder', note: 'optioneel, voor romigheid' },
            { qty: 1, unit: 'tbsp', name: 'honing', note: 'optioneel, voor een subtiele zoetheid' },
            { qty: 1, unit: 'pinch', name: 'zout' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Klop eerst de matcha, de suiker, het melkpoeder en het zout los, zodat de matcha niet klontert. Klop daarna de melk, de room, de vanille en de honing (als je die gebruikt) erdoor tot alles glad is.',
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
        'Gebruik matcha van culinaire kwaliteit voor de beste smaak en een felgroene kleur.',
        'Voor een twist voeg je witte chocoladedruppels toe met het programma MIX-IN, of schenk je er na het draaien wat honing over.',
      ],
    },
  },
}
