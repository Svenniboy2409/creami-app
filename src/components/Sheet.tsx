import type { LucideIcon } from 'lucide-react'
import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type PointerEvent, type ReactNode, type RefObject } from 'react'

interface Props {
  open: boolean
  onClose: () => void
  title: string
  children: ReactNode
  /** Sits at the right of the title, e.g. a "Reset" or "Done" button. */
  action?: ReactNode
  /** Stays pinned below the scrolling content, e.g. a "Show 5 recipes" button. */
  footer?: ReactNode
  /** Nearly full height whatever the content, for long forms. */
  tall?: boolean
  /** Changes when the sheet shows something else (a list, then a form): its height then glides to fit. */
  contentKey?: string | number | boolean
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

const KEYBOARD_GAP = 16 // room kept between the field being typed in and the keyboard
const FLING_MS = 160 // how far a flick carries the sheet on: its speed times this
// Moves the sheet into place. It springs back from a pull, but glides when it
// makes room for the keyboard: a spring would overshoot its bottom edge there.
const SPRING = 'cubic-bezier(0.2, 0.9, 0.3, 1.1)'
const GLIDE = 'cubic-bezier(0.2, 0.9, 0.3, 1)'

const NOT_TYPED = new Set(['button', 'checkbox', 'color', 'file', 'hidden', 'image', 'radio', 'range', 'reset', 'submit'])

/** A field that brings up the on-screen keyboard. */
function typesInto(el: EventTarget | null): el is HTMLElement {
  if (el instanceof HTMLTextAreaElement) return true
  if (el instanceof HTMLInputElement) return !NOT_TYPED.has(el.type)
  return el instanceof HTMLElement && el.isContentEditable
}

/** How far an element is moved up or down right now, partway through a transition or not. */
function shiftOf(el: HTMLElement) {
  const moved = getComputedStyle(el).transform
  return moved === 'none' ? 0 : new DOMMatrixReadOnly(moved).m42
}

/** Whether a list between the finger and the sheet can still scroll the way the finger pushes it. */
function scrollsOn(from: Element, sheet: Element, towardsEnd: boolean) {
  for (let el: Element | null = from; el && el !== sheet; el = el.parentElement) {
    if (el.scrollHeight <= el.clientHeight + 1) continue
    const overflow = getComputedStyle(el).overflowY
    if (overflow !== 'auto' && overflow !== 'scroll') continue
    if (towardsEnd ? el.scrollTop + el.clientHeight < el.scrollHeight - 1 : el.scrollTop > 0) return true
  }
  return false
}

/**
 * Room for the on-screen keyboard. On an iPhone the keyboard slides over the
 * bottom of the screen; the sheet stays where it is, as in the cocktail app,
 * and only rises as far as it takes to show the field being typed in. Its own
 * list scrolls first. Whatever is lower, the button at the bottom included,
 * stays under the keyboard; a swipe brings it up, but the sheet stops when its
 * bottom edge reaches the keyboard, so nothing under it ever shows. The
 * keyboard's return key does what that button does.
 *
 * The sheet does all of this moving itself. Left to Safari, the whole screen
 * shifts instead: it scrolls a field into view as it gets focus, and a swipe
 * scrolls on past the bottom of the sheet. Safari puts that back in one go when
 * the keyboard leaves, which made the sheet jump; now it glides back down.
 */
function useKeyboardRoom(
  active: boolean,
  dialog: RefObject<HTMLDialogElement | null>,
  panel: RefObject<HTMLDivElement | null>,
  pageY: { current: number },
) {
  const [raise, setRaise] = useState(0)
  // While a finger moves the sheet it follows without easing.
  const [following, setFollowing] = useState(false)

  useEffect(() => {
    const viewport = window.visualViewport
    const layer = dialog.current
    if (!active || !viewport || !layer) return
    let current = 0
    const raiseTo = (value: number) => {
      current = Math.max(0, value)
      setRaise(current)
    }
    // The keyboard is up when less of the page shows than it is tall (zooming aside).
    const keyboardUp = () => window.innerHeight - viewport.height * viewport.scale > 1
    // How much of the page lies under the keyboard: the furthest the sheet can
    // rise, which puts its bottom edge right on top of the keyboard.
    const underKeyboard = () => (keyboardUp() ? Math.max(0, window.innerHeight - viewport.offsetTop - viewport.height) : 0)

    // A field held up out of the keyboard's way for a moment; see onFocus.
    let held: { field: HTMLElement; transform: string; list: HTMLElement | null; listTop: number } | null = null
    const release = () => {
      if (!held) return
      const { field, transform, list, listTop } = held
      held = null
      field.style.transform = transform
      if (list && list.scrollTop !== listTop) list.scrollTop = listTop
    }

    let frame = 0
    const place = () => {
      release()
      if (!keyboardUp()) {
        raiseTo(0)
        // Typing can move the page behind the sheet; once the keyboard is gone, it goes back.
        if (window.scrollY !== pageY.current) window.scrollTo(0, pageY.current)
        return
      }
      const most = underKeyboard()
      let next = Math.min(current, most)
      const sheet = panel.current
      const field = document.activeElement
      if (sheet && typesInto(field) && sheet.contains(field)) {
        // Where the field is with the sheet in its place, wherever it is now on its way.
        const shift = shiftOf(sheet)
        const box = field.getBoundingClientRect()
        let top = box.top - shift
        let over = box.bottom - shift - next - (viewport.offsetTop + viewport.height - KEYBOARD_GAP)
        const list = field.closest<HTMLElement>('[data-sheet-body]')
        if (over > 0 && list) {
          const by = Math.min(over, Math.max(0, list.scrollHeight - list.clientHeight - list.scrollTop))
          list.scrollTop += by
          over -= by
          top -= by
        }
        if (over > 0) next += over
        // Swiped up so far that the field went out of sight at the top: back down to it.
        else next = Math.min(next, Math.max(0, top - viewport.offsetTop - KEYBOARD_GAP))
        next = Math.round(Math.min(next, most))
      }
      raiseTo(next)
    }
    const later = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(place)
    }

    // Safari scrolls the whole screen to a field the moment it gets focus, when
    // it reckons the keyboard will cover it — before the sheet has had a chance
    // to rise. For that moment the field is shown to Safari high up on the
    // screen, where no keyboard reaches; before anything is drawn it is back in
    // its place, and the sheet makes the room itself.
    const ios = /iPhone|iPad|iPod/.test(navigator.userAgent) || (/Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints > 1)
    const onFocus = (event: FocusEvent) => {
      const field = event.target
      const sheet = panel.current
      if (!ios || !sheet || !typesInto(field) || !sheet.contains(field)) return
      release()
      const high = viewport.offsetTop + window.innerHeight * 0.15
      const box = field.getBoundingClientRect()
      if (box.top > high) {
        const list = field.closest<HTMLElement>('[data-sheet-body]')
        held = { field, transform: field.style.transform, list, listTop: list?.scrollTop ?? 0 }
        field.style.transform = `translateY(${Math.round(high - box.top)}px)`
      }
      later()
    }
    // A field let go of, and no other one taken: the keyboard is on its way out,
    // so the sheet sets off down with it rather than after it.
    const onFocusOut = (event: FocusEvent) => {
      if (typesInto(event.relatedTarget)) return
      cancelAnimationFrame(frame)
      release()
      raiseTo(0)
    }

    // A finger on the sheet. Lists in it scroll as usual; everything else is up
    // to the sheet, so the screen itself never scrolls past it.
    let touch: { x: number; y: number; t: number; speed: number; mode?: 'scroll' | 'hold' | 'move' } | null = null
    const onTouchStart = (event: TouchEvent) => {
      const point = event.touches[0]
      touch = event.touches.length === 1 && point ? { x: point.clientX, y: point.clientY, t: event.timeStamp, speed: 0 } : null
    }
    const onTouchMove = (event: TouchEvent) => {
      const point = event.touches[0]
      // Two fingers: a pinch, left to the browser.
      if (!touch || event.touches.length !== 1 || !point) return
      const dx = point.clientX - touch.x
      const dy = point.clientY - touch.y
      if (!touch.mode) {
        const target = event.target instanceof Element ? event.target : null
        const sheet = panel.current
        // A sheet opened from inside this one handles its own touches.
        if (!target || !sheet || target.closest('dialog') !== layer) touch.mode = 'scroll'
        // The grip has its own drag, by pointer; nothing else moves meanwhile.
        else if (target.closest('[data-sheet-grip]')) touch.mode = 'hold'
        else if (Math.abs(dx) > Math.abs(dy) || scrollsOn(target, sheet, dy < 0)) touch.mode = 'scroll'
        else touch.mode = sheet.contains(target) ? 'move' : 'hold'
      }
      if (touch.mode === 'scroll') return
      if (event.cancelable) event.preventDefault()
      if (touch.mode === 'move') {
        const dt = event.timeStamp - touch.t
        if (dt > 0) touch.speed = dy / dt
        const next = Math.min(underKeyboard(), Math.max(0, current - dy))
        if (next !== current) {
          setFollowing(true)
          raiseTo(next)
        }
      }
      touch.x = point.clientX
      touch.y = point.clientY
      touch.t = event.timeStamp
    }
    const onTouchEnd = () => {
      const flick = touch?.mode === 'move' ? touch.speed : null
      touch = null
      if (flick === null) return
      setFollowing(false)
      // A flick carries on a little, as a list would, and still stops at the edge.
      raiseTo(Math.round(Math.min(underKeyboard(), Math.max(0, current - flick * FLING_MS))))
    }

    viewport.addEventListener('resize', later)
    viewport.addEventListener('scroll', later)
    document.addEventListener('focus', onFocus, true)
    document.addEventListener('focusin', later)
    document.addEventListener('focusout', onFocusOut)
    layer.addEventListener('touchstart', onTouchStart, { passive: true })
    layer.addEventListener('touchmove', onTouchMove, { passive: false })
    layer.addEventListener('touchend', onTouchEnd)
    layer.addEventListener('touchcancel', onTouchEnd)
    return () => {
      cancelAnimationFrame(frame)
      release()
      viewport.removeEventListener('resize', later)
      viewport.removeEventListener('scroll', later)
      document.removeEventListener('focus', onFocus, true)
      document.removeEventListener('focusin', later)
      document.removeEventListener('focusout', onFocusOut)
      layer.removeEventListener('touchstart', onTouchStart)
      layer.removeEventListener('touchmove', onTouchMove)
      layer.removeEventListener('touchend', onTouchEnd)
      layer.removeEventListener('touchcancel', onTouchEnd)
      setRaise(0)
      setFollowing(false)
    }
  }, [active, dialog, panel, pageY])

  return { raise, following }
}

/**
 * When a sheet starts showing something else, its height glides from what it
 * was to what the new content needs, instead of jumping.
 */
function useHeightGlide(panel: RefObject<HTMLDivElement | null>, key: Props['contentKey'], shown: boolean) {
  // The height before the change: kept up to date as the content grows or shrinks by itself.
  const last = useRef(0)
  const seen = useRef(key)

  useEffect(() => {
    const sheet = panel.current
    if (!shown || !sheet) return
    const observer = new ResizeObserver(() => {
      last.current = sheet.offsetHeight
    })
    observer.observe(sheet)
    return () => observer.disconnect()
  }, [panel, shown])

  useLayoutEffect(() => {
    const sheet = panel.current
    if (seen.current === key) return
    seen.current = key
    if (!sheet) return
    const from = last.current
    const to = sheet.offsetHeight
    last.current = to
    if (!from || from === to || window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
    sheet.animate([{ height: `${from}px` }, { height: `${to}px` }], { duration: 300, easing: 'cubic-bezier(0.2, 0.9, 0.3, 1)' })
  }, [panel, key])
}

/**
 * Bottom sheet built on <dialog> for focus handling and Escape. It slides up
 * when opened, can be pulled down by its grip to close, and slides away again
 * when `open` turns false — so callers only ever flip `open`.
 */
export function Sheet({ open, onClose, title, children, action, footer, tall = false, contentKey }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  // Still on screen while it slides out after `open` has gone false.
  const [shown, setShown] = useState(open)
  const [dragY, setDragY] = useState(0)
  const [dragging, setDragging] = useState(false)
  // Measured when a drag starts, so the backdrop can fade in proportion to it.
  const [height, setHeight] = useState(600)
  const drag = useRef<{ startY: number; lastY: number; lastT: number; speed: number } | null>(null)
  // Where the page behind was scrolled when the sheet opened.
  const pageY = useRef(0)

  if (open && !shown) setShown(true)
  const closing = shown && !open
  const { raise, following } = useKeyboardRoom(shown, dialogRef, panelRef, pageY)
  useHeightGlide(panelRef, contentKey, shown)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open) {
      if (dialog.open) return
      pageY.current = window.scrollY
      dialog.showModal()
      // Opening moves focus to the first button in the sheet, and the browser
      // scrolls whatever it can to bring that button into view — while the
      // sheet is still below the screen, about to slide up. That scroll undid
      // the slide: the sheet showed at the top of the screen and then dropped
      // into place. The dialog can't scroll any more (overflow: clip), and
      // anything that did scroll is put back before the first frame is drawn.
      dialog.scrollTop = 0
      if (window.scrollY !== pageY.current) window.scrollTo(0, pageY.current)
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
    // Back into place: either the sheet is closing (and slides out from where it
    // is), or whoever owns it chose to stay open, e.g. to ask about unsaved work.
    setDragY(0)
  }

  // How far the sheet has travelled towards closed, 0 → 1, so the backdrop
  // brightens in step with the finger.
  const progress = Math.min(1, dragY / height)

  // One transform moves it: pulled down by its grip, or up for the keyboard.
  const panelStyle: CSSProperties = closing
    ? { transform: 'translateY(100%)', transition: `transform ${CLOSE_MS}ms cubic-bezier(0.4, 0, 1, 1)` }
    : {
        transform: `translateY(${dragY - raise}px)`,
        transition: dragging || following ? 'none' : `transform 320ms ${raise > 0 ? GLIDE : SPRING}`,
      }
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
      className="fixed inset-0 m-0 h-full max-h-none w-full max-w-none overflow-clip bg-transparent p-0 text-ink backdrop:bg-transparent"
    >
      {shown && (
        <>
          <div className="absolute inset-0 animate-backdrop-in bg-ink/40 backdrop-blur-[2px]" style={backdropStyle} onClick={onClose} aria-hidden />
          <div
            ref={panelRef}
            // The cream carries on below the sheet (after:): while it is raised over
            // the keyboard, that is what lies behind the keyboard, not the page.
            className={`absolute inset-x-0 bottom-0 mx-auto flex w-full max-w-md animate-sheet-up flex-col rounded-t-[2rem] bg-cream shadow-[0_-12px_40px_-12px_rgb(59_42_42/0.35)] after:absolute after:inset-x-0 after:top-full after:h-lvh after:bg-cream ${
              tall ? 'h-[calc(100dvh-var(--safe-top)-1rem)]' : 'max-h-[min(88dvh,calc(100dvh-var(--safe-top)-1rem))]'
            }`}
            style={panelStyle}
          >
            <div {...handle} data-sheet-grip className="shrink-0 cursor-grab touch-none select-none px-5 pt-3 active:cursor-grabbing">
              <div
                className={`mx-auto mb-3 h-1.5 w-10 rounded-full transition-colors ${dragging ? 'bg-strawberry' : 'bg-cream-deep'}`}
                aria-hidden
              />
              <div className="flex min-h-9 items-center justify-between gap-3 pb-3">
                <h2 className="text-xl font-semibold">{title}</h2>
                {action}
              </div>
            </div>
            <div data-sheet-body className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 pb-6 pt-1">
              {children}
            </div>
            <div className="pb-safe shrink-0">
              {footer && <div className="border-t border-cream-deep px-5 pb-4 pt-3">{footer}</div>}
            </div>
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
