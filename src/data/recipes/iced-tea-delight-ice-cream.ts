import image from '../../assets/recipes/iced-tea-delight-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// From the "Discover a world of Ninja Creami flavours" cards, with the amounts
// shown there for a 24 oz pint, in millilitres and grams, and its photo cut
// from that card. The tea leaves go in after the first spin, as on the card.
export const icedTeaDelightIceCream: Recipe = {
  id: 'iced-tea-delight-ice-cream',
  origin: 'curated',
  name: 'Iced Tea Delight',
  tagline: 'Refreshing and sweet, with classic iced tea flavour',
  image,
  flavor: 'iced-tea',
  category: 'ice-cream',
  tags: ['egg-free', 'gluten-free'],
  tastes: ['refreshing'],
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
        { qty: 65, unit: 'g', name: 'sugar' },
        { qty: 1, unit: 'tsp', name: 'vanilla extract' },
        { qty: 30, unit: 'g', name: 'milk powder', note: 'optional, for creaminess' },
        { qty: 30, unit: 'ml', name: 'strong black tea', note: 'brew 1 tea bag in 60 ml hot water for 5 minutes, then cool' },
        { qty: 2, unit: 'tbsp', name: 'honey', note: 'or to taste' },
      ],
    },
    {
      title: 'Mix-ins',
      items: [
        { qty: 1, unit: 'tsp', name: 'black tea leaves', note: 'instant, or finely crushed' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Whisk the milk, cream, sugar, milk powder, vanilla, the cooled tea and the honey until smooth and the sugar has dissolved.',
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
      text: 'Use a spoon to make a hole down the middle of the ice cream, add the tea leaves and run the MIX-IN program.',
      program: 'Mix-in',
    },
  ],
  tips: [
    'Don’t skip the milk powder: it makes the texture richer and smoother.',
    'Use good black tea for the best flavour, and let it cool completely before mixing.',
    'Adjust the honey to your taste, or use maple syrup instead.',
  ],
  translations: {
    nl: {
      name: 'IJstheegenot',
      tagline: 'Verfrissend en zoet, met de smaak van klassieke ijsthee',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 360, unit: 'ml', name: 'melk', note: 'elke soort' },
            { qty: 120, unit: 'ml', name: 'slagroom' },
            { qty: 65, unit: 'g', name: 'suiker' },
            { qty: 1, unit: 'tsp', name: 'vanille-extract' },
            { qty: 30, unit: 'g', name: 'melkpoeder', note: 'optioneel, voor romigheid' },
            { qty: 30, unit: 'ml', name: 'sterke zwarte thee', note: 'trek 1 theezakje 5 minuten in 60 ml heet water en laat afkoelen' },
            { qty: 2, unit: 'tbsp', name: 'honing', note: 'of naar smaak' },
          ],
        },
        {
          title: 'Mix-ins',
          items: [
            { qty: 1, unit: 'tsp', name: 'zwarte theeblaadjes', note: 'oploskorrels, of fijngewreven' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Klop de melk, de room, de suiker, het melkpoeder, de vanille, de afgekoelde thee en de honing door elkaar tot alles glad is en de suiker is opgelost.',
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
          text: 'Maak met een lepel een kuiltje tot op de bodem, doe de theeblaadjes erin en start het programma MIX-IN.',
          program: 'Mix-in',
        },
      ],
      tips: [
        'Sla het melkpoeder niet over: het maakt de structuur voller en gladder.',
        'Gebruik goede zwarte thee voor de beste smaak en laat hem helemaal afkoelen voordat je hem erdoor mengt.',
        'Pas de honing aan naar smaak, of gebruik ahornsiroop.',
      ],
    },
  },
}
