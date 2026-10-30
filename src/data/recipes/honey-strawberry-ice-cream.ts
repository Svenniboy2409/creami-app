import image from '../../assets/recipes/honey-strawberry-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// After Sara J Sweets' YouTube Short "Classic Strawberry", in our own words,
// with the owner's still from the video and the amounts from her pinned
// comment, for her 24 oz Deluxe pint: a cup of strawberries is about 150 g,
// 2.5 cups of milk 600 ml. The video doesn't name the program, so it runs on
// ICE CREAM; the fresh strawberries on top are from the video. Its own recipe
// next to the app's other strawberry ice creams. Only screen recordings were
// shared, so the credit links to her channel.
export const honeyStrawberryIceCream: Recipe = {
  id: 'honey-strawberry-ice-cream',
  origin: 'curated',
  name: 'Honey Strawberry Ice Cream',
  tagline: 'Just strawberries, honey and milk: hard to get wrong',
  image,
  flavor: 'strawberry',
  category: 'ice-cream',
  tags: ['egg-free', 'gluten-free', 'fruity'],
  tastes: ['sweet', 'fruity', 'creamy'],
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
        { qty: 150, unit: 'g', name: 'strawberries', note: 'fresh or frozen, in pieces' },
        { qty: 2, unit: 'tbsp', name: 'honey' },
        { qty: 600, unit: 'ml', name: 'milk', note: 'any kind' },
      ],
    },
    {
      title: 'Toppings',
      items: [{ name: 'fresh strawberries', note: 'optional, a few, in pieces' }],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Put the strawberries in an empty CREAMi pint and drizzle the honey over them. Let them marinate for a few minutes, then mash them. Add the milk and mix well.',
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
    {
      title: 'Serve',
      text: 'Scoop it into bowls and top with a few pieces of fresh strawberry, if you like.',
    },
  ],
  credits: { author: 'Sara J Sweets', url: 'https://www.youtube.com/@sarajsweets' },
  translations: {
    nl: {
      name: 'Aardbeienijs met honing',
      tagline: 'Alleen aardbeien, honing en melk: bijna niet te verpesten',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 150, unit: 'g', name: 'aardbeien', note: 'vers of bevroren, in stukjes' },
            { qty: 2, unit: 'tbsp', name: 'honing' },
            { qty: 600, unit: 'ml', name: 'melk', note: 'elke soort' },
          ],
        },
        {
          title: 'Toppings',
          items: [{ name: 'verse aardbeien', note: 'optioneel, een paar, in stukjes' }],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Doe de aardbeien in een lege CREAMi-pint en schenk de honing erover. Laat ze een paar minuten marineren en stamp ze dan fijn. Voeg de melk toe en meng goed.',
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
        {
          title: 'Serveren',
          text: 'Schep het in kommetjes en leg er eventueel een paar stukjes verse aardbei op.',
        },
      ],
    },
  },
}
