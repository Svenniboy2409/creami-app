import image from '../../assets/recipes/creamy-mint-chocolate-chip-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// From the "Discover a world of Ninja Creami flavours" cards, with the amounts
// shown there for a 24 oz pint, in millilitres and grams, and its photo cut
// from that card. The crunchy bits go in after the first spin rather than into
// the base, so they stay crunchy. The card is called Mint Chocolate Chip, like
// the recipe from the flavour list; this creamier one with condensed milk has
// its own name so the two are told apart.
export const creamyMintChocolateChipIceCream: Recipe = {
  id: 'creamy-mint-chocolate-chip-ice-cream',
  origin: 'curated',
  name: 'Creamy Mint Chocolate Chip',
  tagline: 'Refreshing mint packed with chocolate chips and crunchy dark chocolate',
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
        { qty: 360, unit: 'ml', name: 'milk', note: 'or any milk you like' },
        { qty: 150, unit: 'g', name: 'sweetened condensed milk', note: 'or a sweetener of your choice' },
        { qty: 25, unit: 'g', name: 'sugar', note: 'or to taste' },
        { qty: 0.5, unit: 'tsp', name: 'mint extract' },
        { qty: 60, unit: 'ml', name: 'heavy cream', note: 'optional, for extra creaminess' },
        { qty: 1, unit: 'pinch', name: 'salt' },
      ],
    },
    {
      title: 'Mix-ins',
      items: [
        { qty: 2, unit: 'tbsp', name: 'chocolate chips', note: 'optional' },
        { qty: 2, unit: 'tbsp', name: 'dark chocolate chunks', note: 'for extra crunch' },
        { qty: 1, unit: 'tbsp', name: 'mint chocolate drops', note: 'optional' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Whisk the milk, condensed milk, sugar, mint extract, cream (if using) and a pinch of salt until smooth. Mint is strong, so taste before adding any more, a drop at a time. For an extra silky base, blend it with a stick blender and pour it through a sieve.',
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
      text: 'Use a spoon to make a hole down the middle of the ice cream, add the chocolate chips, dark chocolate chunks and mint drops, and run the MIX-IN program. Top with chocolate shavings and a drizzle of chocolate sauce to serve.',
      program: 'Mix-in',
    },
  ],
  tips: [
    'For more texture, add a few extra chocolate chunks after spinning.',
    'For an extra kick, add a tiny drop of peppermint extract.',
  ],
  translations: {
    nl: {
      name: 'Romig muntijs met chocoladestukjes',
      tagline: 'Frisse munt boordevol chocoladestukjes en knapperige pure chocolade',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 360, unit: 'ml', name: 'melk', note: 'of elke melk die je lekker vindt' },
            { qty: 150, unit: 'g', name: 'gezoete gecondenseerde melk', note: 'of een zoetmiddel naar keuze' },
            { qty: 25, unit: 'g', name: 'suiker', note: 'of naar smaak' },
            { qty: 0.5, unit: 'tsp', name: 'muntextract' },
            { qty: 60, unit: 'ml', name: 'slagroom', note: 'optioneel, voor extra romigheid' },
            { qty: 1, unit: 'pinch', name: 'zout' },
          ],
        },
        {
          title: 'Mix-ins',
          items: [
            { qty: 2, unit: 'tbsp', name: 'chocoladedruppels', note: 'optioneel' },
            { qty: 2, unit: 'tbsp', name: 'stukjes pure chocolade', note: 'voor extra crunch' },
            { qty: 1, unit: 'tbsp', name: 'muntchocoladedruppels', note: 'optioneel' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Klop de melk, de gecondenseerde melk, de suiker, het muntextract, de room (als je die gebruikt) en een snufje zout door elkaar tot alles glad is. Munt is sterk: proef eerst en voeg alleen druppel voor druppel meer toe. Voor een extra zijdezachte basis mix je hem met een staafmixer en giet je hem door een zeef.',
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
          text: 'Maak met een lepel een kuiltje tot op de bodem, doe de chocoladedruppels, de stukjes pure chocolade en de muntdruppels erin en start het programma MIX-IN. Maak het bij het serveren af met chocoladeschaafsel en wat chocoladesaus.',
          program: 'Mix-in',
        },
      ],
      tips: [
        'Voor meer bite doe je er na het draaien nog wat extra stukjes chocolade bij.',
        'Voor een extra frisse kick voeg je een heel klein druppeltje pepermuntextract toe.',
      ],
    },
  },
}
