import image from '../../assets/recipes/peach-frozen-yogurt.jpg'
import type { Recipe } from '../../types/recipe'

// After Sara J Sweets' YouTube Short, in our own words, with a photo from the
// video and the amounts from its description, for her 16 oz Swirl pint: 1.5
// cups of peaches is about 230 g, 6 oz of Greek yogurt 170 g. The 350 calories
// and 20 g of protein a pint are hers. A Greek yogurt base, so it runs on
// FROZEN YOGURT, on the Deluxe and the Swirl only. Only screen recordings were
// shared, so the credit links to her channel.
export const peachFrozenYogurt: Recipe = {
  id: 'peach-frozen-yogurt',
  origin: 'curated',
  name: 'Peach Frozen Yogurt',
  tagline: 'Just four ingredients, without protein powder or refined sugar',
  image,
  flavor: 'peach',
  category: 'frozen-yogurt',
  tags: ['egg-free', 'gluten-free', 'fruity'],
  tastes: ['fruity', 'creamy', 'healthy'],
  models: ['deluxe', 'swirl'],
  program: 'Frozen Yogurt',
  basePint: 16,
  servings: '2–3',
  difficulty: 'easy',
  times: { prepMin: 15, freezeHours: 24 },
  ingredients: [
    {
      title: 'Base',
      items: [
        { qty: 230, unit: 'g', name: 'peaches', note: 'peeled and chopped' },
        { qty: 170, unit: 'g', name: 'plain Greek yogurt' },
        { qty: 1, unit: 'tsp', name: 'vanilla bean paste' },
        { qty: 1, unit: 'tbsp', name: 'honey' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Peel the peaches, chop them and mash them into an empty CREAMi pint with a potato masher. Once they are mashed well, add the Greek yogurt, vanilla bean paste and honey and stir well.',
    },
    {
      title: 'Freeze',
      text: 'Check that the base is no higher than the MAX FILL line. Put the lid on and freeze on a level surface for 24 hours.',
    },
    {
      title: 'Process',
      text: 'Take the lid off, place the pint in the outer bowl and run the FROZEN YOGURT program.',
      program: 'Frozen Yogurt',
    },
    {
      title: 'Re-spin if needed',
      text: 'Looks crumbly? Add a tablespoon of milk and run RE-SPIN until it is smooth and creamy.',
      program: 'Re-spin',
    },
  ],
  tips: ['For one 16 oz pint that is about four small to medium peaches.'],
  nutrition: { per: 'pint', kcal: 350, protein: 20 },
  credits: { author: 'Sara J Sweets', url: 'https://www.youtube.com/@sarajsweets' },
  translations: {
    nl: {
      name: 'Perzik-frozen yoghurt',
      tagline: 'Maar vier ingrediënten, zonder eiwitpoeder of geraffineerde suiker',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 230, unit: 'g', name: 'perziken', note: 'geschild en in stukjes' },
            { qty: 170, unit: 'g', name: 'Griekse yoghurt (naturel)' },
            { qty: 1, unit: 'tsp', name: 'vanillepasta' },
            { qty: 1, unit: 'tbsp', name: 'honing' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Schil de perziken, snijd ze in stukjes en stamp ze met een aardappelstamper fijn in een lege CREAMi-pint. Voeg als ze goed fijn zijn de Griekse yoghurt, de vanillepasta en de honing toe en roer goed door.',
        },
        {
          title: 'Invriezen',
          text: 'Controleer of de basis niet hoger komt dan de MAX FILL-lijn. Doe het deksel erop en vries 24 uur in op een vlakke ondergrond.',
        },
        {
          title: 'Draaien',
          text: 'Haal het deksel eraf, zet de pint in de buitenkom en start het programma FROZEN YOGURT.',
          program: 'Frozen Yogurt',
        },
        {
          title: 'Zo nodig re-spin',
          text: 'Ziet het er kruimelig uit? Voeg een eetlepel melk toe en draai RE-SPIN tot het glad en romig is.',
          program: 'Re-spin',
        },
      ],
      tips: ['Voor één 16 oz-pint zijn dat ongeveer vier kleine tot middelgrote perziken.'],
    },
  },
}
