import { Heart } from 'lucide-react'
import { useLibrary } from '../hooks/libraryContext'

export function FavoriteButton({ id, name, className = '' }: { id: string; name: string; className?: string }) {
  const { favorites, toggleFavorite } = useLibrary()
  const active = favorites.has(id)
  return (
    <button
      type="button"
      onClick={() => void toggleFavorite(id)}
      aria-pressed={active}
      aria-label={active ? `Remove ${name} from favorites` : `Save ${name} to favorites`}
      className={`grid size-9 place-items-center rounded-full bg-white/90 shadow-sm backdrop-blur transition-transform active:scale-90 ${className}`}
    >
      <Heart
        className={`size-[18px] transition-colors ${active ? 'fill-raspberry text-raspberry' : 'text-ink-soft'}`}
        strokeWidth={2.2}
        aria-hidden
      />
    </button>
  )
}
