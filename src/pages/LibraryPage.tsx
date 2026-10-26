import { ChefHat, Download, Ellipsis, Heart, Upload } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router'
import { Segmented } from '../components/Chips'
import { EmptyState } from '../components/EmptyState'
import { PageHeader } from '../components/PageHeader'
import { RecipeGrid } from '../components/RecipeCard'
import { SearchBar } from '../components/SearchBar'
import { Sheet, SheetAction } from '../components/Sheet'
import { useLibrary } from '../hooks/libraryContext'
import { useAllRecipes } from '../hooks/useRecipes'
import { filterRecipes } from '../lib/search'

type Tab = 'mine' | 'favorites'

export function LibraryPage() {
  const { ready, userRecipes, favorites, exportBackup, importBackup } = useLibrary()
  const allRecipes = useAllRecipes()
  const [params, setParams] = useSearchParams()
  const tab: Tab = params.get('tab') === 'favorites' ? 'favorites' : 'mine'
  const [query, setQuery] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [toast, setToast] = useState<string | null>(null)
  const fileInput = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!toast) return
    const timer = setTimeout(() => setToast(null), 3500)
    return () => clearTimeout(timer)
  }, [toast])

  const favoriteRecipes = useMemo(() => allRecipes.filter((recipe) => favorites.has(recipe.id)), [allRecipes, favorites])
  const source = tab === 'mine' ? userRecipes : favoriteRecipes
  const results = useMemo(() => filterRecipes(source, { query }), [source, query])

  const onImport = async (file: File | undefined) => {
    if (!file) return
    setMenuOpen(false)
    try {
      const count = await importBackup(file)
      setToast(`Restored ${count} ${count === 1 ? 'recipe' : 'recipes'}`)
    } catch (error) {
      setToast(error instanceof Error ? error.message : 'Could not read that file')
    } finally {
      if (fileInput.current) fileInput.current.value = ''
    }
  }

  return (
    <div className="px-5">
      <PageHeader
        eyebrow="Your collection"
        title="Library"
        action={
          <button type="button" onClick={() => setMenuOpen(true)} aria-label="Backup options" className="icon-btn mb-1 bg-white shadow-soft">
            <Ellipsis className="size-5" aria-hidden />
          </button>
        }
      />

      <Segmented
        label="Library section"
        value={tab}
        onChange={(value) => setParams(value === 'favorites' ? { tab: 'favorites' } : {}, { replace: true })}
        options={[
          { value: 'mine', label: `My recipes · ${userRecipes.length}` },
          { value: 'favorites', label: `Favorites · ${favoriteRecipes.length}` },
        ]}
      />

      {source.length > 0 && (
        <div className="mt-4">
          <SearchBar value={query} onChange={setQuery} placeholder={tab === 'mine' ? 'Search your recipes' : 'Search favorites'} />
        </div>
      )}

      <div className="mt-5">
        {!ready ? null : results.length > 0 ? (
          <RecipeGrid recipes={results} />
        ) : source.length > 0 ? (
          <EmptyState icon={ChefHat} title="Nothing found">
            No recipes match “{query}”.
          </EmptyState>
        ) : tab === 'mine' ? (
          <EmptyState
            icon={ChefHat}
            title="Your recipe box is empty"
            action={
              <Link to="/new" className="btn-primary">
                Add a recipe
              </Link>
            }
          >
            Tap the + button to save your own creations. They are stored safely on this device.
          </EmptyState>
        ) : (
          <EmptyState
            icon={Heart}
            title="No favorites yet"
            action={
              <Link to="/" className="btn-secondary">
                Discover recipes
              </Link>
            }
          >
            Tap the heart on any recipe to keep it here.
          </EmptyState>
        )}
      </div>

      <Sheet open={menuOpen} onClose={() => setMenuOpen(false)} title="Backup">
        <p className="mb-4 text-[15px] leading-relaxed text-ink-soft">
          Your recipes and favorites live on this device only. Export a backup now and then, or use it to move them to another phone.
        </p>
        <div className="space-y-2">
          <SheetAction
            icon={Download}
            label="Export backup"
            detail="Save a .json file with all your recipes"
            onClick={() => {
              void exportBackup()
              setMenuOpen(false)
            }}
          />
          <SheetAction icon={Upload} label="Import backup" detail="Restore recipes from a backup file" onClick={() => fileInput.current?.click()} />
        </div>
        <input
          ref={fileInput}
          type="file"
          accept="application/json,.json"
          className="hidden"
          aria-label="Backup file"
          onChange={(event) => void onImport(event.target.files?.[0])}
        />
      </Sheet>

      {toast && (
        <div role="status" className="fixed inset-x-0 bottom-28 z-40 mx-auto w-fit max-w-[calc(100%-2.5rem)] animate-pop-in rounded-full bg-ink px-5 py-3 text-sm font-bold text-cream shadow-soft">
          {toast}
        </div>
      )}
    </div>
  )
}
