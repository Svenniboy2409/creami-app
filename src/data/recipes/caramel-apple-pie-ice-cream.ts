import image from '../../assets/recipes/caramel-apple-pie-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// After Sara J Sweets' YouTube Short, in our own words, with a photo from the
// video and the amounts from its description, for her 24 oz Deluxe pint: 2.5
// cups of milk is 600 ml, a quarter cup of chopped apple about 30 g. The 417
// calories and 34 g of protein a pint are hers, made with ultra-filtered
// Fairlife milk. Only screen recordings were shared, so the credit links to
// her channel.
export const caramelApplePieIceCream: Recipe = {
  id: 'caramel-apple-pie-ice-cream',
  origin: 'curated',
  name: 'Caramel Apple Pie Ice Cream',
  tagline: 'A light caramel base with warm, spiced apple pie filling',
  image,
  flavor: 'apple-pie',
  category: 'ice-cream',
  tags: ['egg-free', 'fruity'],
  tastes: ['sweet', 'fruity', 'creamy'],
  models: ['original', 'breeze', 'deluxe', 'swirl'],
  program: 'Lite Ice Cream',
  basePint: 24,
  servings: '4–6',
  difficulty: 'medium',
  times: { prepMin: 20, freezeHours: 24 },
  ingredients: [
    {
      title: 'Base',
      items: [
        { qty: 600, unit: 'ml', name: 'ultra-filtered milk', note: 'e.g. Fairlife 2%, or regular milk' },
        { qty: 3, unit: 'tbsp', name: 'sugar-free caramel sauce', note: 'e.g. Torani' },
        { qty: 0.25, unit: 'tsp', name: 'cinnamon' },
        { qty: 0.125, unit: 'tsp', name: 'nutmeg' },
      ],
    },
    {
      title: 'Mix-ins',
      items: [
        { qty: 30, unit: 'g', name: 'apple', note: 'chopped' },
        { qty: 1, unit: 'tbsp', name: 'maple syrup' },
        { qty: 0.5, unit: 'tsp', name: 'vanilla extract' },
        { qty: 0.5, unit: 'tsp', name: 'cinnamon' },
        { qty: 0.25, unit: 'tsp', name: 'nutmeg' },
        { qty: 1, unit: 'tbsp', name: 'heavy cream' },
      ],
    },
    {
      title: 'Toppings',
      items: [{ name: 'sugar-free caramel sauce', note: 'a little, to drizzle over' }],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Mix the milk, caramel sauce, cinnamon and nutmeg well in an empty CREAMi pint, with a milk frother or a whisk.',
    },
    {
      title: 'Freeze',
      text: 'Check that the base is no higher than the MAX FILL line. Put the lid on and freeze on a level surface for 24 hours.',
    },
    {
      title: 'Make the apple pie filling',
      text: 'While the base freezes, cook the chopped apple in a small pan with the maple syrup, vanilla, cinnamon and nutmeg for a few minutes, until it starts to soften. Stir in the cream and let it cool completely in the fridge.',
    },
    {
      title: 'Process',
      text: 'Take the lid off, place the pint in the outer bowl and run the LITE ICE CREAM program.',
      program: 'Lite Ice Cream',
    },
    {
      title: 'Re-spin if needed',
      text: 'Looks crumbly? Add a tablespoon of milk and run RE-SPIN until it is smooth and creamy.',
      program: 'Re-spin',
    },
    {
      title: 'Add the mix-ins',
      text: 'Use a spoon to make a hole down the middle of the ice cream, spoon in the apple pie filling and run the MIX-IN program.',
      program: 'Mix-in',
    },
    {
      title: 'Serve',
      text: 'Scoop it into bowls and top with a little more caramel sauce.',
    },
  ],
  tips: [
    'Ultra-filtered milk such as Fairlife gives a boost of protein without any protein powder; regular milk works too.',
  ],
  nutrition: { per: 'pint', kcal: 417, protein: 34 },
  credits: { author: 'Sara J Sweets', url: 'https://www.youtube.com/@sarajsweets' },
  translations: {
    nl: {
      name: 'Karamel-appeltaartijs',
      tagline: 'Een lichte karamelbasis met warme, kruidige appeltaartvulling',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 600, unit: 'ml', name: 'ultragefilterde melk', note: 'bijv. Fairlife 2%, of gewone melk' },
            { qty: 3, unit: 'tbsp', name: 'suikervrije karamelsaus', note: 'bijv. Torani' },
            { qty: 0.25, unit: 'tsp', name: 'kaneel' },
            { qty: 0.125, unit: 'tsp', name: 'nootmuskaat' },
          ],
        },
        {
          title: 'Mix-ins',
          items: [
            { qty: 30, unit: 'g', name: 'appel', note: 'in stukjes' },
            { qty: 1, unit: 'tbsp', name: 'ahornsiroop' },
            { qty: 0.5, unit: 'tsp', name: 'vanille-extract' },
            { qty: 0.5, unit: 'tsp', name: 'kaneel' },
            { qty: 0.25, unit: 'tsp', name: 'nootmuskaat' },
            { qty: 1, unit: 'tbsp', name: 'slagroom' },
          ],
        },
        {
          title: 'Toppings',
          items: [{ name: 'suikervrije karamelsaus', note: 'een beetje, om over het ijs te schenken' }],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Mix de melk, de karamelsaus, de kaneel en de nootmuskaat goed in een lege CREAMi-pint, met een melkopschuimer of een garde.',
        },
        {
          title: 'Invriezen',
          text: 'Controleer of de basis niet hoger komt dan de MAX FILL-lijn. Doe het deksel erop en vries 24 uur in op een vlakke ondergrond.',
        },
        {
          title: 'Appeltaartvulling maken',
          text: 'Bak terwijl de basis bevriest de stukjes appel een paar minuten in een pannetje met de ahornsiroop, de vanille, de kaneel en de nootmuskaat, tot ze zacht beginnen te worden. Roer de room erdoor en laat het in de koelkast helemaal afkoelen.',
        },
        {
          title: 'Draaien',
          text: 'Haal het deksel eraf, zet de pint in de buitenkom en start het programma LITE ICE CREAM.',
          program: 'Lite Ice Cream',
        },
        {
          title: 'Zo nodig re-spin',
          text: 'Ziet het er kruimelig uit? Voeg een eetlepel melk toe en draai RE-SPIN tot het glad en romig is.',
          program: 'Re-spin',
        },
        {
          title: 'Mix-ins toevoegen',
          text: 'Maak met een lepel een kuiltje tot op de bodem, schep de appeltaartvulling erin en start het programma MIX-IN.',
          program: 'Mix-in',
        },
        {
          title: 'Serveren',
          text: 'Schep het in kommetjes en schenk er nog wat karamelsaus over.',
        },
      ],
      tips: [
        'Ultragefilterde melk zoals Fairlife geeft extra eiwit zonder eiwitpoeder; gewone melk kan ook.',
      ],
    },
  },
}
