import image from '../../assets/recipes/creamy-strawberry-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// From the "Discover a world of Ninja Creami flavours" cards, with the amounts
// shown there for a 24 oz pint, in millilitres and grams, and its photo cut
// from that card. The card is called Strawberry, like the Strawberry Ice Cream
// from the flavour list; this creamier one, with milk powder and the fruit in
// the base, has its own name so the two are told apart.
export const creamyStrawberryIceCream: Recipe = {
  id: 'creamy-strawberry-ice-cream',
  origin: 'curated',
  name: 'Creamy Strawberry',
  tagline: 'Sweet and creamy, with real fruit flavour',
  image,
  flavor: 'strawberry',
  category: 'ice-cream',
  tags: ['egg-free', 'gluten-free', 'fruity', 'kid-friendly'],
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
        { qty: 150, unit: 'g', name: 'fresh strawberries', note: 'chopped' },
        { qty: 100, unit: 'g', name: 'sugar' },
        { qty: 1, unit: 'tsp', name: 'vanilla extract' },
        { qty: 60, unit: 'g', name: 'strawberry puree', note: 'blend some extra strawberries' },
        { qty: 2, unit: 'tbsp', name: 'milk powder', note: 'optional, for extra creaminess' },
        { qty: 0.5, unit: 'tsp', name: 'lemon juice', note: 'brightens the flavour' },
        { qty: 1, unit: 'pinch', name: 'salt' },
      ],
    },
    {
      title: 'Mix-ins',
      items: [
        { name: 'fresh strawberries', note: 'a few, chopped, optional' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Whisk the milk, cream, sugar, vanilla, lemon juice, milk powder and a pinch of salt until the sugar has dissolved. Stir in the chopped strawberries and the strawberry puree.',
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
      text: 'Use a spoon to make a hole down the middle of the ice cream, add a few extra chopped strawberries and run the MIX-IN program.',
      program: 'Mix-in',
    },
  ],
  tips: [
    'Add the milk powder: it makes the texture thicker and richer.',
    'Use ripe, sweet strawberries for the best natural flavour and colour.',
    'Don’t skip the lemon juice: it makes the strawberry flavour pop.',
  ],
  translations: {
    nl: {
      name: 'Romig aardbeienijs',
      tagline: 'Zoet en romig, met de smaak van echt fruit',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 360, unit: 'ml', name: 'melk', note: 'elke soort' },
            { qty: 120, unit: 'ml', name: 'slagroom' },
            { qty: 150, unit: 'g', name: 'verse aardbeien', note: 'in stukjes' },
            { qty: 100, unit: 'g', name: 'suiker' },
            { qty: 1, unit: 'tsp', name: 'vanille-extract' },
            { qty: 60, unit: 'g', name: 'aardbeienpuree', note: 'pureer wat extra aardbeien' },
            { qty: 2, unit: 'tbsp', name: 'melkpoeder', note: 'optioneel, voor extra romigheid' },
            { qty: 0.5, unit: 'tsp', name: 'citroensap', note: 'maakt de smaak frisser' },
            { qty: 1, unit: 'pinch', name: 'zout' },
          ],
        },
        {
          title: 'Mix-ins',
          items: [
            { name: 'verse aardbeien', note: 'een paar, in stukjes, optioneel' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Klop de melk, de room, de suiker, de vanille, het citroensap, het melkpoeder en een snufje zout door elkaar tot de suiker is opgelost. Roer de aardbeistukjes en de aardbeienpuree erdoor.',
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
          text: 'Maak met een lepel een kuiltje tot op de bodem, doe een paar extra aardbeistukjes erin en start het programma MIX-IN.',
          program: 'Mix-in',
        },
      ],
      tips: [
        'Voeg het melkpoeder toe: het maakt de structuur dikker en voller.',
        'Gebruik rijpe, zoete aardbeien voor de beste natuurlijke smaak en kleur.',
        'Sla het citroensap niet over: het laat de aardbeiensmaak beter uitkomen.',
      ],
    },
  },
}
