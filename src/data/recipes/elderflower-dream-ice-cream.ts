import image from '../../assets/recipes/elderflower-dream-ice-cream.jpg'
import type { Recipe } from '../../types/recipe'

// From the "Discover a world of Ninja Creami flavours" cards, with the amounts
// shown there for a 24 oz pint, in millilitres and grams, and its photo cut
// from that card.
export const elderflowerDreamIceCream: Recipe = {
  id: 'elderflower-dream-ice-cream',
  origin: 'curated',
  name: 'Elderflower Dream',
  tagline: 'Delicate, floral and beautifully refreshing',
  image,
  flavor: 'elderflower',
  category: 'ice-cream',
  tags: ['egg-free', 'gluten-free'],
  models: ['original', 'breeze', 'deluxe', 'swirl'],
  program: 'Ice Cream',
  basePint: 24,
  servings: '4–6',
  difficulty: 'easy',
  times: { prepMin: 10, freezeHours: 24 },
  ingredients: [
    {
      items: [
        { qty: 360, unit: 'ml', name: 'milk', note: 'or any milk you like' },
        { qty: 75, unit: 'g', name: 'sweetened condensed milk', note: 'or a sweetener of your choice' },
        { qty: 25, unit: 'g', name: 'sugar', note: 'or to taste' },
        { qty: 1.5, unit: 'tsp', name: 'elderflower syrup', note: 'or to taste' },
        { qty: 2, unit: 'tbsp', name: 'extra elderflower syrup', note: 'optional, for more flavour' },
        { qty: 60, unit: 'ml', name: 'heavy cream', note: 'optional, for extra richness' },
        { qty: 1, unit: 'pinch', name: 'salt', note: 'or to taste' },
        { qty: 1, unit: 'tbsp', name: 'lemon juice', note: 'brightens the flavour' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the base',
      text: 'Whisk the milk, condensed milk, sugar, elderflower syrup (plus the extra, for a stronger floral flavour), cream (if using), lemon juice and a pinch of salt until the sugar has dissolved. For an extra silky base, blend it with a stick blender and pour it through a sieve.',
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
      title: 'Serve',
      text: 'Top with a drizzle of elderflower syrup, a few edible flowers or a little lemon zest.',
    },
  ],
  tips: [
    'For an even bolder floral flavour, stir in a touch more elderflower syrup after spinning.',
    'A little lemon juice balances the sweetness and brings out the delicate floral notes.',
  ],
  translations: {
    nl: {
      name: 'Vlierbloesemdroom',
      tagline: 'Verfijnd, bloemig en heerlijk verfrissend',
      ingredients: [
        {
          items: [
            { qty: 360, unit: 'ml', name: 'melk', note: 'of elke melk die je lekker vindt' },
            { qty: 75, unit: 'g', name: 'gezoete gecondenseerde melk', note: 'of een zoetmiddel naar keuze' },
            { qty: 25, unit: 'g', name: 'suiker', note: 'of naar smaak' },
            { qty: 1.5, unit: 'tsp', name: 'vlierbloesemsiroop', note: 'of naar smaak' },
            { qty: 2, unit: 'tbsp', name: 'extra vlierbloesemsiroop', note: 'optioneel, voor meer smaak' },
            { qty: 60, unit: 'ml', name: 'slagroom', note: 'optioneel, voor extra romigheid' },
            { qty: 1, unit: 'pinch', name: 'zout', note: 'of naar smaak' },
            { qty: 1, unit: 'tbsp', name: 'citroensap', note: 'maakt de smaak frisser' },
          ],
        },
      ],
      steps: [
        {
          title: 'Basis maken',
          text: 'Klop de melk, de gecondenseerde melk, de suiker, de vlierbloesemsiroop (plus de extra siroop voor een sterkere bloemensmaak), de room (als je die gebruikt), het citroensap en een snufje zout door elkaar tot de suiker is opgelost. Voor een extra zijdezachte basis mix je hem met een staafmixer en giet je hem door een zeef.',
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
          title: 'Serveren',
          text: 'Maak het af met wat vlierbloesemsiroop, een paar eetbare bloemetjes of wat citroenrasp.',
        },
      ],
      tips: [
        'Voor een nog uitgesprokener bloemensmaak roer je er na het draaien nog wat vlierbloesemsiroop door.',
        'Een beetje citroensap houdt de zoetheid in balans en laat de fijne bloemige tonen beter uitkomen.',
      ],
    },
  },
}
