import image from '../../assets/recipes/pineapple-sorbet.jpg'
import type { Recipe } from '../../types/recipe'

// From the "Discover a world of Ninja Creami flavours" cards, with the amounts
// shown there for a 24 oz pint, in millilitres and grams, and its photo cut
// from that card. The pineapple bits go in after the first spin.
export const pineappleSorbet: Recipe = {
  id: 'pineapple-sorbet',
  origin: 'curated',
  name: 'Pineapple Sorbet',
  tagline: 'Bright, tropical and refreshingly smooth',
  image,
  flavor: 'pineapple',
  category: 'sorbet',
  tags: ['dairy-free', 'vegan', 'egg-free', 'gluten-free', 'fruity'],
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
        { qty: 360, unit: 'ml', name: 'pineapple juice', note: '100% juice' },
        { qty: 165, unit: 'g', name: 'pineapple chunks', note: 'frozen' },
        { qty: 60, unit: 'ml', name: 'agave syrup', note: 'or honey' },
        { qty: 1, unit: 'tbsp', name: 'coconut cream', note: 'optional' },
        { qty: 0.5, unit: 'tsp', name: 'vanilla extract' },
        { qty: 1, unit: 'tbsp', name: 'lemon juice', note: 'fresh' },
        { qty: 1, unit: 'tsp', name: 'lime zest', note: 'optional' },
        { qty: 1, unit: 'pinch', name: 'salt' },
      ],
    },
    {
      title: 'Mix-ins',
      items: [
        { qty: 2, unit: 'tbsp', name: 'pineapple', note: 'in small bits, optional' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Whisk the pineapple juice, agave syrup, coconut cream (if using), vanilla, lemon juice, lime zest and a pinch of salt together. Add the frozen pineapple and blend with a stick blender or in a blender until smooth.',
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
      text: 'Looks crumbly? Add a tablespoon of pineapple juice and run RE-SPIN until it is smooth and creamy.',
      program: 'Re-spin',
    },
    {
      title: 'Add the mix-ins',
      text: 'Use a spoon to make a hole down the middle of the ice cream, add the pineapple bits and run the MIX-IN program.',
      program: 'Mix-in',
    },
  ],
  tips: [
    'Use extra cold juice and a ripe pineapple for the best natural sweetness.',
    'The coconut cream makes the sorbet smoother and a little richer.',
  ],
  translations: {
    nl: {
      name: 'Ananassorbet',
      tagline: 'Fris, tropisch en heerlijk zacht',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 360, unit: 'ml', name: 'ananassap', note: '100% sap' },
            { qty: 165, unit: 'g', name: 'ananasstukjes', note: 'diepvries' },
            { qty: 60, unit: 'ml', name: 'agavesiroop', note: 'of honing' },
            { qty: 1, unit: 'tbsp', name: 'kokosroom', note: 'optioneel' },
            { qty: 0.5, unit: 'tsp', name: 'vanille-extract' },
            { qty: 1, unit: 'tbsp', name: 'citroensap', note: 'vers' },
            { qty: 1, unit: 'tsp', name: 'limoenrasp', note: 'optioneel' },
            { qty: 1, unit: 'pinch', name: 'zout' },
          ],
        },
        {
          title: 'Mix-ins',
          items: [
            { qty: 2, unit: 'tbsp', name: 'ananas', note: 'in kleine stukjes, optioneel' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Klop het ananassap, de agavesiroop, de kokosroom (als je die gebruikt), de vanille, het citroensap, de limoenrasp en een snufje zout door elkaar. Voeg de diepvriesananas toe en mix alles glad met een staafmixer of in een blender.',
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
          text: 'Ziet het er kruimelig uit? Voeg een eetlepel ananassap toe en draai RE-SPIN tot het glad en romig is.',
          program: 'Re-spin',
        },
        {
          title: 'Mix-ins toevoegen',
          text: 'Maak met een lepel een kuiltje tot op de bodem, doe de stukjes ananas erin en start het programma MIX-IN.',
          program: 'Mix-in',
        },
      ],
      tips: [
        'Gebruik extra koud sap en een rijpe ananas voor de beste natuurlijke zoetheid.',
        'De kokosroom maakt de sorbet zachter en iets voller.',
      ],
    },
  },
}
