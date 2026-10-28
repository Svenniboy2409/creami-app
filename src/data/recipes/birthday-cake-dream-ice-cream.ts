import image from '../../assets/recipes/birthday-cake-dream-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// From the "Discover a world of Ninja Creami flavours" cards, with the amounts
// shown there for a 24 oz pint, in millilitres and grams, and its photo cut
// from that card. The sprinkles go in after the first spin rather than into the
// base, so they keep their colour and crunch.
export const birthdayCakeDreamIceCream: Recipe = {
  id: 'birthday-cake-dream-ice-cream',
  origin: 'curated',
  name: 'Birthday Cake Dream',
  tagline: 'Vanilla ice cream loaded with rainbow sprinkles',
  image,
  flavor: 'birthday-cake',
  category: 'ice-cream',
  tags: ['egg-free', 'kid-friendly'],
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
        { qty: 360, unit: 'ml', name: 'milk', note: 'or any milk you like' },
        { qty: 75, unit: 'g', name: 'sweetened condensed milk', note: 'or a sweetener of your choice' },
        { qty: 25, unit: 'g', name: 'sugar', note: 'or to taste' },
        { qty: 1.5, unit: 'tsp', name: 'vanilla extract' },
        { qty: 2, unit: 'tbsp', name: 'milk powder', note: 'nonfat, optional, for creaminess' },
        { qty: 1, unit: 'pinch', name: 'salt' },
        { qty: 60, unit: 'ml', name: 'heavy cream', note: 'optional, for extra richness' },
      ],
    },
    {
      title: 'Mix-ins',
      items: [
        { qty: 4, unit: 'tbsp', name: 'rainbow sprinkles', note: 'plus extra to serve' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Whisk the milk, condensed milk, sugar, milk powder, vanilla, cream (if using) and a pinch of salt until the sugar has dissolved. For an extra silky base, blend it with a stick blender and pour it through a sieve.',
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
      text: 'Use a spoon to make a hole down the middle of the ice cream, add the sprinkles and run the MIX-IN program. Scatter extra sprinkles on top to serve.',
      program: 'Mix-in',
    },
  ],
  tips: [
    'More sprinkles after spinning means extra colour and crunch.',
    'Don’t skip the cream if you want it extra rich and creamy.',
  ],
  translations: {
    nl: {
      name: 'Verjaardagstaartdroom',
      tagline: 'Vanille-ijs boordevol regenboogsprinkels',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 360, unit: 'ml', name: 'melk', note: 'of elke melk die je lekker vindt' },
            { qty: 75, unit: 'g', name: 'gezoete gecondenseerde melk', note: 'of een zoetmiddel naar keuze' },
            { qty: 25, unit: 'g', name: 'suiker', note: 'of naar smaak' },
            { qty: 1.5, unit: 'tsp', name: 'vanille-extract' },
            { qty: 2, unit: 'tbsp', name: 'melkpoeder', note: 'mager, optioneel, voor romigheid' },
            { qty: 1, unit: 'pinch', name: 'zout' },
            { qty: 60, unit: 'ml', name: 'slagroom', note: 'optioneel, voor extra romigheid' },
          ],
        },
        {
          title: 'Mix-ins',
          items: [
            { qty: 4, unit: 'tbsp', name: 'regenboogsprinkels', note: 'plus extra om te serveren' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Klop de melk, de gecondenseerde melk, de suiker, het melkpoeder, de vanille, de room (als je die gebruikt) en een snufje zout door elkaar tot de suiker is opgelost. Voor een extra zijdezachte basis mix je hem met een staafmixer en giet je hem door een zeef.',
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
          text: 'Maak met een lepel een kuiltje tot op de bodem, doe de sprinkels erin en start het programma MIX-IN. Strooi er bij het serveren nog extra sprinkels over.',
          program: 'Mix-in',
        },
      ],
      tips: [
        'Meer sprinkels na het draaien geeft extra kleur en crunch.',
        'Wil je het extra vol en romig? Sla de room dan niet over.',
      ],
    },
  },
}
