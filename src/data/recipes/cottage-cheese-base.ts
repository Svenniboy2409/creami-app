import image from '../../assets/recipes/cottage-cheese-base.jpg'
import type { Recipe } from '../../types/recipe'

// One of the five Ninja Creami bases, in millilitres and grams, with its photo
// cut from the bases list. A plain start to flavour your own way: its ideas
// link to the app's recipes for them where there is one.
export const cottageCheeseBase: Recipe = {
  id: 'cottage-cheese-base',
  origin: 'curated',
  name: 'Cottage Cheese Base',
  tagline: 'High protein, ultra creamy',
  image,
  flavor: 'cottage-cheese',
  category: 'base',
  tags: ['high-protein', 'egg-free', 'gluten-free'],
  models: ['original', 'breeze', 'deluxe', 'swirl'],
  program: 'Lite Ice Cream',
  basePint: 16,
  servings: '3–4',
  difficulty: 'easy',
  times: { prepMin: 5, freezeHours: 24 },
  ingredients: [
    {
      title: 'Base',
      items: [
        { qty: 225, unit: 'g', name: 'cottage cheese', note: '2% or 4% fat' },
        { qty: 120, unit: 'ml', name: 'milk' },
        { qty: 2.5, unit: 'tbsp', name: 'honey or maple syrup', note: 'to taste' },
        { qty: 1, unit: 'tsp', name: 'vanilla extract' },
        { qty: 1, unit: 'pinch', name: 'salt' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Blend the cottage cheese, milk, honey (or maple syrup), vanilla and salt for about a minute, until completely smooth with no curds left.',
    },
    {
      title: 'Freeze',
      text: 'Pour the base into an empty CREAMi pint, no higher than the MAX FILL line. Put the lid on and freeze on a level surface for 24 hours.',
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
      title: 'Flavour it (optional)',
      text: 'Make it your own: make a hole down the middle, add your mix-ins and run the MIX-IN program.',
      program: 'Mix-in',
    },
  ],
  tips: ['Protein bases often need a re-spin or two, each with a splash of milk.'],
  ideas: [{ name: 'Chocolate Peanut Butter' }, { name: 'Strawberry Cheesecake' }, { name: 'Cinnamon Roll' }],
  translations: {
    nl: {
      name: 'Cottagecheesebasis',
      tagline: 'Eiwitrijk en superromig',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 225, unit: 'g', name: 'cottage cheese', note: '2% of 4% vet' },
            { qty: 120, unit: 'ml', name: 'melk' },
            { qty: 2.5, unit: 'tbsp', name: 'honing of ahornsiroop', note: 'naar smaak' },
            { qty: 1, unit: 'tsp', name: 'vanille-extract' },
            { qty: 1, unit: 'pinch', name: 'zout' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Mix de cottage cheese, de melk, de honing (of ahornsiroop), de vanille en het zout ongeveer een minuut, tot het helemaal glad is en er geen korreltjes meer in zitten.',
        },
        {
          title: 'Invriezen',
          text: 'Giet de basis in een lege CREAMi-pint, niet hoger dan de MAX FILL-lijn. Doe het deksel erop en vries 24 uur in op een vlakke ondergrond.',
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
          title: 'Op smaak brengen (optioneel)',
          text: 'Maak hem helemaal van jou: maak een kuiltje tot op de bodem, doe je mix-ins erin en start het programma MIX-IN.',
          program: 'Mix-in',
        },
      ],
      tips: ['Eiwitrijke bases hebben vaak een of twee keer re-spin nodig, telkens met een scheutje melk.'],
      ideas: [{ name: 'Chocolade-pindakaas' }, { name: 'Aardbeien-cheesecake' }, { name: 'Kaneelbroodje' }],
    },
  },
}
