import { Check, IceCreamCone, SearchX, SlidersHorizontal, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router'
import { ChipRow } from '../components/Chips'
import { EmptyState } from '../components/EmptyState'
import { PageHeader } from '../components/PageHeader'
import { RecipeGrid } from '../components/RecipeCard'
import { SearchBar } from '../components/SearchBar'
import { Sheet } from '../components/Sheet'
import { CATEGORIES, CATEGORY_ORDER, MODEL_ORDER, MODELS } from '../data/creami'
import { CURATED_RECIPES } from '../data/recipes'
import { filterRecipes } from '../lib/search'
import type { Category, CreamiModel } from '../types/recipe'

export function DiscoverPage() {
  // Filters live in the URL so they survive opening a recipe and coming back.
  const [params, setParams] = useSearchParams()
  const query = params.get('q') ?? ''
  const category = (params.get('category') as Category | null) ?? 'all'
  const model = (params.get('model') as CreamiModel | null) ?? 'all'
  const [filterOpen, setFilterOpen] = useState(false)

  const update = (key: string, value: string) => {
    const next = new URLSearchParams(params)
    if (value && value !== 'all') next.set(key, value)
    else next.delete(key)
    setParams(next, { replace: true })
  }

  const categoryOptions = useMemo(() => {
    const present = new Set(CURATED_RECIPES.map((recipe) => recipe.category))
    return [
      { value: 'all' as const, label: 'All' },
      ...CATEGORY_ORDER.filter((c) => present.has(c)).map((c) => ({ value: c, label: CATEGORIES[c].label })),
    ]
  }, [])

  const results = useMemo(() => filterRecipes(CURATED_RECIPES, { query, category, model }), [query, category, model])
  const hasRecipes = CURATED_RECIPES.length > 0

  return (
    <div className="px-5">
      <PageHeader eyebrow="Ninja CREAMi" title="Find your next scoop" />

      {hasRecipes ? (
        <>
          <SearchBar
            value={query}
            onChange={(value) => update('q', value)}
            trailing={
              <button type="button" onClick={() => setFilterOpen(true)} aria-label="Filter by machine" className="icon-btn relative size-12 bg-white shadow-soft">
                <SlidersHorizontal className="size-5" aria-hidden />
                {model !== 'all' && <span className="absolute right-2.5 top-2.5 size-2.5 rounded-full bg-raspberry ring-2 ring-white" />}
              </button>
            }
          />
          {categoryOptions.length > 2 && (
            <div className="mt-4">
              <ChipRow label="Category" options={categoryOptions} value={category} onChange={(value) => update('category', value)} />
            </div>
          )}

          <div className="mb-3 mt-5 flex min-h-8 items-center justify-between gap-2">
            <p className="text-sm font-bold text-ink-soft">
              {results.length} {results.length === 1 ? 'recipe' : 'recipes'}
            </p>
            {model !== 'all' && (
              <button type="button" onClick={() => update('model', 'all')} className="flex items-center gap-1 rounded-full bg-strawberry-soft px-3 py-1.5 text-xs font-extrabold text-raspberry">
                {MODELS[model].short}
                <X className="size-3.5" aria-label="Clear machine filter" />
              </button>
            )}
          </div>

          {results.length > 0 ? (
            <RecipeGrid recipes={results} />
          ) : (
            <EmptyState
              icon={SearchX}
              title="No matching scoops"
              action={
                <button type="button" className="btn-secondary" onClick={() => setParams(new URLSearchParams(), { replace: true })}>
                  Clear filters
                </button>
              }
            >
              Try another search term, category or machine.
            </EmptyState>
          )}
        </>
      ) : (
        <EmptyState
          icon={IceCreamCone}
          title="Fresh recipes are churning"
          action={
            <Link to="/new" className="btn-primary">
              Add your own recipe
            </Link>
          }
        >
          The first hand-picked recipes are on their way. In the meantime, add your own creations with the + button.
        </EmptyState>
      )}

      <Sheet open={filterOpen} onClose={() => setFilterOpen(false)} title="Filter by machine">
        <div className="space-y-2">
          {(['all', ...MODEL_ORDER] as const).map((option) => {
            const active = option === model
            return (
              <button
                key={option}
                type="button"
                onClick={() => {
                  update('model', option)
                  setFilterOpen(false)
                }}
                className={`flex w-full items-center justify-between rounded-2xl bg-white p-4 text-left shadow-sm ring-2 transition-colors ${
                  active ? 'ring-strawberry' : 'ring-transparent'
                }`}
              >
                <span>
                  <span className="block font-bold">{option === 'all' ? 'All machines' : MODELS[option].label}</span>
                  <span className="block text-sm text-ink-soft">{option === 'all' ? 'Show every recipe' : MODELS[option].detail}</span>
                </span>
                {active && <Check className="size-5 text-raspberry" aria-hidden />}
              </button>
            )
          })}
        </div>
      </Sheet>
    </div>
  )
}
