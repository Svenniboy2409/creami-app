import type { LucideIcon } from 'lucide-react'
import { useEffect, useRef, type ReactNode } from 'react'

interface Props {
  open: boolean
  onClose: () => void
  title: string
  children: ReactNode
}

/** Bottom sheet built on <dialog> for focus handling, Escape and backdrop. */
export function Sheet({ open, onClose, title, children }: Props) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === ref.current) onClose()
      }}
      aria-label={title}
      className="m-0 mx-auto mt-auto max-h-[85dvh] w-full max-w-md overflow-y-auto rounded-t-[2rem] bg-cream p-0 text-ink shadow-soft backdrop:bg-ink/40 backdrop:backdrop-blur-[2px] open:animate-fade-up"
    >
      <div className="pb-safe px-5 pt-3">
        <div className="mx-auto mb-4 h-1.5 w-10 rounded-full bg-cream-deep" aria-hidden />
        <h2 className="mb-4 text-xl font-semibold">{title}</h2>
        <div className="pb-6">{children}</div>
      </div>
    </dialog>
  )
}

export function SheetAction({
  icon: Icon,
  label,
  detail,
  onClick,
  danger = false,
}: {
  icon: LucideIcon
  label: string
  detail?: string
  onClick: () => void
  danger?: boolean
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center gap-3 rounded-2xl bg-white p-3 text-left shadow-sm transition-transform active:scale-[0.98]"
    >
      <span className={`grid size-10 shrink-0 place-items-center rounded-full ${danger ? 'bg-strawberry-soft text-raspberry' : 'bg-cream-deep text-ink'}`}>
        <Icon className="size-5" aria-hidden />
      </span>
      <span>
        <span className={`block font-bold ${danger ? 'text-raspberry' : ''}`}>{label}</span>
        {detail && <span className="block text-sm text-ink-soft">{detail}</span>}
      </span>
    </button>
  )
}
