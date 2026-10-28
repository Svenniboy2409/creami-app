import image from '../../assets/recipes/greek-yogurt-base.jpg'
import type { Recipe } from '../../types/recipe'

// One of the five Ninja Creami bases, in millilitres and grams, with its photo
// cut from the bases list. A plain start to flavour your own way: its ideas
// link to the app's recipes for them where there is one. It runs on FROZEN
// YOGURT, the program made for a yogurt base; the Original and the Breeze have
// no such button, so the step points them to LITE ICE CREAM.
export const greekYogurtBase: Recipe = {
  id: 'greek-yogurt-base',
  origin: 'curated',
  name: 'Greek Yogurt Base',
  tagline: 'Protein-packed',
  image,
  flavor: 'greek-yogurt',
  category: 'base',
  tags: ['high-protein', 'egg-free', 'gluten-free'],
  models: ['original', 'breeze', 'deluxe', 'swirl'],
  program: 'Frozen Yogurt',
  basePint: 16,
  servings: '3–4',
  difficulty: 'easy',
  times: { prepMin: 5, freezeHours: 24 },
  ingredients: [
    {
      items: [
        { qty: 370, unit: 'g', name: 'plain Greek yogurt' },
        { qty: 120, unit: 'ml', name: 'milk' },
        { qty: 2.5, unit: 'tbsp', name: 'honey or maple syrup', note: 'to taste' },
        { qty: 1, unit: 'tsp', name: 'vanilla extract' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Whisk the yogurt, milk, honey (or maple syrup) and vanilla together until completely smooth.',
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
      title: 'Flavour it (optional)',
      text: 'Make it your own: make a hole down the middle, add your mix-ins and run the MIX-IN program.',
      program: 'Mix-in',
    },
  ],
  tips: ['Protein bases often need a re-spin or two, each with a splash of milk.'],
  ideas: [{ name: 'Mixed Berry', recipeId: 'mixed-berries-ice-cream' }, { name: 'Peach Cobbler' }, { name: 'Lemon Blueberry' }],
  translations: {
    nl: {
      name: 'Griekse-yoghurtbasis',
      tagline: 'Boordevol eiwit',
      ingredients: [
        {
          items: [
            { qty: 370, unit: 'g', name: 'Griekse yoghurt (naturel)' },
            { qty: 120, unit: 'ml', name: 'melk' },
            { qty: 2.5, unit: 'tbsp', name: 'honing of ahornsiroop', note: 'naar smaak' },
            { qty: 1, unit: 'tsp', name: 'vanille-extract' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Klop de yoghurt, de melk, de honing (of ahornsiroop) en de vanille door elkaar tot alles helemaal glad is.',
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
          title: 'Op smaak brengen (optioneel)',
          text: 'Maak hem helemaal van jou: maak een kuiltje tot op de bodem, doe je mix-ins erin en start het programma MIX-IN.',
          program: 'Mix-in',
        },
      ],
      tips: ['Eiwitrijke bases hebben vaak een of twee keer re-spin nodig, telkens met een scheutje melk.'],
      ideas: [{ name: 'Bosvruchten', recipeId: 'mixed-berries-ice-cream' }, { name: 'Perzik-crumble' }, { name: 'Citroen-blauwe bes' }],
    },
  },
}
