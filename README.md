# Creami Recipes

A mobile web app with frozen treats for every Ninja CREAMi: the Original, Breeze, Deluxe and Swirl (Scoop & Swirl).

- **Discover**: hand-picked recipes with photos, ingredients, a step-by-step method and the right Creami program for each step.
- **+**: add your own recipes, with a photo taken on your phone.
- **Library**: your own recipes and the favorites you saved with the heart.

Every recipe can be converted between a 16 oz pint (Original, Breeze, Swirl) and a 24 oz Deluxe pint.

## Using the app

The app runs on GitHub Pages: <https://svenniboy2409.github.io/creami-app/>

To install it on your phone, open the link in Safari (iPhone) or Chrome (Android) and choose **Add to Home Screen**. It then opens full screen like a normal app and also works offline.

Your own recipes and favorites are stored **only on that device**, in the browser's IndexedDB. Open **Library → ••• → Export backup** now and then to save a backup file. You can also use that file to move your recipes to another phone with **Import backup**.

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
| `src/lib/` | Storage (IndexedDB), pint scaling, quantity parsing, search, image compression |
| `src/pages/` | Discover, Library, recipe detail and the add/edit form |

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

3. Add it to the `CURATED_RECIPES` array in `src/data/recipes/index.ts`.

## Deployment

`.github/workflows/deploy.yml` lints, tests and builds every push and pull request. A push to `main` also deploys the app to GitHub Pages.

One-time setup: in the repository, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
