import image from '../../assets/recipes/mango-sorbet.jpg'
import type { Recipe } from '../../types/recipe'

// From the "Discover a world of Ninja Creami flavours" cards, with the amounts
// shown there for a 24 oz pint, in millilitres and grams, and its photo cut
// from that card. It uses the SORBET program, made for a base of fruit and
// water; the card says ICE CREAM.
export const mangoSorbet: Recipe = {
  id: 'mango-sorbet',
  origin: 'curated',
  name: 'Mango Sorbet',
  tagline: 'Smooth, tropical and refreshing',
  image,
  flavor: 'mango',
  category: 'sorbet',
  tags: ['dairy-free', 'egg-free', 'gluten-free', 'fruity'],
  models: ['original', 'breeze', 'deluxe', 'swirl'],
  program: 'Sorbet',
  basePint: 24,
  servings: '4–6',
  difficulty: 'easy',
  times: { prepMin: 10, freezeHours: 24 },
  ingredients: [
    {
      title: 'Base',
      items: [
        { qty: 360, unit: 'ml', name: 'water' },
        { qty: 330, unit: 'g', name: 'frozen mango chunks' },
        { qty: 100, unit: 'g', name: 'sugar' },
        { qty: 30, unit: 'ml', name: 'lime juice', note: 'fresh, about 1 lime' },
        { qty: 0.5, unit: 'tsp', name: 'vanilla extract', note: 'optional' },
        { qty: 1, unit: 'tbsp', name: 'honey', note: 'optional, for extra smoothness' },
        { qty: 1, unit: 'pinch', name: 'salt' },
        { qty: 1, unit: 'tbsp', name: 'glucose powder or corn syrup', note: 'optional, for a softer texture' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Whisk the water, sugar, lime juice, vanilla and salt until the sugar has dissolved. Add the mango, plus the honey and glucose if you use them, and blend until completely smooth with a stick blender or in a blender.',
    },
    {
      title: 'Freeze',
      text: 'Pour the base into an empty CREAMi pint, no higher than the MAX FILL line. Put the lid on and freeze on a level surface for 24 hours.',
    },
    {
      title: 'Process',
      text: 'Take the lid off, place the pint in the outer bowl and run the SORBET program.',
      program: 'Sorbet',
    },
    {
      title: 'Re-spin if needed',
      text: 'Looks crumbly? Add a tablespoon of water and run RE-SPIN until it is smooth and creamy.',
      program: 'Re-spin',
    },
  ],
  tips: [
    'The riper and sweeter the mango, the better the sorbet; Alphonso mangoes are perfect.',
    'For a brighter, fresher sorbet, add a little extra lime juice.',
    'This makes a little more than a pint holds: fill to the MAX FILL line and blend the rest into a smoothie.',
  ],
  translations: {
    nl: {
      name: 'Mangosorbet',
      tagline: 'Zacht, tropisch en verfrissend',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 360, unit: 'ml', name: 'water' },
            { qty: 330, unit: 'g', name: 'diepvriesmango in stukjes' },
            { qty: 100, unit: 'g', name: 'suiker' },
            { qty: 30, unit: 'ml', name: 'limoensap', note: 'vers, ca. 1 limoen' },
            { qty: 0.5, unit: 'tsp', name: 'vanille-extract', note: 'optioneel' },
            { qty: 1, unit: 'tbsp', name: 'honing', note: 'optioneel, voor extra zachtheid' },
            { qty: 1, unit: 'pinch', name: 'zout' },
            { qty: 1, unit: 'tbsp', name: 'glucosepoeder of glucosestroop', note: 'optioneel, voor een zachtere structuur' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Klop het water, de suiker, het limoensap, de vanille en het zout door elkaar tot de suiker is opgelost. Voeg de mango toe, en de honing en glucose als je die gebruikt, en mix alles helemaal glad met een staafmixer of in een blender.',
        },
        {
          title: 'Invriezen',
          text: 'Giet de basis in een lege CREAMi-pint, niet hoger dan de MAX FILL-lijn. Doe het deksel erop en vries 24 uur in op een vlakke ondergrond.',
        },
        {
          title: 'Draaien',
          text: 'Haal het deksel eraf, zet de pint in de buitenkom en start het programma SORBET.',
          program: 'Sorbet',
        },
        {
          title: 'Zo nodig re-spin',
          text: 'Ziet het er kruimelig uit? Voeg een eetlepel water toe en draai RE-SPIN tot het glad en romig is.',
          program: 'Re-spin',
        },
      ],
      tips: [
        'Hoe rijper en zoeter de mango, hoe lekkerder de sorbet; Alphonso-mango’s zijn perfect.',
        'Voor een frissere sorbet voeg je wat extra limoensap toe.',
        'Dit is iets meer dan er in een pint past: vul tot de MAX FILL-lijn en mix de rest door een smoothie.',
      ],
    },
  },
}
