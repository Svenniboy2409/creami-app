import { IceCreamBowl, Snowflake } from 'lucide-react'
import { Link } from 'react-router'
import { CATEGORIES } from '../data/creami'
import { useI18n } from '../hooks/i18nContext'
import type { Recipe } from '../types/recipe'
import { FavoriteButton } from './FavoriteButton'
import { RecipeImage } from './RecipeImage'
import { TONES } from './tone'

export function RecipeCard({
  recipe: original,
  linkTo,
  still = false,
}: {
  recipe: Recipe
  /** Where the card leads; the recipe's own page unless given. */
  linkTo?: string
  /** While cards are being rearranged they are things you drag, not links you follow. */
  still?: boolean
}) {
  const { t, localize } = useI18n()
  const recipe = localize(original)
  const category = CATEGORIES[recipe.category] ?? CATEGORIES.other
  const tone = TONES[category.tone]

  const body = (
    <>
      <div className="relative aspect-square overflow-hidden rounded-[1.15rem]">
        <RecipeImage recipe={recipe} />
        <span className={`absolute left-2 top-2 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-extrabold backdrop-blur ${tone.text}`}>
          {t(category.label)}
        </span>
      </div>
      <div className="px-2 pb-2 pt-2.5">
        <h3 className="line-clamp-2 min-h-[2.75em] text-[15px] font-semibold leading-snug">{recipe.name}</h3>
        <p className="mt-1.5 flex items-center gap-1 text-xs font-semibold text-ink-soft">
          <IceCreamBowl className="size-3.5 shrink-0" aria-hidden />
          <span className="truncate">{recipe.program}</span>
          <span aria-hidden className="mx-0.5 text-ink-faint">·</span>
          <Snowflake className="size-3.5 shrink-0" aria-hidden />
          <span className="shrink-0">{t('{n} h', { n: recipe.times.freezeHours })}</span>
        </p>
      </div>
    </>
  )

  return (
    <div className="relative rounded-tile bg-white p-1.5 shadow-soft transition-transform active:scale-[0.98]">
      {still ? (
        <div className="pointer-events-none select-none">{body}</div>
      ) : (
        <Link to={linkTo ?? `/recipe/${recipe.id}`} className="block rounded-tile focus-visible:outline-offset-4">
          {body}
        </Link>
      )}
      {!still && <FavoriteButton id={recipe.id} name={recipe.name} className="absolute right-3.5 top-3.5" />}
    </div>
  )
}

/** How long each card waits for the one before it, and how many get to wait at all. */
const STAGGER_MS = 45
const STAGGERED = 10

export function RecipeGrid({ recipes, linkTo }: { recipes: Recipe[]; linkTo?: (recipe: Recipe) => string }) {
  return (
    <ul className="grid grid-cols-2 gap-3">
      {recipes.map((recipe, index) => (
        // The entrance runs on the list item so it can't hold on to the card's
        // own transform, which the press-down scale needs.
        <li key={recipe.id} className="animate-fade-up" style={{ animationDelay: `${Math.min(index, STAGGERED) * STAGGER_MS}ms` }}>
          <RecipeCard recipe={recipe} linkTo={linkTo?.(recipe)} />
        </li>
      ))}
    </ul>
  )
}
