import image from '../../assets/recipes/watermelon-honey-sorbet.jpg'
import type { Recipe } from '../../types/recipe'

// After Sara J Sweets' YouTube Short, in our own words, with a photo from the
// video. The amounts are the ones she gives as she goes: watermelon cubes to
// fill the pint (about a quarter of a watermelon for her 16 oz Swirl pint) and
// about a tablespoon of honey. Only screen recordings were shared, so the
// credit links to her channel.
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
        { name: 'watermelon', note: 'in cubes, enough to fill the empty pint to the top' },
        { qty: 1, unit: 'tbsp', name: 'honey' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Fill an empty CREAMi pint with watermelon cubes, as many as it will hold, and tip them into a blender. Blend until liquid, add the honey and blend again so it is spread evenly.',
    },
    {
      title: 'Freeze',
      text: 'Pour it all back into the pint, no higher than the MAX FILL line. Put the lid on and freeze on a level surface for 24 hours.',
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
  tips: ['For a 16\u00a0oz pint that is about a quarter of a watermelon.'],
  credits: { author: 'Sara J Sweets', url: 'https://www.youtube.com/@sarajsweets' },
  translations: {
    nl: {
      name: 'Watermeloensorbet met honing',
      tagline: 'Alleen watermeloen en honing, voor de frisste zomersorbet',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { name: 'watermeloen', note: 'in blokjes, genoeg om de lege pint tot de rand te vullen' },
            { qty: 1, unit: 'tbsp', name: 'honing' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Vul een lege CREAMi-pint met zoveel watermeloenblokjes als erin passen en doe ze in een blender. Mix tot het vloeibaar is, voeg de honing toe en mix nog eens, zodat hij goed verdeeld is.',
        },
        {
          title: 'Invriezen',
          text: 'Giet alles terug in de pint, niet hoger dan de MAX FILL-lijn. Doe het deksel erop en vries 24 uur in op een vlakke ondergrond.',
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
      tips: ['Voor een 16\u00a0oz-pint is dat ongeveer een kwart watermeloen.'],
    },
  },
}
