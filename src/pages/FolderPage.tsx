import { ArrowLeft, ArrowUpDown, FolderOpen, FolderPlus, Pencil } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import { AddRecipesSheet } from '../components/AddRecipesSheet'
import { EmptyState } from '../components/EmptyState'
import { FolderCover } from '../components/FolderCover'
import { FolderSheet } from '../components/FolderSheet'
import { RecipeCard, RecipeGrid } from '../components/RecipeCard'
import { RearrangeBar } from '../components/Rearrange'
import { ReorderableGrid } from '../components/ReorderableGrid'
import { WholeWords } from '../components/WholeWords'
import { useI18n } from '../hooks/i18nContext'
import { useLibrary } from '../hooks/libraryContext'
import { useAllRecipes } from '../hooks/useRecipes'
import type { Recipe } from '../types/recipe'

export function FolderPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { t, tn } = useI18n()
  const { ready, folders, reorderFolder } = useLibrary()
  const all = useAllRecipes()
  const [editing, setEditing] = useState(false)
  const [adding, setAdding] = useState(false)
  const [sorting, setSorting] = useState(false)

  const folder = folders.find((f) => f.id === id)
  const recipes = useMemo(
    () => (folder ? folder.recipeIds.map((x) => all.find((recipe) => recipe.id === x)).filter((recipe): recipe is Recipe => recipe !== undefined) : []),
    [folder, all],
  )

  const goBack = () => {
    if (window.history.state?.idx > 0) navigate(-1)
    else navigate('/library?tab=folders')
  }

  if (!folder) {
    if (!ready) return null
    return (
      <div className="px-5 pt-16">
        <EmptyState
          icon={FolderOpen}
          title={t('Folder not found')}
          action={
            <Link to="/library?tab=folders" className="btn-primary">
              {t('Back to your folders')}
            </Link>
          }
        >
          {t('This folder may have been deleted.')}
        </EmptyState>
      </div>
    )
  }

  const rearranging = sorting && recipes.length > 1

  // The same ways to put something in, under an empty folder and under a full one.
  const addActions = (
    <div className="flex flex-col items-center gap-3">
      <button type="button" onClick={() => setAdding(true)} className="btn-primary">
        <FolderPlus className="size-5" aria-hidden /> {t('Add recipes')}
      </button>
      <Link to="/" className="text-sm font-extrabold text-raspberry">
        {t('Browse Discover')}
      </Link>
    </div>
  )

  return (
    <div className="px-5">
      {/* One row, as in the cocktail app: back, the folder with its count, then rearrange and edit. */}
      <header className="pt-safe">
        <div className="flex items-center gap-2.5 pb-5 pt-4">
          <button type="button" onClick={goBack} aria-label={t('Back')} className="icon-btn size-10 shrink-0 bg-white shadow-soft">
            <ArrowLeft className="size-5" aria-hidden />
          </button>
          <FolderCover folder={folder} className="size-12 shrink-0 animate-pop-in rounded-xl shadow-soft" />
          <div className="min-w-0 flex-1">
            <h1 className="line-clamp-2 text-[1.35rem] font-semibold leading-tight tracking-tight [overflow-wrap:anywhere]">
              <WholeWords text={folder.name} />
            </h1>
            <p className="text-sm font-bold text-ink-soft">{tn(recipes.length, '{n} recipe', '{n} recipes')}</p>
          </div>
          {recipes.length > 1 && (
            <button
              type="button"
              onClick={() => setSorting((on) => !on)}
              aria-label={t('Rearrange')}
              aria-pressed={sorting}
              title={t('Rearrange')}
              className={`icon-btn size-10 shrink-0 shadow-soft transition-colors ${sorting ? 'bg-raspberry text-white' : 'bg-white'}`}
            >
              <ArrowUpDown className="size-5" aria-hidden />
            </button>
          )}
          <button type="button" onClick={() => setEditing(true)} aria-label={t('Edit folder')} title={t('Edit folder')} className="icon-btn size-10 shrink-0 bg-white shadow-soft">
            <Pencil className="size-[18px]" aria-hidden />
          </button>
        </div>
      </header>

      {recipes.length === 0 ? (
        <EmptyState icon={FolderOpen} title={t('This folder is empty')} action={addActions}>
          {t('Add recipes from here, or with the folder button on any recipe.')}
        </EmptyState>
      ) : rearranging ? (
        <>
          <div className="mb-4">
            <RearrangeBar onDone={() => setSorting(false)} />
          </div>
          <ReorderableGrid items={recipes} onReorder={(ids) => reorderFolder(folder.id, ids)} renderItem={(recipe) => <RecipeCard recipe={recipe} still />} />
        </>
      ) : (
        <>
          {/* Tells the recipe page which folder you came from, so it can offer to take it out again. */}
          <RecipeGrid recipes={recipes} linkTo={(recipe) => `/recipe/${recipe.id}?folder=${folder.id}`} />
          {/* Under the recipes, as in the cocktail app: what to do next once you have looked through them. */}
          <div className="mt-8 flex animate-fade-up flex-col items-center gap-3 text-center">
            <p className="text-sm font-bold text-ink-soft">{t('Add more recipes to this folder')}</p>
            {addActions}
          </div>
        </>
      )}

      <FolderSheet open={editing} onClose={() => setEditing(false)} folder={folder} onDeleted={() => navigate('/library?tab=folders', { replace: true })} />
      <AddRecipesSheet open={adding} onClose={() => setAdding(false)} folder={folder} />
    </div>
  )
}
