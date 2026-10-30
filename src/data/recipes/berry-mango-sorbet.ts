import image from '../../assets/recipes/berry-mango-sorbet.jpg'
import type { Recipe } from '../../types/recipe'

// After Sara J Sweets' YouTube Short, in our own words, with the owner's still
// from the video and the amounts from its description, for her 16 oz Swirl
// pint: a cup of raspberries is about 125 g, of strawberries 150 g, half a cup
// of mango 80 g. The 200 calories a pint are hers. She runs FRUIT WHIP, which
// only the Swirl has, so it is a Swirl recipe; a tip gives SORBET for the other
// machines. Only screen recordings were shared, so the credit links to her
// channel.
export const berryMangoSorbet: Recipe = {
  id: 'berry-mango-sorbet',
  origin: 'curated',
  name: 'Berry Mango Sorbet',
  tagline: 'Three ingredients, dairy-free and about 200 calories a pint',
  image,
  flavor: 'mixed-berry',
  category: 'sorbet',
  tags: ['vegan', 'dairy-free', 'egg-free', 'gluten-free', 'fruity'],
  tastes: ['fruity', 'refreshing', 'healthy'],
  models: ['swirl'],
  program: 'Fruit Whip',
  basePint: 16,
  servings: '2–3',
  difficulty: 'easy',
  times: { prepMin: 10, freezeHours: 24 },
  ingredients: [
    {
      title: 'Base',
      items: [
        { qty: 125, unit: 'g', name: 'raspberries', note: 'fresh, or frozen and thawed' },
        { qty: 150, unit: 'g', name: 'strawberries', note: 'fresh, or frozen and thawed' },
        { qty: 80, unit: 'g', name: 'mango', note: 'in cubes, fresh, or frozen and thawed' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Put the raspberries and strawberries in an empty CREAMi pint and top them with the mango. Mash everything together with a potato masher and mix well, so all the fruit is covered by its juices.',
    },
    {
      title: 'Freeze',
      text: 'Check that it is no higher than the MAX FILL line. Put the lid on and freeze on a level surface for 24 hours.',
    },
    {
      title: 'Process',
      text: 'Take the lid off, place the pint in the outer bowl and run the FRUIT WHIP program.',
      program: 'Fruit Whip',
    },
    {
      title: 'Re-spin if needed',
      text: 'Looks crumbly? Add a tablespoon of water and run RE-SPIN until it is smooth and creamy.',
      program: 'Re-spin',
    },
    {
      title: 'Serve',
      text: 'Scoop it into a bowl, or fit the swirl attachment and pull the lever for soft serve.',
    },
  ],
  tips: [
    'The mango is what makes it creamy without any milk or thickener, and it balances the sweetness of the berries.',
    'No Ninja Swirl? Run SORBET instead of FRUIT WHIP for the closest result, and scoop it.',
  ],
  nutrition: { per: 'pint', kcal: 200 },
  credits: { author: 'Sara J Sweets', url: 'https://www.youtube.com/@sarajsweets' },
  translations: {
    nl: {
      name: 'Bessen-mangosorbet',
      tagline: 'Drie ingrediënten, zuivelvrij en zo’n 200 calorieën per pint',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 125, unit: 'g', name: 'frambozen', note: 'vers, of bevroren en ontdooid' },
            { qty: 150, unit: 'g', name: 'aardbeien', note: 'vers, of bevroren en ontdooid' },
            { qty: 80, unit: 'g', name: 'mango', note: 'in blokjes, vers, of bevroren en ontdooid' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Doe de frambozen en de aardbeien in een lege CREAMi-pint en leg de mango erbovenop. Stamp alles samen fijn met een aardappelstamper en meng goed, zodat al het fruit onder het sap staat.',
        },
        {
          title: 'Invriezen',
          text: 'Controleer of het niet hoger komt dan de MAX FILL-lijn. Doe het deksel erop en vries 24 uur in op een vlakke ondergrond.',
        },
        {
          title: 'Draaien',
          text: 'Haal het deksel eraf, zet de pint in de buitenkom en start het programma FRUIT WHIP.',
          program: 'Fruit Whip',
        },
        {
          title: 'Zo nodig re-spin',
          text: 'Ziet het er kruimelig uit? Voeg een eetlepel water toe en draai RE-SPIN tot het glad en romig is.',
          program: 'Re-spin',
        },
        {
          title: 'Serveren',
          text: 'Schep het in een kommetje, of zet het swirl-opzetstuk erop en trek aan de hendel voor softijs.',
        },
      ],
      tips: [
        'De mango maakt het romig zonder melk of bindmiddel, en hij brengt de zoetheid van de bessen in balans.',
        'Geen Ninja Swirl? Draai dan SORBET in plaats van FRUIT WHIP voor het meest vergelijkbare resultaat, en schep het.',
      ],
    },
  },
}
