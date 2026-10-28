import image from '../../assets/recipes/cacao-dream-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// From the "Discover a world of Ninja Creami flavours" cards, with the amounts
// shown there for a 24 oz pint, in millilitres and grams, and its photo cut
// from that card. The card calls it a sorbet, but it is made with milk and runs
// on ICE CREAM, so it is an ice cream here. The chocolate chips and cacao nibs
// go in after the first spin.
export const cacaoDreamIceCream: Recipe = {
  id: 'cacao-dream-ice-cream',
  origin: 'curated',
  name: 'Cacao Dream',
  tagline: 'Deep, rich and irresistibly chocolatey',
  image,
  flavor: 'chocolate',
  category: 'ice-cream',
  tags: ['egg-free', 'gluten-free', 'chocolate'],
  tastes: ['rich', 'chocolatey'],
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
        { qty: 360, unit: 'ml', name: 'milk', note: 'or any milk you like' },
        { qty: 25, unit: 'g', name: 'cacao powder', note: 'unsweetened' },
        { qty: 75, unit: 'g', name: 'sweetened condensed milk', note: 'or a sweetener of your choice' },
        { qty: 25, unit: 'g', name: 'sugar', note: 'or to taste' },
        { qty: 0.5, unit: 'tsp', name: 'vanilla extract' },
        { qty: 1, unit: 'tbsp', name: 'maple syrup or honey', note: 'optional' },
        { qty: 1, unit: 'pinch', name: 'salt' },
      ],
    },
    {
      title: 'Mix-ins',
      items: [
        { qty: 2, unit: 'tbsp', name: 'dark chocolate chips', note: 'optional' },
        { qty: 1, unit: 'tbsp', name: 'cacao nibs', note: 'optional, for texture' },
      ],
    },
    {
      title: 'Toppings',
      items: [
        { qty: 1, unit: 'tbsp', name: 'chocolate shavings', note: 'optional, to serve' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Whisk the cacao powder, sugar and salt together first, so the cacao doesn’t clump. Then whisk in the milk, condensed milk, vanilla and maple syrup (if using) until smooth. For an extra silky base, blend it with a stick blender and pour it through a sieve.',
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
      text: 'Use a spoon to make a hole down the middle of the ice cream, add the chocolate chips and cacao nibs and run the MIX-IN program. Top with chocolate shavings to serve.',
      program: 'Mix-in',
    },
  ],
  tips: [
    'For an even deeper chocolate flavour, melt a square of dark chocolate into a little warm milk and whisk it into the base before freezing.',
    'Extra creamy? Use a little more condensed milk, or add 1\u00a0tbsp neutral protein powder.',
  ],
  translations: {
    nl: {
      name: 'Cacaodroom',
      tagline: 'Diep, vol en onweerstaanbaar chocolade',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 360, unit: 'ml', name: 'melk', note: 'of elke melk die je lekker vindt' },
            { qty: 25, unit: 'g', name: 'cacaopoeder', note: 'ongezoet' },
            { qty: 75, unit: 'g', name: 'gezoete gecondenseerde melk', note: 'of een zoetmiddel naar keuze' },
            { qty: 25, unit: 'g', name: 'suiker', note: 'of naar smaak' },
            { qty: 0.5, unit: 'tsp', name: 'vanille-extract' },
            { qty: 1, unit: 'tbsp', name: 'ahornsiroop of honing', note: 'optioneel' },
            { qty: 1, unit: 'pinch', name: 'zout' },
          ],
        },
        {
          title: 'Mix-ins',
          items: [
            { qty: 2, unit: 'tbsp', name: 'pure chocoladedruppels', note: 'optioneel' },
            { qty: 1, unit: 'tbsp', name: 'cacaonibs', note: 'optioneel, voor bite' },
          ],
        },
        {
          title: 'Toppings',
          items: [
            { qty: 1, unit: 'tbsp', name: 'chocoladeschaafsel', note: 'optioneel, om te serveren' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Klop eerst het cacaopoeder, de suiker en het zout los, zodat de cacao niet klontert. Klop daarna de melk, de gecondenseerde melk, de vanille en de ahornsiroop (als je die gebruikt) erdoor tot alles glad is. Voor een extra zijdezachte basis mix je hem met een staafmixer en giet je hem door een zeef.',
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
          text: 'Maak met een lepel een kuiltje tot op de bodem, doe de chocoladedruppels en de cacaonibs erin en start het programma MIX-IN. Maak het bij het serveren af met chocoladeschaafsel.',
          program: 'Mix-in',
        },
      ],
      tips: [
        'Voor een nog diepere chocoladesmaak smelt je een blokje pure chocolade in een beetje warme melk en klop je dat voor het invriezen door de basis.',
        'Extra romig? Gebruik iets meer gecondenseerde melk of voeg 1\u00a0el neutraal eiwitpoeder toe.',
      ],
    },
  },
}
