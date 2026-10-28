import image from '../../assets/recipes/chip-mint-cool-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// From the "Discover a world of Ninja Creami flavours" cards, with the amounts
// shown there for a 24 oz pint, in millilitres and grams, and its photo cut
// from that card. The crunchy bits go in after the first spin rather than into
// the base, so they stay crunchy. A creamier take on the Mint Chocolate Chip
// from the flavour list, with milk powder and chocolate shavings.
export const chipMintCoolIceCream: Recipe = {
  id: 'chip-mint-cool-ice-cream',
  origin: 'curated',
  name: 'Chip Mint Cool',
  tagline: 'Refreshing mint ice cream with crunchy chocolate chips',
  image,
  flavor: 'mint-chip',
  category: 'ice-cream',
  tags: ['egg-free', 'gluten-free', 'chocolate'],
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
        { qty: 65, unit: 'g', name: 'sugar' },
        { qty: 1, unit: 'tsp', name: 'vanilla extract' },
        { qty: 30, unit: 'g', name: 'milk powder', note: 'optional, for creaminess' },
        { qty: 0.5, unit: 'tsp', name: 'peppermint extract', note: 'or to taste' },
      ],
    },
    {
      title: 'Mix-ins',
      items: [
        { qty: 45, unit: 'g', name: 'mini chocolate chips' },
        { qty: 2, unit: 'tbsp', name: 'chocolate shavings', note: 'optional' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Whisk the milk, cream, sugar, milk powder, vanilla and peppermint extract until smooth. Peppermint is strong, so taste before adding any more, a drop at a time.',
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
      text: 'Use a spoon to make a hole down the middle of the ice cream, add the chocolate chips and shavings and run the MIX-IN program.',
      program: 'Mix-in',
    },
  ],
  tips: [
    'Don’t skip the milk powder: it makes the texture richer and smoother.',
    'Mini chocolate chips give the best bite in every scoop.',
  ],
  translations: {
    nl: {
      name: 'Frisse munt met chocolade',
      tagline: 'Verfrissend muntijs met knapperige chocoladestukjes',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 360, unit: 'ml', name: 'melk', note: 'elke soort' },
            { qty: 120, unit: 'ml', name: 'slagroom' },
            { qty: 65, unit: 'g', name: 'suiker' },
            { qty: 1, unit: 'tsp', name: 'vanille-extract' },
            { qty: 30, unit: 'g', name: 'melkpoeder', note: 'optioneel, voor romigheid' },
            { qty: 0.5, unit: 'tsp', name: 'pepermuntextract', note: 'of naar smaak' },
          ],
        },
        {
          title: 'Mix-ins',
          items: [
            { qty: 45, unit: 'g', name: 'mini-chocoladedruppels' },
            { qty: 2, unit: 'tbsp', name: 'chocoladeschaafsel', note: 'optioneel' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Klop de melk, de room, de suiker, het melkpoeder, de vanille en het pepermuntextract door elkaar tot alles glad is. Pepermunt is sterk: proef eerst en voeg alleen druppel voor druppel meer toe.',
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
          text: 'Maak met een lepel een kuiltje tot op de bodem, doe de chocoladedruppels en het schaafsel erin en start het programma MIX-IN.',
          program: 'Mix-in',
        },
      ],
      tips: [
        'Sla het melkpoeder niet over: het maakt de structuur voller en gladder.',
        'Mini-chocoladedruppels geven de beste bite in elk bolletje.',
      ],
    },
  },
}
