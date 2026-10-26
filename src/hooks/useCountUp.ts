import { useEffect, useRef, useState } from 'react'

/** A number that counts smoothly to each new value instead of jumping there. */
export function useCountUp(target: number, duration = 420): number {
  const [shown, setShown] = useState(target)
  const current = useRef(target)

  useEffect(() => {
    const from = current.current
    if (from === target) return
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    const start = performance.now()
    let frame = 0
    const tick = (now: number) => {
      const progress = reduce ? 1 : Math.min(1, (now - start) / duration)
      const eased = 1 - (1 - progress) ** 3
      current.current = Math.round(from + (target - from) * eased)
      setShown(current.current)
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, duration])

  return shown
}
