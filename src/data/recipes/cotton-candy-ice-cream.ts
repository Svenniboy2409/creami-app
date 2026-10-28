import image from '../../assets/recipes/cotton-candy-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// From the "Discover a world of Ninja Creami flavours" cards, with the amounts
// shown there for a 24 oz pint, in millilitres and grams, and its photo cut
// from that card. The bits, sprinkles and pearls go in after the first spin
// rather than into the base, so they keep their colour and crunch.
export const cottonCandyIceCream: Recipe = {
  id: 'cotton-candy-ice-cream',
  origin: 'curated',
  name: 'Cotton Candy',
  tagline: 'Fluffy, sweet and nostalgic',
  image,
  flavor: 'cotton-candy',
  category: 'ice-cream',
  tags: ['egg-free', 'kid-friendly'],
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
        { qty: 100, unit: 'g', name: 'cotton candy sugar', note: 'flavoured floss sugar' },
        { qty: 50, unit: 'g', name: 'sugar' },
        { qty: 1, unit: 'tsp', name: 'vanilla extract' },
        { qty: 1, unit: 'tbsp', name: 'corn syrup', note: 'optional, for an extra silky texture' },
        { qty: 1, unit: 'pinch', name: 'salt' },
      ],
    },
    {
      title: 'Mix-ins',
      items: [
        { qty: 2, unit: 'tbsp', name: 'cotton candy bits', note: 'optional, plus extra to serve' },
        { qty: 2, unit: 'tbsp', name: 'rainbow sprinkles', note: 'optional' },
        { qty: 2, unit: 'tbsp', name: 'candy pearls', note: 'optional' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Whisk the milk, cream, cotton candy sugar, sugar, vanilla, corn syrup (if using) and a pinch of salt until the sugar has dissolved.',
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
      text: 'Use a spoon to make a hole down the middle of the ice cream, add the cotton candy bits, sprinkles and candy pearls, and run the MIX-IN program. Keep a few back for the top.',
      program: 'Mix-in',
    },
  ],
  tips: [
    'For even more cotton candy flavour, add an extra 1\u00a0tbsp cotton candy sugar.',
    'Top with extra sprinkles, cotton candy bits or candy pearls for the ultimate treat.',
    'For the pink-and-blue look, split the base in two, colour one half pink and the other blue with a few drops of food colouring, and pour them into the pint in turns.',
  ],
  translations: {
    nl: {
      name: 'Suikerspinijs',
      tagline: 'Luchtig, zoet en nostalgisch',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 360, unit: 'ml', name: 'melk', note: 'elke soort' },
            { qty: 120, unit: 'ml', name: 'slagroom' },
            { qty: 100, unit: 'g', name: 'suikerspinsuiker', note: 'gekleurde suiker met smaak, voor suikerspinnen' },
            { qty: 50, unit: 'g', name: 'suiker' },
            { qty: 1, unit: 'tsp', name: 'vanille-extract' },
            { qty: 1, unit: 'tbsp', name: 'glucosestroop', note: 'optioneel, voor een extra zijdezachte structuur' },
            { qty: 1, unit: 'pinch', name: 'zout' },
          ],
        },
        {
          title: 'Mix-ins',
          items: [
            { qty: 2, unit: 'tbsp', name: 'suikerspinstukjes', note: 'optioneel, plus extra om te serveren' },
            { qty: 2, unit: 'tbsp', name: 'regenboogsprinkels', note: 'optioneel' },
            { qty: 2, unit: 'tbsp', name: 'suikerparels', note: 'optioneel' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Klop de melk, de room, de suikerspinsuiker, de suiker, de vanille, de glucosestroop (als je die gebruikt) en een snufje zout door elkaar tot de suiker is opgelost.',
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
          text: 'Maak met een lepel een kuiltje tot op de bodem, doe de suikerspinstukjes, de sprinkels en de suikerparels erin en start het programma MIX-IN. Houd er een paar apart voor erbovenop.',
          program: 'Mix-in',
        },
      ],
      tips: [
        'Voor nog meer suikerspinsmaak voeg je 1\u00a0el extra suikerspinsuiker toe.',
        'Maak het af met extra sprinkels, suikerspinstukjes of suikerparels voor het ultieme toetje.',
        'Voor de roze-blauwe look verdeel je de basis in twee, kleur je de ene helft roze en de andere blauw met een paar druppels kleurstof en giet je ze om en om in de pint.',
      ],
    },
  },
}
