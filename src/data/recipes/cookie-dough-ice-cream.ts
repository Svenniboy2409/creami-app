import type { Recipe } from '../../types/recipe'

// From the Ninja Creami flavour list, in millilitres and grams. No photo yet:
// the illustration is drawn in the flavour's own colours.
export const cookieDoughIceCream: Recipe = {
  id: 'cookie-dough-ice-cream',
  origin: 'curated',
  name: 'Cookie Dough',
  tagline: 'Vanilla ice cream loaded with cookie dough',
  flavor: 'cookie-dough',
  category: 'ice-cream',
  tags: ['kid-friendly'],
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
        { qty: 1, unit: 'tsp', name: 'vanilla extract' },
      ],
    },
    {
      title: 'Mix-ins',
      items: [
        { qty: 2, unit: 'tbsp', name: 'cookie dough chunks', note: 'egg-free, ready to eat' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Whisk the milk, cream, sugar and vanilla together until the sugar has dissolved.',
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
      text: 'Use a spoon to make a hole down the middle of the ice cream, add the cookie dough chunks and run the MIX-IN program.',
      program: 'Mix-in',
    },
  ],
  tips: ['Always freeze the base for a full 24 hours.', 'Crumbly after the first spin? Use RE-SPIN.', 'Add mix-ins after the first spin for the best texture.'],
  translations: {
    nl: {
      name: 'Koekjesdeeg-ijs',
      tagline: 'Vanille-ijs vol stukjes koekjesdeeg',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 180, unit: 'ml', name: 'volle melk' },
            { qty: 120, unit: 'ml', name: 'slagroom' },
            { qty: 50, unit: 'g', name: 'suiker' },
            { qty: 1, unit: 'tsp', name: 'vanille-extract' },
          ],
        },
        {
          title: 'Mix-ins',
          items: [
            { qty: 2, unit: 'tbsp', name: 'stukjes koekjesdeeg', note: 'eivrij, rauw te eten' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Klop de melk, de room, de suiker en de vanille door elkaar tot de suiker is opgelost.',
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
          text: 'Maak met een lepel een kuiltje tot op de bodem, doe de stukjes koekjesdeeg erin en start het programma MIX-IN.',
          program: 'Mix-in',
        },
      ],
      tips: ['Vries de basis altijd een volle 24 uur in.', 'Kruimelig na de eerste keer draaien? Gebruik RE-SPIN.', 'Voeg mix-ins pas toe na de eerste keer draaien, dan blijft de structuur het mooist.'],
    },
  },
}
