import image from '../../assets/recipes/citronmane-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// From the "Discover a world of Ninja Creami flavours" cards, with the amounts
// shown there for a 24 oz pint, in millilitres and grams, and its photo cut
// from that card. The white chocolate and shortbread go in after the first spin
// rather than into the base, so they stay crunchy. Lemon curd usually contains
// egg, so it is not tagged egg-free.
export const citronmaneIceCream: Recipe = {
  id: 'citronmane-ice-cream',
  origin: 'curated',
  name: 'Citronmåne',
  tagline: 'Bright, creamy and zesty, after the Danish lemon cake',
  image,
  flavor: 'lemon',
  category: 'ice-cream',
  tags: ['fruity'],
  tastes: ['fruity', 'refreshing', 'creamy'],
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
        { qty: 360, unit: 'ml', name: 'milk', note: 'any kind' },
        { qty: 120, unit: 'ml', name: 'heavy cream' },
        { qty: 100, unit: 'g', name: 'lemon curd', note: 'citronmåne curd, store-bought or homemade' },
        { qty: 50, unit: 'g', name: 'sugar' },
        { qty: 1, unit: 'tsp', name: 'vanilla extract' },
        { qty: 2, unit: 'tbsp', name: 'sweetened condensed milk', note: 'optional' },
        { qty: 1, unit: 'tbsp', name: 'lemon juice', note: 'fresh' },
        { qty: 1, unit: 'tsp', name: 'lemon zest', note: 'for extra zing' },
      ],
    },
    {
      title: 'Mix-ins',
      items: [
        { qty: 2, unit: 'tbsp', name: 'white chocolate chips', note: 'optional' },
        { qty: 2, unit: 'tbsp', name: 'shortbread crumbs', note: 'optional' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Whisk the milk, cream, sugar, vanilla and lemon juice until the sugar has dissolved. Whisk in the lemon curd and condensed milk until smooth, then stir in the lemon zest.',
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
      text: 'Use a spoon to make a hole down the middle of the ice cream, add the white chocolate chips and shortbread crumbs and run the MIX-IN program.',
      program: 'Mix-in',
    },
  ],
  tips: [
    'For an even brighter flavour, add a little extra lemon zest before freezing.',
    'Use a good lemon curd for the smoothest, most balanced taste.',
  ],
  translations: {
    nl: {
      name: 'Citronmåne',
      tagline: 'Fris, romig en citroenig, naar de Deense citroencake',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 360, unit: 'ml', name: 'melk', note: 'elke soort' },
            { qty: 120, unit: 'ml', name: 'slagroom' },
            { qty: 100, unit: 'g', name: 'citroencurd', note: 'citronmåne-curd, gekocht of zelfgemaakt' },
            { qty: 50, unit: 'g', name: 'suiker' },
            { qty: 1, unit: 'tsp', name: 'vanille-extract' },
            { qty: 2, unit: 'tbsp', name: 'gezoete gecondenseerde melk', note: 'optioneel' },
            { qty: 1, unit: 'tbsp', name: 'citroensap', note: 'vers' },
            { qty: 1, unit: 'tsp', name: 'citroenrasp', note: 'voor extra frisheid' },
          ],
        },
        {
          title: 'Mix-ins',
          items: [
            { qty: 2, unit: 'tbsp', name: 'witte chocoladedruppels', note: 'optioneel' },
            { qty: 2, unit: 'tbsp', name: 'zandkoekkruimels', note: 'optioneel' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Klop de melk, de room, de suiker, de vanille en het citroensap door elkaar tot de suiker is opgelost. Klop de citroencurd en de gecondenseerde melk erdoor tot alles glad is en roer daarna de citroenrasp erdoor.',
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
          text: 'Maak met een lepel een kuiltje tot op de bodem, doe de witte chocoladedruppels en de zandkoekkruimels erin en start het programma MIX-IN.',
          program: 'Mix-in',
        },
      ],
      tips: [
        'Voor een nog frissere smaak voeg je voor het invriezen wat extra citroenrasp toe.',
        'Gebruik een goede citroencurd voor de zachtste, best uitgebalanceerde smaak.',
      ],
    },
  },
}
