import { CATEGORIES } from '../data/creami'
import { FLAVORS, type FlavorLook } from '../data/flavors'
import { useLibrary } from '../hooks/libraryContext'
import type { Recipe } from '../types/recipe'
import { TONES } from './tone'

// Where the bits sit on the scoop, and how each kind is drawn.
const SPOTS: [number, number, number][] = [
  [45, 45, -20],
  [58, 37, 15],
  [71, 43, 40],
  [52, 51, 70],
  [65, 49, -35],
  [78, 52, 10],
  [39, 53, 55],
  [60, 44, -60],
]

function Bits({ bits }: { bits: NonNullable<FlavorLook['bits']> }) {
  return (
    <g>
      {SPOTS.map(([x, y, angle], i) => {
        const { color, shape } = bits[i % bits.length]
        const turn = `rotate(${angle} ${x} ${y})`
        if (shape === 'speck') return <circle key={i} cx={x} cy={y} r="0.9" fill={color} />
        if (shape === 'chunk') return <circle key={i} cx={x} cy={y} r="2.6" fill={color} />
        if (shape === 'chip') return <rect key={i} x={x - 2} y={y - 1.5} width="4" height="3" rx="0.8" fill={color} transform={turn} />
        return <path key={i} d={`M${x - 2} ${y - 1}l3 -1.4 1.4 2.4 -3.2 1.6z`} fill={color} transform={turn} />
      })}
    </g>
  )
}

/**
 * Recipe photo, or a pastel pint illustration when there is none: in the
 * flavour's own colours when the recipe names one, else in its category colour.
 * With "Illustrations instead of photos" on, the app's own recipes show their
 * illustration even though they have a photo; your own photos always show.
 */
export function RecipeImage({
  recipe,
  className = '',
}: {
  recipe: Pick<Recipe, 'image' | 'name' | 'category'> & Partial<Pick<Recipe, 'flavor' | 'origin'>>
  className?: string
}) {
  const { illustrations } = useLibrary()
  const drawn = illustrations && recipe.origin === 'curated' && recipe.flavor !== undefined
  if (recipe.image && !drawn) {
    return <img src={recipe.image} alt={recipe.name} loading="lazy" decoding="async" className={`size-full object-cover ${className}`} />
  }

  const flavor = recipe.flavor ? FLAVORS[recipe.flavor] : undefined
  const tone = TONES[CATEGORIES[recipe.category]?.tone ?? 'strawberry']
  const scoop = flavor?.scoop ?? '#fff'
  return (
    <div
      role="img"
      aria-label={recipe.name}
      className={`grid size-full place-items-center ${flavor ? '' : `bg-linear-to-br ${tone.gradient}`} ${className}`}
      style={flavor ? { background: `linear-gradient(135deg, ${flavor.from}, ${flavor.from} 45%, ${flavor.to})` } : undefined}
    >
      <svg viewBox="0 0 120 120" className="w-1/2 max-w-40 drop-shadow-[0_8px_12px_rgb(59_42_42/0.15)]" aria-hidden>
        <path d="M31 56a29 29 0 0 1 58 0z" fill={scoop} />
        <circle cx="36" cy="56" r="7" fill={scoop} />
        <circle cx="52" cy="58" r="6" fill={scoop} />
        <circle cx="70" cy="57" r="7" fill={scoop} />
        <circle cx="85" cy="56" r="6" fill={scoop} />
        {flavor && <ellipse cx="48" cy="38" rx="9" ry="4.5" fill="#fff" opacity=".28" transform="rotate(-25 48 38)" />}
        <path d="M27 60h66l-7 40a7 7 0 0 1-7 6H41a7 7 0 0 1-7-6z" className={flavor ? undefined : tone.fill} fill={flavor?.to} />
        <path d="M27 60h66l-1.2 7H28.2z" fill="#3b2a2a" opacity=".12" />
        <rect x="46" y="76" width="28" height="14" rx="7" fill="#fff" opacity=".85" />
        {flavor ? (
          flavor.bits && <Bits bits={flavor.bits} />
        ) : (
          <g strokeWidth="3" strokeLinecap="round">
            <path d="M48 38l4 -2" stroke="#f28ba8" />
            <path d="M62 33l3 3" stroke="#a8d5a2" />
            <path d="M74 42l4 1" stroke="#b8c4f0" />
            <path d="M56 47l-3 2" stroke="#ffc48c" />
          </g>
        )}
      </svg>
    </div>
  )
}
