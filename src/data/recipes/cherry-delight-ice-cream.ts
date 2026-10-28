import image from '../../assets/recipes/cherry-delight-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// From the "Discover a world of Ninja Creami flavours" cards, with the amounts
// shown there for a 24 oz pint, in millilitres and grams, and its photo cut
// from that card. The cherries blended into the base colour it pink; the
// chopped ones and the rest go in after the first spin, so they stay in pieces.
export const cherryDelightIceCream: Recipe = {
  id: 'cherry-delight-ice-cream',
  origin: 'curated',
  name: 'Cherry Delight',
  tagline: 'Sweet, juicy and oh-so-cherry',
  image,
  flavor: 'cherry',
  category: 'ice-cream',
  tags: ['egg-free', 'gluten-free', 'fruity'],
  tastes: ['sweet', 'fruity'],
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
        { qty: 150, unit: 'g', name: 'cherries', note: 'pitted and halved' },
        { qty: 65, unit: 'g', name: 'sugar' },
        { qty: 1, unit: 'tsp', name: 'vanilla extract' },
        { qty: 30, unit: 'ml', name: 'cherry juice', note: 'optional, for extra cherry flavour' },
      ],
    },
    {
      title: 'Mix-ins',
      items: [
        { qty: 75, unit: 'g', name: 'cherries', note: 'chopped, optional' },
        { qty: 2, unit: 'tbsp', name: 'cherry pie filling', note: 'optional' },
        { qty: 2, unit: 'tbsp', name: 'mini chocolate chips', note: 'optional' },
        { qty: 2, unit: 'tbsp', name: 'maraschino cherries', note: 'chopped, optional' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Blend the halved cherries with the milk until smooth, then whisk in the cream, sugar, vanilla and cherry juice until the sugar has dissolved.',
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
      text: 'Use a spoon to make a hole down the middle of the ice cream, add the chopped cherries, cherry pie filling, chocolate chips and maraschino cherries, and run the MIX-IN program.',
      program: 'Mix-in',
    },
  ],
  tips: [
    'Use ripe, sweet cherries for the best flavour; tart cherries work great too.',
    'For a ribbon of cherry, add an extra spoonful of cherry pie filling with the mix-ins.',
    'Top with chopped maraschino cherries or a drizzle of chocolate sauce for a classic treat.',
  ],
  translations: {
    nl: {
      name: 'Kersengenot',
      tagline: 'Zoet, sappig en vol kers',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 360, unit: 'ml', name: 'melk', note: 'elke soort' },
            { qty: 120, unit: 'ml', name: 'slagroom' },
            { qty: 150, unit: 'g', name: 'kersen', note: 'ontpit en gehalveerd' },
            { qty: 65, unit: 'g', name: 'suiker' },
            { qty: 1, unit: 'tsp', name: 'vanille-extract' },
            { qty: 30, unit: 'ml', name: 'kersensap', note: 'optioneel, voor extra kersensmaak' },
          ],
        },
        {
          title: 'Mix-ins',
          items: [
            { qty: 75, unit: 'g', name: 'kersen', note: 'gehakt, optioneel' },
            { qty: 2, unit: 'tbsp', name: 'kersenvulling', note: 'optioneel' },
            { qty: 2, unit: 'tbsp', name: 'mini-chocoladedruppels', note: 'optioneel' },
            { qty: 2, unit: 'tbsp', name: 'cocktailkersen', note: 'gehakt, optioneel' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Mix de gehalveerde kersen met de melk glad en klop daarna de room, de suiker, de vanille en het kersensap erdoor tot de suiker is opgelost.',
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
          text: 'Maak met een lepel een kuiltje tot op de bodem, doe de gehakte kersen, de kersenvulling, de chocoladedruppels en de cocktailkersen erin en start het programma MIX-IN.',
          program: 'Mix-in',
        },
      ],
      tips: [
        'Gebruik rijpe, zoete kersen voor de beste smaak; zure kersen zijn ook heerlijk.',
        'Voor een kersenswirl doe je er bij de mix-ins nog een extra lepel kersenvulling bij.',
        'Maak het af met gehakte cocktailkersen of wat chocoladesaus voor een klassiek toetje.',
      ],
    },
  },
}
