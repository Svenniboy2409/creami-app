import image from '../../assets/recipes/pistachio-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// From the "Discover a world of Ninja Creami flavours" cards, with the amounts
// shown there for a 24 oz pint, in millilitres and grams, and its photo cut
// from that card. The crunchy bits go in after the first spin rather than into
// the base, so they stay crunchy.
export const pistachioIceCream: Recipe = {
  id: 'pistachio-ice-cream',
  origin: 'curated',
  name: 'Pistachio Ice Cream',
  tagline: 'Nutty, creamy and naturally green',
  image,
  flavor: 'pistachio',
  category: 'ice-cream',
  tags: ['egg-free', 'gluten-free', 'nutty'],
  tastes: ['creamy', 'nutty'],
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
        { qty: 135, unit: 'g', name: 'sugar' },
        { qty: 1, unit: 'tsp', name: 'vanilla extract' },
        { qty: 125, unit: 'g', name: 'pistachio paste', note: '100% pistachios, no added sugar' },
        { qty: 2, unit: 'tbsp', name: 'milk powder', note: 'optional, for extra creaminess' },
        { qty: 1, unit: 'pinch', name: 'salt' },
      ],
    },
    {
      title: 'Mix-ins',
      items: [
        { qty: 30, unit: 'g', name: 'pistachios', note: 'finely chopped' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Whisk the milk, cream, sugar, vanilla, milk powder and salt until the sugar has dissolved. Add the pistachio paste and stir until it is fully mixed in and the base is evenly green.',
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
      text: 'Use a spoon to make a hole down the middle of the ice cream, add the chopped pistachios and run the MIX-IN program.',
      program: 'Mix-in',
    },
  ],
  tips: [
    'Don’t skip the milk powder: it makes a big difference to the texture.',
    'Use 100% pistachio paste for the best flavour and a natural green colour.',
  ],
  translations: {
    nl: {
      name: 'Pistache-ijs',
      tagline: 'Nootachtig, romig en van nature groen',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 360, unit: 'ml', name: 'melk', note: 'elke soort' },
            { qty: 120, unit: 'ml', name: 'slagroom' },
            { qty: 135, unit: 'g', name: 'suiker' },
            { qty: 1, unit: 'tsp', name: 'vanille-extract' },
            { qty: 125, unit: 'g', name: 'pistachepasta', note: '100% pistache, zonder toegevoegde suiker' },
            { qty: 2, unit: 'tbsp', name: 'melkpoeder', note: 'optioneel, voor extra romigheid' },
            { qty: 1, unit: 'pinch', name: 'zout' },
          ],
        },
        {
          title: 'Mix-ins',
          items: [
            { qty: 30, unit: 'g', name: 'pistachenoten', note: 'fijngehakt' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Klop de melk, de room, de suiker, de vanille, het melkpoeder en het zout door elkaar tot de suiker is opgelost. Voeg de pistachepasta toe en roer tot hij helemaal is opgenomen en de basis egaal groen is.',
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
          text: 'Maak met een lepel een kuiltje tot op de bodem, doe de gehakte pistachenoten erin en start het programma MIX-IN.',
          program: 'Mix-in',
        },
      ],
      tips: [
        'Sla het melkpoeder niet over: het maakt een groot verschil voor de structuur.',
        'Gebruik 100% pistachepasta voor de beste smaak en een natuurlijke groene kleur.',
      ],
    },
  },
}
