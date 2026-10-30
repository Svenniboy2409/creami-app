import image from '../../assets/recipes/strawberry-mango-fruit-whip.jpg'
import type { Recipe } from '../../types/recipe'

// After Sara J Sweets' YouTube Short, in our own words, with the owner's still
// from the video. She makes it in a 16 oz Swirl pint with "about a cup" of
// strawberries and of mango, here 150 g and 165 g; the 150 calories are hers.
// Only screen recordings were shared, so the credit links to her channel.
// She runs FRUIT WHIP on the Swirl and says SORBET does it on other machines,
// so like every fruit-only pint it runs on SORBET, with the Swirl in a tip.
export const strawberryMangoFruitWhip: Recipe = {
  id: 'strawberry-mango-fruit-whip',
  origin: 'curated',
  name: 'Strawberry Mango Fruit Whip',
  tagline: 'Just two ingredients and about 150 calories a pint',
  image,
  flavor: 'strawberry-mango',
  category: 'sorbet',
  tags: ['vegan', 'dairy-free', 'egg-free', 'gluten-free', 'fruity'],
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
        { qty: 150, unit: 'g', name: 'strawberries', note: 'fresh, or frozen and fully thawed' },
        { qty: 165, unit: 'g', name: 'mango', note: 'in cubes' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Put the strawberries and the mango straight into an empty CREAMi pint and mash them together with a potato masher.',
    },
    {
      title: 'Freeze',
      text: 'Flatten the top, no higher than the MAX FILL line. Put the lid on and freeze on a level surface for 24 hours.',
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
    {
      title: 'Serve',
      text: 'Scoop it into a bowl.',
    },
  ],
  tips: [
    'On the Ninja Swirl, run FRUIT WHIP instead of SORBET and push it through the soft serve dispenser.',
    'Frozen strawberries work too: let them thaw completely first, so they are soft and juicy enough to mash.',
  ],
  nutrition: { per: 'pint', kcal: 150 },
  credits: { author: 'Sara J Sweets', url: 'https://www.youtube.com/@sarajsweets' },
  translations: {
    nl: {
      name: 'Aardbei-mango fruit whip',
      tagline: 'Maar twee ingrediënten en zo’n 150 calorieën per pint',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 150, unit: 'g', name: 'aardbeien', note: 'vers, of bevroren en helemaal ontdooid' },
            { qty: 165, unit: 'g', name: 'mango', note: 'in blokjes' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Doe de aardbeien en de mango direct in een lege CREAMi-pint en stamp ze samen fijn met een aardappelstamper.',
        },
        {
          title: 'Invriezen',
          text: 'Strijk de bovenkant glad, niet hoger dan de MAX FILL-lijn. Doe het deksel erop en vries 24 uur in op een vlakke ondergrond.',
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
        {
          title: 'Serveren',
          text: 'Schep het in een kommetje.',
        },
      ],
      tips: [
        'Op de Ninja Swirl draai je FRUIT WHIP in plaats van SORBET en druk je het door de softijsdispenser.',
        'Bevroren aardbeien kan ook: laat ze eerst helemaal ontdooien, zodat ze zacht en sappig genoeg zijn om te stampen.',
      ],
    },
  },
}
