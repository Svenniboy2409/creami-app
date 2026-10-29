import image from '../../assets/recipes/passion-fruit-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// From the "Discover a world of Ninja Creami flavours" cards, with the amounts
// shown there for a 24 oz pint, in millilitres and grams, and its photo cut
// from that card. The pulp goes into the base; the extra seeds or pulp go in
// after the first spin, as a swirl.
export const passionFruitIceCream: Recipe = {
  id: 'passion-fruit-ice-cream',
  origin: 'curated',
  name: 'Passion Fruit',
  tagline: 'Tropical, tangy and refreshingly sweet',
  image,
  flavor: 'passion-fruit',
  category: 'ice-cream',
  tags: ['egg-free', 'gluten-free', 'fruity'],
  tastes: ['fruity', 'refreshing'],
  models: ['original', 'breeze', 'deluxe', 'swirl'],
  program: 'Ice Cream',
  basePint: 24,
  servings: '4–6',
  difficulty: 'easy',
  times: { prepMin: 15, freezeHours: 24 },
  ingredients: [
    {
      title: 'Base',
      items: [
        { qty: 360, unit: 'ml', name: 'milk', note: 'any kind' },
        { qty: 120, unit: 'ml', name: 'heavy cream' },
        { qty: 120, unit: 'g', name: 'passion fruit pulp', note: 'fresh or frozen' },
        { qty: 50, unit: 'g', name: 'sugar' },
        { qty: 1, unit: 'tsp', name: 'vanilla extract' },
        { qty: 2, unit: 'tbsp', name: 'sweetened condensed milk', note: 'optional' },
        { qty: 1, unit: 'tbsp', name: 'honey', note: 'optional, for extra sweetness' },
        { qty: 1, unit: 'tbsp', name: 'lime juice', note: 'optional, to lift the flavour' },
        { qty: 1, unit: 'pinch', name: 'salt' },
      ],
    },
    {
      title: 'Mix-ins',
      items: [
        { qty: 2, unit: 'tbsp', name: 'passion fruit seeds', note: 'optional, or a little extra pulp, for the swirl' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Whisk the milk, cream, sugar, condensed milk, vanilla, lime juice, honey (if using) and a pinch of salt until smooth, then stir in the passion fruit pulp until well combined.',
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
      text: 'Use a spoon to make a hole down the middle of the ice cream, add the passion fruit seeds or extra pulp and run the MIX-IN program.',
      program: 'Mix-in',
    },
  ],
  tips: [
    'For an intense tropical burst, swirl in extra passion fruit pulp or seeds after spinning.',
    'Extra creamy? Add 1–2\u00a0tbsp more condensed milk or a splash of coconut cream.',
    'A little lime zest in the base before freezing adds a bright, refreshing zing.',
  ],
  translations: {
    nl: {
      name: 'Passievruchtijs',
      tagline: 'Tropisch, fris en heerlijk zoet',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 360, unit: 'ml', name: 'melk', note: 'elke soort' },
            { qty: 120, unit: 'ml', name: 'slagroom' },
            { qty: 120, unit: 'g', name: 'passievruchtpulp', note: 'vers of diepvries' },
            { qty: 50, unit: 'g', name: 'suiker' },
            { qty: 1, unit: 'tsp', name: 'vanille-extract' },
            { qty: 2, unit: 'tbsp', name: 'gezoete gecondenseerde melk', note: 'optioneel' },
            { qty: 1, unit: 'tbsp', name: 'honing', note: 'optioneel, voor extra zoetheid' },
            { qty: 1, unit: 'tbsp', name: 'limoensap', note: 'optioneel, voor een frissere smaak' },
            { qty: 1, unit: 'pinch', name: 'zout' },
          ],
        },
        {
          title: 'Mix-ins',
          items: [
            { qty: 2, unit: 'tbsp', name: 'passievruchtpitjes', note: 'optioneel, of wat extra pulp, voor de swirl' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Klop de melk, de room, de suiker, de gecondenseerde melk, de vanille, het limoensap, de honing (als je die gebruikt) en een snufje zout door elkaar tot alles glad is en roer de passievruchtpulp erdoor.',
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
          text: 'Maak met een lepel een kuiltje tot op de bodem, doe de passievruchtpitjes of extra pulp erin en start het programma MIX-IN.',
          program: 'Mix-in',
        },
      ],
      tips: [
        'Voor een intense tropische smaak roer je er na het draaien extra passievruchtpulp of -pitjes door.',
        'Extra romig? Voeg 1–2\u00a0el extra gecondenseerde melk of een scheutje kokosroom toe.',
        'Een beetje limoenrasp in de basis voor het invriezen geeft een frisse, verkwikkende kick.',
      ],
    },
  },
}
