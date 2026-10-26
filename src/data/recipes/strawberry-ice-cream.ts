import type { Recipe } from '../../types/recipe'

// From the Ninja Creami flavour list, in millilitres and grams. No photo yet:
// the illustration is drawn in the flavour's own colours.
export const strawberryIceCream: Recipe = {
  id: 'strawberry-ice-cream',
  origin: 'curated',
  name: 'Strawberry Ice Cream',
  tagline: 'Sweet strawberries in every spoonful',
  flavor: 'strawberry',
  category: 'ice-cream',
  tags: ['egg-free', 'gluten-free', 'fruity', 'kid-friendly'],
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
        { qty: 1, unit: 'tsp', name: 'vanilla extract' },
        { qty: 120, unit: 'g', name: 'strawberry puree', note: 'about 150 g strawberries, blended' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Whisk the milk, cream, sugar and vanilla until the sugar has dissolved, then stir in the strawberry puree.',
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
  tips: ['Always freeze the base for a full 24 hours.', 'Crumbly after the first spin? Use RE-SPIN.'],
  translations: {
    nl: {
      name: 'Aardbeienijs',
      tagline: 'Zoete aardbeien in elke hap',
      ingredients: [
        {
          items: [
            { qty: 180, unit: 'ml', name: 'volle melk' },
            { qty: 120, unit: 'ml', name: 'slagroom' },
            { qty: 50, unit: 'g', name: 'suiker' },
            { qty: 1, unit: 'tsp', name: 'vanille-extract' },
            { qty: 120, unit: 'g', name: 'aardbeienpuree', note: 'ca. 150 g aardbeien, gepureerd' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Klop de melk, de room, de suiker en de vanille door elkaar tot de suiker is opgelost en roer de aardbeienpuree erdoor.',
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
      tips: ['Vries de basis altijd een volle 24 uur in.', 'Kruimelig na de eerste keer draaien? Gebruik RE-SPIN.'],
    },
  },
}
