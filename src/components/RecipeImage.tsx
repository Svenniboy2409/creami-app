import { CATEGORIES } from '../data/creami'
import type { Recipe } from '../types/recipe'
import { TONES } from './tone'

/** Recipe photo, or a pastel pint illustration in the category colour when there is none. */
export function RecipeImage({ recipe, className = '' }: { recipe: Pick<Recipe, 'image' | 'name' | 'category'>; className?: string }) {
  if (recipe.image) {
    return <img src={recipe.image} alt={recipe.name} loading="lazy" decoding="async" className={`size-full object-cover ${className}`} />
  }

  const tone = TONES[CATEGORIES[recipe.category]?.tone ?? 'strawberry']
  return (
    <div role="img" aria-label={recipe.name} className={`grid size-full place-items-center bg-linear-to-br ${tone.gradient} ${className}`}>
      <svg viewBox="0 0 120 120" className="w-1/2 max-w-40 drop-shadow-[0_8px_12px_rgb(59_42_42/0.15)]" aria-hidden>
        <path d="M31 56a29 29 0 0 1 58 0z" fill="#fff" />
        <circle cx="36" cy="56" r="7" fill="#fff" />
        <circle cx="52" cy="58" r="6" fill="#fff" />
        <circle cx="70" cy="57" r="7" fill="#fff" />
        <circle cx="85" cy="56" r="6" fill="#fff" />
        <path d="M27 60h66l-7 40a7 7 0 0 1-7 6H41a7 7 0 0 1-7-6z" className={tone.fill} />
        <path d="M27 60h66l-1.2 7H28.2z" fill="#3b2a2a" opacity=".12" />
        <rect x="46" y="76" width="28" height="14" rx="7" fill="#fff" opacity=".85" />
        <g strokeWidth="3" strokeLinecap="round">
          <path d="M48 38l4 -2" stroke="#f28ba8" />
          <path d="M62 33l3 3" stroke="#a8d5a2" />
          <path d="M74 42l4 1" stroke="#b8c4f0" />
          <path d="M56 47l-3 2" stroke="#ffc48c" />
        </g>
      </svg>
    </div>
  )
}
