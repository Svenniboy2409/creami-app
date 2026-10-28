import image from '../../assets/recipes/brownie-blast-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// From the "Discover a world of Ninja Creami flavours" cards, with the amounts
// shown there for a 24 oz pint, in millilitres and grams, and its photo cut
// from that card. The mix-ins go in after the first spin rather than into the
// base, so they stay in pieces.
export const brownieBlastIceCream: Recipe = {
  id: 'brownie-blast-ice-cream',
  origin: 'curated',
  name: 'Brownie Blast',
  tagline: 'Chocolate ice cream with fudgy brownie pieces',
  image,
  flavor: 'brownie',
  category: 'ice-cream',
  tags: ['chocolate', 'kid-friendly'],
  tastes: ['rich', 'chocolatey'],
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
        { qty: 25, unit: 'g', name: 'unsweetened cocoa powder' },
        { qty: 65, unit: 'g', name: 'sugar' },
        { qty: 1, unit: 'tsp', name: 'vanilla extract' },
        { qty: 1, unit: 'pinch', name: 'salt' },
      ],
    },
    {
      title: 'Mix-ins',
      items: [
        { qty: 4, unit: 'tbsp', name: 'chocolate chips', note: 'mini or regular' },
        { qty: 60, unit: 'g', name: 'brownies', note: 'in small chunks' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Whisk the cocoa powder, sugar and salt together first, so the cocoa doesn’t clump. Then whisk in the milk, cream and vanilla until smooth and the sugar has dissolved.',
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
      text: 'Use a spoon to make a hole down the middle of the ice cream, add the chocolate chips and brownie pieces and run the MIX-IN program.',
      program: 'Mix-in',
    },
  ],
  tips: [
    'Use fudgy brownies rather than cakey ones for the best texture.',
    'Extra chocolatey? Stir 1\u00a0tbsp chocolate syrup into the base before freezing.',
  ],
  translations: {
    nl: {
      name: 'Brownie-knaller',
      tagline: 'Chocolade-ijs met smeuïge stukjes brownie',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 360, unit: 'ml', name: 'melk', note: 'elke soort' },
            { qty: 120, unit: 'ml', name: 'slagroom' },
            { qty: 25, unit: 'g', name: 'cacaopoeder' },
            { qty: 65, unit: 'g', name: 'suiker' },
            { qty: 1, unit: 'tsp', name: 'vanille-extract' },
            { qty: 1, unit: 'pinch', name: 'zout' },
          ],
        },
        {
          title: 'Mix-ins',
          items: [
            { qty: 4, unit: 'tbsp', name: 'chocoladedruppels', note: 'mini of gewoon' },
            { qty: 60, unit: 'g', name: 'brownies', note: 'in kleine stukjes' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Klop eerst het cacaopoeder, de suiker en het zout los, zodat de cacao niet klontert. Klop daarna de melk, de room en de vanille erdoor tot alles glad is en de suiker is opgelost.',
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
          text: 'Maak met een lepel een kuiltje tot op de bodem, doe de chocoladedruppels en de stukjes brownie erin en start het programma MIX-IN.',
          program: 'Mix-in',
        },
      ],
      tips: [
        'Gebruik smeuïge brownies, geen cakeachtige, voor de beste structuur.',
        'Extra chocolade? Roer 1\u00a0el chocoladesiroop door de basis voordat je hem invriest.',
      ],
    },
  },
}
