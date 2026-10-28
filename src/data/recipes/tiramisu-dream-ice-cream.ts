import image from '../../assets/recipes/tiramisu-dream-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// From the "Discover a world of Ninja Creami flavours" cards, with the amounts
// shown there for a 24 oz pint, in millilitres and grams, and its photo cut
// from that card. The mix-ins go in after the first spin rather than into the
// base, so they stay in pieces.
export const tiramisuDreamIceCream: Recipe = {
  id: 'tiramisu-dream-ice-cream',
  origin: 'curated',
  name: 'Tiramisu Dream',
  tagline: 'Coffee-kissed ice cream with mascarpone and a hint of cocoa',
  image,
  flavor: 'tiramisu',
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
        { qty: 300, unit: 'ml', name: 'milk', note: 'any kind' },
        { qty: 115, unit: 'g', name: 'mascarpone', note: 'or cream cheese' },
        { qty: 65, unit: 'g', name: 'sugar' },
        { qty: 1, unit: 'tsp', name: 'vanilla extract' },
        { qty: 120, unit: 'ml', name: 'heavy cream' },
        { qty: 1, unit: 'tbsp', name: 'instant coffee', note: 'dissolved in 1 tbsp hot water' },
        { qty: 1, unit: 'tbsp', name: 'cocoa powder' },
      ],
    },
    {
      title: 'Mix-ins',
      items: [
        { qty: 30, unit: 'g', name: 'ladyfingers', note: 'crushed into small chunks' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Whisk the mascarpone with the sugar and a splash of the milk until smooth, then whisk in the rest of the milk, the cream, the vanilla, the dissolved coffee and the cocoa powder.',
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
      text: 'Use a spoon to make a hole down the middle of the ice cream, add the broken ladyfingers and run the MIX-IN program.',
      program: 'Mix-in',
    },
  ],
  tips: [
    'For an even richer, creamier texture, add 1\u00a0tbsp milk powder to the base.',
    'Stronger coffee? Add an extra ½\u00a0tsp instant coffee.',
    'Break the ladyfingers into small chunks rather than crumbs for the best texture.',
  ],
  translations: {
    nl: {
      name: 'Tiramisudroom',
      tagline: 'IJs met een vleugje koffie, mascarpone en cacao',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 300, unit: 'ml', name: 'melk', note: 'elke soort' },
            { qty: 115, unit: 'g', name: 'mascarpone', note: 'of roomkaas' },
            { qty: 65, unit: 'g', name: 'suiker' },
            { qty: 1, unit: 'tsp', name: 'vanille-extract' },
            { qty: 120, unit: 'ml', name: 'slagroom' },
            { qty: 1, unit: 'tbsp', name: 'oploskoffie', note: 'opgelost in 1 el heet water' },
            { qty: 1, unit: 'tbsp', name: 'cacaopoeder' },
          ],
        },
        {
          title: 'Mix-ins',
          items: [
            { qty: 30, unit: 'g', name: 'lange vingers', note: 'in kleine stukjes gebroken' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Klop de mascarpone met de suiker en een scheutje melk glad en klop daarna de rest van de melk, de room, de vanille, de opgeloste koffie en het cacaopoeder erdoor.',
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
          text: 'Maak met een lepel een kuiltje tot op de bodem, doe de stukjes lange vinger erin en start het programma MIX-IN.',
          program: 'Mix-in',
        },
      ],
      tips: [
        'Voor een nog vollere, romigere structuur voeg je 1\u00a0el melkpoeder toe aan de basis.',
        'Sterkere koffie? Voeg een extra ½\u00a0tl oploskoffie toe.',
        'Breek de lange vingers in kleine stukjes in plaats van kruimels voor de beste structuur.',
      ],
    },
  },
}
