import image from '../../assets/recipes/chocolate-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// From the Ninja Creami flavour list, in millilitres and grams, with its photo
// cut from that list. The flavour colours the illustration that replaces the
// photo when "Illustrations instead of photos" is on in Settings.
export const chocolateIceCream: Recipe = {
  id: 'chocolate-ice-cream',
  origin: 'curated',
  name: 'Chocolate Ice Cream',
  tagline: 'Rich, deep and properly chocolatey',
  image,
  flavor: 'chocolate',
  category: 'ice-cream',
  tags: ['egg-free', 'gluten-free', 'chocolate'],
  models: ['original', 'breeze', 'deluxe', 'swirl'],
  program: 'Ice Cream',
  basePint: 16,
  servings: '3–4',
  difficulty: 'easy',
  times: { prepMin: 5, freezeHours: 24 },
  ingredients: [
    {
      items: [
        { qty: 240, unit: 'ml', name: 'whole milk' },
        { qty: 120, unit: 'ml', name: 'heavy cream' },
        { qty: 2, unit: 'tbsp', name: 'unsweetened cocoa powder' },
        { qty: 50, unit: 'g', name: 'sugar' },
        { qty: 1, unit: 'tsp', name: 'vanilla extract' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Whisk the cocoa powder and sugar together first, so the cocoa doesn’t clump. Then whisk in the milk, cream and vanilla until smooth and the sugar has dissolved.',
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
  ],
  translations: {
    nl: {
      name: 'Chocolade-ijs',
      tagline: 'Vol, diep en echt chocolade',
      ingredients: [
        {
          items: [
            { qty: 240, unit: 'ml', name: 'volle melk' },
            { qty: 120, unit: 'ml', name: 'slagroom' },
            { qty: 2, unit: 'tbsp', name: 'cacaopoeder' },
            { qty: 50, unit: 'g', name: 'suiker' },
            { qty: 1, unit: 'tsp', name: 'vanille-extract' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Klop eerst het cacaopoeder en de suiker los, zodat de cacao niet klontert. Klop daarna de melk, de room en de vanille erdoor tot alles glad is en de suiker is opgelost.',
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
      ],
    },
  },
}
