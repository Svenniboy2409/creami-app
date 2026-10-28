import image from '../../assets/recipes/mixed-berries-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// From the "Discover a world of Ninja Creami flavours" cards, with the amounts
// shown there for a 24 oz pint, in millilitres and grams, and its photo cut
// from that card. The blended berries go into the base; the loose berries are
// mix-ins for after the first spin, a few of each rather than the full cups on
// the card, which would overfill the pint.
export const mixedBerriesIceCream: Recipe = {
  id: 'mixed-berries-ice-cream',
  origin: 'curated',
  name: 'Mixed Berries',
  tagline: 'Bursting with sweet and tangy mixed berries',
  image,
  flavor: 'mixed-berry',
  category: 'ice-cream',
  tags: ['egg-free', 'gluten-free', 'fruity'],
  tastes: ['fruity', 'refreshing'],
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
        { qty: 150, unit: 'g', name: 'mixed berries', note: 'fresh or frozen' },
        { qty: 50, unit: 'g', name: 'sugar' },
        { qty: 1, unit: 'tsp', name: 'vanilla extract' },
      ],
    },
    {
      title: 'Mix-ins',
      items: [
        { name: 'strawberries', note: 'a few, diced' },
        { name: 'blueberries', note: 'a few' },
        { name: 'raspberries', note: 'a few' },
        { name: 'blackberries', note: 'a few' },
        { qty: 1, unit: 'tbsp', name: 'mixed berry swirl sauce', note: 'optional' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Whisk the milk, cream, sugar and vanilla until the sugar has dissolved. Blend the mixed berries until smooth (or leave them chunky for more texture) and stir them through until well combined.',
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
      text: 'Use a spoon to make a hole down the middle of the ice cream, add the loose berries and the swirl sauce, and run the MIX-IN program. The sauce turns into ribbons of berry.',
      program: 'Mix-in',
    },
  ],
  tips: [
    'Use ripe, sweet berries for the best flavour; frozen berries work great too.',
    'For a chunkier texture, blend the berries less.',
  ],
  translations: {
    nl: {
      name: 'Bosvruchtenijs',
      tagline: 'Boordevol zoete en frisse bosvruchten',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 360, unit: 'ml', name: 'melk', note: 'elke soort' },
            { qty: 120, unit: 'ml', name: 'slagroom' },
            { qty: 150, unit: 'g', name: 'bosvruchten', note: 'vers of diepvries' },
            { qty: 50, unit: 'g', name: 'suiker' },
            { qty: 1, unit: 'tsp', name: 'vanille-extract' },
          ],
        },
        {
          title: 'Mix-ins',
          items: [
            { name: 'aardbeien', note: 'een paar, in blokjes' },
            { name: 'blauwe bessen', note: 'een paar' },
            { name: 'frambozen', note: 'een paar' },
            { name: 'bramen', note: 'een paar' },
            { qty: 1, unit: 'tbsp', name: 'bosvruchtensaus', note: 'optioneel' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Klop de melk, de room, de suiker en de vanille door elkaar tot de suiker is opgelost. Pureer de bosvruchten glad (of laat ze grover voor meer structuur) en roer ze erdoor tot alles goed gemengd is.',
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
          text: 'Maak met een lepel een kuiltje tot op de bodem, doe de losse bessen en de saus erin en start het programma MIX-IN. De saus vormt mooie linten door het ijs.',
          program: 'Mix-in',
        },
      ],
      tips: [
        'Gebruik rijpe, zoete bessen voor de beste smaak; diepvriesbessen werken ook prima.',
        'Voor meer structuur pureer je de bessen minder fijn.',
      ],
    },
  },
}
