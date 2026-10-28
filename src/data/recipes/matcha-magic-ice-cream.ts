import image from '../../assets/recipes/matcha-magic-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// From the "Discover a world of Ninja Creami flavours" cards, with the amounts
// shown there for a 24 oz pint, in millilitres and grams, and its photo cut
// from that card. Not the Matcha Dream: this one is made with condensed milk.
// The white chocolate and coconut can go in with MIX-IN or simply on top.
export const matchaMagicIceCream: Recipe = {
  id: 'matcha-magic-ice-cream',
  origin: 'curated',
  name: 'Matcha Magic',
  tagline: 'Earthy and smooth green tea, with a hint of sweetness',
  image,
  flavor: 'matcha',
  category: 'ice-cream',
  tags: ['egg-free', 'gluten-free'],
  tastes: ['sweet', 'creamy'],
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
        { qty: 150, unit: 'g', name: 'sweetened condensed milk' },
        { qty: 50, unit: 'g', name: 'sugar' },
        { qty: 1, unit: 'tsp', name: 'vanilla extract' },
        { qty: 2, unit: 'tbsp', name: 'matcha powder', note: 'culinary grade' },
        { qty: 1, unit: 'tbsp', name: 'honey', note: 'optional, for extra sweetness' },
        { qty: 1, unit: 'pinch', name: 'salt' },
      ],
    },
    {
      title: 'Mix-ins',
      items: [
        { qty: 2, unit: 'tbsp', name: 'white chocolate chips', note: 'optional' },
        { qty: 1, unit: 'tbsp', name: 'toasted coconut', note: 'optional' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Whisk the milk, cream, condensed milk, sugar, vanilla, honey (if using) and a pinch of salt until smooth. In a small bowl, whisk the matcha with 2–3 tablespoons of this mixture into a smooth paste with no clumps, then whisk it back into the rest.',
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
      text: 'Use a spoon to make a hole down the middle of the ice cream, add the white chocolate chips and toasted coconut, and run the MIX-IN program. Or scatter them on top, or enjoy it pure.',
      program: 'Mix-in',
    },
  ],
  tips: [
    'Want a stronger green tea flavour? Add up to 1 extra teaspoon of matcha.',
    'Make sure the condensed milk is well mixed in for the creamiest result.',
  ],
  translations: {
    nl: {
      name: 'Matchamagie',
      tagline: 'Aards en zacht groenetee-ijs, met een vleugje zoetheid',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 360, unit: 'ml', name: 'melk', note: 'elke soort' },
            { qty: 120, unit: 'ml', name: 'slagroom' },
            { qty: 150, unit: 'g', name: 'gezoete gecondenseerde melk' },
            { qty: 50, unit: 'g', name: 'suiker' },
            { qty: 1, unit: 'tsp', name: 'vanille-extract' },
            { qty: 2, unit: 'tbsp', name: 'matchapoeder', note: 'culinaire kwaliteit' },
            { qty: 1, unit: 'tbsp', name: 'honing', note: 'optioneel, voor extra zoetheid' },
            { qty: 1, unit: 'pinch', name: 'zout' },
          ],
        },
        {
          title: 'Mix-ins',
          items: [
            { qty: 2, unit: 'tbsp', name: 'witte chocoladedruppels', note: 'optioneel' },
            { qty: 1, unit: 'tbsp', name: 'geroosterde kokos', note: 'optioneel' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Klop de melk, de room, de gecondenseerde melk, de suiker, de vanille, de honing (als je die gebruikt) en een snufje zout door elkaar tot alles glad is. Klop de matcha in een klein kommetje met 2–3 eetlepels van dit mengsel tot een gladde pasta zonder klontjes en klop die daarna door de rest.',
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
          text: 'Maak met een lepel een kuiltje tot op de bodem, doe de witte chocoladedruppels en de geroosterde kokos erin en start het programma MIX-IN. Of strooi ze erover, of eet het gewoon puur.',
          program: 'Mix-in',
        },
      ],
      tips: [
        'Liever een sterkere groenetheesmaak? Voeg tot 1 extra theelepel matcha toe.',
        'Zorg dat de gecondenseerde melk goed is opgenomen voor het romigste resultaat.',
      ],
    },
  },
}
