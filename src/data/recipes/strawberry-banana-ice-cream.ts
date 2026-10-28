import image from '../../assets/recipes/strawberry-banana-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// From the "Discover a world of Ninja Creami flavours" cards, with the amounts
// shown there for a 24 oz pint, in millilitres and grams, and its photo cut
// from that card. The fruit goes into the base, lightly blended so small pieces
// remain; the freeze-dried strawberries go in after the first spin.
export const strawberryBananaIceCream: Recipe = {
  id: 'strawberry-banana-ice-cream',
  origin: 'curated',
  name: 'Strawberry + Banana',
  tagline: 'Sweet strawberries and creamy banana, perfectly balanced',
  image,
  flavor: 'strawberry-banana',
  category: 'ice-cream',
  tags: ['egg-free', 'gluten-free', 'fruity', 'kid-friendly'],
  tastes: ['fruity', 'creamy'],
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
        { qty: 360, unit: 'ml', name: 'milk', note: 'any kind' },
        { qty: 120, unit: 'ml', name: 'heavy cream' },
        { qty: 150, unit: 'g', name: 'strawberries', note: 'diced' },
        { qty: 1, name: 'banana', note: 'medium, sliced' },
        { qty: 1, unit: 'tsp', name: 'vanilla extract' },
        { qty: 2, unit: 'tbsp', name: 'sweetened condensed milk', note: 'optional' },
        { qty: 1, unit: 'tbsp', name: 'honey', note: 'optional, for extra sweetness' },
        { qty: 2, unit: 'tbsp', name: 'strawberry puree', note: 'optional, for a stronger flavour' },
        { qty: 1, unit: 'pinch', name: 'salt' },
      ],
    },
    {
      title: 'Mix-ins',
      items: [
        { qty: 1, unit: 'tbsp', name: 'freeze-dried strawberries', note: 'crushed, optional' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Whisk the milk, cream, vanilla, condensed milk, honey (if using) and a pinch of salt until smooth. Add the strawberries, banana and strawberry puree and blend briefly with a stick blender, or mash them, until just combined. Don’t over-blend: small pieces of fruit are lovely.',
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
      text: 'Use a spoon to make a hole down the middle of the ice cream, add the crushed freeze-dried strawberries and run the MIX-IN program.',
      program: 'Mix-in',
    },
  ],
  tips: [
    'Use a ripe banana, but not an overripe one: overripe bananas make it too soft and too strong.',
    'No sugar in this one: for a sweeter ice cream, use the condensed milk and honey.',
    'For a beautiful swirl, add a spoonful of strawberry puree or jam after the first spin and run MIX-IN.',
    'This makes a little more than a pint holds: fill to the MAX FILL line and blend the rest into a smoothie.',
  ],
  translations: {
    nl: {
      name: 'Aardbei-banaan',
      tagline: 'Zoete aardbeien en romige banaan, mooi in balans',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 360, unit: 'ml', name: 'melk', note: 'elke soort' },
            { qty: 120, unit: 'ml', name: 'slagroom' },
            { qty: 150, unit: 'g', name: 'aardbeien', note: 'in blokjes' },
            { qty: 1, name: 'banaan', note: 'middelgroot, in plakjes' },
            { qty: 1, unit: 'tsp', name: 'vanille-extract' },
            { qty: 2, unit: 'tbsp', name: 'gezoete gecondenseerde melk', note: 'optioneel' },
            { qty: 1, unit: 'tbsp', name: 'honing', note: 'optioneel, voor extra zoetheid' },
            { qty: 2, unit: 'tbsp', name: 'aardbeienpuree', note: 'optioneel, voor een sterkere smaak' },
            { qty: 1, unit: 'pinch', name: 'zout' },
          ],
        },
        {
          title: 'Mix-ins',
          items: [
            { qty: 1, unit: 'tbsp', name: 'gevriesdroogde aardbeien', note: 'fijngemaakt, optioneel' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Klop de melk, de room, de vanille, de gecondenseerde melk, de honing (als je die gebruikt) en een snufje zout door elkaar tot alles glad is. Voeg de aardbeien, de banaan en de aardbeienpuree toe en mix kort met een staafmixer, of prak ze, tot alles net gemengd is. Niet te lang mixen: kleine stukjes fruit zijn juist lekker.',
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
          text: 'Maak met een lepel een kuiltje tot op de bodem, doe de gevriesdroogde aardbeien erin en start het programma MIX-IN.',
          program: 'Mix-in',
        },
      ],
      tips: [
        'Gebruik een rijpe, maar niet overrijpe banaan: een overrijpe banaan maakt het ijs te zacht en te overheersend.',
        'Hier zit geen suiker in: voor zoeter ijs gebruik je de gecondenseerde melk en de honing.',
        'Voor een mooie swirl doe je er na de eerste keer draaien een lepel aardbeienpuree of -jam bij en draai je MIX-IN.',
        'Dit is iets meer dan er in een pint past: vul tot de MAX FILL-lijn en mix de rest door een smoothie.',
      ],
    },
  },
}
