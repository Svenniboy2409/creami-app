import image from '../../assets/recipes/smores-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// After Stroller Envy, in our own words, with its photo. The original makes
// three 16 oz pints in one go; here it is one pint, in millilitres and grams,
// so the pint counter can make the whole batch. Its "1 cup melted chocolate" is
// read as a cup of chips (about 170 g), melted. The marshmallows and crumbs go
// in after the first spin, and what is left goes on top.
export const smoresIceCream: Recipe = {
  id: 'smores-ice-cream',
  origin: 'curated',
  name: 'S’mores Galore',
  tagline: 'Chocolate ice cream with marshmallows and graham crackers, like a campfire treat',
  image,
  flavor: 'smores',
  category: 'ice-cream',
  tags: ['egg-free', 'chocolate', 'kid-friendly'],
  tastes: ['sweet', 'rich', 'chocolatey'],
  models: ['original', 'breeze', 'deluxe', 'swirl'],
  program: 'Ice Cream',
  basePint: 16,
  servings: '2–3',
  difficulty: 'easy',
  times: { prepMin: 10, freezeHours: 24 },
  ingredients: [
    {
      title: 'Base',
      items: [
        { qty: 80, unit: 'ml', name: 'heavy cream' },
        { qty: 80, unit: 'ml', name: 'milk' },
        { qty: 35, unit: 'g', name: 'sugar' },
        { qty: 0.33, unit: 'tsp', name: 'vanilla extract' },
        { qty: 60, unit: 'g', name: 'chocolate', note: 'chips or a bar, melted' },
      ],
    },
    {
      title: 'Mix-ins',
      items: [
        { qty: 3, unit: 'tbsp', name: 'mini marshmallows' },
        { qty: 3, unit: 'tbsp', name: 'graham cracker crumbs', note: 'or crushed digestive biscuits' },
      ],
    },
    {
      title: 'Toppings',
      items: [
        { qty: 2, unit: 'tbsp', name: 'mini marshmallows' },
        { qty: 2, unit: 'tbsp', name: 'graham cracker crumbs' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Whisk the cream, milk and sugar until the sugar has dissolved. Whisk in the vanilla, then pour in the melted chocolate slowly, whisking all the time, until the base is smooth.',
    },
    {
      title: 'Freeze',
      text: 'Pour the base into an empty CREAMi pint, leaving room for the mix-ins and staying under the MAX FILL line. Put the lid on and freeze on a level surface for 24 hours. Keep the marshmallows and crumbs aside until you process it.',
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
      title: 'Add the mix-ins',
      text: 'Use a spoon to make a hole down the middle of the ice cream, add the mini marshmallows and graham cracker crumbs and run the MIX-IN program.',
      program: 'Mix-in',
    },
    {
      title: 'Serve',
      text: 'Scatter the rest of the marshmallows and crumbs on top.',
    },
  ],
  tips: [
    'The original makes three 16 oz pints in one go: set the pint counter to 3 for the whole batch, and never pack it all into one pint.',
    'For a richer chocolate flavour, use dark chocolate.',
    'Add nuts or caramel sauce for extra texture and flavour.',
  ],
  credits: { author: 'Stroller Envy', url: 'https://stroller-envy.com/ninja-creamie-smores-galore/' },
  translations: {
    nl: {
      name: 'S’mores-ijs',
      tagline: 'Chocolade-ijs met marshmallows en koekkruimels, als een kampvuurtraktatie',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 80, unit: 'ml', name: 'slagroom' },
            { qty: 80, unit: 'ml', name: 'melk' },
            { qty: 35, unit: 'g', name: 'suiker' },
            { qty: 0.33, unit: 'tsp', name: 'vanille-extract' },
            { qty: 60, unit: 'g', name: 'chocolade', note: 'druppels of een reep, gesmolten' },
          ],
        },
        {
          title: 'Mix-ins',
          items: [
            { qty: 3, unit: 'tbsp', name: 'mini-marshmallows' },
            { qty: 3, unit: 'tbsp', name: 'grahamcrackerkruimels', note: 'of verkruimelde digestive biscuits' },
          ],
        },
        {
          title: 'Toppings',
          items: [
            { qty: 2, unit: 'tbsp', name: 'mini-marshmallows' },
            { qty: 2, unit: 'tbsp', name: 'grahamcrackerkruimels' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Klop de room, de melk en de suiker door elkaar tot de suiker is opgelost. Klop de vanille erdoor en giet daarna langzaam, al kloppend, de gesmolten chocolade erbij tot de basis glad is.',
        },
        {
          title: 'Invriezen',
          text: 'Giet de basis in een lege CREAMi-pint, met ruimte voor de mix-ins en onder de MAX FILL-lijn. Doe het deksel erop en vries 24 uur in op een vlakke ondergrond. Bewaar de marshmallows en de kruimels apart tot je gaat draaien.',
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
          title: 'Mix-ins toevoegen',
          text: 'Maak met een lepel een kuiltje tot op de bodem, doe de mini-marshmallows en de koekkruimels erin en start het programma MIX-IN.',
          program: 'Mix-in',
        },
        {
          title: 'Serveren',
          text: 'Strooi de rest van de marshmallows en de kruimels erover.',
        },
      ],
      tips: [
        'Het origineel is voor drie 16 oz-pints tegelijk: zet de pint-teller op 3 voor de hele hoeveelheid, en stop het nooit allemaal in één pint.',
        'Voor een vollere chocoladesmaak gebruik je pure chocolade.',
        'Voeg noten of karamelsaus toe voor extra bite en smaak.',
      ],
    },
  },
}
