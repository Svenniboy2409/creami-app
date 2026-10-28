import image from '../../assets/recipes/coconut-cream-frozen-yogurt.jpg'
import type { Recipe } from '../../types/recipe'

// From the "Discover a world of Ninja Creami flavours" cards, with the amounts
// shown there for a 24 oz pint, in millilitres and grams, and its photo cut
// from that card. Made with Greek yogurt, so it runs on FROZEN YOGURT (LITE ICE
// CREAM on machines without that button) where the card says ICE CREAM. The
// shredded coconut, chunks and chips go in after the first spin.
export const coconutCreamFrozenYogurt: Recipe = {
  id: 'coconut-cream-frozen-yogurt',
  origin: 'curated',
  name: 'Coconut Cream',
  tagline: 'Creamy, lightly sweet and full of tropical coconut',
  image,
  flavor: 'coconut',
  category: 'frozen-yogurt',
  tags: ['high-protein', 'egg-free', 'gluten-free'],
  models: ['original', 'breeze', 'deluxe', 'swirl'],
  program: 'Frozen Yogurt',
  basePint: 24,
  servings: '4–6',
  difficulty: 'easy',
  times: { prepMin: 10, freezeHours: 24 },
  ingredients: [
    {
      title: 'Base',
      items: [
        { qty: 370, unit: 'g', name: 'Greek yogurt', note: 'low fat, plain and unsweetened' },
        { qty: 40, unit: 'g', name: 'coconut flakes', note: 'unsweetened' },
        { qty: 60, unit: 'ml', name: 'coconut cream', note: 'from a can, shaken' },
        { qty: 25, unit: 'g', name: 'sugar', note: 'or to taste' },
        { qty: 1, unit: 'tsp', name: 'vanilla extract' },
        { qty: 1, unit: 'tbsp', name: 'honey', note: 'optional, for extra sweetness' },
        { qty: 1, unit: 'pinch', name: 'salt' },
      ],
    },
    {
      title: 'Mix-ins',
      items: [
        { qty: 2, unit: 'tbsp', name: 'shredded coconut', note: 'optional, for texture' },
        { qty: 2, unit: 'tbsp', name: 'coconut chunks', note: 'optional' },
        { qty: 2, unit: 'tbsp', name: 'toasted coconut chips', note: 'optional, to serve' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Whisk the yogurt, coconut cream, sugar, vanilla, honey (if using) and a pinch of salt until smooth. Add the coconut flakes and blend with a stick blender (or whisk well) until silky.',
    },
    {
      title: 'Freeze',
      text: 'Pour the base into an empty CREAMi pint, no higher than the MAX FILL line. Put the lid on and freeze on a level surface for 24 hours.',
    },
    {
      title: 'Process',
      text: 'Take the lid off, place the pint in the outer bowl and run the FROZEN YOGURT program. No FROZEN YOGURT button on your machine (Original, Breeze)? Use LITE ICE CREAM instead.',
      program: 'Frozen Yogurt',
    },
    {
      title: 'Re-spin if needed',
      text: 'Looks crumbly? Add a tablespoon of milk and run RE-SPIN until it is smooth and creamy.',
      program: 'Re-spin',
    },
    {
      title: 'Add the mix-ins',
      text: 'Use a spoon to make a hole down the middle of the ice cream, add the shredded coconut and coconut chunks and run the MIX-IN program. Top with toasted coconut chips for extra crunch.',
      program: 'Mix-in',
    },
  ],
  tips: [
    'Use a thick, unsweetened Greek yogurt for the best texture.',
    'For a richer coconut flavour, add an extra tablespoon of coconut cream or flakes.',
  ],
  translations: {
    nl: {
      name: 'Kokosroomijs',
      tagline: 'Romig, licht zoet en vol tropische kokos',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 370, unit: 'g', name: 'Griekse yoghurt', note: 'mager, naturel en ongezoet' },
            { qty: 40, unit: 'g', name: 'kokosvlokken', note: 'ongezoet' },
            { qty: 60, unit: 'ml', name: 'kokosroom', note: 'uit blik, goed geschud' },
            { qty: 25, unit: 'g', name: 'suiker', note: 'of naar smaak' },
            { qty: 1, unit: 'tsp', name: 'vanille-extract' },
            { qty: 1, unit: 'tbsp', name: 'honing', note: 'optioneel, voor extra zoetheid' },
            { qty: 1, unit: 'pinch', name: 'zout' },
          ],
        },
        {
          title: 'Mix-ins',
          items: [
            { qty: 2, unit: 'tbsp', name: 'kokosrasp', note: 'optioneel, voor bite' },
            { qty: 2, unit: 'tbsp', name: 'stukjes kokos', note: 'optioneel' },
            { qty: 2, unit: 'tbsp', name: 'geroosterde kokoschips', note: 'optioneel, om te serveren' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Klop de yoghurt, de kokosroom, de suiker, de vanille, de honing (als je die gebruikt) en een snufje zout door elkaar tot alles glad is. Voeg de kokosvlokken toe en mix met een staafmixer (of klop goed) tot alles zijdezacht is.',
        },
        {
          title: 'Invriezen',
          text: 'Giet de basis in een lege CREAMi-pint, niet hoger dan de MAX FILL-lijn. Doe het deksel erop en vries 24 uur in op een vlakke ondergrond.',
        },
        {
          title: 'Draaien',
          text: 'Haal het deksel eraf, zet de pint in de buitenkom en start het programma FROZEN YOGURT. Heeft je machine die knop niet (Original, Breeze)? Gebruik dan LITE ICE CREAM.',
          program: 'Frozen Yogurt',
        },
        {
          title: 'Zo nodig re-spin',
          text: 'Ziet het er kruimelig uit? Voeg een eetlepel melk toe en draai RE-SPIN tot het glad en romig is.',
          program: 'Re-spin',
        },
        {
          title: 'Mix-ins toevoegen',
          text: 'Maak met een lepel een kuiltje tot op de bodem, doe de kokosrasp en de stukjes kokos erin en start het programma MIX-IN. Maak het af met geroosterde kokoschips voor extra crunch.',
          program: 'Mix-in',
        },
      ],
      tips: [
        'Gebruik een dikke, ongezoete Griekse yoghurt voor de beste structuur.',
        'Voor een vollere kokossmaak voeg je een extra eetlepel kokosroom of -vlokken toe.',
      ],
    },
  },
}
