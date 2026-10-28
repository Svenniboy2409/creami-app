import image from '../../assets/recipes/cinnamon-dream-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// From the "Discover a world of Ninja Creami flavours" cards, with the amounts
// shown there for a 24 oz pint, in millilitres and grams, and its photo cut
// from that card. The crunchy bits go in after the first spin rather than into
// the base, so they stay crunchy.
export const cinnamonDreamIceCream: Recipe = {
  id: 'cinnamon-dream-ice-cream',
  origin: 'curated',
  name: 'Cinnamon Dream',
  tagline: 'Warm, comforting and perfectly spiced',
  image,
  flavor: 'cinnamon',
  category: 'ice-cream',
  tags: ['egg-free'],
  tastes: ['sweet', 'creamy'],
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
        { qty: 100, unit: 'g', name: 'brown sugar', note: 'light or dark' },
        { qty: 50, unit: 'g', name: 'sugar' },
        { qty: 1, unit: 'tsp', name: 'vanilla extract' },
        { qty: 1.5, unit: 'tsp', name: 'ground cinnamon' },
        { qty: 0.5, unit: 'tsp', name: 'extra cinnamon', note: 'optional' },
      ],
    },
    {
      title: 'Mix-ins',
      items: [
        { qty: 2, unit: 'tbsp', name: 'cinnamon chips', note: 'optional' },
        { qty: 2, unit: 'tbsp', name: 'graham crackers', note: 'crushed, optional; keep a few for the top' },
        { qty: 2, unit: 'tbsp', name: 'cinnamon swirl sauce', note: 'optional, for the swirl' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Whisk the milk, cream, both sugars, vanilla and cinnamon until smooth and the sugar has dissolved.',
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
      text: 'Use a spoon to make a hole down the middle of the ice cream, add the cinnamon chips, the crushed crackers and the cinnamon sauce, and run the MIX-IN program. The sauce turns into ribbons of cinnamon; top with the crackers you kept back.',
      program: 'Mix-in',
    },
  ],
  tips: [
    'For even more warmth, add a pinch of nutmeg.',
    'Let the ice cream stand for a few minutes after spinning for an extra creamy texture.',
  ],
  translations: {
    nl: {
      name: 'Kaneeldroom',
      tagline: 'Warm, troostend en precies goed gekruid',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 360, unit: 'ml', name: 'melk', note: 'elke soort' },
            { qty: 120, unit: 'ml', name: 'slagroom' },
            { qty: 100, unit: 'g', name: 'bruine suiker', note: 'licht of donker' },
            { qty: 50, unit: 'g', name: 'suiker' },
            { qty: 1, unit: 'tsp', name: 'vanille-extract' },
            { qty: 1.5, unit: 'tsp', name: 'kaneel' },
            { qty: 0.5, unit: 'tsp', name: 'extra kaneel', note: 'optioneel' },
          ],
        },
        {
          title: 'Mix-ins',
          items: [
            { qty: 2, unit: 'tbsp', name: 'kaneelchips', note: 'optioneel' },
            { qty: 2, unit: 'tbsp', name: 'grahamcrackers', note: 'verkruimeld, optioneel; houd er een paar apart voor erbovenop' },
            { qty: 2, unit: 'tbsp', name: 'kaneelsaus', note: 'optioneel, voor de swirl' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Klop de melk, de room, beide suikers, de vanille en de kaneel door elkaar tot alles glad is en de suiker is opgelost.',
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
          text: 'Maak met een lepel een kuiltje tot op de bodem, doe de kaneelchips, de koekkruimels en de kaneelsaus erin en start het programma MIX-IN. De saus vormt mooie kaneellinten; strooi de achtergehouden kruimels erover.',
          program: 'Mix-in',
        },
      ],
      tips: [
        'Voor nog meer warmte voeg je een snufje nootmuskaat toe.',
        'Laat het ijs na het draaien een paar minuten staan voor een extra romige structuur.',
      ],
    },
  },
}
