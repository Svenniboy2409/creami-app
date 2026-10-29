import image from '../../assets/recipes/birthday-cake-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// From the "Discover a world of Ninja Creami flavours" cards, with the amounts
// shown there for a 24 oz pint, in millilitres and grams, and its photo cut
// from that card. Not the Birthday Cake Dream: this one has cake mix in the
// base and cake pieces as a mix-in. Its three variations are tips.
export const birthdayCakeIceCream: Recipe = {
  id: 'birthday-cake-ice-cream',
  origin: 'curated',
  name: 'Birthday Cake',
  tagline: 'Creamy vanilla with sweet cake bites and colourful sprinkles',
  image,
  flavor: 'birthday-cake',
  category: 'ice-cream',
  tags: ['kid-friendly'],
  tastes: ['sweet', 'rich'],
  models: ['original', 'breeze', 'deluxe', 'swirl'],
  program: 'Ice Cream',
  basePint: 24,
  servings: '4–6',
  difficulty: 'medium',
  times: { prepMin: 10, freezeHours: 24 },
  ingredients: [
    {
      title: 'Base',
      items: [
        { qty: 360, unit: 'ml', name: 'milk', note: 'any kind' },
        { qty: 120, unit: 'ml', name: 'heavy cream' },
        { qty: 65, unit: 'g', name: 'sugar' },
        { qty: 1, unit: 'tsp', name: 'vanilla extract' },
        { qty: 30, unit: 'g', name: 'cake mix', note: 'or instant vanilla pudding mix, for creaminess' },
        { qty: 1, unit: 'tbsp', name: 'butter', note: 'melted' },
      ],
    },
    {
      title: 'Mix-ins',
      items: [
        { qty: 40, unit: 'g', name: 'cake pieces', note: 'baked and crumbled' },
        { qty: 2, unit: 'tbsp', name: 'rainbow sprinkles' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Whisk the milk, cream, sugar, cake mix and vanilla until smooth, then whisk in the melted butter well so it spreads through the base instead of setting in flecks.',
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
      text: 'Use a spoon to make a hole down the middle of the ice cream, add the cake pieces and sprinkles and run the MIX-IN program.',
      program: 'Mix-in',
    },
  ],
  tips: [
    'Use a soft, moist funfetti or vanilla cake, and good vanilla and cake mix, for the richest birthday cake flavour.',
    'Cake mix contains raw flour. To be safe, heat it in the microwave in short bursts until it is hot all the way through, or use instant pudding mix instead.',
    'Fold the sprinkles in at the end to keep them bright and colourful.',
    'Birthday cake brownie: add 30\u00a0g brownie chunks along with the cake pieces for an extra chocolatey treat.',
    'Confetti party: add extra sprinkles and white chocolate chips for the ultimate party in a bowl.',
    'Cake batter dream: use butter extract instead of vanilla for an even richer cake batter flavour.',
  ],
  translations: {
    nl: {
      name: 'Verjaardagstaart-ijs',
      tagline: 'Romige vanille met stukjes cake en vrolijke sprinkels',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 360, unit: 'ml', name: 'melk', note: 'elke soort' },
            { qty: 120, unit: 'ml', name: 'slagroom' },
            { qty: 65, unit: 'g', name: 'suiker' },
            { qty: 1, unit: 'tsp', name: 'vanille-extract' },
            { qty: 30, unit: 'g', name: 'cakemix', note: 'of instant vanillepuddingpoeder, voor romigheid' },
            { qty: 1, unit: 'tbsp', name: 'boter', note: 'gesmolten' },
          ],
        },
        {
          title: 'Mix-ins',
          items: [
            { qty: 40, unit: 'g', name: 'stukjes cake', note: 'gebakken en verkruimeld' },
            { qty: 2, unit: 'tbsp', name: 'regenboogsprinkels' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Klop de melk, de room, de suiker, de cakemix en de vanille door elkaar tot alles glad is en klop daarna de gesmolten boter er goed door, zodat hij zich door de basis verspreidt en geen vlokjes vormt.',
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
          text: 'Maak met een lepel een kuiltje tot op de bodem, doe de stukjes cake en de sprinkels erin en start het programma MIX-IN.',
          program: 'Mix-in',
        },
      ],
      tips: [
        'Gebruik een zachte, smeuïge funfetti- of vanillecake en goede vanille en cakemix voor de rijkste verjaardagstaartsmaak.',
        'Cakemix bevat rauwe bloem. Verwarm hem voor de zekerheid in korte stootjes in de magnetron tot hij helemaal heet is, of gebruik instant puddingpoeder.',
        'Schep de sprinkels er pas op het laatst door, dan blijven ze fel en kleurrijk.',
        'Verjaardagstaart-brownie: doe er samen met de cake 30\u00a0g stukjes brownie bij voor een extra chocoladetraktatie.',
        'Confettifeest: voeg extra sprinkels en witte chocoladedruppels toe voor het ultieme feestje in een kom.',
        'Cakebeslagdroom: gebruik boteraroma in plaats van vanille voor een nog vollere cakebeslagsmaak.',
      ],
    },
  },
}
