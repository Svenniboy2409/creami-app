# Creami Recipes

A mobile web app with frozen treats for every Ninja CREAMi: the Original, Breeze, Deluxe and Swirl (Scoop & Swirl).

- **Discover**: hand-picked recipes with photos, ingredients, a step-by-step method and the right Creami program for each step. Search forgives typos ("vanila" finds Vanilla) and the search bar stays at the top while you scroll. Chip rows for category and taste sit on the page; the filter sheet adds machine, program and tags.
- **+**: add your own recipes in a pop-up, with a photo taken on your phone. Not finished yet? **Save as draft**, and the + button (which shows how many drafts are waiting) offers to carry on with it next time.
- **Library**: opens on the favorites you saved with the heart; next to them your own recipes and **folders** you fill with any recipe. Tap the rearrange button to drag recipes and folders into your own order.
- **Settings** (the gear in the Library): English or Dutch, folders as tiles or a list, illustrations instead of photos for the app's own recipes, and backups.

On a recipe the photo runs to the very top of the screen. Choose a 16 oz pint (Original, Breeze, Swirl) or a 24 oz Deluxe pint and how many pints to fill (1 to 10); the amounts and servings follow, and the lines that change pop. The category and tag chips under the photo open Discover filtered on them, "Works with" crosses out machines that lack a program the recipe needs, the basic tips fold open under the recipe's own tips, and "Also try these flavours" links to similar recipes.

While the app is open, every page remembers where you were: Discover its search and filters, the Library its tab and search, every page its scroll position, and a recipe its pint size, pint count and ticked-off ingredients. Tap the active tab in the bottom bar to jump back to the top. A recipe you were still typing in the pop-up comes back even if your phone closed the app in between.

Sheets slide up and can be pulled down to close, and everything animates gently; with "reduce motion" switched on in your phone's settings the animations are turned off.

## Using the app

The app runs on GitHub Pages: <https://svenniboy2409.github.io/creami-app/>

To install it on your phone, open the link in Safari (iPhone) or Chrome (Android) and choose **Add to Home Screen**. It then opens full screen like a normal app and also works offline.

Your own recipes, favorites and folders are stored **only on that device**, in the browser's IndexedDB. Open **Library → ⚙ Settings → Export backup** now and then to save a backup file. You can also use that file to move everything to another phone with **Import backup**. Backups from earlier versions of the app still import.

## Development

```bash
npm install
npm run dev        # local dev server, http://localhost:5173/creami-app/
npm test           # unit tests (Vitest)
npm run lint       # oxlint
npm run typecheck  # TypeScript
npm run build      # production build in dist/
```

Built with Vite, React, TypeScript, Tailwind CSS v4, React Router (hash routing for GitHub Pages) and vite-plugin-pwa.

### Project layout

| Path | What |
| --- | --- |
| `src/types/recipe.ts` | The `Recipe` data model, flavours and tastes |
| `src/data/creami.ts` | Creami models and their programs (`MODEL_PROGRAMS`), programs, categories, tastes, tags, difficulties and the basic tips |
| `src/data/recipes/` | Curated recipes shown on Discover, one file each, listed in `index.ts` |
| `src/data/similar.ts` | Groups of similar recipes, for "Also try these flavours" |
| `src/data/flavors.ts` | Colours of each flavour's pint illustration |
| `src/assets/recipes/` | Photos for curated recipes |
| `src/lib/` | Storage (IndexedDB), pint scaling, quantity parsing, search and filters, machines, page memory, image compression, translations |
| `src/lib/strings-nl.ts` | The Dutch interface text, keyed by the English |
| `src/components/` | Cards, sheets, toasts, the filter sheet, folders, the drag-to-rearrange grid and `WholeWords` (titles that only hyphenate where a word can't fit) |
| `src/pages/` | Discover, Library, folder and recipe detail |
| `src/components/RecipeEditor.tsx`, `src/lib/recipeDraft.ts` | The add/edit recipe pop-up and drafts |

### Translations

Interface text goes through `t('English text')` from `useI18n()`; add the Dutch version to `src/lib/strings-nl.ts`. A test fails when a string has no Dutch version. Program names (Ice Cream, Gelato, Re-spin…) and "pint" stay in English, as on the machine. A curated recipe carries its Dutch text in `translations.nl`; your own recipes stay as you wrote them.

### Adding a curated recipe

Copy a recent recipe as the template, for example `src/data/recipes/biscoff-ice-cream.ts` (from an infographic card, 24 oz) or `src/data/recipes/smores-ice-cream.ts` (from a web page, 16 oz, with a source). The rules for what goes in it are under **Recipes** below; the tests in `src/data/recipes/recipes.test.ts` check most of them.

1. Put the photo in `src/assets/recipes/<slug>.jpg`.
2. Create `src/data/recipes/<slug>.ts` with `id: '<slug>'`, `origin: 'curated'`, the `image`, a `flavor` (a key in `src/data/flavors.ts`; add one there with its background, scoop and mix-in colours for a new flavour, so the illustration in **Settings → Illustrations instead of photos** fits), `category`, `tags`, `tastes`, `models`, `program`, `basePint`, `servings`, `difficulty`, `times`, the ingredient groups, the steps, `tips` and a full Dutch `translations.nl`. A recipe from a website or person also gets `credits: { author, url }`; the app doesn't show it, it is there for reference.
3. Add it to `CURATED_RECIPES` in `src/data/recipes/index.ts`, under the comment for its source; keep the imports in alphabetical order.
4. If it goes with other recipes (the same flavour, or nearly the same name), add it to a group in `src/data/similar.ts`, or start a group.

A base or other recipe that is meant to be flavoured can also list `ideas: [{ name: 'Cookie Dough', recipeId: 'cookie-dough-ice-cream' }]`; they show first under "Also try these flavours", and the ones with a `recipeId` open that recipe.

## Working on this project

Read this before changing anything: it is how the owner wants the app built, agreed over many rounds. It holds for every session, also one that starts fresh.

### Working with the owner

- The owner writes in **Dutch**: answer and report in Dutch. Code, comments, commit messages and this README are in English.
- **Ask** when a choice is the owner's to make (what a feature should do, how something should look, what to do with an unclear recipe), with a recommended option first. Don't ask what the code or these rules already answer.
- **Never change the cocktail app** (`svenniboy2409/cocktail-app`), even if it is in the session. It is only a reference for how features there look and behave; all changes go into this repository.
- Work on **`main`** and push there directly; every push deploys (see Deployment). Before a push, `npm run lint`, `npm run typecheck`, `npm test` and `npm run build` must all pass, and the change must be checked in a browser (below). After the push, wait for the **Build & deploy** run on that commit to succeed.
- Afterwards, tell the owner in Dutch what changed, with **lists or tables of what was changed** (which recipes, from what to what), what was left out and why, and anything you could not check (for example on an iPhone).
- Commit messages: a short title in the imperative, then why and what in a few lines.

### Checking in a browser

Chromium and Playwright are installed in the cloud sessions. Start `npx vite --port 5173 --strictPort` in the background and run a Playwright script with `NODE_PATH=$(npm root -g) node script.cjs` against `http://localhost:5173/creami-app/`, at phone size (390 × 844, also 360 wide for long words). Set the language with `localStorage.setItem('creami:lang', 'nl')` (or `'en'`), the illustrations with `localStorage.setItem('creami:illustrations', 'on')`, then reload. Check both languages, take screenshots and look at them, and make sure there are no console errors. For animations, sample positions every frame with `requestAnimationFrame` rather than trusting a single screenshot.

### Design

- Creami pastel style: cream, strawberry, pistachio, vanilla; Fraunces for headings, Nunito for text; round shapes.
- **Everything animates gently**, and `prefers-reduced-motion` turns it off. Animate one property where possible (one `transform`), not two that must stay in step: Safari can start them a frame apart.
- Behind the status bar there is no coloured band; only once the search row sticks does a frosted strip (blur below, cream on top) fade in behind the clock. iOS caches the status-bar style of a home-screen app: after changing it, remove and add the app again to see it.
- Titles wrap between whole words (`WholeWords`); only a word wider than a line may be hyphenated.
- Discover shows chip rows for **category** and **taste**; the filter sheet has, in order, machine, category, taste, program and tags. Chips only list values that occur in the recipes; the machines always show all four.
- Pages remember their state **while the app is open** (`src/lib/pageMemory.ts`), not after it closes. The Library opens on **Favorites**.

### Recipes

**Where they come from.** Infographic cards (the "Discover a world of Ninja Creami flavours" series and earlier flavour and base lists), screenshots, web pages and YouTube Shorts. Some sites are blocked by the session's network settings (georgeats.com and stroller-envy.com were): then say which host, and ask the owner for screenshots or to allow the domain. YouTube itself answers, but asks a cloud session to sign in ("confirm you're not a bot"), so yt-dlp can't fetch a video; don't try to get round that. The owner sends a screen recording instead, with the subtitles on (played at 2× and split into parts under 30 MB), plus screenshots of the description or the pinned comment, which is where the amounts are. Take two frames a second with `ffmpeg`, lay them out as contact sheets and read the subtitles and the screen.

**Never make up a recipe.** Write the steps and tips in your own words, but keep what the source says. Where the source is unclear and you read it one way (say "1 cup melted chocolate" taken as a cup of chips, melted), say so in the comment at the top of the file and tell the owner. Leave out what contradicts the source's own recipe card, and say so.

**Names.** Every recipe has a unique name in English and Dutch (a test checks it). A recipe the owner sends is added as a **new recipe**, unless they say otherwise, even when the app already has one of the same name: give it a name that tells them apart, like "Creamy Strawberry" next to "Strawberry Ice Cream" or "Maple Coffee Ice Cream" next to "Coffee Ice Cream". A card that is identical to one already in the app changes nothing.

**Amounts.** Millilitres and grams for anything measured, tablespoons and teaspoons (`tbsp`, `tsp`) and `pinch` for small amounts, never cups. Amounts from an infographic card are the ones on the card, for a **24 oz pint** (`basePint: 24`, servings `'4–6'`). A recipe from elsewhere is for **one 16 oz pint** (`basePint: 16`); if the source makes several pints at once, divide it and add a tip to set the pint counter to that number. A source made in a Deluxe pint (Sara J Sweets' videos are) keeps its amounts for one 24 oz pint. "Milk to the MAX FILL line" stays an ingredient without an amount, with that as its note. Write text so it still holds at another pint size or count: no fixed amounts in steps or notes ("the marshmallows from the base", not "the 25 g marshmallows"). In tips, join a number and its unit with ` ` so they never break over two lines.

**Ingredient groups.** Every group has one of three headings: `Base` (Dutch `Basis`), `Mix-ins` (what goes in with MIX-IN after the first spin) and `Toppings` (only for on top when serving). A test checks it.

**Method.** The standard steps are: make the base; freeze (pour into an empty CREAMi pint, no higher than MAX FILL, lid on, level surface, 24 hours); process; re-spin if needed; add the mix-ins (make a hole down the middle, add them, run MIX-IN); and, where it applies, serve or swirl. **Mix-ins always go in after the first spin**, never into the base before freezing, even when the source says so: they stay crunchy and in pieces that way. Fruit or a sauce meant to flavour the whole ice cream does go into the base.

**Programs and machines.** Sorbets (fruit and water, no dairy) run on `Sorbet`, even if a card says Ice Cream. A Greek yogurt base runs on `Frozen Yogurt`; protein bases such as cottage cheese on `Lite Ice Cream`. List in `models` only the machines that have every program the recipe runs: `MODEL_PROGRAMS` in `src/data/creami.ts` says which has which (Frozen Yogurt is only on the Deluxe and the Swirl). The machine filter and "Works with" go by the same list, for the owner's own recipes too, and a test checks the curated ones.

**Tips.** Only what is particular to the recipe: variations from the source (named, with how to make them), what makes it work, and the source's own notes. Don't name the source's author in a tip ("in the original", not "Sara"): the app doesn't say who a recipe is from. The basics that go for every pint, in the order you make it (MAX FILL, 24 hours, hot water before the first spin, RE-SPIN, mix-ins after the first spin, leftovers), are `BASIC_TIPS` in `src/data/creami.ts` and are never repeated in a recipe. A recipe with alcohol gets a tip that it contains alcohol, how to leave it out, and not to add more (it keeps the ice cream from setting).

**Tags and tastes.** Tags come from `SUGGESTED_TAGS`. Only tag `egg-free`, `gluten-free`, `dairy-free` or `vegan` when every ingredient is (brownies and lemon curd contain egg, graham crackers gluten). Give every recipe one to three `tastes` (`sweet`, `fruity`, `refreshing`, `creamy`, `rich`, `chocolatey`, `nutty`, `healthy`).

**Difficulty.** `easy` for mixing, freezing and spinning, even with some blending, sieving or a few seconds in the microwave. `medium` when it needs heat or an extra preparation first: a saucepan, melting chocolate or marshmallows, toasting nuts, baking or heating cake mix, a swirl. `advanced` for what easily goes wrong: gelatin or agar to dissolve, fruit to cook, puree and cool, alcohol to balance.

**Prep time** (`times.prepMin`) is the active work until the pint goes in the freezer, cooling included, not the freezing: 5 minutes for whisking only; 10 with blending, crumbling or mix-ins; 15 for melting, blooming, pitting, seeding, squeezing, sieving or a lot of chopping; 20 or more for heating and cooling (pear and rum, with cooked pears that must cool completely, is 45).

**Dutch.** Every curated recipe has a full Dutch version: name, tagline, ingredients with exactly the same amounts and units, steps with the same programs, tips and ideas. Program names stay in English (ICE CREAM, MIX-IN…), as does "pint".

**Photos.** Cut the ice cream itself out of the card or photo, with no banner, frame line or text at the edges (zoom in on the corners to check). From a video, grab a full-size frame of the finished ice cream and crop below the subtitles and above the app's buttons. Landscape, about 1.23 : 1, saved at 500 × 405 px as JPEG (quality 84); scale a smaller crop up with Lanczos and a light unsharp mask. Python's Pillow is installed.

**Similar recipes.** Recipes with the same flavour or nearly the same name go in a group in `src/data/similar.ts`; each one then links to the others, both ways. Tell the owner which recipes you linked.

## Deployment

`.github/workflows/deploy.yml` lints, tests and builds every push and pull request. A push to `main` also deploys the app to GitHub Pages.

One-time setup: in the repository, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.
