import image from '../../assets/recipes/salted-caramel-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// From the "Discover a world of Ninja Creami flavours" cards, with the amounts
// shown there for a 24 oz pint, in millilitres and grams, and its photo cut
// from that card. The crunchy bits go in after the first spin rather than into
// the base, so they stay crunchy.
export const saltedCaramelIceCream: Recipe = {
  id: 'salted-caramel-ice-cream',
  origin: 'curated',
  name: 'Salted Caramel',
  tagline: 'Sweet and buttery, with a hint of sea salt',
  image,
  flavor: 'salted-caramel',
  category: 'ice-cream',
  tags: ['egg-free'],
  tastes: ['sweet', 'rich'],
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
        { qty: 360, unit: 'ml', name: 'milk', note: 'whole, or any milk you like' },
        { qty: 60, unit: 'ml', name: 'caramel sauce' },
        { qty: 75, unit: 'g', name: 'sweetened condensed milk', note: 'or a sweetener of your choice' },
        { qty: 25, unit: 'g', name: 'sugar', note: 'or to taste' },
        { qty: 0.5, unit: 'tsp', name: 'vanilla extract' },
        { qty: 1, unit: 'tbsp', name: 'maple syrup or honey', note: 'optional' },
        { qty: 1, unit: 'pinch', name: 'sea salt', note: 'or to taste' },
      ],
    },
    {
      title: 'Mix-ins',
      items: [
        { qty: 2, unit: 'tbsp', name: 'salted caramel chunks', note: 'optional' },
        { qty: 1, unit: 'tbsp', name: 'toffee bits', note: 'optional, for crunch' },
        { name: 'caramel sauce', note: 'extra, for the swirl' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Whisk the milk, caramel sauce, condensed milk, sugar, vanilla, maple syrup (if using) and a pinch of sea salt until smooth. For an extra silky base, blend it with a stick blender and pour it through a sieve.',
    },
    {
      title: 'Freeze',
      text: 'Pour the base into an empty CREAMi pint, no higher than the MAX FILL line. Put the lid on and freeze on a level surface for 24 hours.',
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
      text: 'Use a spoon to make a hole down the middle of the ice cream, add the salted caramel chunks, the toffee bits and a swirl of caramel sauce, and run the MIX-IN program.',
      program: 'Mix-in',
    },
  ],
  tips: [
    'For the ultimate treat, top with a drizzle of warm caramel sauce and a sprinkle of flaky sea salt just before serving.',
    'Extra creamy? Use a little more condensed milk, or add 1\u00a0tbsp of neutral powdered creamer.',
  ],
  translations: {
    nl: {
      name: 'Gezouten-karamelijs',
      tagline: 'Zoet en boterig, met een vleugje zeezout',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 360, unit: 'ml', name: 'melk', note: 'vol, of elke melk die je lekker vindt' },
            { qty: 60, unit: 'ml', name: 'karamelsaus' },
            { qty: 75, unit: 'g', name: 'gezoete gecondenseerde melk', note: 'of een zoetmiddel naar keuze' },
            { qty: 25, unit: 'g', name: 'suiker', note: 'of naar smaak' },
            { qty: 0.5, unit: 'tsp', name: 'vanille-extract' },
            { qty: 1, unit: 'tbsp', name: 'ahornsiroop of honing', note: 'optioneel' },
            { qty: 1, unit: 'pinch', name: 'zeezout', note: 'of naar smaak' },
          ],
        },
        {
          title: 'Mix-ins',
          items: [
            { qty: 2, unit: 'tbsp', name: 'stukjes gezouten karamel', note: 'optioneel' },
            { qty: 1, unit: 'tbsp', name: 'toffeestukjes', note: 'optioneel, voor de bite' },
            { name: 'karamelsaus', note: 'extra, voor de swirl' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Klop de melk, de karamelsaus, de gecondenseerde melk, de suiker, de vanille, de ahornsiroop (als je die gebruikt) en een snufje zeezout door elkaar tot alles glad is. Voor een extra zijdezachte basis mix je hem met een staafmixer en giet je hem door een zeef.',
        },
        {
          title: 'Invriezen',
          text: 'Giet de basis in een lege CREAMi-pint, niet hoger dan de MAX FILL-lijn. Doe het deksel erop en vries 24 uur in op een vlakke ondergrond.',
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
          text: 'Maak met een lepel een kuiltje tot op de bodem, doe de stukjes gezouten karamel, de toffeestukjes en een swirl karamelsaus erin en start het programma MIX-IN.',
          program: 'Mix-in',
        },
      ],
      tips: [
        'Voor het ultieme toetje schenk je er vlak voor het serveren wat warme karamelsaus over en strooi je er wat zeezoutvlokken op.',
        'Extra romig? Gebruik iets meer gecondenseerde melk of voeg 1\u00a0el neutrale koffiecreamer (poeder) toe.',
      ],
    },
  },
}
