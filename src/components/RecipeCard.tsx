import { IceCreamBowl, Snowflake } from 'lucide-react'
import { Link } from 'react-router'
import { CATEGORIES } from '../data/creami'
import type { Recipe } from '../types/recipe'
import { FavoriteButton } from './FavoriteButton'
import { RecipeImage } from './RecipeImage'
import { TONES } from './tone'

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  const category = CATEGORIES[recipe.category] ?? CATEGORIES.other
  const tone = TONES[category.tone]
  return (
    <div className="relative animate-fade-up rounded-tile bg-white p-1.5 shadow-soft transition-transform active:scale-[0.98]">
      <Link to={`/recipe/${recipe.id}`} className="block rounded-tile focus-visible:outline-offset-4">
        <div className="relative aspect-square overflow-hidden rounded-[1.15rem]">
          <RecipeImage recipe={recipe} />
          <span className={`absolute left-2 top-2 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-extrabold backdrop-blur ${tone.text}`}>
            {category.label}
          </span>
        </div>
        <div className="px-2 pb-2 pt-2.5">
          <h3 className="line-clamp-2 min-h-[2.75em] text-[15px] font-semibold leading-snug">{recipe.name}</h3>
          <p className="mt-1.5 flex items-center gap-1 text-xs font-semibold text-ink-soft">
            <IceCreamBowl className="size-3.5 shrink-0" aria-hidden />
            <span className="truncate">{recipe.program}</span>
            <span aria-hidden className="mx-0.5 text-ink-faint">·</span>
            <Snowflake className="size-3.5 shrink-0" aria-hidden />
            <span className="shrink-0">{recipe.times.freezeHours} h</span>
          </p>
        </div>
      </Link>
      <FavoriteButton id={recipe.id} name={recipe.name} className="absolute right-3.5 top-3.5" />
    </div>
  )
}

export function RecipeGrid({ recipes }: { recipes: Recipe[] }) {
  return (
    <ul className="grid grid-cols-2 gap-3">
      {recipes.map((recipe) => (
        <li key={recipe.id}>
          <RecipeCard recipe={recipe} />
        </li>
      ))}
    </ul>
  )
}
