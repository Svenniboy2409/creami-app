import { ArrowLeft, FolderOpen, FolderPlus, Pencil } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import { AddRecipesSheet } from '../components/AddRecipesSheet'
import { EmptyState } from '../components/EmptyState'
import { FolderCover } from '../components/FolderCover'
import { FolderSheet } from '../components/FolderSheet'
import { RecipeCard, RecipeGrid } from '../components/RecipeCard'
import { RearrangeBar, RearrangeButton } from '../components/Rearrange'
import { ReorderableGrid } from '../components/ReorderableGrid'
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
      <header className="pt-safe">
        <div className="flex items-center justify-between gap-2 pt-4">
          <button type="button" onClick={goBack} aria-label={t('Back')} className="icon-btn bg-white shadow-soft">
            <ArrowLeft className="size-5" aria-hidden />
          </button>
          <button type="button" onClick={() => setEditing(true)} aria-label={t('Edit folder')} title={t('Edit folder')} className="icon-btn bg-white shadow-soft">
            <Pencil className="size-[18px]" aria-hidden />
          </button>
        </div>
        <div className="flex items-center gap-4 pb-5 pt-5">
          <FolderCover folder={folder} className="size-20 shrink-0 animate-pop-in rounded-3xl shadow-soft" />
          <div className="min-w-0">
            <p className="mb-1 text-sm font-bold uppercase tracking-[0.14em] text-raspberry">{t('Folder')}</p>
            <h1 className="break-words text-[1.75rem] font-semibold leading-[1.1] tracking-tight">{folder.name}</h1>
            <p className="mt-1 text-sm font-bold text-ink-soft">{tn(recipes.length, '{n} recipe', '{n} recipes')}</p>
          </div>
        </div>
      </header>

      {recipes.length === 0 ? (
        <EmptyState icon={FolderOpen} title={t('This folder is empty')} action={addActions}>
          {t('Add recipes from here, or with the folder button on any recipe.')}
        </EmptyState>
      ) : (
        <>
          <div className="mb-4 flex min-h-12 items-center gap-2">
            {rearranging ? (
              <div className="flex-1">
                <RearrangeBar onDone={() => setSorting(false)} />
              </div>
            ) : (
              <>
                <button type="button" onClick={() => setAdding(true)} className="btn-secondary h-12 flex-1 shadow-soft">
                  <FolderPlus className="size-5 text-raspberry" aria-hidden /> {t('Add recipes')}
                </button>
                {recipes.length > 1 && <RearrangeButton onClick={() => setSorting(true)} />}
              </>
            )}
          </div>
          {rearranging ? (
            <ReorderableGrid items={recipes} onReorder={(ids) => reorderFolder(folder.id, ids)} renderItem={(recipe) => <RecipeCard recipe={recipe} still />} />
          ) : (
            // Tells the recipe page which folder you came from, so it can offer to take it out again.
            <RecipeGrid recipes={recipes} linkTo={(recipe) => `/recipe/${recipe.id}?folder=${folder.id}`} />
          )}
        </>
      )}

      <FolderSheet open={editing} onClose={() => setEditing(false)} folder={folder} onDeleted={() => navigate('/library?tab=folders', { replace: true })} />
      <AddRecipesSheet open={adding} onClose={() => setAdding(false)} folder={folder} />
    </div>
  )
}
