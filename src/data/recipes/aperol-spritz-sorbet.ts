import image from '../../assets/recipes/aperol-spritz-sorbet.jpg'
import type { Recipe } from '../../types/recipe'

// From the "Discover a world of Ninja Creami flavours" cards, with the amounts
// shown there for a 24 oz pint, in millilitres and grams, and its photo cut
// from that card. The orange drops go in after the first spin. It contains
// alcohol, which keeps it a little softer; a tip says how to leave it out.
export const aperolSpritzSorbet: Recipe = {
  id: 'aperol-spritz-sorbet',
  origin: 'curated',
  name: 'Aperol Spritz Sorbet',
  tagline: 'Bittersweet orange with prosecco bubbles',
  image,
  flavor: 'aperol-spritz',
  category: 'sorbet',
  tags: ['dairy-free', 'egg-free', 'gluten-free', 'fruity'],
  tastes: ['fruity', 'refreshing'],
  models: ['original', 'breeze', 'deluxe', 'swirl'],
  program: 'Sorbet',
  basePint: 24,
  servings: '4–6',
  difficulty: 'easy',
  times: { prepMin: 15, freezeHours: 24 },
  ingredients: [
    {
      title: 'Base',
      items: [
        { qty: 180, unit: 'ml', name: 'orange juice', note: 'freshly squeezed' },
        { qty: 120, unit: 'ml', name: 'Aperol' },
        { qty: 120, unit: 'ml', name: 'prosecco', note: 'chilled' },
        { qty: 100, unit: 'g', name: 'sugar', note: 'or to taste' },
        { qty: 2, unit: 'tbsp', name: 'lemon juice', note: 'fresh' },
        { qty: 1, unit: 'tsp', name: 'orange zest', note: 'fresh' },
        { qty: 1, unit: 'tbsp', name: 'simple syrup', note: 'optional, for extra smoothness' },
        { qty: 0.5, unit: 'tsp', name: 'orange bitters', note: 'optional, for depth' },
        { qty: 1, unit: 'pinch', name: 'salt' },
      ],
    },
    {
      title: 'Mix-ins',
      items: [
        { qty: 2, unit: 'tbsp', name: 'orange drops', note: 'optional, for bursts of flavour' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Whisk the orange juice, Aperol, sugar, lemon juice, orange zest, simple syrup and bitters (if using) and a pinch of salt until the sugar has dissolved. Gently stir in the prosecco last, so it doesn’t foam over.',
    },
    {
      title: 'Freeze',
      text: 'Pour the base into an empty CREAMi pint, no higher than the MAX FILL line. Put the lid on and freeze on a level surface for 24 hours.',
    },
    {
      title: 'Process',
      text: 'Take the lid off, place the pint in the outer bowl and run the SORBET program.',
      program: 'Sorbet',
    },
    {
      title: 'Re-spin if needed',
      text: 'Looks crumbly? Add a tablespoon of orange juice and run RE-SPIN until it is smooth and creamy.',
      program: 'Re-spin',
    },
    {
      title: 'Add the mix-ins',
      text: 'Use a spoon to make a hole down the middle of the ice cream, add the orange drops and run the MIX-IN program. Keep a few back to swirl in just before serving.',
      program: 'Mix-in',
    },
  ],
  tips: [
    'Let the mixture chill well in the fridge before freezing for a more vibrant taste.',
    'For a softer sorbet, let it stand at room temperature for 3–5 minutes before scooping.',
    'Contains alcohol, so not for children. Don’t add extra Aperol or prosecco: more alcohol keeps the sorbet from setting.',
  ],
  translations: {
    nl: {
      name: 'Aperol-spritzsorbet',
      tagline: 'Bitterzoete sinaasappel met een vleugje prosecco',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 180, unit: 'ml', name: 'sinaasappelsap', note: 'versgeperst' },
            { qty: 120, unit: 'ml', name: 'Aperol' },
            { qty: 120, unit: 'ml', name: 'prosecco', note: 'gekoeld' },
            { qty: 100, unit: 'g', name: 'suiker', note: 'of naar smaak' },
            { qty: 2, unit: 'tbsp', name: 'citroensap', note: 'vers' },
            { qty: 1, unit: 'tsp', name: 'sinaasappelrasp', note: 'vers' },
            { qty: 1, unit: 'tbsp', name: 'suikersiroop', note: 'optioneel, voor extra zachtheid' },
            { qty: 0.5, unit: 'tsp', name: 'sinaasappelbitter', note: 'optioneel, voor diepte' },
            { qty: 1, unit: 'pinch', name: 'zout' },
          ],
        },
        {
          title: 'Mix-ins',
          items: [
            { qty: 2, unit: 'tbsp', name: 'sinaasappelsnoepjes', note: 'optioneel, voor uitbarstingen van smaak' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Klop het sinaasappelsap, de Aperol, de suiker, het citroensap, de sinaasappelrasp, de suikersiroop en de bitter (als je die gebruikt) en een snufje zout door elkaar tot de suiker is opgelost. Roer de prosecco er als laatste voorzichtig door, zodat het niet overschuimt.',
        },
        {
          title: 'Invriezen',
          text: 'Giet de basis in een lege CREAMi-pint, niet hoger dan de MAX FILL-lijn. Doe het deksel erop en vries 24 uur in op een vlakke ondergrond.',
        },
        {
          title: 'Draaien',
          text: 'Haal het deksel eraf, zet de pint in de buitenkom en start het programma SORBET.',
          program: 'Sorbet',
        },
        {
          title: 'Zo nodig re-spin',
          text: 'Ziet het er kruimelig uit? Voeg een eetlepel sinaasappelsap toe en draai RE-SPIN tot het glad en romig is.',
          program: 'Re-spin',
        },
        {
          title: 'Mix-ins toevoegen',
          text: 'Maak met een lepel een kuiltje tot op de bodem, doe de sinaasappelsnoepjes erin en start het programma MIX-IN. Houd er een paar apart om er vlak voor het serveren doorheen te roeren.',
          program: 'Mix-in',
        },
      ],
      tips: [
        'Laat het mengsel voor het invriezen goed afkoelen in de koelkast voor een frissere smaak.',
        'Voor een zachtere sorbet laat je hem 3–5 minuten op kamertemperatuur staan voor je schept.',
        'Bevat alcohol, dus niet voor kinderen. Doe er geen extra Aperol of prosecco bij: met meer alcohol wordt de sorbet niet stevig.',
      ],
    },
  },
}
