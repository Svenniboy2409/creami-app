import image from '../../assets/recipes/chocolate-base.jpg'
import type { Recipe } from '../../types/recipe'

// One of the five Ninja Creami bases, in millilitres and grams, with its photo
// cut from the bases list. A plain start to flavour your own way: its ideas
// link to the app's recipes for them where there is one.
export const chocolateBase: Recipe = {
  id: 'chocolate-base',
  origin: 'curated',
  name: 'Chocolate Base',
  tagline: 'Rich & indulgent',
  image,
  flavor: 'chocolate',
  category: 'base',
  tags: ['egg-free', 'gluten-free', 'chocolate'],
  models: ['original', 'breeze', 'deluxe', 'swirl'],
  program: 'Ice Cream',
  basePint: 16,
  servings: '3–4',
  difficulty: 'easy',
  times: { prepMin: 5, freezeHours: 24 },
  ingredients: [
    {
      title: 'Base',
      items: [
        { qty: 240, unit: 'ml', name: 'whole milk' },
        { qty: 240, unit: 'ml', name: 'heavy cream' },
        { qty: 65, unit: 'g', name: 'sugar' },
        { qty: 2, unit: 'tbsp', name: 'unsweetened cocoa powder' },
        { qty: 1, unit: 'pinch', name: 'salt' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Whisk the cocoa powder, sugar and salt together first, so the cocoa doesn’t clump. Then whisk in the milk and cream until smooth.',
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
      title: 'Flavour it (optional)',
      text: 'Make it your own: make a hole down the middle, add your mix-ins and run the MIX-IN program.',
      program: 'Mix-in',
    },
  ],
  ideas: [{ name: 'Chocolate Fudge' }, { name: 'Brownie Batter' }, { name: 'Mint Chocolate Chip', recipeId: 'mint-chocolate-chip-ice-cream' }],
  translations: {
    nl: {
      name: 'Chocoladebasis',
      tagline: 'Vol & verwennend',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 240, unit: 'ml', name: 'volle melk' },
            { qty: 240, unit: 'ml', name: 'slagroom' },
            { qty: 65, unit: 'g', name: 'suiker' },
            { qty: 2, unit: 'tbsp', name: 'cacaopoeder' },
            { qty: 1, unit: 'pinch', name: 'zout' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Klop eerst het cacaopoeder, de suiker en het zout los, zodat de cacao niet klontert. Klop daarna de melk en de room erdoor tot alles glad is.',
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
          title: 'Op smaak brengen (optioneel)',
          text: 'Maak hem helemaal van jou: maak een kuiltje tot op de bodem, doe je mix-ins erin en start het programma MIX-IN.',
          program: 'Mix-in',
        },
      ],
      ideas: [{ name: 'Chocoladefudge' }, { name: 'Browniebeslag' }, { name: 'Munt met chocoladestukjes', recipeId: 'mint-chocolate-chip-ice-cream' }],
    },
  },
}
