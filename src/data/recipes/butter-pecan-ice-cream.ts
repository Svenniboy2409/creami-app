import image from '../../assets/recipes/butter-pecan-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// From the "Discover a world of Ninja Creami flavours" cards, with the amounts
// shown there for a 24 oz pint, in millilitres and grams, and its photo cut
// from that card. The crunchy bits go in after the first spin rather than into
// the base, so they stay crunchy.
export const butterPecanIceCream: Recipe = {
  id: 'butter-pecan-ice-cream',
  origin: 'curated',
  name: 'Butter Pecan',
  tagline: 'Buttery ice cream with toasted pecans',
  image,
  flavor: 'butter-pecan',
  category: 'ice-cream',
  tags: ['egg-free', 'gluten-free', 'nutty'],
  tastes: ['rich', 'nutty'],
  models: ['original', 'breeze', 'deluxe', 'swirl'],
  program: 'Ice Cream',
  basePint: 24,
  servings: '4–6',
  difficulty: 'medium',
  times: { prepMin: 20, freezeHours: 24 },
  ingredients: [
    {
      title: 'Base',
      items: [
        { qty: 360, unit: 'ml', name: 'milk', note: 'any kind' },
        { qty: 120, unit: 'ml', name: 'heavy cream' },
        { qty: 70, unit: 'g', name: 'brown sugar', note: 'packed' },
        { qty: 50, unit: 'g', name: 'sugar' },
        { qty: 1, unit: 'tsp', name: 'vanilla extract' },
        { qty: 30, unit: 'g', name: 'milk powder', note: 'optional, for creaminess' },
        { qty: 2, unit: 'tbsp', name: 'unsalted butter', note: 'melted' },
        { qty: 1, unit: 'pinch', name: 'salt' },
      ],
    },
    {
      title: 'Mix-ins',
      items: [
        { qty: 80, unit: 'g', name: 'pecans', note: 'toasted and chopped' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Whisk the milk, cream, both sugars, milk powder, vanilla and a pinch of salt until the sugar has dissolved. Whisk in the melted butter well (or blend briefly), so it spreads through the base instead of setting in flecks.',
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
      text: 'Use a spoon to make a hole down the middle of the ice cream, add the toasted pecans and run the MIX-IN program. If the pint gets too full, keep some back for the top.',
      program: 'Mix-in',
    },
  ],
  tips: [
    'Don’t skip the milk powder: it makes the texture richer and smoother.',
    'Toast the pecans in a dry frying pan over medium heat for 3–5 minutes, stirring often. Let them cool, then chop.',
    'Caramel swirl: drizzle in a little caramel sauce just before the mix-ins for an extra layer of buttery sweetness.',
  ],
  translations: {
    nl: {
      name: 'Boter-pecanijs',
      tagline: 'Boterig ijs met geroosterde pecannoten',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 360, unit: 'ml', name: 'melk', note: 'elke soort' },
            { qty: 120, unit: 'ml', name: 'slagroom' },
            { qty: 70, unit: 'g', name: 'bruine suiker', note: 'aangedrukt' },
            { qty: 50, unit: 'g', name: 'suiker' },
            { qty: 1, unit: 'tsp', name: 'vanille-extract' },
            { qty: 30, unit: 'g', name: 'melkpoeder', note: 'optioneel, voor romigheid' },
            { qty: 2, unit: 'tbsp', name: 'ongezouten boter', note: 'gesmolten' },
            { qty: 1, unit: 'pinch', name: 'zout' },
          ],
        },
        {
          title: 'Mix-ins',
          items: [
            { qty: 80, unit: 'g', name: 'pecannoten', note: 'geroosterd en gehakt' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Klop de melk, de room, beide suikers, het melkpoeder, de vanille en een snufje zout door elkaar tot de suiker is opgelost. Klop de gesmolten boter er goed door (of mix kort), zodat hij zich door de basis verspreidt en geen vlokjes vormt.',
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
          text: 'Maak met een lepel een kuiltje tot op de bodem, doe de geroosterde pecannoten erin en start het programma MIX-IN. Wordt de pint te vol, bewaar dan een deel voor erbovenop.',
          program: 'Mix-in',
        },
      ],
      tips: [
        'Sla het melkpoeder niet over: het maakt de structuur voller en gladder.',
        'Rooster de pecannoten 3–5 minuten in een droge koekenpan op middelhoog vuur en roer vaak. Laat ze afkoelen en hak ze dan.',
        'Karamelswirl: sprenkel vlak voor de mix-ins wat karamelsaus erin voor een extra laagje boterige zoetheid.',
      ],
    },
  },
}
