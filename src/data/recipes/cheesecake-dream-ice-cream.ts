import image from '../../assets/recipes/cheesecake-dream-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// From the "Discover a world of Ninja Creami flavours" cards, with the amounts
// shown there for a 24 oz pint, in millilitres and grams, and its photo cut
// from that card. The crunchy bits go in after the first spin rather than into
// the base, so they stay crunchy.
export const cheesecakeDreamIceCream: Recipe = {
  id: 'cheesecake-dream-ice-cream',
  origin: 'curated',
  name: 'Cheesecake Dream',
  tagline: 'All the flavour of classic cheesecake, by the scoop',
  image,
  flavor: 'cheesecake',
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
        { qty: 360, unit: 'ml', name: 'milk', note: 'whole, or any milk you like' },
        { qty: 75, unit: 'g', name: 'sweetened condensed milk', note: 'or a sweetener of your choice' },
        { qty: 25, unit: 'g', name: 'sugar', note: 'or to taste' },
        { qty: 1.5, unit: 'tsp', name: 'vanilla extract', note: 'or to taste' },
        { qty: 45, unit: 'g', name: 'cream cheese', note: 'softened' },
        { qty: 60, unit: 'g', name: 'sour cream', note: 'for extra tang and creaminess' },
      ],
    },
    {
      title: 'Mix-ins',
      items: [
        { qty: 3, unit: 'tbsp', name: 'graham crackers', note: 'crushed, or digestive biscuits; plus extra to serve' },
        { qty: 2, unit: 'tbsp', name: 'strawberry or raspberry sauce', note: 'plus extra to serve' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Whisk the softened cream cheese with the sugar and a splash of the milk until smooth, then whisk in the rest of the milk, the condensed milk, the sour cream and the vanilla. For an extra silky base, blend it with a stick blender and pour it through a sieve.',
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
      text: 'Use a spoon to make a hole down the middle of the ice cream, add the cracker crumbs and the berry sauce, and run the MIX-IN program. Top with extra crumbs and a little more sauce to serve.',
      program: 'Mix-in',
    },
  ],
  translations: {
    nl: {
      name: 'Cheesecake-droom',
      tagline: 'Alle smaak van klassieke cheesecake, maar dan als ijsje',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 360, unit: 'ml', name: 'melk', note: 'vol, of elke melk die je lekker vindt' },
            { qty: 75, unit: 'g', name: 'gezoete gecondenseerde melk', note: 'of een zoetmiddel naar keuze' },
            { qty: 25, unit: 'g', name: 'suiker', note: 'of naar smaak' },
            { qty: 1.5, unit: 'tsp', name: 'vanille-extract', note: 'of naar smaak' },
            { qty: 45, unit: 'g', name: 'roomkaas', note: 'op kamertemperatuur' },
            { qty: 60, unit: 'g', name: 'zure room', note: 'voor een frisse, romige toets' },
          ],
        },
        {
          title: 'Mix-ins',
          items: [
            { qty: 3, unit: 'tbsp', name: 'grahamcrackers', note: 'verkruimeld, of digestive biscuits; plus extra om te serveren' },
            { qty: 2, unit: 'tbsp', name: 'aardbeien- of frambozensaus', note: 'plus extra om te serveren' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Klop de zachte roomkaas met de suiker en een scheutje melk glad en klop daarna de rest van de melk, de gecondenseerde melk, de zure room en de vanille erdoor. Voor een extra zijdezachte basis mix je hem met een staafmixer en giet je hem door een zeef.',
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
          text: 'Maak met een lepel een kuiltje tot op de bodem, doe de koekkruimels en de bessensaus erin en start het programma MIX-IN. Strooi er bij het serveren nog wat kruimels over en schenk er wat extra saus over.',
          program: 'Mix-in',
        },
      ],
    },
  },
}
