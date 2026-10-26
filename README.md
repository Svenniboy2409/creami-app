# Creami Recipes

A mobile web app with frozen treats for every Ninja CREAMi: the Original, Breeze, Deluxe and Swirl (Scoop & Swirl).

- **Discover**: hand-picked recipes with photos, ingredients, a step-by-step method and the right Creami program for each step. Search forgives typos ("vanila" finds Vanilla) and the search bar stays at the top while you scroll. Filter by category, machine, program and tags in the filter sheet.
- **+**: add your own recipes in a pop-up, with a photo taken on your phone. Not finished yet? **Save as draft**, and the + button (which shows how many drafts are waiting) offers to carry on with it next time.
- **Library**: your own recipes, the favorites you saved with the heart, and **folders** you fill with any recipe. Tap the rearrange button to drag recipes and folders into your own order.
- **Settings** (the gear in the Library): English or Dutch, folders as tiles or a list, and backups.

Every recipe can be converted between a 16 oz pint (Original, Breeze, Swirl) and a 24 oz Deluxe pint.

While the app is open, every page remembers where you were: Discover its search and filters, the Library its tab and search, every page its scroll position, and a recipe its pint size and ticked-off ingredients. Tap the active tab in the bottom bar to jump back to the top. A recipe you were still typing in the pop-up comes back even if your phone closed the app in between.

On a recipe the photo runs to the very top of the screen, and the amounts and servings convert between pint sizes. Sheets slide up and can be pulled down to close, and everything animates gently; with "reduce motion" switched on in your phone's settings the animations are turned off.

## Using the app

The app runs on GitHub Pages: <https://svenniboy2409.github.io/creami-app/>

To install it on your phone, open the link in Safari (iPhone) or Chrome (Android) and choose **Add to Home Screen**. It then opens full screen like a normal app and also works offline.

Your own recipes, favorites and folders are stored **only on that device**, in the browser's IndexedDB. Open **Library → ⚙ Settings → Export backup** now and then to save a backup file. You can also use that file to move everything to another phone with **Import backup**. Backups from earlier versions of the app still import.

## Development

```bash
npm install
npm run dev        # local dev server
npm test           # unit tests (Vitest)
npm run lint       # oxlint
npm run typecheck  # TypeScript
npm run build      # production build in dist/
```

Built with Vite, React, TypeScript, Tailwind CSS v4, React Router (hash routing for GitHub Pages) and vite-plugin-pwa.

### Project layout

| Path | What |
| --- | --- |
| `src/types/recipe.ts` | The `Recipe` data model |
| `src/data/creami.ts` | Creami models, programs, categories and tags |
| `src/data/recipes/` | Curated recipes shown on Discover |
| `src/assets/recipes/` | Photos for curated recipes |
| `src/lib/` | Storage (IndexedDB), pint scaling, quantity parsing, search, image compression, translations |
| `src/lib/strings-nl.ts` | The Dutch interface text, keyed by the English |
| `src/components/` | Cards, sheets, toasts, the filter sheet, folders and the drag-to-rearrange grid |
| `src/pages/` | Discover, Library, folder and recipe detail |
| `src/components/RecipeEditor.tsx`, `src/lib/recipeDraft.ts` | The add/edit recipe pop-up and drafts |

### Translations

Interface text goes through `t('English text')` from `useI18n()`; add the Dutch version to `src/lib/strings-nl.ts`. A test fails when a string has no Dutch version. Program names (Ice Cream, Gelato, Re-spin…) and "pint" stay in English, as on the machine. A curated recipe can carry its Dutch text in `translations.nl`; your own recipes stay as you wrote them.

### Adding a curated recipe

1. Put the photo in `src/assets/recipes/<slug>.jpg`, about 1200 px wide.
2. Create `src/data/recipes/<slug>.ts`:

   ```ts
   import type { Recipe } from '../../types/recipe'
   import image from '../../assets/recipes/<slug>.jpg'

   export const mySlug: Recipe = {
     id: '<slug>',
     origin: 'curated',
     name: 'Pistachio Gelato',
     image,
     category: 'gelato',
     tags: ['nutty'],
     models: ['original', 'breeze', 'deluxe'],
     program: 'Gelato',
     basePint: 16,
     times: { prepMin: 15, freezeHours: 24 },
     ingredients: [{ items: [{ qty: 250, unit: 'ml', name: 'whole milk' }] }],
     steps: [{ text: 'Process on Gelato.', program: 'Gelato' }],
   }
   ```

   No photo? Leave out `image` and set `flavor` (one of the keys in `src/data/flavors.ts`, e.g. `'mint-chip'`) to get a pint illustration in that flavour's colours. Add a new flavour there with its background, scoop and mix-in colours.

3. Optionally add a Dutch version under `translations: { nl: { name, tagline, description, ingredients, steps, tips } }`. Keep the same amounts and units in the translated ingredients.
4. Add it to the `CURATED_RECIPES` array in `src/data/recipes/index.ts`.

## Deployment

`.github/workflows/deploy.yml` lints, tests and builds every push and pull request. A push to `main` also deploys the app to GitHub Pages.

One-time setup: in the repository, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
