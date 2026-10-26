import type { LucideIcon } from 'lucide-react'
import { useEffect, useRef, useState, type PointerEvent, type ReactNode } from 'react'

interface Props {
  open: boolean
  onClose: () => void
  title: string
  children: ReactNode
  /** Sits at the right of the title, e.g. a "Reset" or "Done" button. */
  action?: ReactNode
  /** Stays pinned below the scrolling content, e.g. a "Show 5 recipes" button. */
  footer?: ReactNode
}

const CLOSE_MS = 260 // must match the slide-out transition below
const DISMISS_PX = 110 // how far the sheet has to be pulled down to let go of it
const FLICK = 0.6 // px/ms: a quick flick closes it even when pulled less far

// Pages behind an open sheet stay where they are. Counted, because a sheet can
// open from inside another one.
let locks = 0
function lockPage(lock: boolean) {
  locks = Math.max(0, locks + (lock ? 1 : -1))
  document.documentElement.classList.toggle('sheet-open', locks > 0)
}

/**
 * Bottom sheet built on <dialog> for focus handling and Escape. It slides up
 * when opened, can be pulled down by its grip to close, and slides away again
 * when `open` turns false — so callers only ever flip `open`.
 */
export function Sheet({ open, onClose, title, children, action, footer }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  // Still on screen while it slides out after `open` has gone false.
  const [shown, setShown] = useState(open)
  const [dragY, setDragY] = useState(0)
  const [dragging, setDragging] = useState(false)
  // Measured when a drag starts, so the backdrop can fade in proportion to it.
  const [height, setHeight] = useState(600)
  const drag = useRef<{ startY: number; lastY: number; lastT: number; speed: number } | null>(null)

  if (open && !shown) setShown(true)
  const closing = shown && !open

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open) {
      if (!dialog.open) dialog.showModal()
      return
    }
    if (!dialog.open) return
    const timer = setTimeout(() => {
      dialog.close()
      setShown(false)
      setDragY(0)
    }, CLOSE_MS)
    return () => clearTimeout(timer)
  }, [open])

  useEffect(() => {
    if (!shown) return
    lockPage(true)
    return () => lockPage(false)
  }, [shown])

  const handle = {
    onPointerDown: (event: PointerEvent<HTMLDivElement>) => {
      if (event.button !== 0 || (event.target as HTMLElement).closest('button, a, input')) return
      drag.current = { startY: event.clientY, lastY: event.clientY, lastT: event.timeStamp, speed: 0 }
      setHeight(panelRef.current?.offsetHeight || 600)
      setDragging(true)
      try {
        event.currentTarget.setPointerCapture(event.pointerId)
      } catch {
        // Capture not supported; the drag still works while the finger stays on the grip.
      }
    },
    onPointerMove: (event: PointerEvent<HTMLDivElement>) => {
      const d = drag.current
      if (!d) return
      const dt = event.timeStamp - d.lastT
      if (dt > 0) d.speed = (event.clientY - d.lastY) / dt
      d.lastY = event.clientY
      d.lastT = event.timeStamp
      setDragY(Math.max(0, event.clientY - d.startY))
    },
    onPointerUp: () => release(),
    onPointerCancel: () => release(),
  }

  function release() {
    const d = drag.current
    if (!d) return
    drag.current = null
    setDragging(false)
    if (dragY > DISMISS_PX || (dragY > 24 && d.speed > FLICK)) onClose()
    else setDragY(0)
  }

  // How far the sheet has travelled towards closed, 0 → 1, so the backdrop
  // brightens in step with the finger.
  const progress = Math.min(1, dragY / height)

  const panelStyle = closing
    ? { transform: 'translateY(100%)', transition: `transform ${CLOSE_MS}ms cubic-bezier(0.4, 0, 1, 1)` }
    : { transform: `translateY(${dragY}px)`, transition: dragging ? 'none' : 'transform 320ms cubic-bezier(0.2, 0.9, 0.3, 1.1)' }
  const backdropStyle = {
    opacity: closing ? 0 : 1 - progress,
    transition: dragging ? 'none' : `opacity ${CLOSE_MS}ms ease`,
  }

  return (
    <dialog
      ref={dialogRef}
      aria-label={title}
      onCancel={(event) => {
        // Escape: slide out like every other way of closing.
        event.preventDefault()
        onClose()
      }}
      onClose={() => {
        if (open) onClose()
      }}
      className="fixed inset-0 m-0 h-full max-h-none w-full max-w-none overflow-hidden bg-transparent p-0 text-ink backdrop:bg-transparent"
    >
      {shown && (
        <>
          <div className="absolute inset-0 animate-backdrop-in bg-ink/40 backdrop-blur-[2px]" style={backdropStyle} onClick={onClose} aria-hidden />
          <div
            ref={panelRef}
            className="absolute inset-x-0 bottom-0 mx-auto flex max-h-[88dvh] w-full max-w-md animate-sheet-up flex-col rounded-t-[2rem] bg-cream shadow-[0_-12px_40px_-12px_rgb(59_42_42/0.35)]"
            style={panelStyle}
          >
            <div {...handle} className="shrink-0 cursor-grab touch-none select-none px-5 pt-3 active:cursor-grabbing">
              <div
                className={`mx-auto mb-3 h-1.5 w-10 rounded-full transition-colors ${dragging ? 'bg-strawberry' : 'bg-cream-deep'}`}
                aria-hidden
              />
              <div className="flex min-h-9 items-center justify-between gap-3 pb-3">
                <h2 className="text-xl font-semibold">{title}</h2>
                {action}
              </div>
            </div>
            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 pb-6 pt-1">{children}</div>
            <div className="pb-safe shrink-0">{footer && <div className="border-t border-cream-deep px-5 pb-4 pt-3">{footer}</div>}</div>
          </div>
        </>
      )}
    </dialog>
  )
}

/** The small text button that sits in a sheet's header. */
export function SheetHeaderButton({ children, onClick, disabled }: { children: ReactNode; onClick: () => void; disabled?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="rounded-full px-3 py-1.5 text-sm font-extrabold text-raspberry transition-[opacity,transform] active:scale-95 disabled:opacity-35"
    >
      {children}
    </button>
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
