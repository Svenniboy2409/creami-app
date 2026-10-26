import { ChevronRight, FolderHeart } from 'lucide-react'
import { useMemo } from 'react'
import { Link } from 'react-router'
import { useI18n } from '../hooks/i18nContext'
import { useAllRecipes } from '../hooks/useRecipes'
import type { Folder } from '../types/recipe'
import { RecipeImage } from './RecipeImage'

// How the collage splits for one to four pictures. Three is one tall picture
// beside two stacked ones, which reads better than three strips.
const LAYOUTS = ['', 'grid-cols-1', 'grid-cols-2', 'grid-cols-2 grid-rows-2 [&>*:first-child]:row-span-2', 'grid-cols-2 grid-rows-2']

/**
 * A folder's picture: its own photo if it has one, otherwise a collage of the
 * first few recipes inside, so a folder looks like what it holds and changes
 * as you fill it. An empty folder gets a pastel folder mark.
 */
export function FolderCover({ folder, className = '' }: { folder: Pick<Folder, 'image' | 'recipeIds'>; className?: string }) {
  const all = useAllRecipes()
  const shots = useMemo(() => {
    if (folder.image) return []
    return folder.recipeIds
      .map((id) => all.find((recipe) => recipe.id === id))
      .filter((recipe) => recipe !== undefined)
      .slice(0, 4)
  }, [folder.image, folder.recipeIds, all])

  if (folder.image) {
    return (
      <div className={`overflow-hidden ${className}`}>
        <img src={folder.image} alt="" loading="lazy" decoding="async" className="size-full object-cover" />
      </div>
    )
  }

  if (shots.length === 0) {
    return (
      <div className={`grid place-items-center overflow-hidden bg-linear-to-br from-strawberry-soft via-vanilla-soft to-pistachio-soft ${className}`}>
        <FolderHeart className="size-1/3 max-h-12 max-w-12 text-raspberry/70" strokeWidth={1.6} aria-hidden />
      </div>
    )
  }

  return (
    <div className={`grid gap-0.5 overflow-hidden bg-cream-deep ${LAYOUTS[shots.length]} ${className}`}>
      {shots.map((recipe) => (
        <div key={recipe.id} className="min-h-0 min-w-0 overflow-hidden">
          <RecipeImage recipe={{ ...recipe, name: '' }} />
        </div>
      ))}
    </div>
  )
}

/** A folder as a square tile, the same size and shape as a recipe card. */
export function FolderTile({ folder, still = false }: { folder: Folder; still?: boolean }) {
  const { tn } = useI18n()
  const body = (
    <>
      <FolderCover folder={folder} className="aspect-square rounded-[1.15rem]" />
      <div className="px-2 pb-2 pt-2.5">
        <h3 className="truncate text-[15px] font-semibold leading-snug">{folder.name}</h3>
        <p className="mt-0.5 text-xs font-semibold text-ink-soft">{tn(folder.recipeIds.length, '{n} recipe', '{n} recipes')}</p>
      </div>
    </>
  )
  const shell = 'block rounded-tile bg-white p-1.5 shadow-soft transition-transform active:scale-[0.98]'
  return still ? (
    <div className={`${shell} pointer-events-none select-none`}>{body}</div>
  ) : (
    <Link to={`/folder/${folder.id}`} className={`${shell} focus-visible:outline-offset-4`}>
      {body}
    </Link>
  )
}

/** A folder as a row in a list. */
export function FolderRow({ folder, still = false }: { folder: Folder; still?: boolean }) {
  const { tn } = useI18n()
  const body = (
    <>
      <FolderCover folder={folder} className="size-14 shrink-0 rounded-2xl" />
      <span className="min-w-0 flex-1">
        <span className="block truncate font-display text-[17px] font-semibold">{folder.name}</span>
        <span className="block text-sm font-semibold text-ink-soft">{tn(folder.recipeIds.length, '{n} recipe', '{n} recipes')}</span>
      </span>
      {!still && <ChevronRight className="size-5 shrink-0 text-ink-faint" aria-hidden />}
    </>
  )
  const shell = 'flex items-center gap-3 rounded-tile bg-white p-2 pr-4 shadow-soft transition-transform active:scale-[0.98]'
  return still ? (
    <div className={`${shell} pointer-events-none select-none`}>{body}</div>
  ) : (
    <Link to={`/folder/${folder.id}`} className={shell}>
      {body}
    </Link>
  )
}
