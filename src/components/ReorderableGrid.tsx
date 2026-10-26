import { GripVertical } from 'lucide-react'
import { useCallback, useEffect, useMemo, useRef, useState, type PointerEvent, type ReactNode } from 'react'

// How close to the top or bottom of the screen the finger has to get before
// the page scrolls under it, and how fast it goes right at the edge. The
// bottom edge sits higher, above the bottom bar.
const EDGE_TOP = 90
const EDGE_BOTTOM = 150
const SPEED = 14

interface Props<T extends { id: string }> {
  items: T[]
  onReorder: (ids: string[]) => void
  renderItem: (item: T) => ReactNode
  /** The grid's own layout, e.g. two columns of cards or one column of rows. */
  className?: string
}

/**
 * A grid rearranged in place, ported from the Mixly cocktail app.
 *
 * While a tile is dragged nothing moves in the array: the tile follows the
 * finger and the tiles it passes slide one place over, all through
 * transforms, so every step animates. The order is only written on release,
 * by which point the grid already looks exactly like that — nothing jumps.
 * The geometry is measured when a drag starts, so it works at any column
 * count, including one column for a list.
 */
export function ReorderableGrid<T extends { id: string }>({ items, onReorder, renderItem, className = 'grid grid-cols-2 gap-3' }: Props<T>) {
  const gridRef = useRef<HTMLDivElement>(null)
  const [order, setOrder] = useState(items)
  const [from, setFrom] = useState<number | null>(null)
  const [delta, setDelta] = useState({ x: 0, y: 0 })
  const [settling, setSettling] = useState(false)
  // The grid's shape, measured when a drag starts.
  const [metrics, setMetrics] = useState<{ cols: number; stepX: number; stepY: number } | null>(null)
  const start = useRef<{ x: number; y: number; scrollY: number } | null>(null)
  const pointer = useRef({ x: 0, y: 0 })
  const scrollBy = useRef(0)

  // Follow the list when it changes from outside (a recipe added, say), but never mid-drag.
  const ids = items.map((item) => item.id).join()
  const [seenIds, setSeenIds] = useState(ids)
  if (ids !== seenIds && from === null) {
    setSeenIds(ids)
    setOrder(items)
  }

  // Where the dragged tile would land if you let go now.
  const to = useMemo(() => {
    if (from === null || !metrics) return null
    const { cols, stepX, stepY } = metrics
    const col = Math.round((from % cols) + (stepX ? delta.x / stepX : 0))
    const row = Math.round(Math.floor(from / cols) + delta.y / stepY)
    const seat = Math.max(0, row) * cols + Math.max(0, Math.min(cols - 1, col))
    return Math.max(0, Math.min(order.length - 1, seat))
  }, [from, delta, order.length, metrics])

  // Where tile i appears to sit right now: one place over if the dragged tile has passed it.
  const seatOf = (i: number) => {
    if (from === null || to === null) return i
    if (i === from) return to
    if (from < to && i > from && i <= to) return i - 1
    if (to < from && i >= to && i < from) return i + 1
    return i
  }

  const shift = (i: number) => {
    if (from === null || to === null || !metrics) return { x: 0, y: 0 }
    if (i === from) return delta
    const { cols, stepX, stepY } = metrics
    const seat = seatOf(i)
    return {
      x: ((seat % cols) - (i % cols)) * stepX,
      y: (Math.floor(seat / cols) - Math.floor(i / cols)) * stepY,
    }
  }

  // How far the tile has travelled. Run on every move and on every auto-scroll
  // frame, because the page moving under a still finger is travel too.
  const track = useCallback(() => {
    if (!start.current) return
    setDelta({
      x: pointer.current.x - start.current.x,
      y: pointer.current.y + window.scrollY - (start.current.y + start.current.scrollY),
    })
  }, [])

  useEffect(() => {
    if (from === null) return
    let frame = 0
    const step = () => {
      if (scrollBy.current) {
        window.scrollBy(0, scrollBy.current)
        track()
      }
      frame = requestAnimationFrame(step)
    }
    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [from, track])

  const down = (event: PointerEvent<HTMLDivElement>, i: number) => {
    if (event.button !== 0 || !gridRef.current) return
    event.preventDefault()
    const rects = [...gridRef.current.children].map((el) => el.getBoundingClientRect())
    const cols = rects.filter((r) => Math.abs(r.top - rects[0].top) < 2).length
    setMetrics({
      cols,
      stepX: cols > 1 ? rects[1].left - rects[0].left : 0,
      stepY: rects.length > cols ? rects[cols].top - rects[0].top : rects[0].height,
    })
    start.current = { x: event.clientX, y: event.clientY, scrollY: window.scrollY }
    pointer.current = { x: event.clientX, y: event.clientY }
    scrollBy.current = 0
    setFrom(i)
    setDelta({ x: 0, y: 0 })
    try {
      event.currentTarget.setPointerCapture(event.pointerId)
    } catch {
      // Capture not supported; the drag still works while the finger stays on the tile.
    }
  }

  const move = (event: PointerEvent<HTMLDivElement>) => {
    if (from === null) return
    pointer.current = { x: event.clientX, y: event.clientY }
    const over = event.clientY - EDGE_TOP
    const under = event.clientY - (window.innerHeight - EDGE_BOTTOM)
    scrollBy.current = over < 0 ? Math.max(-SPEED, over / 6) : under > 0 ? Math.min(SPEED, under / 6) : 0
    track()
  }

  const up = () => {
    if (from === null) return
    if (to !== null && to !== from) {
      const next = [...order]
      const [moved] = next.splice(from, 1)
      next.splice(to, 0, moved)
      // Letting go swaps two things at once: every tile takes its new cell and
      // drops its transform. Those cancel out exactly, so transitions are off
      // for the frame that commits — otherwise the transforms would animate to
      // nothing while the grid had already moved, and the tile would lurch.
      setSettling(true)
      setOrder(next)
      onReorder(next.map((item) => item.id))
    }
    scrollBy.current = 0
    start.current = null
    setFrom(null)
    setDelta({ x: 0, y: 0 })
  }

  useEffect(() => {
    if (!settling) return
    let inner = 0
    const outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => setSettling(false))
    })
    return () => {
      cancelAnimationFrame(outer)
      cancelAnimationFrame(inner)
    }
  }, [settling])

  return (
    <div ref={gridRef} className={`relative ${className}`}>
      {order.map((item, i) => {
        const offset = shift(i)
        const dragging = i === from
        return (
          <div
            key={item.id}
            className={`relative cursor-grab touch-none select-none ${dragging ? 'z-10 cursor-grabbing' : ''}`}
            style={{
              transform: `translate(${offset.x}px, ${offset.y}px)`,
              transition: dragging || settling ? 'none' : 'transform 220ms cubic-bezier(0.2, 0.9, 0.3, 1)',
            }}
            onPointerDown={(event) => down(event, i)}
            onPointerMove={move}
            onPointerUp={up}
            onPointerCancel={up}
          >
            <div
              className={`rounded-tile transition-[transform,box-shadow] duration-200 ${
                dragging
                  ? 'rotate-[1.5deg] scale-[1.05] shadow-lift'
                  : `ring-2 ring-strawberry/40 ring-offset-2 ring-offset-cream ${from === null ? 'animate-wiggle' : ''}`
              }`}
              // Out of step with their neighbours, so the grid shimmers rather than rocking as one.
              style={{ animationDelay: `${-((i * 97) % 280)}ms` }}
            >
              {renderItem(item)}
            </div>
            <span
              aria-hidden
              className={`pointer-events-none absolute -right-1.5 -top-1.5 grid size-7 place-items-center rounded-full bg-raspberry text-white shadow-sm transition-transform duration-200 ${
                dragging ? 'scale-110' : 'animate-pop-in'
              }`}
            >
              <GripVertical className="size-4" strokeWidth={2.5} />
            </span>
          </div>
        )
      })}
    </div>
  )
}
