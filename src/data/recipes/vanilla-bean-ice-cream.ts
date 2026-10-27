import image from '../../assets/recipes/vanilla-bean-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// From the Ninja Creami flavour list, in millilitres and grams, with its photo
// cut from that list. The flavour colours the illustration that replaces the
// photo when "Illustrations instead of photos" is on in Settings.
export const vanillaBeanIceCream: Recipe = {
  id: 'vanilla-bean-ice-cream',
  origin: 'curated',
  name: 'Vanilla Bean Ice Cream',
  tagline: 'The classic, flecked with real vanilla',
  image,
  flavor: 'vanilla',
  category: 'ice-cream',
  tags: ['egg-free', 'gluten-free', 'kid-friendly'],
  models: ['original', 'breeze', 'deluxe', 'swirl'],
  program: 'Ice Cream',
  basePint: 16,
  servings: '3–4',
  difficulty: 'easy',
  times: { prepMin: 5, freezeHours: 24 },
  ingredients: [
    {
      items: [
        { qty: 240, unit: 'ml', name: 'whole milk' },
        { qty: 120, unit: 'ml', name: 'heavy cream' },
        { qty: 50, unit: 'g', name: 'sugar' },
        { qty: 1, unit: 'tsp', name: 'vanilla extract' },
        { qty: 0.25, unit: 'tsp', name: 'vanilla bean paste' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Whisk the milk, cream, sugar, vanilla extract and vanilla bean paste together until the sugar has dissolved.',
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
  translations: {
    nl: {
      name: 'Vanille-ijs',
      tagline: 'De klassieker, met echte vanillespikkels',
      ingredients: [
        {
          items: [
            { qty: 240, unit: 'ml', name: 'volle melk' },
            { qty: 120, unit: 'ml', name: 'slagroom' },
            { qty: 50, unit: 'g', name: 'suiker' },
            { qty: 1, unit: 'tsp', name: 'vanille-extract' },
            { qty: 0.25, unit: 'tsp', name: 'vanillepasta' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Klop de melk, de room, de suiker, het vanille-extract en de vanillepasta door elkaar tot de suiker is opgelost.',
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
    },
  },
}
