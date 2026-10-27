import image from '../../assets/recipes/ultimate-peanut-butter-cup-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// From the "Discover a world of Ninja Creami flavours" cards, with the amounts
// shown there for a 24 oz pint, in millilitres and grams, and its photo cut
// from that card. The crunchy bits go in after the first spin rather than into
// the base, so they stay crunchy. A fuller take on the Peanut Butter Cup from
// the flavour list; its three variations are tips.
export const ultimatePeanutButterCupIceCream: Recipe = {
  id: 'ultimate-peanut-butter-cup-ice-cream',
  origin: 'curated',
  name: 'Ultimate Peanut Butter Cup',
  tagline: 'Rich peanut butter ice cream, loaded with peanut butter cups',
  image,
  flavor: 'peanut-butter',
  category: 'ice-cream',
  tags: ['egg-free', 'nutty', 'chocolate'],
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
        { qty: 85, unit: 'g', name: 'smooth peanut butter' },
        { qty: 2, unit: 'tbsp', name: 'chocolate syrup', note: 'optional' },
      ],
    },
    {
      title: 'Mix-ins',
      items: [
        { qty: 75, unit: 'g', name: 'mini peanut butter cups', note: 'chopped' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Warm the peanut butter for a few seconds so it loosens, then whisk it with the sugar, the milk powder and a splash of the milk until smooth. Whisk in the rest of the milk, the cream, the vanilla and the chocolate syrup (if using).',
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
      text: 'Use a spoon to make a hole down the middle of the ice cream, add the chopped peanut butter cups and run the MIX-IN program.',
      program: 'Mix-in',
    },
  ],
  tips: [
    'Chocolate swirl: add an extra 1–2\u00a0tbsp chocolate syrup along with the mix-ins.',
    'Peanut butter overload: drizzle extra peanut butter on top, or mix in some peanut butter chips.',
    'Crunchy delight: use chopped mini peanut butter cups and crushed peanuts for the ultimate crunch.',
  ],
  translations: {
    nl: {
      name: 'Ultiem pindakaas-cup-ijs',
      tagline: 'Vol pindakaasijs, boordevol pindakaascups',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 360, unit: 'ml', name: 'melk', note: 'elke soort' },
            { qty: 120, unit: 'ml', name: 'slagroom' },
            { qty: 65, unit: 'g', name: 'suiker' },
            { qty: 1, unit: 'tsp', name: 'vanille-extract' },
            { qty: 30, unit: 'g', name: 'melkpoeder', note: 'optioneel, voor romigheid' },
            { qty: 85, unit: 'g', name: 'gladde pindakaas' },
            { qty: 2, unit: 'tbsp', name: 'chocoladesiroop', note: 'optioneel' },
          ],
        },
        {
          title: 'Mix-ins',
          items: [
            { qty: 75, unit: 'g', name: 'mini-pindakaascups', note: 'in stukjes' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Verwarm de pindakaas een paar seconden zodat hij smeuïg wordt en klop hem met de suiker, het melkpoeder en een scheutje melk glad. Klop daarna de rest van de melk, de room, de vanille en de chocoladesiroop (als je die gebruikt) erdoor.',
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
          text: 'Maak met een lepel een kuiltje tot op de bodem, doe de stukjes pindakaascup erin en start het programma MIX-IN.',
          program: 'Mix-in',
        },
      ],
      tips: [
        'Chocoladeswirl: doe er samen met de mix-ins nog 1–2\u00a0el chocoladesiroop bij.',
        'Pindakaas-overload: schenk er extra pindakaas over of meng er wat pindakaaschips door.',
        'Extra crunch: gebruik gehakte mini-pindakaascups en gebroken pinda’s voor de ultieme crunch.',
      ],
    },
  },
}
