import image from '../../assets/recipes/pear-and-rum-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// From the "Discover a world of Ninja Creami flavours" cards, with the amounts
// shown there for a 24 oz pint, in millilitres and grams, and its photo cut
// from that card. The pear chunks go in after the first spin. It contains
// alcohol, which keeps it a little softer; a tip says how to leave it out.
export const pearAndRumIceCream: Recipe = {
  id: 'pear-and-rum-ice-cream',
  origin: 'curated',
  name: 'Pear & Rum',
  tagline: 'Juicy pear with a warming hint of rum',
  image,
  flavor: 'pear',
  category: 'ice-cream',
  tags: ['egg-free', 'gluten-free', 'fruity'],
  tastes: ['fruity', 'rich'],
  models: ['original', 'breeze', 'deluxe', 'swirl'],
  program: 'Ice Cream',
  basePint: 24,
  servings: '4–6',
  difficulty: 'advanced',
  times: { prepMin: 10, freezeHours: 24 },
  ingredients: [
    {
      title: 'Base',
      items: [
        { qty: 360, unit: 'ml', name: 'milk' },
        { qty: 120, unit: 'g', name: 'pear puree', note: 'cooked and blended, about 2 pears' },
        { qty: 50, unit: 'g', name: 'sugar', note: 'or to taste' },
        { qty: 60, unit: 'ml', name: 'agave syrup', note: 'or honey' },
        { qty: 1.5, unit: 'tbsp', name: 'dark rum', note: 'or to taste' },
        { qty: 1, unit: 'tbsp', name: 'lemon juice', note: 'fresh' },
        { qty: 0.5, unit: 'tsp', name: 'vanilla extract' },
        { qty: 0.125, unit: 'tsp', name: 'ground cinnamon', note: 'optional' },
        { qty: 1, unit: 'pinch', name: 'salt' },
      ],
    },
    {
      title: 'Mix-ins',
      items: [
        { qty: 2, unit: 'tbsp', name: 'pear', note: 'in small chunks, optional' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the pear puree',
      text: 'Peel and dice the pears and simmer them with a splash of water for about 10 minutes, until soft. Blend until silky smooth and let it cool completely.',
    },
    {
      title: 'Make the base',
      text: 'Stir the lemon juice into the pear puree. Whisk the milk, sugar, agave syrup, vanilla, cinnamon (if using) and a pinch of salt until the sugar has dissolved, then whisk in the pear puree and the rum. Taste and adjust the rum to your liking.',
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
      text: 'Use a spoon to make a hole down the middle of the ice cream, add the pear chunks and run the MIX-IN program.',
      program: 'Mix-in',
    },
  ],
  tips: [
    'Use ripe, juicy pears like Williams (Bartlett) or Conference for the sweetest flavour.',
    'Dark rum adds warmth and depth; adjust it to your taste, but don’t add much more, or the ice cream stays too soft.',
    'Contains alcohol, so not for children. For an alcohol-free version, leave out the rum and add an extra ½ tsp vanilla.',
  ],
  translations: {
    nl: {
      name: 'Peer en rum',
      tagline: 'Sappige peer met een verwarmende vleug rum',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 360, unit: 'ml', name: 'melk' },
            { qty: 120, unit: 'g', name: 'perenpuree', note: 'gekookt en gepureerd, ca. 2 peren' },
            { qty: 50, unit: 'g', name: 'suiker', note: 'of naar smaak' },
            { qty: 60, unit: 'ml', name: 'agavesiroop', note: 'of honing' },
            { qty: 1.5, unit: 'tbsp', name: 'donkere rum', note: 'of naar smaak' },
            { qty: 1, unit: 'tbsp', name: 'citroensap', note: 'vers' },
            { qty: 0.5, unit: 'tsp', name: 'vanille-extract' },
            { qty: 0.125, unit: 'tsp', name: 'kaneel', note: 'optioneel' },
            { qty: 1, unit: 'pinch', name: 'zout' },
          ],
        },
        {
          title: 'Mix-ins',
          items: [
            { qty: 2, unit: 'tbsp', name: 'peer', note: 'in kleine stukjes, optioneel' },
          ],
        },
      ],
      steps: [
        {
          title: 'Perenpuree maken',
          text: 'Schil de peren, snijd ze in blokjes en laat ze met een scheutje water ongeveer 10 minuten zacht worden. Pureer ze zijdezacht en laat de puree helemaal afkoelen.',
        },
        {
          title: 'Basis maken',
          text: 'Roer het citroensap door de perenpuree. Klop de melk, de suiker, de agavesiroop, de vanille, de kaneel (als je die gebruikt) en een snufje zout door elkaar tot de suiker is opgelost en klop daarna de perenpuree en de rum erdoor. Proef en pas de hoeveelheid rum aan naar smaak.',
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
          text: 'Maak met een lepel een kuiltje tot op de bodem, doe de stukjes peer erin en start het programma MIX-IN.',
          program: 'Mix-in',
        },
      ],
      tips: [
        'Gebruik rijpe, sappige peren zoals Williams of Conférence voor de zoetste smaak.',
        'Donkere rum geeft warmte en diepte. Pas de hoeveelheid aan naar smaak, maar doe er niet veel meer bij, anders blijft het ijs te zacht.',
        'Bevat alcohol, dus niet voor kinderen. Voor een alcoholvrije versie laat je de rum weg en voeg je een extra ½ tl vanille toe.',
      ],
    },
  },
}
