import image from '../../assets/recipes/chocolate-hazelnut-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// From the Ninja Creami flavour list, in millilitres and grams, with its photo
// cut from that list. The flavour colours the illustration that replaces the
// photo when "Illustrations instead of photos" is on in Settings.
export const chocolateHazelnutIceCream: Recipe = {
  id: 'chocolate-hazelnut-ice-cream',
  origin: 'curated',
  name: 'Chocolate Hazelnut',
  tagline: 'Your favourite spread, by the scoop',
  image,
  flavor: 'chocolate-hazelnut',
  category: 'ice-cream',
  tags: ['egg-free', 'nutty', 'chocolate'],
  models: ['original', 'breeze', 'deluxe', 'swirl'],
  program: 'Ice Cream',
  basePint: 16,
  servings: '3–4',
  difficulty: 'easy',
  times: { prepMin: 5, freezeHours: 24 },
  ingredients: [
    {
      items: [
        { qty: 180, unit: 'ml', name: 'whole milk' },
        { qty: 120, unit: 'ml', name: 'heavy cream' },
        { qty: 50, unit: 'g', name: 'sugar' },
        { qty: 2, unit: 'tbsp', name: 'chocolate hazelnut spread', note: 'e.g. Nutella' },
        { qty: 1, unit: 'tsp', name: 'vanilla extract' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Whisk the chocolate hazelnut spread with the sugar and a splash of the milk until smooth, then whisk in the rest of the milk, the cream and the vanilla.',
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
      name: 'Chocolade-hazelnootijs',
      tagline: 'Je favoriete pasta, maar dan als ijsje',
      ingredients: [
        {
          items: [
            { qty: 180, unit: 'ml', name: 'volle melk' },
            { qty: 120, unit: 'ml', name: 'slagroom' },
            { qty: 50, unit: 'g', name: 'suiker' },
            { qty: 2, unit: 'tbsp', name: 'chocolade-hazelnootpasta', note: 'bijv. Nutella' },
            { qty: 1, unit: 'tsp', name: 'vanille-extract' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Klop de chocolade-hazelnootpasta met de suiker en een scheutje melk glad en klop daarna de rest van de melk, de room en de vanille erdoor.',
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
