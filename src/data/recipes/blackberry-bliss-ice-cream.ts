import image from '../../assets/recipes/blackberry-bliss-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// From the "Discover a world of Ninja Creami flavours" cards, with the amounts
// shown there for a 24 oz pint, in millilitres and grams, and its photo cut
// from that card. The mix-ins go in after the first spin rather than into the
// base, so they stay in pieces.
export const blackberryBlissIceCream: Recipe = {
  id: 'blackberry-bliss-ice-cream',
  origin: 'curated',
  name: 'Blackberry Bliss',
  tagline: 'Sweet and tangy blackberry, with a smooth, creamy finish',
  image,
  flavor: 'blackberry',
  category: 'ice-cream',
  tags: ['egg-free', 'gluten-free', 'fruity'],
  tastes: ['fruity', 'creamy'],
  models: ['original', 'breeze', 'deluxe', 'swirl'],
  program: 'Ice Cream',
  basePint: 24,
  servings: '4–6',
  difficulty: 'easy',
  times: { prepMin: 15, freezeHours: 24 },
  ingredients: [
    {
      title: 'Base',
      items: [
        { qty: 360, unit: 'ml', name: 'milk', note: 'any kind' },
        { qty: 120, unit: 'ml', name: 'heavy cream' },
        { qty: 65, unit: 'g', name: 'sugar' },
        { qty: 1, unit: 'tsp', name: 'vanilla extract' },
        { qty: 30, unit: 'g', name: 'milk powder', note: 'optional, for creaminess' },
        { qty: 60, unit: 'g', name: 'blackberry puree', note: 'or to taste; blended and sieved' },
        { qty: 1, unit: 'tsp', name: 'lemon juice', note: 'optional, for brightness' },
      ],
    },
    {
      title: 'Mix-ins',
      items: [
        { qty: 35, unit: 'g', name: 'blackberries', note: 'in pieces, optional' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Whisk the milk, cream, sugar, milk powder, vanilla and lemon juice (if using) until smooth, then stir in the blackberry puree.',
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
      text: 'Use a spoon to make a hole down the middle of the ice cream, add the blackberry pieces and run the MIX-IN program.',
      program: 'Mix-in',
    },
  ],
  tips: [
    'Don’t skip the milk powder: it makes the texture richer and smoother.',
    'Use good blackberries, or puree them fresh, for the best flavour.',
    'A splash of lemon juice brings out the blackberry and balances the sweetness.',
  ],
  translations: {
    nl: {
      name: 'Bramengeluk',
      tagline: 'Zoet en fris van braam, met een zachte, romige afdronk',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 360, unit: 'ml', name: 'melk', note: 'elke soort' },
            { qty: 120, unit: 'ml', name: 'slagroom' },
            { qty: 65, unit: 'g', name: 'suiker' },
            { qty: 1, unit: 'tsp', name: 'vanille-extract' },
            { qty: 30, unit: 'g', name: 'melkpoeder', note: 'optioneel, voor romigheid' },
            { qty: 60, unit: 'g', name: 'bramenpuree', note: 'of naar smaak; gepureerd en gezeefd' },
            { qty: 1, unit: 'tsp', name: 'citroensap', note: 'optioneel, voor frisheid' },
          ],
        },
        {
          title: 'Mix-ins',
          items: [
            { qty: 35, unit: 'g', name: 'bramen', note: 'in stukjes, optioneel' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Klop de melk, de room, de suiker, het melkpoeder, de vanille en het citroensap (als je dat gebruikt) door elkaar tot alles glad is en roer de bramenpuree erdoor.',
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
          text: 'Maak met een lepel een kuiltje tot op de bodem, doe de stukjes braam erin en start het programma MIX-IN.',
          program: 'Mix-in',
        },
      ],
      tips: [
        'Sla het melkpoeder niet over: het maakt de structuur voller en gladder.',
        'Gebruik mooie bramen, of pureer ze vers, voor de beste smaak.',
        'Een scheutje citroensap laat de braam beter uitkomen en houdt de zoetheid in balans.',
      ],
    },
  },
}
