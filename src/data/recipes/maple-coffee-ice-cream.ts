import image from '../../assets/recipes/maple-coffee-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// After Sara J Sweets' YouTube Short, in our own words, with a photo from the
// video. She makes it in a Deluxe pint, so the amounts from her pinned comment
// are for a 24 oz pint; her 2 cups of milk are 480 ml. Its own recipe next to
// Coffee Ice Cream from the flavour list: milk only, more coffee, and maple
// syrup instead of sugar.
export const mapleCoffeeIceCream: Recipe = {
  id: 'maple-coffee-ice-cream',
  origin: 'curated',
  name: 'Maple Coffee Ice Cream',
  tagline: 'Just four ingredients: milk, instant coffee, maple syrup and vanilla',
  image,
  flavor: 'coffee',
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
        { qty: 480, unit: 'ml', name: 'milk' },
        { qty: 2, unit: 'tbsp', name: 'instant coffee' },
        { qty: 2, unit: 'tbsp', name: 'maple syrup' },
        { qty: 1, unit: 'tsp', name: 'vanilla extract' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Put the instant coffee, milk, vanilla and maple syrup straight into an empty CREAMi pint and mix well, with a milk frother or a whisk, until the coffee has dissolved.',
    },
    {
      title: 'Freeze',
      text: 'Check that the base is no higher than the MAX FILL line. Put the lid on and freeze on a level surface for 24 hours.',
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
    'For a thick ice cream, re-spin without adding milk: in the original, one re-spin was enough for a thick and creamy result.',
  ],
  credits: { author: 'Sara J Sweets', url: 'https://www.youtube.com/shorts/AJcv6jd4tcg' },
  translations: {
    nl: {
      name: 'Koffie-ijs met ahornsiroop',
      tagline: 'Maar vier ingrediënten: melk, oploskoffie, ahornsiroop en vanille',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 480, unit: 'ml', name: 'melk' },
            { qty: 2, unit: 'tbsp', name: 'oploskoffie' },
            { qty: 2, unit: 'tbsp', name: 'ahornsiroop' },
            { qty: 1, unit: 'tsp', name: 'vanille-extract' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Doe de oploskoffie, de melk, de vanille en de ahornsiroop direct in een lege CREAMi-pint en meng goed, met een melkopschuimer of een garde, tot de koffie is opgelost.',
        },
        {
          title: 'Invriezen',
          text: 'Controleer of de basis niet hoger komt dan de MAX FILL-lijn. Doe het deksel erop en vries 24 uur in op een vlakke ondergrond.',
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
        'Wil je het ijs dik? Draai dan RE-SPIN zonder extra melk: in het origineel was één re-spin genoeg voor een dik en romig resultaat.',
      ],
    },
  },
}
