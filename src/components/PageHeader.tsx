import type { ReactNode } from 'react'

export function PageHeader({ eyebrow, title, action }: { eyebrow?: string; title: string; action?: ReactNode }) {
  return (
    // In front of a sticky search row, whose background reaches up behind the
    // status bar: the title scrolls off the top edge rather than under it.
    <header className="relative z-[21] flex items-end justify-between gap-4 pb-5 pt-[calc(2rem+var(--safe-top))]">
      <div>
        {eyebrow && <p className="mb-1 text-sm font-bold uppercase tracking-[0.14em] text-raspberry">{eyebrow}</p>}
        <h1 className="text-[2rem] font-semibold leading-[1.1] tracking-tight">{title}</h1>
      </div>
      {action}
    </header>
  )
}
