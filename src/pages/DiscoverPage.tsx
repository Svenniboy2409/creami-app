import { IceCreamCone, SearchX, SlidersHorizontal } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router'
import { ChipRow } from '../components/Chips'
import { EmptyState } from '../components/EmptyState'
import { FilterSheet, type FilterGroup } from '../components/FilterSheet'
import { PageHeader } from '../components/PageHeader'
import { RecipeGrid } from '../components/RecipeCard'
import { SearchBar } from '../components/SearchBar'
import { CATEGORIES, MODEL_ORDER, MODELS, TASTES } from '../data/creami'
import { CURATED_RECIPES } from '../data/recipes'
import { useCountUp } from '../hooks/useCountUp'
import { useI18n } from '../hooks/i18nContext'
import { useRecipeEditor } from '../hooks/recipeEditorContext'
import { useStuck } from '../hooks/useStuck'
import { filterRecipes, presentValues } from '../lib/search'
import type { Category, CreamiModel, Taste } from '../types/recipe'

const FILTER_KEYS = ['model', 'category', 'taste', 'program', 'tag'] as const
type FilterKey = (typeof FILTER_KEYS)[number]

export function DiscoverPage() {
  const { t } = useI18n()
  const { openNew } = useRecipeEditor()
  // Search and filters live in the URL so they survive opening a recipe and coming back.
  const [params, setParams] = useSearchParams()
  const query = params.get('q') ?? ''
  const filters = Object.fromEntries(FILTER_KEYS.map((key) => [key, params.get(key) ?? 'all'])) as Record<FilterKey, string>
  const [filterOpen, setFilterOpen] = useState(false)

  const rowRef = useRef<HTMLDivElement>(null)
  const [stuck, markerRef] = useStuck(rowRef)

  const update = (changes: Partial<Record<FilterKey | 'q', string>>) => {
    // Start from the address bar, not from `params`: the router redraws a
    // moment after the URL changes, so a chip tapped just before typing (or
    // two chips in quick succession) would otherwise be undone by the next change.
    const next = new URLSearchParams(window.location.hash.split('?')[1] ?? '')
    for (const [key, value] of Object.entries(changes)) {
      if (value && value !== 'all') next.set(key, value)
      else next.delete(key)
    }
    setParams(next, { replace: true })
  }
  const resetFilters = () => update(Object.fromEntries(FILTER_KEYS.map((key) => [key, 'all'])))
  const clearAll = () => setParams(new URLSearchParams(), { replace: true })

  const present = useMemo(() => presentValues(CURATED_RECIPES), [])
  const results = useMemo(
    () =>
      filterRecipes(CURATED_RECIPES, {
        query,
        category: filters.category as Category | 'all',
        model: filters.model as CreamiModel | 'all',
        program: filters.program,
        tag: filters.tag,
        taste: filters.taste as Taste | 'all',
      }),
    [query, filters.category, filters.model, filters.program, filters.tag, filters.taste],
  )
  const shownCount = useCountUp(results.length)

  const activeCount = FILTER_KEYS.filter((key) => filters[key] !== 'all').length
  const hasFilters = activeCount > 0 || query.trim() !== ''

  // A new search or filter is a new list whose best matches are at the top, so
  // if the page was scrolled down, bring the top of the results back under the
  // search bar. Keyed on the selection, so coming back to the page is left alone.
  const selectionKey = [query, ...FILTER_KEYS.map((key) => filters[key])].join('\u0000')
  const lastSelection = useRef(selectionKey)
  useEffect(() => {
    if (lastSelection.current === selectionKey) return
    lastSelection.current = selectionKey
    const marker = markerRef.current
    if (!marker) return
    const top = marker.getBoundingClientRect().top + window.scrollY
    if (window.scrollY > top) window.scrollTo({ top })
  }, [selectionKey, markerRef])

  // In the filter sheet in this order: the machine you have first, then what kind and what taste.
  const groups: FilterGroup[] = [
    {
      key: 'model',
      label: t('Machine'),
      options: MODEL_ORDER.map((m) => ({ value: m, label: MODELS[m].short })),
      value: filters.model,
      onChange: (value) => update({ model: value }),
    },
    {
      key: 'category',
      label: t('Category'),
      options: present.categories.map((c) => ({ value: c, label: t(CATEGORIES[c].label) })),
      value: filters.category,
      onChange: (value) => update({ category: value }),
    },
    {
      key: 'taste',
      label: t('Taste'),
      options: present.tastes.map((taste) => ({ value: taste, label: t(TASTES[taste]) })),
      value: filters.taste,
      onChange: (value) => update({ taste: value }),
    },
    {
      key: 'program',
      label: t('Program'),
      options: present.programs.map((p) => ({ value: p, label: p })),
      value: filters.program,
      onChange: (value) => update({ program: value }),
    },
    {
      key: 'tag',
      label: t('Tags'),
      options: present.tags.map((tag) => ({ value: tag, label: `#${t(tag)}` })),
      value: filters.tag,
      onChange: (value) => update({ tag: value }),
    },
  ]
  // Category and taste are the everyday filters, so they stay on the page as well;
  // the machine is set once and lives in the filter sheet.
  const pageRows = [
    { group: groups[1], allLabel: t('All categories') },
    { group: groups[2], allLabel: t('All tastes') },
  ]

  if (CURATED_RECIPES.length === 0) {
    return (
      <div className="px-5">
        <PageHeader eyebrow="Ninja CREAMi" title={t('Find your next scoop')} />
        <EmptyState
          icon={IceCreamCone}
          title={t('Fresh recipes are churning')}
          action={
            <button type="button" onClick={openNew} className="btn-primary">
              {t('Add your own recipe')}
            </button>
          }
        >
          {t('The first hand-picked recipes are on their way. In the meantime, add your own creations with the + button.')}
        </EmptyState>
      </div>
    )
  }

  return (
    <div className="px-5">
      <PageHeader eyebrow="Ninja CREAMi" title={t('Find your next scoop')} />

      {/* Sits where the search row belongs, and reports when that place has scrolled away. */}
      <div ref={markerRef} className="h-px" aria-hidden />
      <div
        ref={rowRef}
        // Holds on just below the status bar. Once it does, a frosted surface fades in
        // from the top edge down behind it, so the cards no longer show through above
        // the search bar. The page title stays in front.
        data-stuck={stuck || undefined}
        className="stuck-surface sticky top-[var(--safe-top)] z-20 -mx-5 px-5 py-2"
      >
        <SearchBar
          value={query}
          onChange={(value) => update({ q: value })}
          onClear={clearAll}
          clearable={hasFilters}
          trailing={
            <button
              type="button"
              onClick={() => setFilterOpen(true)}
              aria-label={activeCount ? t('Open filters ({n} on)', { n: activeCount }) : t('Open filters')}
              className={`relative grid size-12 shrink-0 place-items-center rounded-full shadow-soft transition-[background-color,color,transform] duration-200 active:scale-90 ${
                activeCount ? 'bg-strawberry-soft text-raspberry' : 'bg-white text-ink'
              }`}
            >
              <SlidersHorizontal className="size-5" aria-hidden />
              {activeCount > 0 && (
                <span
                  key={activeCount}
                  aria-hidden
                  className="absolute -right-1 -top-1 grid h-5 min-w-5 animate-badge-pop place-items-center rounded-full bg-raspberry px-1 text-[11px] font-extrabold text-white ring-2 ring-cream"
                >
                  {activeCount}
                </span>
              )}
            </button>
          }
        />
      </div>

      <div className="mt-2 space-y-1.5">
        {pageRows.map(({ group, allLabel }) => (
          <ChipRow
            key={group.key}
            label={group.label}
            value={group.value}
            onChange={group.onChange}
            options={[{ value: 'all', label: allLabel }, ...group.options]}
          />
        ))}
      </div>

      <div className="mb-3 mt-4 flex min-h-8 items-center justify-between gap-2">
        <p className="text-sm font-bold text-ink-soft" aria-live="polite">
          <span className="tabular-nums">{shownCount}</span> {t(results.length === 1 ? 'recipe' : 'recipes')}
        </p>
        {hasFilters && (
          <button type="button" onClick={clearAll} className="animate-pop-in rounded-full px-2 py-1 text-sm font-extrabold text-raspberry">
            {t('Clear filters')}
          </button>
        )}
      </div>

      {results.length > 0 ? (
        // Re-keyed on the filters (not on every keystroke) so a new selection deals its cards in again.
        <RecipeGrid key={FILTER_KEYS.map((key) => filters[key]).join()} recipes={results} />
      ) : (
        <EmptyState
          icon={SearchX}
          title={t('No matching scoops')}
          action={
            <button type="button" className="btn-secondary" onClick={clearAll}>
              {t('Clear filters')}
            </button>
          }
        >
          {t('Try another search term, category or machine.')}
        </EmptyState>
      )}

      <FilterSheet open={filterOpen} onClose={() => setFilterOpen(false)} groups={groups} count={results.length} onReset={resetFilters} />
    </div>
  )
}
