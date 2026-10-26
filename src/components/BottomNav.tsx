import { BookHeart, Compass, Plus, type LucideIcon } from 'lucide-react'
import { Link, NavLink } from 'react-router'

function Tab({ to, label, icon: Icon }: { to: string; label: string; icon: LucideIcon }) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `flex flex-1 flex-col items-center gap-0.5 py-2 text-xs font-bold transition-colors ${
          isActive ? 'text-raspberry' : 'text-ink-soft hover:text-ink'
        }`
      }
    >
      {({ isActive }) => (
        <>
          <Icon className="size-6" strokeWidth={isActive ? 2.4 : 1.9} aria-hidden />
          <span>{label}</span>
          <span className={`size-1 rounded-full transition-opacity ${isActive ? 'bg-raspberry' : 'opacity-0'}`} />
        </>
      )}
    </NavLink>
  )
}

export function BottomNav() {
  return (
    <nav aria-label="Main" className="pb-safe fixed inset-x-0 bottom-0 z-30">
      <div className="mx-auto mb-3 max-w-md px-4">
        <div className="relative flex items-center rounded-[1.75rem] border border-white/70 bg-white/95 px-6 shadow-soft backdrop-blur-xl">
          <Tab to="/" label="Discover" icon={Compass} />
          <div className="w-20 shrink-0" aria-hidden />
          <Tab to="/library" label="Library" icon={BookHeart} />
          <Link
            to="/new"
            aria-label="Add a recipe"
            className="absolute left-1/2 top-0 grid size-16 -translate-x-1/2 -translate-y-1/3 place-items-center rounded-full bg-linear-to-br from-strawberry to-raspberry text-white shadow-lift ring-[6px] ring-cream transition-transform active:scale-95"
          >
            <Plus className="size-8" strokeWidth={2.6} aria-hidden />
          </Link>
        </div>
      </div>
    </nav>
  )
}
