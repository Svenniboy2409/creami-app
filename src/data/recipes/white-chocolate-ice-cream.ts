import image from '../../assets/recipes/white-chocolate-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

export const whiteChocolateIceCream: Recipe = {
  id: 'white-chocolate-ice-cream',
  origin: 'curated',
  name: 'White Chocolate Ice Cream',
  tagline: 'Creamy, sweet and indulgent!',
  description: 'A velvety white chocolate ice cream made for the Ninja CREAMi Deluxe. Egg-free, gluten-free, homemade and extra indulgent.',
  image,
  category: 'ice-cream',
  tags: ['egg-free', 'gluten-free', 'chocolate'],
  models: ['original', 'breeze', 'deluxe', 'swirl'],
  program: 'Ice Cream',
  basePint: 24,
  servings: '4–6',
  difficulty: 'easy',
  times: { prepMin: 10, freezeHours: 12 },
  ingredients: [
    {
      title: 'Ice cream base',
      items: [
        { qty: 300, unit: 'ml', name: 'whole milk' },
        { qty: 200, unit: 'ml', name: 'heavy cream', note: '30% fat' },
        { qty: 100, unit: 'g', name: 'good-quality white chocolate' },
        { qty: 60, unit: 'g', name: 'sugar' },
        { qty: 1, unit: 'tsp', name: 'vanilla extract' },
        { name: 'A pinch of salt' },
      ],
    },
    {
      title: 'To decorate (pick one)',
      items: [{ name: 'white chocolate shavings' }, { name: 'white chocolate curls' }, { name: 'a few squares of white chocolate' }],
    },
  ],
  steps: [
    {
      title: 'Heat',
      text: 'In a saucepan, heat the milk and cream over medium heat without letting it boil.',
    },
    {
      title: 'Melt the chocolate',
      text: 'Take the pan off the heat and add the white chocolate, broken into pieces. Stir until completely melted.',
    },
    {
      title: 'Sweeten & flavor',
      text: 'Add the sugar, vanilla extract and pinch of salt. Mix well.',
    },
    {
      title: 'Cool & freeze',
      text: 'Let the mixture cool until lukewarm, then pour it into the Ninja Deluxe pint. Put the lid on and freeze on a level surface for 12 hours.',
    },
    {
      title: 'Process',
      text: 'Place the pint in the Ninja Deluxe and run the ICE CREAM program. At the end of the cycle, run a RE-SPIN if needed for an even creamier texture.',
      program: 'Ice Cream',
    },
    {
      title: 'Decorate & enjoy',
      text: 'Just before serving, decorate with white chocolate shavings, white chocolate curls or a few squares of white chocolate. Enjoy!',
    },
  ],
  tips: ['For an even more indulgent ice cream, add 1 tbsp milk powder or 1 tbsp glucose syrup to the mixture.'],
  credits: { translatedFrom: 'French' },
  translations: {
    nl: {
      name: 'Witte-chocolade-ijs',
      tagline: 'Romig, zoet en heerlijk verwennend!',
      description:
        'Een fluweelzacht ijs van witte chocolade, gemaakt voor de Ninja CREAMi Deluxe. Zonder ei, glutenvrij, huisgemaakt en extra verwennend.',
      ingredients: [
        {
          title: 'IJsbasis',
          items: [
            { qty: 300, unit: 'ml', name: 'volle melk' },
            { qty: 200, unit: 'ml', name: 'slagroom', note: '30% vet' },
            { qty: 100, unit: 'g', name: 'witte chocolade van goede kwaliteit' },
            { qty: 60, unit: 'g', name: 'suiker' },
            { qty: 1, unit: 'tsp', name: 'vanille-extract' },
            { name: 'Een snufje zout' },
          ],
        },
        {
          title: 'Om te versieren (kies er één)',
          items: [{ name: 'schaafsel van witte chocolade' }, { name: 'krullen van witte chocolade' }, { name: 'een paar blokjes witte chocolade' }],
        },
      ],
      steps: [
        {
          title: 'Verwarmen',
          text: 'Verwarm de melk en de room in een steelpan op middelhoog vuur, zonder het te laten koken.',
        },
        {
          title: 'Chocolade smelten',
          text: 'Haal de pan van het vuur en voeg de in stukjes gebroken witte chocolade toe. Roer tot alles volledig gesmolten is.',
        },
        {
          title: 'Zoeten & op smaak brengen',
          text: 'Voeg de suiker, het vanille-extract en het snufje zout toe. Goed mengen.',
        },
        {
          title: 'Afkoelen & invriezen',
          text: 'Laat het mengsel afkoelen tot het lauw is en giet het dan in de Ninja Deluxe-pint. Doe het deksel erop en vries 12 uur in op een vlakke ondergrond.',
        },
        {
          title: 'Draaien',
          text: 'Plaats de pint in de Ninja Deluxe en start het programma ICE CREAM. Draai aan het eind van het programma zo nodig een RE-SPIN voor een nog romigere structuur.',
          program: 'Ice Cream',
        },
        {
          title: 'Versieren & genieten',
          text: 'Versier vlak voor het serveren met schaafsel of krullen van witte chocolade, of een paar blokjes witte chocolade. Smakelijk!',
        },
      ],
      tips: ['Voor een nog voller ijs voeg je 1 el melkpoeder of 1 el glucosestroop toe aan het mengsel.'],
    },
  },
}
