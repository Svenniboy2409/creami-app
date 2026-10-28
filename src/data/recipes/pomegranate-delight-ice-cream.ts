import image from '../../assets/recipes/pomegranate-delight-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// From the "Discover a world of Ninja Creami flavours" cards, with the amounts
// shown there for a 24 oz pint, in millilitres and grams, and its photo cut
// from that card. The arils go in after the first spin rather than into the
// base, so they stay as juicy bursts.
export const pomegranateDelightIceCream: Recipe = {
  id: 'pomegranate-delight-ice-cream',
  origin: 'curated',
  name: 'Pomegranate Delight',
  tagline: 'Bright and fruity, with juicy bursts in every bite',
  image,
  flavor: 'pomegranate',
  category: 'ice-cream',
  tags: ['egg-free', 'gluten-free', 'fruity'],
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
        { qty: 0.5, unit: 'tsp', name: 'pomegranate extract', note: 'or to taste' },
        { qty: 60, unit: 'ml', name: 'pomegranate juice', note: '100% pure' },
        { qty: 60, unit: 'ml', name: 'heavy cream', note: 'optional, for extra richness' },
        { qty: 1, unit: 'pinch', name: 'salt', note: 'or to taste' },
        { qty: 1, unit: 'tsp', name: 'lemon juice', note: 'brightens the flavour' },
      ],
    },
    {
      title: 'Mix-ins',
      items: [
        { qty: 2, unit: 'tbsp', name: 'pomegranate arils', note: 'plus extra to serve' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Whisk the milk, condensed milk, sugar, pomegranate juice, pomegranate extract, cream (if using), lemon juice and a pinch of salt until smooth. For an extra silky base, blend it with a stick blender and pour it through a sieve.',
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
      text: 'Use a spoon to make a hole down the middle of the ice cream, add the pomegranate arils and run the MIX-IN program. Top with extra arils and a drizzle of pomegranate syrup to serve.',
      program: 'Mix-in',
    },
  ],
  tips: [
    'For a bolder, fruitier taste, add an extra 1–2\u00a0tbsp pomegranate juice.',
    'A tiny drop of rose water or orange blossom water adds a beautiful floral note.',
  ],
  translations: {
    nl: {
      name: 'Granaatappelgenot',
      tagline: 'Fris en fruitig, met sappige pitjes in elke hap',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 360, unit: 'ml', name: 'melk', note: 'of elke melk die je lekker vindt' },
            { qty: 75, unit: 'g', name: 'gezoete gecondenseerde melk', note: 'of een zoetmiddel naar keuze' },
            { qty: 25, unit: 'g', name: 'suiker', note: 'of naar smaak' },
            { qty: 0.5, unit: 'tsp', name: 'granaatappelextract', note: 'of naar smaak' },
            { qty: 60, unit: 'ml', name: 'granaatappelsap', note: '100% puur' },
            { qty: 60, unit: 'ml', name: 'slagroom', note: 'optioneel, voor extra romigheid' },
            { qty: 1, unit: 'pinch', name: 'zout', note: 'of naar smaak' },
            { qty: 1, unit: 'tsp', name: 'citroensap', note: 'maakt de smaak frisser' },
          ],
        },
        {
          title: 'Mix-ins',
          items: [
            { qty: 2, unit: 'tbsp', name: 'granaatappelpitjes', note: 'plus extra om te serveren' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Klop de melk, de gecondenseerde melk, de suiker, het granaatappelsap, het extract, de room (als je die gebruikt), het citroensap en een snufje zout door elkaar tot alles glad is. Voor een extra zijdezachte basis mix je hem met een staafmixer en giet je hem door een zeef.',
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
          text: 'Maak met een lepel een kuiltje tot op de bodem, doe de granaatappelpitjes erin en start het programma MIX-IN. Maak het bij het serveren af met extra pitjes en wat granaatappelsiroop.',
          program: 'Mix-in',
        },
      ],
      tips: [
        'Voor een vollere, fruitigere smaak voeg je 1–2\u00a0el extra granaatappelsap toe.',
        'Een heel klein druppeltje rozenwater of oranjebloesemwater geeft een prachtige bloemige toets.',
      ],
    },
  },
}
