import image from '../../assets/recipes/strawberry-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// From the Ninja Creami flavour list, in millilitres and grams, with its photo
// cut from that list. The flavour colours the illustration that replaces the
// photo when "Illustrations instead of photos" is on in Settings. Extended with
// the Strawberry card from the "Discover a world of Ninja Creami flavours"
// series: chopped strawberries as a mix-in, scaled to this 16 oz pint, and its
// milk powder, lemon and salt as tips.
export const strawberryIceCream: Recipe = {
  id: 'strawberry-ice-cream',
  origin: 'curated',
  name: 'Strawberry Ice Cream',
  tagline: 'Sweet strawberries in every spoonful',
  image,
  flavor: 'strawberry',
  category: 'ice-cream',
  tags: ['egg-free', 'gluten-free', 'fruity', 'kid-friendly'],
  models: ['original', 'breeze', 'deluxe', 'swirl'],
  program: 'Ice Cream',
  basePint: 16,
  servings: '3–4',
  difficulty: 'easy',
  times: { prepMin: 10, freezeHours: 24 },
  ingredients: [
    {
      title: 'Base',
      items: [
        { qty: 180, unit: 'ml', name: 'whole milk' },
        { qty: 120, unit: 'ml', name: 'heavy cream' },
        { qty: 50, unit: 'g', name: 'sugar' },
        { qty: 1, unit: 'tsp', name: 'vanilla extract' },
        { qty: 120, unit: 'g', name: 'strawberry puree', note: 'about 150 g strawberries, blended' },
      ],
    },
    {
      title: 'Mix-ins',
      items: [
        { qty: 75, unit: 'g', name: 'fresh strawberries', note: 'chopped, optional' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Whisk the milk, cream, sugar and vanilla until the sugar has dissolved, then stir in the strawberry puree.',
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
      text: 'For bits of real fruit, use a spoon to make a hole down the middle of the ice cream, add the chopped strawberries and run the MIX-IN program.',
      program: 'Mix-in',
    },
  ],
  tips: [
    'For a thicker, richer ice cream, whisk 1\u00a0tbsp milk powder into the base.',
    'A squeeze of lemon juice and a pinch of salt in the base make the strawberry flavour pop.',
    'Use ripe, sweet strawberries for the best natural flavour and colour.',
  ],
  translations: {
    nl: {
      name: 'Aardbeienijs',
      tagline: 'Zoete aardbeien in elke hap',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 180, unit: 'ml', name: 'volle melk' },
            { qty: 120, unit: 'ml', name: 'slagroom' },
            { qty: 50, unit: 'g', name: 'suiker' },
            { qty: 1, unit: 'tsp', name: 'vanille-extract' },
            { qty: 120, unit: 'g', name: 'aardbeienpuree', note: 'ca. 150 g aardbeien, gepureerd' },
          ],
        },
        {
          title: 'Mix-ins',
          items: [
            { qty: 75, unit: 'g', name: 'verse aardbeien', note: 'in stukjes, optioneel' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Klop de melk, de room, de suiker en de vanille door elkaar tot de suiker is opgelost en roer de aardbeienpuree erdoor.',
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
          text: 'Voor stukjes echt fruit maak je met een lepel een kuiltje tot op de bodem, doe je de aardbeistukjes erin en start je het programma MIX-IN.',
          program: 'Mix-in',
        },
      ],
      tips: [
        'Voor voller, rijker ijs klop je 1\u00a0el melkpoeder door de basis.',
        'Een scheutje citroensap en een snufje zout in de basis laten de aardbeiensmaak beter uitkomen.',
        'Gebruik rijpe, zoete aardbeien voor de beste natuurlijke smaak en kleur.',
      ],
    },
  },
}
