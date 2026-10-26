import { Search, X } from 'lucide-react'
import type { ReactNode } from 'react'
import { useI18n } from '../hooks/i18nContext'

interface Props {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  trailing?: ReactNode
  /** What the clear button wipes; just the text unless given (Discover also clears its filters). */
  onClear?: () => void
  /** Show the clear button even with an empty box, e.g. while filters are on. */
  clearable?: boolean
}

export function SearchBar({ value, onChange, placeholder, trailing, onClear, clearable = false }: Props) {
  const { t } = useI18n()
  return (
    <div className="flex items-stretch gap-2">
      <label className="flex h-12 min-w-0 flex-1 items-center gap-2 rounded-full bg-white px-4 shadow-soft transition-shadow focus-within:ring-2 focus-within:ring-strawberry">
        <Search className="size-5 shrink-0 text-ink-faint" aria-hidden />
        <span className="sr-only">{t('Search')}</span>
        <input
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={(event) => {
            // Enter is "show me": put the keyboard away so the results can be seen.
            if (event.key === 'Enter') event.currentTarget.blur()
          }}
          placeholder={placeholder ?? t('Search recipes or ingredients')}
          enterKeyHint="search"
          autoComplete="off"
          className="min-w-0 flex-1 bg-transparent text-base font-semibold outline-none placeholder:font-medium placeholder:text-ink-faint [&::-webkit-search-cancel-button]:hidden"
        />
        {(value || clearable) && (
          <button
            type="button"
            onClick={() => (onClear ? onClear() : onChange(''))}
            aria-label={t(onClear ? 'Clear search and filters' : 'Clear search')}
            className="-mr-1 grid size-7 shrink-0 animate-pop-in place-items-center rounded-full bg-cream-deep text-ink-soft"
          >
            <X className="size-4" aria-hidden />
          </button>
        )}
      </label>
      {trailing}
    </div>
  )
}
