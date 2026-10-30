import image from '../../assets/recipes/mango-yogurt-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// After Sara J Sweets' YouTube Short "Mango Ice Cream", in our own words, with
// a photo from the video and the amounts from its description, for her 24 oz
// Deluxe pint: a cup of frozen mango is about 165 g, "~2 c" of milk about
// 480 ml, up to the fill line. Its own recipe next to Mango Ice Cream from the
// flavour list. A Greek yogurt base, so it runs on FROZEN YOGURT, on the
// Deluxe and the Swirl only. Only screen recordings were shared, so the credit
// links to her channel.
export const mangoYogurtIceCream: Recipe = {
  id: 'mango-yogurt-ice-cream',
  origin: 'curated',
  name: 'Mango Yogurt Ice Cream',
  tagline: 'Bright, creamy and lightly sweetened, without protein powder or pudding mix',
  image,
  flavor: 'mango',
  category: 'ice-cream',
  tags: ['egg-free', 'gluten-free', 'fruity'],
  tastes: ['fruity', 'creamy', 'healthy'],
  models: ['deluxe', 'swirl'],
  program: 'Frozen Yogurt',
  basePint: 24,
  servings: '4–6',
  difficulty: 'easy',
  times: { prepMin: 5, freezeHours: 24 },
  ingredients: [
    {
      title: 'Base',
      items: [
        { qty: 165, unit: 'g', name: 'frozen mango chunks' },
        { qty: 150, unit: 'g', name: 'Greek yogurt' },
        { qty: 1, unit: 'tbsp', name: 'maple syrup', note: 'if using plain yogurt' },
        { qty: 1, unit: 'tsp', name: 'vanilla extract', note: 'if using plain yogurt' },
        { qty: 480, unit: 'ml', name: 'milk', note: '2%, up to the MAX FILL line (about this much)' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Put the frozen mango and the Greek yogurt in an empty CREAMi pint and add the maple syrup and vanilla. Pour in milk up to the MAX FILL line and give everything a really good mix.',
    },
    {
      title: 'Freeze',
      text: 'Put the lid on and freeze on a level surface for 24 hours.',
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
  tips: ['A flavoured yogurt works too: then leave out the maple syrup and vanilla.'],
  credits: { author: 'Sara J Sweets', url: 'https://www.youtube.com/@sarajsweets' },
  translations: {
    nl: {
      name: 'Mango-yoghurtijs',
      tagline: 'Fris, romig en licht gezoet, zonder eiwitpoeder of puddingmix',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 165, unit: 'g', name: 'bevroren mangostukjes' },
            { qty: 150, unit: 'g', name: 'Griekse yoghurt' },
            { qty: 1, unit: 'tbsp', name: 'ahornsiroop', note: 'bij yoghurt naturel' },
            { qty: 1, unit: 'tsp', name: 'vanille-extract', note: 'bij yoghurt naturel' },
            { qty: 480, unit: 'ml', name: 'melk', note: 'halfvol, tot de MAX FILL-lijn (ongeveer zoveel)' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Doe de bevroren mango en de Griekse yoghurt in een lege CREAMi-pint en voeg de ahornsiroop en de vanille toe. Schenk er melk bij tot de MAX FILL-lijn en meng alles heel goed.',
        },
        {
          title: 'Invriezen',
          text: 'Doe het deksel erop en vries 24 uur in op een vlakke ondergrond.',
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
      tips: ['Yoghurt met een smaakje kan ook: laat dan de ahornsiroop en de vanille weg.'],
    },
  },
}
