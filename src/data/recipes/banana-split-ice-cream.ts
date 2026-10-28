import image from '../../assets/recipes/banana-split-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// From the "Discover a world of Ninja Creami flavours" cards, with the amounts
// shown there for a 24 oz pint, in millilitres and grams, and its photo cut
// from that card. The mix-ins go in after the first spin rather than into the
// base, so they stay in pieces.
export const bananaSplitIceCream: Recipe = {
  id: 'banana-split-ice-cream',
  origin: 'curated',
  name: 'Banana Split',
  tagline: 'Banana ice cream with all your favourite sundae toppings',
  image,
  flavor: 'banana-split',
  category: 'ice-cream',
  tags: ['egg-free', 'fruity', 'kid-friendly'],
  tastes: ['sweet', 'fruity', 'chocolatey'],
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
        { qty: 1, name: 'ripe banana', note: 'mashed' },
        { qty: 65, unit: 'g', name: 'sugar' },
        { qty: 1, unit: 'tsp', name: 'vanilla extract' },
      ],
    },
    {
      title: 'Mix-ins',
      items: [
        { qty: 4, unit: 'tbsp', name: 'mini chocolate chips' },
        { qty: 4, unit: 'tbsp', name: 'crushed pineapple', note: 'drained' },
        { qty: 4, unit: 'tbsp', name: 'strawberries', note: 'diced' },
        { qty: 2, unit: 'tbsp', name: 'nuts', note: 'chopped, optional' },
        { qty: 2, unit: 'tbsp', name: 'maraschino cherries', note: 'chopped' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Mash the banana until really smooth (or blend it with the milk), then whisk in the cream, sugar and vanilla until the sugar has dissolved.',
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
      text: 'Use a spoon to make a hole down the middle of the ice cream, add the chocolate chips, pineapple, strawberries, nuts and cherries, and run the MIX-IN program. If the pint gets too full, keep some back for the top.',
      program: 'Mix-in',
    },
  ],
  tips: [
    'The riper the banana, the sweeter and more flavourful the ice cream.',
    'Sundae style: top with whipped cream, chocolate syrup, extra nuts and a cherry.',
    'For a fun twist, swap the strawberries for peaches or mango.',
  ],
  translations: {
    nl: {
      name: 'Banana split',
      tagline: 'Bananenijs met al je favoriete sundae-toppings',
      ingredients: [
        {
          title: 'Basis',
          items: [
            { qty: 360, unit: 'ml', name: 'melk', note: 'elke soort' },
            { qty: 120, unit: 'ml', name: 'slagroom' },
            { qty: 1, name: 'rijpe banaan', note: 'geprakt' },
            { qty: 65, unit: 'g', name: 'suiker' },
            { qty: 1, unit: 'tsp', name: 'vanille-extract' },
          ],
        },
        {
          title: 'Mix-ins',
          items: [
            { qty: 4, unit: 'tbsp', name: 'mini-chocoladedruppels' },
            { qty: 4, unit: 'tbsp', name: 'ananas', note: 'fijngehakt en uitgelekt' },
            { qty: 4, unit: 'tbsp', name: 'aardbeien', note: 'in blokjes' },
            { qty: 2, unit: 'tbsp', name: 'noten', note: 'gehakt, optioneel' },
            { qty: 2, unit: 'tbsp', name: 'cocktailkersen', note: 'gehakt' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Prak de banaan heel fijn (of mix hem met de melk) en klop de room, de suiker en de vanille erdoor tot de suiker is opgelost.',
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
          text: 'Maak met een lepel een kuiltje tot op de bodem, doe de chocoladedruppels, de ananas, de aardbeien, de noten en de kersen erin en start het programma MIX-IN. Wordt de pint te vol, bewaar dan een deel voor erbovenop.',
          program: 'Mix-in',
        },
      ],
      tips: [
        'Hoe rijper de banaan, hoe zoeter en smaakvoller het ijs.',
        'Sundae-stijl: maak het af met slagroom, chocoladesaus, extra noten en een kers.',
        'Vervang de aardbeien eens door perzik of mango.',
      ],
    },
  },
}
