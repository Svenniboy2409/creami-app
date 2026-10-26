import { useCallback, useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react'
import { ToastContext } from '../hooks/toastContext'

const SHOWN = 2200 // how long it stays readable
const FADE = 260 // must match the toast-out animation in index.css

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toast, setToast] = useState<{ id: number; text: string } | null>(null)
  const [leaving, setLeaving] = useState(false)
  const timers = useRef<ReturnType<typeof setTimeout>[]>([])
  const layer = useRef<HTMLDivElement>(null)

  const clear = () => {
    timers.current.forEach(clearTimeout)
    timers.current = []
  }

  // A toast that simply vanished looked like a glitch, so it fades: the
  // leaving class goes on first and the element is dropped once it has faded.
  const show = useCallback((text: string) => {
    clear()
    setToast((current) => ({ id: (current?.id ?? 0) + 1, text }))
    setLeaving(false)
    timers.current = [setTimeout(() => setLeaving(true), SHOWN), setTimeout(() => setToast(null), SHOWN + FADE)]
  }, [])

  useEffect(() => clear, [])

  // Sheets are modal dialogs in the browser's top layer, which no z-index can
  // reach. As a popover the toast joins that layer too, and showing it again
  // for every message puts it above whichever sheet opened last.
  useLayoutEffect(() => {
    const el = layer.current
    if (!el || typeof el.showPopover !== 'function') return
    if (el.matches(':popover-open')) el.hidePopover()
    if (toast) el.showPopover()
  }, [toast])

  return (
    <ToastContext.Provider value={show}>
      {children}
      <div
        ref={layer}
        popover="manual"
        aria-live="polite"
        className="pointer-events-none fixed inset-x-0 top-auto bottom-[calc(7rem+env(safe-area-inset-bottom))] z-[60] m-0 flex h-auto w-auto justify-center overflow-visible border-0 bg-transparent px-5 text-ink"
      >
        {toast && (
          <div
            key={toast.id}
            role="status"
            className={`max-w-full rounded-full bg-ink px-5 py-3 text-center text-sm font-bold text-cream shadow-soft ${
              leaving ? 'animate-toast-out' : 'animate-toast-in'
            }`}
          >
            {toast.text}
          </div>
        )}
      </div>
    </ToastContext.Provider>
  )
}
