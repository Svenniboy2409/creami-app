import image from '../../assets/recipes/coconut-milk-base.jpg'
import type { Recipe } from '../../types/recipe'

// One of the five Ninja Creami bases, in millilitres and grams, with its photo
// cut from the bases list. A plain start to flavour your own way: its ideas
// link to the app's recipes for them where there is one.
export const coconutMilkBase: Recipe = {
  id: 'coconut-milk-base',
  origin: 'curated',
  name: 'Coconut Milk Base',
  tagline: 'Dairy-free & delicious',
  image,
  flavor: 'coconut',
  category: 'base',
  tags: ['dairy-free', 'vegan', 'egg-free', 'gluten-free'],
  models: ['original', 'breeze', 'deluxe', 'swirl'],
  program: 'Ice Cream',
  basePint: 16,
  servings: '3–4',
  difficulty: 'easy',
  times: { prepMin: 5, freezeHours: 24 },
  ingredients: [
    {
      items: [
        { qty: 400, unit: 'ml', name: 'full-fat coconut milk', note: '1 can' },
        { qty: 60, unit: 'ml', name: 'milk', note: 'any kind; a plant milk keeps it dairy-free' },
        { qty: 2.5, unit: 'tbsp', name: 'maple syrup', note: 'to taste' },
        { qty: 1, unit: 'tsp', name: 'vanilla extract' },
        { qty: 1, unit: 'pinch', name: 'salt' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Shake the can well first. Whisk the coconut milk, milk, maple syrup, vanilla and salt together until smooth.',
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
      title: 'Flavour it (optional)',
      text: 'Make it your own: make a hole down the middle, add your mix-ins and run the MIX-IN program.',
      program: 'Mix-in',
    },
  ],
  ideas: [{ name: 'Piña Colada' }, { name: 'Mango', recipeId: 'mango-ice-cream' }, { name: 'Chocolate Coconut' }],
  translations: {
    nl: {
      name: 'Kokosmelkbasis',
      tagline: 'Zuivelvrij & heerlijk',
      ingredients: [
        {
          items: [
            { qty: 400, unit: 'ml', name: 'volle kokosmelk', note: '1 blik' },
            { qty: 60, unit: 'ml', name: 'melk', note: 'elke soort; met plantaardige melk blijft het zuivelvrij' },
            { qty: 2.5, unit: 'tbsp', name: 'ahornsiroop', note: 'naar smaak' },
            { qty: 1, unit: 'tsp', name: 'vanille-extract' },
            { qty: 1, unit: 'pinch', name: 'zout' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Schud het blik eerst goed. Klop de kokosmelk, de melk, de ahornsiroop, de vanille en het zout door elkaar tot alles glad is.',
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
          title: 'Op smaak brengen (optioneel)',
          text: 'Maak hem helemaal van jou: maak een kuiltje tot op de bodem, doe je mix-ins erin en start het programma MIX-IN.',
          program: 'Mix-in',
        },
      ],
      ideas: [{ name: 'Piña colada' }, { name: 'Mango', recipeId: 'mango-ice-cream' }, { name: 'Chocolade-kokos' }],
    },
  },
}
