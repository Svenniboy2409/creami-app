import image from '../../assets/recipes/strawberry-sorbet.jpg'
import type { Recipe } from '../../types/recipe'

// From the "Discover a world of Ninja Creami flavours" cards, with the amounts
// shown there for a 24 oz pint, in millilitres and grams, and its photo cut
// from that card. The strawberry drops go in after the first spin rather than
// into the base, so they stay as pockets of fruit.
export const strawberrySorbet: Recipe = {
  id: 'strawberry-sorbet',
  origin: 'curated',
  name: 'Strawberry Sorbet',
  tagline: 'Bright, fruity and refreshingly smooth',
  image,
  flavor: 'strawberry',
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
        { qty: 360, unit: 'ml', name: 'strawberry puree', note: 'fresh or frozen' },
        { qty: 60, unit: 'ml', name: 'agave syrup', note: 'or honey' },
        { qty: 15, unit: 'ml', name: 'lemon juice', note: 'fresh' },
        { qty: 25, unit: 'g', name: 'sugar', note: 'or to taste' },
        { qty: 0.5, unit: 'tsp', name: 'vanilla extract' },
        { qty: 1, unit: 'tbsp', name: 'honey', note: 'optional, for extra sweetness' },
        { qty: 1, unit: 'pinch', name: 'salt' },
      ],
    },
    {
      title: 'Mix-ins',
      items: [
        { qty: 4, unit: 'tbsp', name: 'strawberry drops', note: 'small strawberry candies' },
        { qty: 2, unit: 'tbsp', name: 'freeze-dried strawberries', note: 'optional' },
        { qty: 2, unit: 'tbsp', name: 'shredded coconut', note: 'optional' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Whisk the strawberry puree, agave syrup, lemon juice, sugar, vanilla, honey (if using) and a pinch of salt until the sugar has dissolved. For an extra silky base, blend it with a stick blender and pour it through a sieve.',
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
    {
      title: 'Add the mix-ins',
      text: 'Use a spoon to make a hole down the middle of the ice cream, add the strawberry drops, the freeze-dried strawberries and the coconut, and run the MIX-IN program. Keep a few drops back to swirl in just before serving.',
      program: 'Mix-in',
    },
  ],
  tips: [
    'For a more intense flavour, add extra strawberry puree or a few more freeze-dried strawberries.',
  ],
  translations: {
    nl: {
      name: 'Aardbeiensorbet',
      tagline: 'Fris, fruitig en heerlijk zacht',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 360, unit: 'ml', name: 'aardbeienpuree', note: 'vers of diepvries' },
            { qty: 60, unit: 'ml', name: 'agavesiroop', note: 'of honing' },
            { qty: 15, unit: 'ml', name: 'citroensap', note: 'vers' },
            { qty: 25, unit: 'g', name: 'suiker', note: 'of naar smaak' },
            { qty: 0.5, unit: 'tsp', name: 'vanille-extract' },
            { qty: 1, unit: 'tbsp', name: 'honing', note: 'optioneel, voor extra zoetheid' },
            { qty: 1, unit: 'pinch', name: 'zout' },
          ],
        },
        {
          title: 'Mix-ins',
          items: [
            { qty: 4, unit: 'tbsp', name: 'aardbeiensnoepjes', note: 'kleine aardbeiensnoepjes, zoals op de kaart' },
            { qty: 2, unit: 'tbsp', name: 'gevriesdroogde aardbeien', note: 'optioneel' },
            { qty: 2, unit: 'tbsp', name: 'kokosrasp', note: 'optioneel' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Klop de aardbeienpuree, de agavesiroop, het citroensap, de suiker, de vanille, de honing (als je die gebruikt) en een snufje zout door elkaar tot de suiker is opgelost. Voor een extra zijdezachte basis mix je hem met een staafmixer en giet je hem door een zeef.',
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
        {
          title: 'Mix-ins toevoegen',
          text: 'Maak met een lepel een kuiltje tot op de bodem, doe de aardbeiensnoepjes, de gevriesdroogde aardbeien en de kokos erin en start het programma MIX-IN. Houd een paar snoepjes apart om er vlak voor het serveren doorheen te roeren.',
          program: 'Mix-in',
        },
      ],
      tips: [
        'Voor een intensere smaak voeg je extra aardbeienpuree of wat meer gevriesdroogde aardbeien toe.',
      ],
    },
  },
}
