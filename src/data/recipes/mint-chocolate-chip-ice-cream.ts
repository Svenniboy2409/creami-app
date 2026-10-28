import image from '../../assets/recipes/mint-chocolate-chip-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// From the Ninja Creami flavour list, in millilitres and grams, with its photo
// cut from that list. The flavour colours the illustration that replaces the
// photo when "Illustrations instead of photos" is on in Settings. Extended with
// the Mint Chocolate Chip card from the "Discover a world of Ninja Creami
// flavours" series: its extra mix-ins, scaled to this 16 oz pint, and its
// condensed-milk version as a tip.
export const mintChocolateChipIceCream: Recipe = {
  id: 'mint-chocolate-chip-ice-cream',
  origin: 'curated',
  name: 'Mint Chocolate Chip',
  tagline: 'Cool mint with a crunch of chocolate',
  image,
  flavor: 'mint-chip',
  category: 'ice-cream',
  tags: ['egg-free', 'chocolate'],
  models: ['original', 'breeze', 'deluxe', 'swirl'],
  program: 'Ice Cream',
  basePint: 16,
  servings: '3–4',
  difficulty: 'easy',
  times: { prepMin: 10, freezeHours: 24 },
  ingredients: [
    {
      title: 'Base',
      items: [
        { qty: 180, unit: 'ml', name: 'whole milk' },
        { qty: 120, unit: 'ml', name: 'heavy cream' },
        { qty: 50, unit: 'g', name: 'sugar' },
        { qty: 0.5, unit: 'tsp', name: 'peppermint extract' },
      ],
    },
    {
      title: 'Mix-ins',
      items: [
        { qty: 2, unit: 'tbsp', name: 'mini chocolate chips' },
        { qty: 1, unit: 'tbsp', name: 'dark chocolate chunks', note: 'optional, for extra crunch' },
        { qty: 2, unit: 'tsp', name: 'mint chocolate drops', note: 'optional' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Whisk the milk, cream, sugar and peppermint extract until the sugar has dissolved. Peppermint is strong, so taste before adding any more, a drop at a time.',
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
      text: 'Use a spoon to make a hole down the middle of the ice cream, add the mini chocolate chips (and the dark chocolate chunks and mint drops, if using) and run the MIX-IN program.',
      program: 'Mix-in',
    },
  ],
  tips: [
    'To serve, top with extra chocolate shavings and a drizzle of chocolate sauce.',
    'Extra crunch? Add a few more dark chocolate chunks with the mix-ins.',
    'Creamier with condensed milk: instead of the milk, cream and sugar, whisk 240\u00a0ml milk with 100\u00a0g sweetened condensed milk, 15\u00a0g sugar and the peppermint, and add 40\u00a0ml cream for extra richness. Blend it until silky smooth before freezing.',
  ],
  translations: {
    nl: {
      name: 'Muntijs met chocoladestukjes',
      tagline: 'Frisse munt met knapperige chocolade',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 180, unit: 'ml', name: 'volle melk' },
            { qty: 120, unit: 'ml', name: 'slagroom' },
            { qty: 50, unit: 'g', name: 'suiker' },
            { qty: 0.5, unit: 'tsp', name: 'pepermuntextract' },
          ],
        },
        {
          title: 'Mix-ins',
          items: [
            { qty: 2, unit: 'tbsp', name: 'mini-chocoladedruppels' },
            { qty: 1, unit: 'tbsp', name: 'pure chocoladestukjes', note: 'optioneel, voor extra crunch' },
            { qty: 2, unit: 'tsp', name: 'muntchocoladedruppels', note: 'optioneel' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Klop de melk, de room, de suiker en het pepermuntextract door elkaar tot de suiker is opgelost. Pepermunt is sterk: proef eerst en voeg alleen druppel voor druppel meer toe.',
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
          text: 'Maak met een lepel een kuiltje tot op de bodem, doe de chocoladedruppels erin (en de pure chocoladestukjes en muntdruppels als je die gebruikt) en start het programma MIX-IN.',
          program: 'Mix-in',
        },
      ],
      tips: [
        'Maak het bij het serveren af met extra chocoladeschaafsel en wat chocoladesaus.',
        'Extra crunch? Doe er bij de mix-ins nog wat extra pure chocoladestukjes bij.',
        'Romiger met gecondenseerde melk: klop in plaats van de melk, de room en de suiker 240\u00a0ml melk met 100\u00a0g gezoete gecondenseerde melk, 15\u00a0g suiker en de pepermunt, en voeg 40\u00a0ml room toe voor extra romigheid. Mix het zijdezacht voordat je het invriest.',
      ],
    },
  },
}
