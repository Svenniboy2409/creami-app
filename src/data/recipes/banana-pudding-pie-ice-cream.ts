import image from '../../assets/recipes/banana-pudding-pie-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// After Sara J Sweets' YouTube Short, in our own words, with a photo from the
// video. She makes it in a Deluxe pint, so the amounts from her description are
// for a 24 oz pint. "Milk to the max fill" has no amount: whatever tops the pint
// up to the line. Of the two bananas, one is sliced to line the pint and one is
// blended into the base. The Biscoff crumbs on top are from the video; the
// description only lists the two cookies that go in with MIX-IN.
export const bananaPuddingPieIceCream: Recipe = {
  id: 'banana-pudding-pie-ice-cream',
  origin: 'curated',
  name: 'Banana Pudding Pie',
  tagline: 'Banana and Biscoff, without any pudding mix',
  image,
  flavor: 'banana',
  category: 'ice-cream',
  tags: ['egg-free', 'fruity'],
  tastes: ['sweet', 'fruity', 'creamy'],
  models: ['original', 'breeze', 'deluxe', 'swirl'],
  program: 'Lite Ice Cream',
  basePint: 24,
  servings: '4–6',
  difficulty: 'medium',
  times: { prepMin: 15, freezeHours: 24 },
  ingredients: [
    {
      title: 'Base',
      items: [
        { qty: 1, name: 'banana', note: 'sliced, to line the pint' },
        { qty: 1, name: 'banana', note: 'for the base' },
        { qty: 2, unit: 'tbsp', name: 'maple syrup' },
        { qty: 1, unit: 'tsp', name: 'vanilla extract' },
        { name: 'milk', note: 'enough to reach the MAX FILL line' },
      ],
    },
    {
      title: 'Mix-ins',
      items: [{ qty: 2, name: 'Biscoff cookies' }],
    },
    {
      title: 'Toppings',
      items: [{ name: 'Biscoff cookies', note: 'crushed, to sprinkle on top' }],
    },
  ],
  steps: [
    {
      title: 'Line the pint',
      text: 'Slice the banana for the lining into rounds and press the slices against the inside wall of an empty CREAMi pint, all the way round. Put the pint in the freezer while you make the base, until the slices are frozen in place.',
    },
    {
      title: 'Make the base',
      text: 'Blend the other banana with the maple syrup, the vanilla and a good splash of the milk until smooth, with a milk frother or a stick blender.',
    },
    {
      title: 'Freeze',
      text: 'Pour the base into the lined pint and top it up with milk to the MAX FILL line. Put the lid on and freeze on a level surface for 24 hours.',
    },
    {
      title: 'Process',
      text: 'Take the lid off, place the pint in the outer bowl and run the LITE ICE CREAM program.',
      program: 'Lite Ice Cream',
    },
    {
      title: 'Re-spin if needed',
      text: 'Looks crumbly? Add a tablespoon of milk and run RE-SPIN until it is smooth and creamy.',
      program: 'Re-spin',
    },
    {
      title: 'Add the mix-ins',
      text: 'Use a spoon to make a hole down the middle of the ice cream, push in the Biscoff cookies and run the MIX-IN program.',
      program: 'Mix-in',
    },
    {
      title: 'Serve',
      text: 'Scoop it into bowls and sprinkle the crushed Biscoff cookies on top.',
    },
  ],
  tips: [
    'Freezing the banana slices first keeps them against the wall when you pour in the base; they are spun into the ice cream with the rest.',
  ],
  credits: { author: 'Sara J Sweets', url: 'https://www.youtube.com/shorts/Z48v6cNLDHM' },
  translations: {
    nl: {
      name: 'Bananenpuddingtaart-ijs',
      tagline: 'Banaan en Biscoff, zonder puddingpoeder',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 1, name: 'banaan', note: 'in plakjes, om de pint mee te bekleden' },
            { qty: 1, name: 'banaan', note: 'voor de basis' },
            { qty: 2, unit: 'tbsp', name: 'ahornsiroop' },
            { qty: 1, unit: 'tsp', name: 'vanille-extract' },
            { name: 'melk', note: 'genoeg om tot de MAX FILL-lijn te komen' },
          ],
        },
        {
          title: 'Mix-ins',
          items: [{ qty: 2, name: 'Biscoff-koekjes' }],
        },
        {
          title: 'Toppings',
          items: [{ name: 'Biscoff-koekjes', note: 'verkruimeld, om over het ijs te strooien' }],
        },
      ],
      steps: [
        {
          title: 'Pint bekleden',
          text: 'Snijd de banaan voor de bekleding in plakjes en druk ze rondom tegen de binnenkant van een lege CREAMi-pint. Zet de pint in de vriezer terwijl je de basis maakt, tot de plakjes vastgevroren zijn.',
        },
        {
          title: 'Basis maken',
          text: 'Mix de andere banaan met de ahornsiroop, de vanille en een flinke scheut van de melk glad, met een melkopschuimer of een staafmixer.',
        },
        {
          title: 'Invriezen',
          text: 'Giet de basis in de beklede pint en vul hem met melk aan tot de MAX FILL-lijn. Doe het deksel erop en vries 24 uur in op een vlakke ondergrond.',
        },
        {
          title: 'Draaien',
          text: 'Haal het deksel eraf, zet de pint in de buitenkom en start het programma LITE ICE CREAM.',
          program: 'Lite Ice Cream',
        },
        {
          title: 'Zo nodig re-spin',
          text: 'Ziet het er kruimelig uit? Voeg een eetlepel melk toe en draai RE-SPIN tot het glad en romig is.',
          program: 'Re-spin',
        },
        {
          title: 'Mix-ins toevoegen',
          text: 'Maak met een lepel een kuiltje tot op de bodem, duw de Biscoff-koekjes erin en start het programma MIX-IN.',
          program: 'Mix-in',
        },
        {
          title: 'Serveren',
          text: 'Schep het in kommetjes en strooi de verkruimelde Biscoff-koekjes erover.',
        },
      ],
      tips: [
        'Doordat de plakjes banaan eerst bevriezen, blijven ze tegen de wand zitten als je de basis erin giet; ze worden daarna gewoon mee tot ijs gedraaid.',
      ],
    },
  },
}
