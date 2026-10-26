import type { Recipe } from '../../types/recipe'

// From the Ninja Creami flavour list, in millilitres and grams. No photo yet:
// the illustration is drawn in the flavour's own colours.
export const peanutButterCupIceCream: Recipe = {
  id: 'peanut-butter-cup-ice-cream',
  origin: 'curated',
  name: 'Peanut Butter Cup',
  tagline: 'Peanut butter ice cream with chocolate peanut butter cups',
  flavor: 'peanut-butter',
  category: 'ice-cream',
  tags: ['egg-free', 'nutty', 'chocolate'],
  models: ['original', 'breeze', 'deluxe', 'swirl'],
  program: 'Ice Cream',
  basePint: 16,
  servings: '3–4',
  difficulty: 'easy',
  times: { prepMin: 10, freezeHours: 24 },
  ingredients: [
    {
      title: 'Base',
      items: [
        { qty: 180, unit: 'ml', name: 'whole milk' },
        { qty: 120, unit: 'ml', name: 'heavy cream' },
        { qty: 50, unit: 'g', name: 'sugar' },
        { qty: 130, unit: 'g', name: 'smooth peanut butter' },
      ],
    },
    {
      title: 'Mix-ins',
      items: [
        { qty: 2, unit: 'tbsp', name: 'peanut butter cups', note: 'chopped' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Warm the peanut butter for a few seconds so it loosens, then whisk it with the sugar and a splash of the milk until smooth. Whisk in the rest of the milk and the cream.',
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
      text: 'Use a spoon to make a hole down the middle of the ice cream, add the chopped peanut butter cups and run the MIX-IN program.',
      program: 'Mix-in',
    },
  ],
  tips: ['Always freeze the base for a full 24 hours.', 'Crumbly after the first spin? Use RE-SPIN.', 'Add mix-ins after the first spin for the best texture.'],
  translations: {
    nl: {
      name: 'Pindakaas-cup-ijs',
      tagline: 'Pindakaasijs met chocolade-pindakaascups',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 180, unit: 'ml', name: 'volle melk' },
            { qty: 120, unit: 'ml', name: 'slagroom' },
            { qty: 50, unit: 'g', name: 'suiker' },
            { qty: 130, unit: 'g', name: 'gladde pindakaas' },
          ],
        },
        {
          title: 'Mix-ins',
          items: [
            { qty: 2, unit: 'tbsp', name: 'pindakaascups', note: 'in stukjes' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Verwarm de pindakaas een paar seconden zodat hij smeuïg wordt en klop hem met de suiker en een scheutje melk glad. Klop daarna de rest van de melk en de room erdoor.',
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
          text: 'Maak met een lepel een kuiltje tot op de bodem, doe de stukjes pindakaascup erin en start het programma MIX-IN.',
          program: 'Mix-in',
        },
      ],
      tips: ['Vries de basis altijd een volle 24 uur in.', 'Kruimelig na de eerste keer draaien? Gebruik RE-SPIN.', 'Voeg mix-ins pas toe na de eerste keer draaien, dan blijft de structuur het mooist.'],
    },
  },
}
