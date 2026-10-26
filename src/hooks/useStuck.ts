import { useEffect, useRef, useState, type RefObject } from 'react'

/**
 * Whether a sticky row is riding along at the top of the screen rather than
 * sitting in its own place. A marker just above the row answers that: once the
 * marker has scrolled past the row's `top` offset, the row is holding on there.
 */
export function useStuck(rowRef: RefObject<HTMLElement | null>) {
  const markerRef = useRef<HTMLDivElement>(null)
  const [stuck, setStuck] = useState(false)
  // Turning the phone changes the safe-area inset and with it the row's
  // offset, so the observer is made again rather than left watching the old line.
  const [epoch, setEpoch] = useState(0)

  useEffect(() => {
    const bump = () => setEpoch((n) => n + 1)
    window.addEventListener('orientationchange', bump)
    return () => window.removeEventListener('orientationchange', bump)
  }, [])

  useEffect(() => {
    const marker = markerRef.current
    const row = rowRef.current
    if (!marker || !row) return
    const top = parseFloat(getComputedStyle(row).top) || 0
    const observer = new IntersectionObserver(([entry]) => setStuck(!entry.isIntersecting), {
      rootMargin: `-${Math.ceil(top) + 1}px 0px 0px 0px`,
    })
    observer.observe(marker)
    return () => observer.disconnect()
  }, [rowRef, epoch])

  return [stuck, markerRef] as const
}
