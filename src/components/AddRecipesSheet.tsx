import { Check } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useI18n } from '../hooks/i18nContext'
import { useLibrary } from '../hooks/libraryContext'
import { useToast } from '../hooks/toastContext'
import { useAllRecipes } from '../hooks/useRecipes'
import { searchRecipes } from '../lib/search'
import type { Folder } from '../types/recipe'
import { RecipeImage } from './RecipeImage'
import { SearchBar } from './SearchBar'
import { Sheet } from './Sheet'

/**
 * Filling a folder from the folder itself: every recipe with its picture, tap
 * to pick, one button to put the lot in. Your own recipes and favorites come
 * first, since those are the ones you are most likely after.
 */
export function AddRecipesSheet({ open, onClose, folder }: { open: boolean; onClose: () => void; folder: Folder }) {
  const { t } = useI18n()
  return (
    <Sheet open={open} onClose={onClose} title={t('Add recipes to {folder}', { folder: folder.name })}>
      <RecipePicker folder={folder} onDone={onClose} />
    </Sheet>
  )
}

function RecipePicker({ folder, onDone }: { folder: Folder; onDone: () => void }) {
  const { t, tn, localize } = useI18n()
  const showToast = useToast()
  const { favorites, addToFolder } = useLibrary()
  const all = useAllRecipes()
  const [query, setQuery] = useState('')
  const [picked, setPicked] = useState<string[]>([])

  const candidates = useMemo(() => {
    const rank = (id: string, origin: string) => (origin === 'user' ? 0 : favorites.has(id) ? 1 : 2)
    return all
      .filter((recipe) => !folder.recipeIds.includes(recipe.id))
      .map((recipe, order) => ({ recipe, order }))
      .sort((a, b) => rank(a.recipe.id, a.recipe.origin) - rank(b.recipe.id, b.recipe.origin) || a.order - b.order)
      .map(({ recipe }) => recipe)
  }, [all, folder.recipeIds, favorites])
  const shown = useMemo(() => searchRecipes(candidates, query), [candidates, query])

  const toggle = (id: string) => setPicked((current) => (current.includes(id) ? current.filter((x) => x !== id) : [...current, id]))

  const add = async () => {
    await addToFolder(folder.id, picked)
    showToast(tn(picked.length, 'Added {n} recipe to the folder', 'Added {n} recipes to the folder'))
    onDone()
  }

  if (candidates.length === 0) {
    return <p className="py-6 text-center text-[15px] text-ink-soft">{t('Every recipe is already in this folder.')}</p>
  }

  return (
    <div>
      {candidates.length > 6 && (
        <div className="mb-4">
          <SearchBar value={query} onChange={setQuery} />
        </div>
      )}
      <ul className="grid grid-cols-3 gap-2.5">
        {shown.map((original, index) => {
          const recipe = localize(original)
          const on = picked.includes(recipe.id)
          return (
            <li key={recipe.id} className="animate-fade-up" style={{ animationDelay: `${Math.min(index, 12) * 30}ms` }}>
              <button
                type="button"
                role="checkbox"
                aria-checked={on}
                onClick={() => toggle(recipe.id)}
                className={`relative block w-full rounded-2xl bg-white p-1 text-left shadow-sm ring-2 transition-[box-shadow,transform] active:scale-95 ${
                  on ? 'ring-strawberry' : 'ring-transparent'
                }`}
              >
                <span className="block aspect-square overflow-hidden rounded-xl">
                  <RecipeImage recipe={recipe} />
                </span>
                <span className="line-clamp-2 min-h-[2.5em] px-1 pb-0.5 pt-1.5 text-xs font-bold leading-tight">{recipe.name}</span>
                <span
                  className={`absolute right-2 top-2 grid size-6 place-items-center rounded-full border-2 shadow-sm transition-colors ${
                    on ? 'animate-chip-pop border-raspberry bg-raspberry text-white' : 'border-white bg-white/70'
                  }`}
                >
                  {on && <Check className="size-3.5" strokeWidth={3.2} aria-hidden />}
                </span>
              </button>
            </li>
          )
        })}
      </ul>
      {/* Stays at the bottom of the sheet while the grid scrolls under it. */}
      <div className="sticky bottom-0 -mx-5 mt-4 bg-linear-to-t from-cream via-cream to-cream/0 px-5 pb-1 pt-4">
        <button type="button" onClick={() => void add()} disabled={picked.length === 0} className="btn-primary w-full">
          <span key={picked.length} className="inline-block animate-chip-pop">
            {picked.length ? tn(picked.length, 'Add {n} recipe', 'Add {n} recipes') : t('Pick recipes to add')}
          </span>
        </button>
      </div>
    </div>
  )
}
