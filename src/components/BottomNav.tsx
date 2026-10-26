import { BookHeart, Compass, Plus, type LucideIcon } from 'lucide-react'
import { NavLink, useLocation } from 'react-router'
import { useI18n } from '../hooks/i18nContext'
import { useLibrary } from '../hooks/libraryContext'
import { useRecipeEditor } from '../hooks/recipeEditorContext'

function Tab({ to, label, icon: Icon, alsoActive = false }: { to: string; label: string; icon: LucideIcon; alsoActive?: boolean }) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `flex flex-1 flex-col items-center gap-0.5 py-2 text-xs font-bold transition-colors ${
          isActive || alsoActive ? 'text-raspberry' : 'text-ink-soft hover:text-ink'
        }`
      }
    >
      {({ isActive }) => (
        <>
          <Icon
            className={`size-6 transition-transform duration-300 ${isActive || alsoActive ? 'scale-110' : ''}`}
            strokeWidth={isActive || alsoActive ? 2.4 : 1.9}
            aria-hidden
          />
          <span>{label}</span>
          <span className={`size-1 rounded-full transition-all duration-300 ${isActive || alsoActive ? 'bg-raspberry' : 'scale-0 opacity-0'}`} />
        </>
      )}
    </NavLink>
  )
}

export function BottomNav() {
  const { t } = useI18n()
  // A folder belongs to the Library, so its tab stays lit inside one.
  const inFolder = useLocation().pathname.startsWith('/folder/')
  const { openNew } = useRecipeEditor()
  const drafts = useLibrary().drafts.length
  return (
    <nav aria-label={t('Main')} className="pb-safe fixed inset-x-0 bottom-0 z-30">
      <div className="mx-auto mb-3 max-w-md px-4">
        <div className="relative flex items-center rounded-[1.75rem] border border-white/70 bg-white/95 px-6 shadow-soft backdrop-blur-xl">
          <Tab to="/" label={t('Discover')} icon={Compass} />
          <div className="w-20 shrink-0" aria-hidden />
          <Tab to="/library" label={t('Library')} icon={BookHeart} alsoActive={inFolder} />
          <button
            type="button"
            onClick={openNew}
            aria-label={drafts ? t('Add a recipe ({n} drafts waiting)', { n: drafts }) : t('Add a recipe')}
            className="absolute left-1/2 top-0 grid size-16 -translate-x-1/2 -translate-y-1/3 place-items-center rounded-full bg-linear-to-br from-strawberry to-raspberry text-white shadow-lift ring-[6px] ring-cream transition-transform active:scale-95"
          >
            <Plus className="size-8" strokeWidth={2.6} aria-hidden />
            {/* Drafts waiting to be finished. */}
            {drafts > 0 && (
              <span
                key={drafts}
                aria-hidden
                className="absolute -right-1 -top-1 grid h-6 min-w-6 animate-badge-pop place-items-center rounded-full bg-ink px-1.5 text-xs font-extrabold text-cream ring-[3px] ring-cream"
              >
                {drafts}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}
