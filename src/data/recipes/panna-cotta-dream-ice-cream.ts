import image from '../../assets/recipes/panna-cotta-dream-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// From the "Discover a world of Ninja Creami flavours" cards, with the amounts
// shown there for a 24 oz pint, in millilitres and grams, and its photo cut
// from that card. The bloomed gelatin is melted before it goes in, as cold milk
// would not dissolve it; the caramel goes in after the first spin as a swirl.
export const pannaCottaDreamIceCream: Recipe = {
  id: 'panna-cotta-dream-ice-cream',
  origin: 'curated',
  name: 'Panna Cotta Dream',
  tagline: 'Silky, smooth and irresistibly creamy',
  image,
  flavor: 'panna-cotta',
  category: 'ice-cream',
  tags: ['egg-free', 'gluten-free'],
  tastes: ['sweet', 'creamy'],
  models: ['original', 'breeze', 'deluxe', 'swirl'],
  program: 'Ice Cream',
  basePint: 24,
  servings: '4–6',
  difficulty: 'advanced',
  times: { prepMin: 15, freezeHours: 24 },
  ingredients: [
    {
      title: 'Base',
      items: [
        { qty: 360, unit: 'ml', name: 'milk', note: 'or any milk you like' },
        { qty: 75, unit: 'g', name: 'sweetened condensed milk', note: 'or a sweetener of your choice' },
        { qty: 25, unit: 'g', name: 'sugar', note: 'or to taste' },
        { qty: 1.5, unit: 'tsp', name: 'vanilla extract', note: 'or to taste' },
        { qty: 1, unit: 'pinch', name: 'salt' },
        { qty: 60, unit: 'ml', name: 'heavy cream', note: 'optional, for extra richness' },
        { qty: 1, unit: 'tsp', name: 'gelatin powder', note: 'or 1½ tsp agar-agar for a vegetarian version' },
        { qty: 30, unit: 'ml', name: 'water', note: 'to bloom the gelatin' },
      ],
    },
    {
      title: 'Mix-ins',
      items: [
        { qty: 2, unit: 'tbsp', name: 'caramel sauce', note: 'plus extra to serve' },
      ],
    },
    {
      title: 'Toppings',
      items: [
        { name: 'caramel bits', note: 'optional, to serve' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Sprinkle the gelatin over the water and leave it to bloom for 5 minutes, then melt it for a few seconds in the microwave until liquid (agar-agar: bring it to the boil with the water instead). Whisk the milk, condensed milk, sugar, vanilla and a pinch of salt until the sugar has dissolved, then add the gelatin and the cream (if using) and blend until smooth.',
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
      text: 'Use a spoon to make a hole down the middle of the ice cream, add the caramel sauce and run the MIX-IN program. Drizzle with extra caramel and scatter over some caramel bits to serve.',
      program: 'Mix-in',
    },
  ],
  tips: [
    'For a true panna cotta note, add a few drops of almond extract to the base.',
  ],
  translations: {
    nl: {
      name: 'Panna-cottadroom',
      tagline: 'Zijdezacht, glad en onweerstaanbaar romig',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 360, unit: 'ml', name: 'melk', note: 'of elke melk die je lekker vindt' },
            { qty: 75, unit: 'g', name: 'gezoete gecondenseerde melk', note: 'of een zoetmiddel naar keuze' },
            { qty: 25, unit: 'g', name: 'suiker', note: 'of naar smaak' },
            { qty: 1.5, unit: 'tsp', name: 'vanille-extract', note: 'of naar smaak' },
            { qty: 1, unit: 'pinch', name: 'zout' },
            { qty: 60, unit: 'ml', name: 'slagroom', note: 'optioneel, voor extra romigheid' },
            { qty: 1, unit: 'tsp', name: 'gelatinepoeder', note: 'of 1½ tl agar-agar voor een vegetarische versie' },
            { qty: 30, unit: 'ml', name: 'water', note: 'om de gelatine te laten wellen' },
          ],
        },
        {
          title: 'Mix-ins',
          items: [
            { qty: 2, unit: 'tbsp', name: 'karamelsaus', note: 'plus extra om te serveren' },
          ],
        },
        {
          title: 'Toppings',
          items: [
            { name: 'karamelstukjes', note: 'optioneel, om te serveren' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Strooi de gelatine over het water en laat 5 minuten wellen. Smelt hem daarna een paar seconden in de magnetron tot hij vloeibaar is (agar-agar breng je in plaats daarvan met het water aan de kook). Klop de melk, de gecondenseerde melk, de suiker, de vanille en een snufje zout door elkaar tot de suiker is opgelost, voeg de gelatine en de room (als je die gebruikt) toe en mix alles glad.',
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
          text: 'Maak met een lepel een kuiltje tot op de bodem, doe de karamelsaus erin en start het programma MIX-IN. Maak het bij het serveren af met extra karamelsaus en wat karamelstukjes.',
          program: 'Mix-in',
        },
      ],
      tips: [
        'Voor een echte panna-cottasmaak voeg je een paar druppels amandelextract toe aan de basis.',
      ],
    },
  },
}
