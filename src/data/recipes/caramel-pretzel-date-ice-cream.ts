import image from '../../assets/recipes/caramel-pretzel-date-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// After Sara J Sweets' YouTube Short, in our own words, with a photo from the
// video and the amounts from its description, for her 24 oz Deluxe pint: the
// same caramel base as her Caramel Apple Pie Ice Cream, 2.5 cups of milk being
// 600 ml. The video doesn't name the program; it runs on LITE ICE CREAM like
// that base. The 470 calories and 33 g of protein a pint are hers. Only screen
// recordings were shared, so the credit links to her channel.
export const caramelPretzelDateIceCream: Recipe = {
  id: 'caramel-pretzel-date-ice-cream',
  origin: 'curated',
  name: 'Caramel Pretzel Date Ice Cream',
  tagline: 'Crunchy pretzels and caramel-like dates in a light caramel base',
  image,
  flavor: 'salted-caramel',
  category: 'ice-cream',
  tags: ['egg-free'],
  tastes: ['sweet', 'creamy'],
  models: ['original', 'breeze', 'deluxe', 'swirl'],
  program: 'Lite Ice Cream',
  basePint: 24,
  servings: '4–6',
  difficulty: 'easy',
  times: { prepMin: 10, freezeHours: 24 },
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
        { qty: 8, name: 'small pretzels', note: 'e.g. Glutino, gluten-free' },
        { qty: 2, name: 'dates', note: 'pitted, in pieces' },
      ],
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
      title: 'Process',
      text: 'Take the lid off, place the pint in the outer bowl and run the LITE ICE CREAM program. It can look too crumbly at first: smooth the top with a spoon and you will see it is just right.',
      program: 'Lite Ice Cream',
    },
    {
      title: 'Re-spin if needed',
      text: 'Still crumbly once smoothed? Add a tablespoon of milk and run RE-SPIN until it is smooth and creamy.',
      program: 'Re-spin',
    },
    {
      title: 'Add the mix-ins',
      text: 'Use a spoon to make a hole down the middle of the ice cream, drop in the pretzels and dates and run the MIX-IN program.',
      program: 'Mix-in',
    },
  ],
  tips: ['Ultra-filtered milk such as Fairlife gives a boost of protein without any protein powder; regular milk works too.'],
  nutrition: { per: 'pint', kcal: 470, protein: 33 },
  credits: { author: 'Sara J Sweets', url: 'https://www.youtube.com/@sarajsweets' },
  translations: {
    nl: {
      name: 'Karamel-pretzel-dadelijs',
      tagline: 'Knapperige pretzels en karamelachtige dadels in een lichte karamelbasis',
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
            { qty: 8, name: 'kleine pretzels', note: 'bijv. Glutino, glutenvrij' },
            { qty: 2, name: 'dadels', note: 'ontpit, in stukjes' },
          ],
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
          title: 'Draaien',
          text: 'Haal het deksel eraf, zet de pint in de buitenkom en start het programma LITE ICE CREAM. Het kan er eerst te kruimelig uitzien: strijk de bovenkant glad met een lepel en je ziet dat het precies goed is.',
          program: 'Lite Ice Cream',
        },
        {
          title: 'Zo nodig re-spin',
          text: 'Na het gladstrijken nog kruimelig? Voeg een eetlepel melk toe en draai RE-SPIN tot het glad en romig is.',
          program: 'Re-spin',
        },
        {
          title: 'Mix-ins toevoegen',
          text: 'Maak met een lepel een kuiltje tot op de bodem, doe de pretzels en de dadels erin en start het programma MIX-IN.',
          program: 'Mix-in',
        },
      ],
      tips: ['Ultragefilterde melk zoals Fairlife geeft extra eiwit zonder eiwitpoeder; gewone melk kan ook.'],
    },
  },
}
