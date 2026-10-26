import { Search, X } from 'lucide-react'
import type { ReactNode } from 'react'

interface Props {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  trailing?: ReactNode
}

export function SearchBar({ value, onChange, placeholder = 'Search recipes or ingredients', trailing }: Props) {
  return (
    <div className="flex items-center gap-2">
      <label className="flex h-12 flex-1 items-center gap-2 rounded-full bg-white px-4 shadow-soft focus-within:ring-2 focus-within:ring-strawberry">
        <Search className="size-5 shrink-0 text-ink-faint" aria-hidden />
        <span className="sr-only">Search</span>
        <input
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          enterKeyHint="search"
          className="min-w-0 flex-1 bg-transparent text-base font-semibold outline-none placeholder:font-medium placeholder:text-ink-faint [&::-webkit-search-cancel-button]:hidden"
        />
        {value && (
          <button type="button" onClick={() => onChange('')} aria-label="Clear search" className="-mr-1 grid size-7 place-items-center rounded-full bg-cream-deep text-ink-soft">
            <X className="size-4" aria-hidden />
          </button>
        )}
      </label>
      {trailing}
    </div>
  )
}
