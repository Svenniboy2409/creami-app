import image from '../../assets/recipes/brownie-bliss-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// From the "Discover a world of Ninja Creami flavours" cards, with the amounts
// shown there for a 24 oz pint, in millilitres and grams, and its photo cut
// from that card. Not the Brownie Blast: this one has a richer base with
// chocolate sauce and condensed milk. The brownie goes in after the first spin,
// so it stays in pieces.
export const brownieBlissIceCream: Recipe = {
  id: 'brownie-bliss-ice-cream',
  origin: 'curated',
  name: 'Brownie Bliss',
  tagline: 'Fudgy, chocolatey and packed with brownie',
  image,
  flavor: 'brownie',
  category: 'ice-cream',
  tags: ['chocolate'],
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
        { qty: 60, unit: 'ml', name: 'chocolate sauce' },
        { qty: 75, unit: 'g', name: 'sweetened condensed milk', note: 'or a sweetener of your choice' },
        { qty: 25, unit: 'g', name: 'sugar', note: 'or to taste' },
        { qty: 0.5, unit: 'tsp', name: 'vanilla extract' },
        { qty: 2, unit: 'tbsp', name: 'unsweetened cocoa powder' },
        { qty: 1, unit: 'pinch', name: 'sea salt', note: 'or to taste' },
      ],
    },
    {
      title: 'Mix-ins',
      items: [
        { qty: 60, unit: 'g', name: 'brownies', note: 'in chunks, plus extra to serve' },
        { qty: 2, unit: 'tbsp', name: 'chocolate chips', note: 'optional' },
        { qty: 2, unit: 'tbsp', name: 'fudge sauce', note: 'optional, for the swirl' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Whisk the cocoa powder, sugar and sea salt together first, so the cocoa doesn’t clump. Then whisk in the milk, chocolate sauce, condensed milk and vanilla until smooth. For an extra silky base, blend it with a stick blender and pour it through a sieve.',
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
      text: 'Use a spoon to make a hole down the middle of the ice cream, add the brownie chunks and chocolate chips and run the MIX-IN program. Top with extra brownie and a drizzle of fudge sauce to serve.',
      program: 'Mix-in',
    },
  ],
  tips: [
    'Use fudgy brownies rather than cakey ones for the best texture and flavour.',
    'For a ribbon of fudge, add a swirl of fudge sauce with the mix-ins.',
  ],
  translations: {
    nl: {
      name: 'Browniegeluk',
      tagline: 'Smeuïg, vol chocolade en boordevol brownie',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 360, unit: 'ml', name: 'melk', note: 'of elke melk die je lekker vindt' },
            { qty: 60, unit: 'ml', name: 'chocoladesaus' },
            { qty: 75, unit: 'g', name: 'gezoete gecondenseerde melk', note: 'of een zoetmiddel naar keuze' },
            { qty: 25, unit: 'g', name: 'suiker', note: 'of naar smaak' },
            { qty: 0.5, unit: 'tsp', name: 'vanille-extract' },
            { qty: 2, unit: 'tbsp', name: 'cacaopoeder' },
            { qty: 1, unit: 'pinch', name: 'zeezout', note: 'of naar smaak' },
          ],
        },
        {
          title: 'Mix-ins',
          items: [
            { qty: 60, unit: 'g', name: 'brownies', note: 'in stukjes, plus extra om te serveren' },
            { qty: 2, unit: 'tbsp', name: 'chocoladedruppels', note: 'optioneel' },
            { qty: 2, unit: 'tbsp', name: 'fudgesaus', note: 'optioneel, voor de swirl' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Klop eerst het cacaopoeder, de suiker en het zeezout los, zodat de cacao niet klontert. Klop daarna de melk, de chocoladesaus, de gecondenseerde melk en de vanille erdoor tot alles glad is. Voor een extra zijdezachte basis mix je hem met een staafmixer en giet je hem door een zeef.',
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
          text: 'Maak met een lepel een kuiltje tot op de bodem, doe de stukjes brownie en de chocoladedruppels erin en start het programma MIX-IN. Maak het bij het serveren af met extra brownie en wat fudgesaus.',
          program: 'Mix-in',
        },
      ],
      tips: [
        'Gebruik smeuïge brownies, geen cakeachtige, voor de beste structuur en smaak.',
        'Voor fudgelinten door het ijs doe je er bij de mix-ins een swirl fudgesaus bij.',
      ],
    },
  },
}
