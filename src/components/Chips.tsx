import { useEffect, useLayoutEffect, useRef, useState } from 'react'

interface Option<T extends string> {
  value: T
  label: string
}

interface Props<T extends string> {
  options: Option<T>[]
  value: T
  onChange: (value: T) => void
  label: string
  /** Wrap onto several lines (inside sheets) instead of scrolling sideways (on a page). */
  wrap?: boolean
}

/** Single-select chips (e.g. categories): a sideways-scrolling row, or wrapped. */
export function ChipRow<T extends string>({ options, value, onChange, label, wrap = false }: Props<T>) {
  // The chip that was just tapped gets a little bounce. Kept to taps, so a page
  // opening on its current choice doesn't greet you with one.
  const [tapped, setTapped] = useState<T | null>(null)
  return (
    <div
      role="radiogroup"
      aria-label={label}
      className={wrap ? 'flex flex-wrap gap-2' : 'scrollbar-none -mx-5 flex gap-2 overflow-x-auto px-5 py-1'}
    >
      {options.map((option) => {
        const active = option.value === value
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => {
              setTapped(option.value)
              onChange(option.value)
            }}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-bold transition-[color,background-color,box-shadow] duration-200 ${
              active ? 'bg-ink text-cream shadow-soft' : 'bg-white text-ink-soft shadow-sm hover:text-ink'
            } ${active && tapped === option.value ? 'animate-chip-pop' : ''}`}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}

/** Compact segmented control (e.g. pint size, library tabs) whose white pill glides to the chosen option. */
export function Segmented<T extends string | number>({
  options,
  value,
  onChange,
  label,
}: {
  options: { value: T; label: string; hint?: string }[]
  value: T
  onChange: (value: T) => void
  label: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [pill, setPill] = useState<{ x: number; width: number } | null>(null)
  // The pill is placed without a transition the first time, so it doesn't fly
  // in from the left edge when the page opens.
  const [glide, setGlide] = useState(false)
  const activeIndex = options.findIndex((option) => option.value === value)

  useLayoutEffect(() => {
    const root = ref.current
    if (!root) return
    const measure = () => {
      const button = root.querySelectorAll<HTMLElement>('[role="radio"]')[activeIndex]
      setPill(button ? { x: button.offsetLeft, width: button.offsetWidth } : null)
    }
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(root)
    return () => observer.disconnect()
  }, [activeIndex, options.length])

  useEffect(() => {
    if (!pill || glide) return
    const frame = requestAnimationFrame(() => setGlide(true))
    return () => cancelAnimationFrame(frame)
  }, [pill, glide])

  return (
    <div ref={ref} role="radiogroup" aria-label={label} className="relative flex rounded-full bg-cream-deep p-1">
      {pill && (
        <span
          aria-hidden
          className={`absolute inset-y-1 left-0 rounded-full bg-white shadow-sm ${
            glide ? 'transition-[transform,width] duration-300 ease-[cubic-bezier(0.2,0.9,0.3,1.15)]' : ''
          }`}
          style={{ width: pill.width, transform: `translateX(${pill.x}px)` }}
        />
      )}
      {options.map((option) => {
        const active = option.value === value
        return (
          <button
            key={String(option.value)}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(option.value)}
            className={`relative z-10 flex min-w-0 flex-1 flex-col items-center rounded-full px-3 py-1.5 text-sm font-bold leading-tight transition-colors duration-200 ${
              active ? 'text-ink' : 'text-ink-soft'
            }`}
          >
            {option.label}
            {option.hint && <span className="text-[11px] font-semibold text-ink-faint">{option.hint}</span>}
          </button>
        )
      })}
    </div>
  )
}
