import image from '../../assets/recipes/hazelnut-heaven-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// From the "Discover a world of Ninja Creami flavours" cards, with the amounts
// shown there for a 24 oz pint, in millilitres and grams, and its photo cut
// from that card. The hazelnut spread goes into the base; the chopped hazelnuts
// go in after the first spin, so they stay crunchy.
export const hazelnutHeavenIceCream: Recipe = {
  id: 'hazelnut-heaven-ice-cream',
  origin: 'curated',
  name: 'Hazelnut Heaven',
  tagline: 'Nutty, creamy and irresistibly smooth',
  image,
  flavor: 'hazelnut',
  category: 'ice-cream',
  tags: ['egg-free', 'gluten-free', 'nutty'],
  tastes: ['creamy', 'nutty'],
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
        { qty: 360, unit: 'ml', name: 'milk', note: 'or any milk you like' },
        { qty: 75, unit: 'g', name: 'sweetened condensed milk', note: 'or a sweetener of your choice' },
        { qty: 25, unit: 'g', name: 'sugar', note: 'or to taste' },
        { qty: 1.5, unit: 'tsp', name: 'hazelnut extract', note: 'or to taste' },
        { qty: 2, unit: 'tbsp', name: 'hazelnut spread', note: 'or chocolate hazelnut spread' },
        { qty: 1, unit: 'pinch', name: 'salt' },
        { qty: 60, unit: 'ml', name: 'heavy cream', note: 'optional, for extra richness' },
      ],
    },
    {
      title: 'Mix-ins',
      items: [
        { qty: 3, unit: 'tbsp', name: 'hazelnuts', note: 'chopped' },
      ],
    },
    {
      title: 'Toppings',
      items: [
        { qty: 35, unit: 'g', name: 'toasted hazelnuts', note: 'optional, to serve' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Whisk the hazelnut spread with the sugar and a splash of the milk until smooth, then whisk in the rest of the milk, the condensed milk, the hazelnut extract, the cream (if using) and a pinch of salt. For an extra silky base, blend it with a stick blender and pour it through a sieve.',
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
      text: 'Use a spoon to make a hole down the middle of the ice cream, add the chopped hazelnuts and run the MIX-IN program. Top with toasted hazelnuts, a drizzle of hazelnut spread or some chocolate shavings to serve.',
      program: 'Mix-in',
    },
  ],
  tips: [
    'Add extra toasted hazelnuts after spinning for more texture.',
    'For a richer, more intense flavour, add 1–2\u00a0tsp more hazelnut spread.',
  ],
  translations: {
    nl: {
      name: 'Hazelnoothemel',
      tagline: 'Nootachtig, romig en onweerstaanbaar zacht',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 360, unit: 'ml', name: 'melk', note: 'of elke melk die je lekker vindt' },
            { qty: 75, unit: 'g', name: 'gezoete gecondenseerde melk', note: 'of een zoetmiddel naar keuze' },
            { qty: 25, unit: 'g', name: 'suiker', note: 'of naar smaak' },
            { qty: 1.5, unit: 'tsp', name: 'hazelnootextract', note: 'of naar smaak' },
            { qty: 2, unit: 'tbsp', name: 'hazelnootpasta', note: 'of chocolade-hazelnootpasta' },
            { qty: 1, unit: 'pinch', name: 'zout' },
            { qty: 60, unit: 'ml', name: 'slagroom', note: 'optioneel, voor extra romigheid' },
          ],
        },
        {
          title: 'Mix-ins',
          items: [
            { qty: 3, unit: 'tbsp', name: 'hazelnoten', note: 'gehakt' },
          ],
        },
        {
          title: 'Toppings',
          items: [
            { qty: 35, unit: 'g', name: 'geroosterde hazelnoten', note: 'optioneel, om te serveren' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Klop de hazelnootpasta met de suiker en een scheutje melk glad en klop daarna de rest van de melk, de gecondenseerde melk, het hazelnootextract, de room (als je die gebruikt) en een snufje zout erdoor. Voor een extra zijdezachte basis mix je hem met een staafmixer en giet je hem door een zeef.',
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
          text: 'Maak met een lepel een kuiltje tot op de bodem, doe de gehakte hazelnoten erin en start het programma MIX-IN. Maak het bij het serveren af met geroosterde hazelnoten, wat hazelnootpasta of chocoladeschaafsel.',
          program: 'Mix-in',
        },
      ],
      tips: [
        'Voeg na het draaien extra geroosterde hazelnoten toe voor meer bite.',
        'Voor een vollere, intensere smaak voeg je 1–2\u00a0tl extra hazelnootpasta toe.',
      ],
    },
  },
}
