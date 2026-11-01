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
import { Sheet, SheetHeaderButton } from './Sheet'
import { WholeWords } from './WholeWords'

/**
 * Filling a folder from the folder itself: every recipe with its picture, tap
 * to pick, one button to put the lot in. Your own recipes and favorites come
 * first, since those are the ones you are most likely after. As in the cocktail
 * app, Cancel sits at the top and the button at the bottom says Done until
 * something is picked.
 */
export function AddRecipesSheet({ open, onClose, folder }: { open: boolean; onClose: () => void; folder: Folder }) {
  const { t, tn } = useI18n()
  const showToast = useToast()
  const { addToFolder } = useLibrary()
  const [picked, setPicked] = useState<string[]>([])
  const [wasOpen, setWasOpen] = useState(open)
  if (open !== wasOpen) {
    setWasOpen(open)
    if (open) setPicked([])
  }

  const add = async () => {
    if (picked.length === 0) return onClose()
    await addToFolder(folder.id, picked)
    showToast(picked.length === 1 ? t('Added to {folder}', { folder: folder.name }) : t('Added {n} recipes to {folder}', { n: picked.length, folder: folder.name }))
    onClose()
  }

  return (
    <Sheet
      open={open}
      onClose={onClose}
      title={t('Add recipes to {folder}', { folder: folder.name })}
      action={<SheetHeaderButton onClick={onClose}>{t('Cancel')}</SheetHeaderButton>}
      footer={
        <button type="button" onClick={() => void add()} className="btn-primary w-full">
          <span key={picked.length} className="inline-block animate-chip-pop">
            {picked.length ? tn(picked.length, 'Add {n} recipe', 'Add {n} recipes') : t('Done')}
          </span>
        </button>
      }
      tall
    >
      <RecipePicker
        folder={folder}
        picked={picked}
        onToggle={(id) => setPicked((current) => (current.includes(id) ? current.filter((x) => x !== id) : [...current, id]))}
      />
    </Sheet>
  )
}

function RecipePicker({ folder, picked, onToggle }: { folder: Folder; picked: string[]; onToggle: (id: string) => void }) {
  const { t, localize } = useI18n()
  const { favorites } = useLibrary()
  const all = useAllRecipes()
  const [query, setQuery] = useState('')

  const candidates = useMemo(() => {
    const rank = (id: string, origin: string) => (origin === 'user' ? 0 : favorites.has(id) ? 1 : 2)
    return all
      .filter((recipe) => !folder.recipeIds.includes(recipe.id))
      .map((recipe, order) => ({ recipe, order }))
      .sort((a, b) => rank(a.recipe.id, a.recipe.origin) - rank(b.recipe.id, b.recipe.origin) || a.order - b.order)
      .map(({ recipe }) => recipe)
  }, [all, folder.recipeIds, favorites])
  const shown = useMemo(() => searchRecipes(candidates, query), [candidates, query])

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
                onClick={() => onToggle(recipe.id)}
                className={`relative block w-full rounded-2xl bg-white p-1 text-left shadow-sm ring-2 transition-[box-shadow,transform] active:scale-95 ${
                  on ? 'ring-strawberry' : 'ring-transparent'
                }`}
              >
                <span className="block aspect-square overflow-hidden rounded-xl">
                  <RecipeImage recipe={recipe} />
                </span>
                <span className="line-clamp-2 min-h-[2.5em] px-1 pb-0.5 pt-1.5 text-xs font-bold leading-tight [overflow-wrap:anywhere]">
                  <WholeWords text={recipe.name} />
                </span>
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
    </div>
  )
}
