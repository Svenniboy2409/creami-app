import { Heart } from 'lucide-react'
import { useState, type CSSProperties } from 'react'
import { useI18n } from '../hooks/i18nContext'
import { useLibrary } from '../hooks/libraryContext'
import { useToast } from '../hooks/toastContext'

// Six sprinkles in the app's flavours, thrown out in a ring.
const SPRINKLES = ['bg-strawberry', 'bg-pistachio', 'bg-mango', 'bg-blueberry', 'bg-raspberry', 'bg-vanilla-deep'].map((color, i) => {
  const angle = (i / 6) * Math.PI * 2 - Math.PI / 2
  return { color, dx: `${Math.round(Math.cos(angle) * 22)}px`, dy: `${Math.round(Math.sin(angle) * 22)}px` }
})

export function FavoriteButton({
  id,
  name,
  className = '',
  toast = false,
}: {
  id: string
  name: string
  className?: string
  /** Confirm the change with a toast, for places where the heart is the main action. */
  toast?: boolean
}) {
  const { favorites, toggleFavorite } = useLibrary()
  const { t } = useI18n()
  const showToast = useToast()
  const active = favorites.has(id)
  // Bumped each time the heart is switched on, so the pop replays every time.
  const [pops, setPops] = useState(0)

  const onClick = () => {
    if (!active) setPops((n) => n + 1)
    void toggleFavorite(id)
    if (toast) showToast(t(active ? 'Removed from favorites' : 'Saved to favorites'))
  }

  const popping = active && pops > 0
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      aria-label={t(active ? 'Remove {name} from favorites' : 'Save {name} to favorites', { name })}
      className={`grid size-9 place-items-center rounded-full bg-white/90 shadow-sm backdrop-blur transition-transform active:scale-90 ${className}`}
    >
      {/* Its own positioned box, so the sprinkles centre on the heart whether
          the button itself is placed absolutely (cards) or in a row (detail). */}
      <span className="relative grid place-items-center">
        <Heart
          key={pops}
          className={`size-[18px] transition-colors ${active ? 'fill-raspberry text-raspberry' : 'text-ink-soft'} ${popping ? 'animate-heart-pop' : ''}`}
          strokeWidth={2.2}
          aria-hidden
        />
        {popping && (
          <span key={`s${pops}`} aria-hidden className="pointer-events-none absolute inset-0">
            {SPRINKLES.map((s, i) => (
              <span
                key={i}
                className={`absolute left-1/2 top-1/2 h-1.5 w-1.5 animate-sprinkle rounded-full ${s.color}`}
                style={{ '--dx': s.dx, '--dy': s.dy, animationDelay: '90ms' } as CSSProperties}
              />
            ))}
          </span>
        )}
      </span>
    </button>
  )
}
