import image from '../../assets/recipes/marshmallow-dream-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// From the "Discover a world of Ninja Creami flavours" cards, with the amounts
// shown there for a 24 oz pint, in millilitres and grams, and its photo cut
// from that card. The card lists marshmallows twice but only says where one lot
// goes: the first is melted into the base for marshmallow flavour throughout,
// the second is the mix-in.
export const marshmallowDreamIceCream: Recipe = {
  id: 'marshmallow-dream-ice-cream',
  origin: 'curated',
  name: 'Marshmallow Dream',
  tagline: 'Light and fluffy, with marshmallow in every bite',
  image,
  flavor: 'marshmallow',
  category: 'ice-cream',
  tags: ['egg-free', 'kid-friendly'],
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
        { qty: 2, unit: 'tsp', name: 'vanilla extract' },
        { qty: 30, unit: 'g', name: 'milk powder', note: 'optional, for creaminess' },
        { qty: 25, unit: 'g', name: 'mini marshmallows', note: 'or to taste' },
      ],
    },
    {
      title: 'Mix-ins',
      items: [
        { qty: 4, unit: 'tbsp', name: 'mini marshmallows' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Warm about a quarter of the milk until hot and stir in the mini marshmallows from the base until they have melted. Whisk in the rest of the milk, the cream, sugar, milk powder and vanilla until smooth.',
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
      text: 'Use a spoon to make a hole down the middle of the ice cream, add the mini marshmallows and run the MIX-IN program.',
      program: 'Mix-in',
    },
  ],
  tips: [
    'Don’t skip the milk powder: it makes the texture richer and smoother.',
    'Fold in extra mini marshmallows after spinning for more pockets of gooey sweetness.',
    'For an even richer flavour, add a splash of vanilla or almond extract.',
  ],
  translations: {
    nl: {
      name: 'Marshmallowdroom',
      tagline: 'Licht en luchtig, met marshmallow in elke hap',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 360, unit: 'ml', name: 'melk', note: 'elke soort' },
            { qty: 120, unit: 'ml', name: 'slagroom' },
            { qty: 65, unit: 'g', name: 'suiker' },
            { qty: 2, unit: 'tsp', name: 'vanille-extract' },
            { qty: 30, unit: 'g', name: 'melkpoeder', note: 'optioneel, voor romigheid' },
            { qty: 25, unit: 'g', name: 'mini-marshmallows', note: 'of naar smaak' },
          ],
        },
        {
          title: 'Mix-ins',
          items: [
            { qty: 4, unit: 'tbsp', name: 'mini-marshmallows' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Verwarm ongeveer een kwart van de melk tot hij heet is en roer de mini-marshmallows van de basis erdoor tot ze gesmolten zijn. Klop daarna de rest van de melk, de room, de suiker, het melkpoeder en de vanille erdoor tot alles glad is.',
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
          text: 'Maak met een lepel een kuiltje tot op de bodem, doe de mini-marshmallows erin en start het programma MIX-IN.',
          program: 'Mix-in',
        },
      ],
      tips: [
        'Sla het melkpoeder niet over: het maakt de structuur voller en gladder.',
        'Schep er na het draaien extra mini-marshmallows door voor meer zoete, zachte hapjes.',
        'Voor een nog vollere smaak voeg je een scheutje vanille- of amandelextract toe.',
      ],
    },
  },
}
