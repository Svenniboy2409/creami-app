import image from '../../assets/recipes/chocolate-devotion-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// After Sara J Sweets' YouTube Short, a take on Cold Stone's Chocolate
// Devotion, in our own words, with a photo from the video. She makes it in a
// Deluxe pint, so the amounts from her description are for a 24 oz pint. "Whole
// milk to the max fill line, warmed" has no amount: the pint measures it. Letting
// the warm base cool before it goes in the freezer is ours. The drizzle of sauce
// on top is from the video; the description lists only the tablespoon that goes
// in with the mix-ins.
export const chocolateDevotionIceCream: Recipe = {
  id: 'chocolate-devotion-ice-cream',
  origin: 'curated',
  name: 'Chocolate Devotion',
  tagline: 'Inspired by Cold Stone, with brownie, chocolate chips and dark chocolate sauce',
  image,
  flavor: 'brownie',
  category: 'ice-cream',
  tags: ['chocolate'],
  tastes: ['rich', 'chocolatey'],
  models: ['original', 'breeze', 'deluxe', 'swirl'],
  program: 'Lite Ice Cream',
  basePint: 24,
  servings: '4–6',
  difficulty: 'medium',
  times: { prepMin: 20, freezeHours: 24 },
  ingredients: [
    {
      title: 'Base',
      items: [
        { name: 'whole milk', note: 'up to the MAX FILL line, warmed' },
        { qty: 3, unit: 'tbsp', name: 'Dutch-processed cocoa powder' },
        { qty: 3, unit: 'tbsp', name: 'maple syrup' },
        { qty: 0.5, unit: 'tsp', name: 'vanilla extract' },
      ],
    },
    {
      title: 'Mix-ins',
      items: [
        { qty: 1, unit: 'tbsp', name: 'chocolate chips' },
        { qty: 1, unit: 'tbsp', name: 'dark chocolate sauce', note: 'e.g. Torani' },
        { qty: 1, name: 'fudgy brownie', note: 'in chunks' },
      ],
    },
    {
      title: 'Toppings',
      items: [{ name: 'dark chocolate sauce', note: 'to drizzle over' }],
    },
  ],
  steps: [
    {
      title: 'Warm the milk',
      text: 'Measure the milk by filling the empty CREAMi pint with it up to the MAX FILL line. Pour it into a saucepan and warm it gently until it is warm, not boiling.',
    },
    {
      title: 'Make the base',
      text: 'Blend the warm milk with the cocoa powder, maple syrup and vanilla, with a milk frother or a stick blender, until the base is silky smooth.',
    },
    {
      title: 'Freeze',
      text: 'Pour the base into the CREAMi pint, no higher than the MAX FILL line, and let it cool. Put the lid on and freeze on a level surface for 24 hours.',
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
      text: 'There are plenty of mix-ins, so use a spoon to dig a wide hole down the middle. Add the chocolate chips and the chocolate sauce, push in as much of the brownie as fits and run the MIX-IN program.',
      program: 'Mix-in',
    },
    {
      title: 'Serve',
      text: 'Scoop it into bowls and drizzle with more dark chocolate sauce.',
    },
  ],
  tips: [
    'For any chocolate base, warm the milk first: it melts the cocoa butter in the cocoa powder, so it blends into a silky-smooth base.',
  ],
  credits: { author: 'Sara J Sweets', url: 'https://www.youtube.com/shorts/uupWwyRCizM' },
  translations: {
    nl: {
      name: 'Chocoladeliefde',
      tagline: 'Geïnspireerd op Cold Stone, met brownie, chocoladedruppels en pure chocoladesaus',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { name: 'volle melk', note: 'tot de MAX FILL-lijn, warm' },
            { qty: 3, unit: 'tbsp', name: 'cacaopoeder', note: 'gealkaliseerd (Dutch-processed)' },
            { qty: 3, unit: 'tbsp', name: 'ahornsiroop' },
            { qty: 0.5, unit: 'tsp', name: 'vanille-extract' },
          ],
        },
        {
          title: 'Mix-ins',
          items: [
            { qty: 1, unit: 'tbsp', name: 'chocoladedruppels' },
            { qty: 1, unit: 'tbsp', name: 'pure chocoladesaus', note: 'bijv. Torani' },
            { qty: 1, name: 'smeuïge brownie', note: 'in stukken' },
          ],
        },
        {
          title: 'Toppings',
          items: [{ name: 'pure chocoladesaus', note: 'om over het ijs te schenken' }],
        },
      ],
      steps: [
        {
          title: 'Melk verwarmen',
          text: 'Meet de melk af door de lege CREAMi-pint ermee te vullen tot de MAX FILL-lijn. Giet hem in een pannetje en verwarm hem zachtjes tot hij warm is, niet kokend.',
        },
        {
          title: 'Basis maken',
          text: 'Mix de warme melk met het cacaopoeder, de ahornsiroop en de vanille, met een melkopschuimer of een staafmixer, tot de basis zijdezacht is.',
        },
        {
          title: 'Invriezen',
          text: 'Giet de basis in de CREAMi-pint, niet hoger dan de MAX FILL-lijn, en laat hem afkoelen. Doe het deksel erop en vries 24 uur in op een vlakke ondergrond.',
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
          text: 'Er gaan flink wat mix-ins in, dus maak met een lepel een breed kuiltje tot op de bodem. Doe de chocoladedruppels en de chocoladesaus erin, duw er zoveel van de brownie in als past en start het programma MIX-IN.',
          program: 'Mix-in',
        },
        {
          title: 'Serveren',
          text: 'Schep het in kommetjes en schenk er nog wat pure chocoladesaus over.',
        },
      ],
      tips: [
        'Verwarm voor elke chocoladebasis eerst de melk: dan smelt de cacaoboter in het cacaopoeder en wordt de basis zijdezacht.',
      ],
    },
  },
}
