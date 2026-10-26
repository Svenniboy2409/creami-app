interface Option<T extends string> {
  value: T
  label: string
}

interface Props<T extends string> {
  options: Option<T>[]
  value: T
  onChange: (value: T) => void
  label: string
}

/** Horizontally scrolling single-select chips (e.g. categories). */
export function ChipRow<T extends string>({ options, value, onChange, label }: Props<T>) {
  return (
    <div role="radiogroup" aria-label={label} className="scrollbar-none -mx-5 flex gap-2 overflow-x-auto px-5 py-1">
      {options.map((option) => {
        const active = option.value === value
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(option.value)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-bold transition-colors ${
              active ? 'bg-ink text-cream shadow-soft' : 'bg-white text-ink-soft shadow-sm hover:text-ink'
            }`}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}

/** Compact segmented control (e.g. pint size, My recipes / Favorites). */
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
  return (
    <div role="radiogroup" aria-label={label} className="flex rounded-full bg-cream-deep p-1">
      {options.map((option) => {
        const active = option.value === value
        return (
          <button
            key={String(option.value)}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(option.value)}
            className={`flex flex-1 flex-col items-center rounded-full px-3 py-1.5 text-sm font-bold leading-tight transition-all ${
              active ? 'bg-white text-ink shadow-sm' : 'text-ink-soft'
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
