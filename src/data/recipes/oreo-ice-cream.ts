import image from '../../assets/recipes/oreo-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// After Sara J Sweets' YouTube Short, in our own words, with a photo from the
// video and the amounts from its description, for her 16 oz Swirl pint ("make
// syrup" read as maple syrup, which she pours in the video). Two of the five
// cookies go into the base before freezing, as she does: they are spun into the
// ice cream and flavour all of it. The other three are the mix-in, and extra
// cookies make the crumble on top. Only screen recordings were shared, so the
// credit links to her channel.
export const oreoIceCream: Recipe = {
  id: 'oreo-ice-cream',
  origin: 'curated',
  name: 'Oreo Ice Cream',
  tagline: 'Black cocoa makes the base taste just like the cookie',
  image,
  flavor: 'oreo',
  category: 'ice-cream',
  tags: ['egg-free', 'chocolate'],
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
        { name: 'milk', note: 'up to the MAX FILL line' },
        { qty: 3, unit: 'tbsp', name: 'black cocoa powder' },
        { qty: 3, unit: 'tbsp', name: 'maple syrup' },
        { qty: 1, unit: 'tsp', name: 'vanilla bean paste' },
        { qty: 2, name: 'chocolate sandwich cookies', note: 'e.g. Newman-O’s or Oreo' },
      ],
    },
    {
      title: 'Mix-ins',
      items: [{ qty: 3, name: 'chocolate sandwich cookies' }],
    },
    {
      title: 'Toppings',
      items: [{ name: 'chocolate sandwich cookies', note: 'a few extra, for the crumble' }],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Pour milk into an empty CREAMi pint up to the MAX FILL line. Add the black cocoa powder and mix it in with a milk frother, then add the maple syrup and vanilla bean paste and mix well. Drop in the cookies for the base.',
    },
    {
      title: 'Freeze',
      text: 'Put the lid on and freeze on a level surface for 24 hours.',
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
      text: 'Use a spoon to make a hole down the middle of the ice cream, add the cookies for the mix-in and run the MIX-IN program.',
      program: 'Mix-in',
    },
    {
      title: 'Serve',
      text: 'Scrape the filling off the extra cookies, crush the cookies into a fine crumble and sprinkle it all over the ice cream.',
    },
  ],
  tips: [
    'The black cocoa powder is what makes it: chocolate sandwich cookies are made with it, so it gives the base the flavour of the cookie.',
  ],
  credits: { author: 'Sara J Sweets', url: 'https://www.youtube.com/@sarajsweets' },
  translations: {
    nl: {
      name: 'Oreo-ijs',
      tagline: 'Zwart cacaopoeder laat de basis smaken naar het koekje zelf',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { name: 'melk', note: 'tot de MAX FILL-lijn' },
            { qty: 3, unit: 'tbsp', name: 'zwart cacaopoeder' },
            { qty: 3, unit: 'tbsp', name: 'ahornsiroop' },
            { qty: 1, unit: 'tsp', name: 'vanillepasta' },
            { qty: 2, name: 'chocolade-sandwichkoekjes', note: 'bijv. Newman-O’s of Oreo' },
          ],
        },
        {
          title: 'Mix-ins',
          items: [{ qty: 3, name: 'chocolade-sandwichkoekjes' }],
        },
        {
          title: 'Toppings',
          items: [{ name: 'chocolade-sandwichkoekjes', note: 'een paar extra, voor de kruimels' }],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Giet melk in een lege CREAMi-pint tot de MAX FILL-lijn. Voeg het zwarte cacaopoeder toe en mix het erdoor met een melkopschuimer, voeg dan de ahornsiroop en de vanillepasta toe en mix goed. Laat de koekjes voor de basis erin vallen.',
        },
        {
          title: 'Invriezen',
          text: 'Doe het deksel erop en vries 24 uur in op een vlakke ondergrond.',
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
          text: 'Maak met een lepel een kuiltje tot op de bodem, doe de koekjes voor de mix-in erin en start het programma MIX-IN.',
          program: 'Mix-in',
        },
        {
          title: 'Serveren',
          text: 'Schraap de vulling van de extra koekjes, maak de koekjes fijn tot kruimels en strooi die over het hele ijs.',
        },
      ],
      tips: [
        'Het zwarte cacaopoeder maakt het verschil: chocolade-sandwichkoekjes worden ermee gemaakt, dus het geeft de basis de smaak van het koekje.',
      ],
    },
  },
}
