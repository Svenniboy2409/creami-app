import image from '../../assets/recipes/biscoff-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// From the "Discover a world of Ninja Creami flavours" cards, with the amounts
// shown there for a 24 oz pint, in millilitres and grams, and its photo cut
// from that card. The crunchy bits go in after the first spin rather than into
// the base, so they stay crunchy. Its three variations are tips.
export const biscoffIceCream: Recipe = {
  id: 'biscoff-ice-cream',
  origin: 'curated',
  name: 'Biscoff Bliss',
  tagline: 'Creamy and spiced, with a caramelly cookie finish',
  image,
  flavor: 'biscoff',
  category: 'ice-cream',
  tags: ['egg-free'],
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
        { qty: 85, unit: 'g', name: 'Biscoff spread', note: 'smooth' },
      ],
    },
    {
      title: 'Mix-ins',
      items: [
        { qty: 30, unit: 'g', name: 'Biscoff cookies', note: 'crushed, about 4; plus extra to serve' },
        { qty: 1, unit: 'tbsp', name: 'Biscoff spread', note: 'melted, optional, for the swirl' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Warm the Biscoff spread for a few seconds so it loosens, then whisk it with the sugar, the milk powder and a splash of the milk until smooth. Whisk in the rest of the milk, the cream and the vanilla.',
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
      text: 'Use a spoon to make a hole down the middle of the ice cream, add the Biscoff crumbs and run the MIX-IN program.',
      program: 'Mix-in',
    },
    {
      title: 'Swirl (optional)',
      text: 'Drizzle the melted Biscoff spread over the ice cream and draw it through with a spoon for a ripple. Top with extra crumbs to serve.',
    },
  ],
  tips: [
    'Biscoff swirl: add an extra 1–2\u00a0tbsp Biscoff spread along with the crumbs for a delicious ripple.',
    'Biscoff chunky: use chopped Biscoff cookies instead of crumbs for extra crunch in every bite.',
    'Caramel Biscoff: drizzle with caramel sauce after spinning for the ultimate treat.',
  ],
  translations: {
    nl: {
      name: 'Biscoff-zaligheid',
      tagline: 'Romig en kruidig, met een karamelachtige koekjessmaak',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 360, unit: 'ml', name: 'melk', note: 'elke soort' },
            { qty: 120, unit: 'ml', name: 'slagroom' },
            { qty: 65, unit: 'g', name: 'suiker' },
            { qty: 1, unit: 'tsp', name: 'vanille-extract' },
            { qty: 30, unit: 'g', name: 'melkpoeder', note: 'optioneel, voor romigheid' },
            { qty: 85, unit: 'g', name: 'Biscoff-pasta', note: 'gladde speculoospasta' },
          ],
        },
        {
          title: 'Mix-ins',
          items: [
            { qty: 30, unit: 'g', name: 'Biscoff-koekjes', note: 'verkruimeld, ca. 4; plus extra om te serveren' },
            { qty: 1, unit: 'tbsp', name: 'Biscoff-pasta', note: 'gesmolten, optioneel, voor de swirl' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Verwarm de Biscoff-pasta een paar seconden zodat hij smeuïg wordt en klop hem met de suiker, het melkpoeder en een scheutje melk glad. Klop daarna de rest van de melk, de room en de vanille erdoor.',
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
          text: 'Maak met een lepel een kuiltje tot op de bodem, doe de Biscoff-kruimels erin en start het programma MIX-IN.',
          program: 'Mix-in',
        },
        {
          title: 'Swirl (optioneel)',
          text: 'Sprenkel de gesmolten Biscoff-pasta over het ijs en trek er met een lepel een swirl door. Strooi er bij het serveren nog wat kruimels over.',
        },
      ],
      tips: [
        'Biscoff-swirl: doe er samen met de kruimels nog 1–2\u00a0el Biscoff-pasta bij voor een heerlijke swirl.',
        'Biscoff chunky: gebruik grof gehakte koekjes in plaats van kruimels voor extra crunch in elke hap.',
        'Karamel-Biscoff: schenk er na het draaien wat karamelsaus over voor het ultieme toetje.',
      ],
    },
  },
}
