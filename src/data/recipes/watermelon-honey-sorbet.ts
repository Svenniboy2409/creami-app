import image from '../../assets/recipes/watermelon-honey-sorbet.jpg'
import type { Recipe } from '../../types/recipe'

// After Sara J Sweets' YouTube Short, in our own words, with a photo from the
// video and the amounts from its description, for her 16 oz Swirl pint. Its
// 2–3 cups of watermelon chunks are 300–450 g: the middle of that goes in the
// list so it scales with the pint, the range in a tip. Only screen recordings
// were shared, so the credit links to her channel.
export const watermelonHoneySorbet: Recipe = {
  id: 'watermelon-honey-sorbet',
  origin: 'curated',
  name: 'Watermelon Honey Sorbet',
  tagline: 'Just watermelon and honey, for the most refreshing summer sorbet',
  image,
  flavor: 'watermelon',
  category: 'sorbet',
  tags: ['dairy-free', 'egg-free', 'gluten-free', 'fruity'],
  tastes: ['fruity', 'refreshing', 'healthy'],
  models: ['original', 'breeze', 'deluxe', 'swirl'],
  program: 'Sorbet',
  basePint: 16,
  servings: '2–3',
  difficulty: 'easy',
  times: { prepMin: 10, freezeHours: 24 },
  ingredients: [
    {
      title: 'Base',
      items: [
        { qty: 380, unit: 'g', name: 'watermelon', note: 'in chunks' },
        { qty: 1, unit: 'tbsp', name: 'honey' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Blend the watermelon chunks in a blender until liquid, add the honey and blend again so it is spread evenly.',
    },
    {
      title: 'Freeze',
      text: 'Pour it into an empty CREAMi pint, no higher than the MAX FILL line. Put the lid on and freeze on a level surface for 24 hours.',
    },
    {
      title: 'Process',
      text: 'Take the lid off, place the pint in the outer bowl and run the SORBET program.',
      program: 'Sorbet',
    },
    {
      title: 'Re-spin if needed',
      text: 'Looks crumbly? Add a tablespoon of water and run RE-SPIN until it is smooth and creamy.',
      program: 'Re-spin',
    },
  ],
  tips: ['The original takes 2–3 cups of chunks (300–450\u00a0g), as many as fit in the pint: for a 16\u00a0oz pint about a quarter of a watermelon.'],
  credits: { author: 'Sara J Sweets', url: 'https://www.youtube.com/@sarajsweets' },
  translations: {
    nl: {
      name: 'Watermeloensorbet met honing',
      tagline: 'Alleen watermeloen en honing, voor de frisste zomersorbet',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 380, unit: 'g', name: 'watermeloen', note: 'in stukken' },
            { qty: 1, unit: 'tbsp', name: 'honing' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Mix de stukken watermeloen in een blender tot het vloeibaar is, voeg de honing toe en mix nog eens, zodat hij goed verdeeld is.',
        },
        {
          title: 'Invriezen',
          text: 'Giet het in een lege CREAMi-pint, niet hoger dan de MAX FILL-lijn. Doe het deksel erop en vries 24 uur in op een vlakke ondergrond.',
        },
        {
          title: 'Draaien',
          text: 'Haal het deksel eraf, zet de pint in de buitenkom en start het programma SORBET.',
          program: 'Sorbet',
        },
        {
          title: 'Zo nodig re-spin',
          text: 'Ziet het er kruimelig uit? Voeg een eetlepel water toe en draai RE-SPIN tot het glad en romig is.',
          program: 'Re-spin',
        },
      ],
      tips: ['Het origineel gebruikt 2–3 cups stukken (300–450\u00a0g), zoveel als er in de pint passen: voor een 16\u00a0oz-pint ongeveer een kwart watermeloen.'],
    },
  },
}
