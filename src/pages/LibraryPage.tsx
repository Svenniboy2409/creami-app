import { ChefHat, FolderHeart, FolderPlus, Heart, Settings } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router'
import { Segmented } from '../components/Chips'
import { EmptyState } from '../components/EmptyState'
import { FolderRow, FolderTile } from '../components/FolderCover'
import { FolderSheet } from '../components/FolderSheet'
import { PageHeader } from '../components/PageHeader'
import { RecipeCard, RecipeGrid } from '../components/RecipeCard'
import { RearrangeBar, RearrangeButton } from '../components/Rearrange'
import { ReorderableGrid } from '../components/ReorderableGrid'
import { SearchBar } from '../components/SearchBar'
import { SettingsSheet } from '../components/SettingsSheet'
import { useI18n } from '../hooks/i18nContext'
import { useLibrary } from '../hooks/libraryContext'
import { useRecipeEditor } from '../hooks/recipeEditorContext'
import { useAllRecipes } from '../hooks/useRecipes'
import { useRemembered } from '../lib/pageMemory'
import { searchRecipes } from '../lib/search'
import type { Recipe } from '../types/recipe'

type Tab = 'mine' | 'favorites' | 'folders'

export function LibraryPage() {
  const { ready, userRecipes, favoriteIds, folders, folderView, reorderRecipes, reorderFavorites, reorderFolders } = useLibrary()
  const { t, tn } = useI18n()
  const { openNew } = useRecipeEditor()
  const all = useAllRecipes()
  const navigate = useNavigate()
  const [params, setParams] = useSearchParams()
  const tabParam = params.get('tab')
  // Favorites unless another tab is asked for.
  const tab: Tab = tabParam === 'mine' || tabParam === 'folders' ? tabParam : 'favorites'
  // Each tab keeps its own search for as long as the app is open.
  const [query, setQuery] = useRemembered(`library:query:${tab}`, '')
  const [sorting, setSorting] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [newFolderOpen, setNewFolderOpen] = useState(false)

  const favoriteRecipes = useMemo(
    () => favoriteIds.map((id) => all.find((recipe) => recipe.id === id)).filter((recipe): recipe is Recipe => recipe !== undefined),
    [favoriteIds, all],
  )
  const source = tab === 'mine' ? userRecipes : favoriteRecipes
  const results = useMemo(() => searchRecipes(source, query), [source, query])
  const count = tab === 'folders' ? folders.length : source.length
  const rearranging = sorting && count > 1

  const switchTab = (next: Tab) => {
    setSorting(false)
    setParams(next === 'favorites' ? {} : { tab: next }, { replace: true })
  }

  const folderList = (still: boolean) => (folder: (typeof folders)[number]) =>
    folderView === 'list' ? <FolderRow folder={folder} still={still} /> : <FolderTile folder={folder} still={still} />
  const folderLayout = folderView === 'list' ? 'flex flex-col gap-3' : 'grid grid-cols-2 gap-3'

  const recipesTab = () => {
    if (rearranging) {
      return (
        <ReorderableGrid
          items={source}
          onReorder={tab === 'mine' ? reorderRecipes : reorderFavorites}
          renderItem={(recipe) => <RecipeCard recipe={recipe} still />}
        />
      )
    }
    if (results.length > 0) return <RecipeGrid recipes={results} />
    if (source.length > 0) {
      return (
        <EmptyState icon={ChefHat} title={t('Nothing found')}>
          {t('No recipes match “{query}”.', { query })}
        </EmptyState>
      )
    }
    if (tab === 'mine') {
      return (
        <EmptyState
          icon={ChefHat}
          title={t('Your recipe box is empty')}
          action={
            <button type="button" onClick={openNew} className="btn-primary">
              {t('Add a recipe')}
            </button>
          }
        >
          {t('Tap the + button to save your own creations. They are stored safely on this device.')}
        </EmptyState>
      )
    }
    return (
      <EmptyState
        icon={Heart}
        title={t('No favorites yet')}
        action={
          <Link to="/" className="btn-secondary">
            {t('Discover recipes')}
          </Link>
        }
      >
        {t('Tap the heart on any recipe to keep it here.')}
      </EmptyState>
    )
  }

  const foldersTab = () => {
    if (folders.length === 0) {
      return (
        <EmptyState
          icon={FolderHeart}
          title={t('No folders yet')}
          action={
            <button type="button" onClick={() => setNewFolderOpen(true)} className="btn-primary">
              <FolderPlus className="size-5" aria-hidden /> {t('New folder')}
            </button>
          }
        >
          {t('Group recipes however you like: summer sorbets, protein treats, party desserts…')}
        </EmptyState>
      )
    }
    if (rearranging) {
      return <ReorderableGrid items={folders} onReorder={reorderFolders} className={folderLayout} renderItem={folderList(true)} />
    }
    return (
      <ul className={folderLayout}>
        {folders.map((folder, index) => (
          <li key={folder.id} className="animate-fade-up" style={{ animationDelay: `${Math.min(index, 10) * 45}ms` }}>
            {folderList(false)(folder)}
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div className="px-5">
      <PageHeader
        eyebrow={t('Your collection')}
        title={t('Library')}
        action={
          <button type="button" onClick={() => setSettingsOpen(true)} aria-label={t('Settings')} title={t('Settings')} className="icon-btn mb-1 bg-white shadow-soft">
            <Settings className="size-5" aria-hidden />
          </button>
        }
      />

      <Segmented
        label={t('Library section')}
        value={tab}
        onChange={switchTab}
        options={[
          { value: 'mine', label: t('My recipes'), hint: tn(userRecipes.length, '{n} recipe', '{n} recipes') },
          { value: 'favorites', label: t('Favorites'), hint: tn(favoriteRecipes.length, '{n} recipe', '{n} recipes') },
          { value: 'folders', label: t('Folders'), hint: tn(folders.length, '{n} folder', '{n} folders') },
        ]}
      />

      <div className="mt-4 min-h-12">
        {rearranging ? (
          <RearrangeBar onDone={() => setSorting(false)} />
        ) : tab === 'folders' ? (
          folders.length > 0 && (
            <div className="flex items-center gap-2">
              <p className="flex-1 text-sm font-bold text-ink-soft">{tn(folders.length, '{n} folder', '{n} folders')}</p>
              {folders.length > 1 && <RearrangeButton onClick={() => setSorting(true)} />}
              <button type="button" onClick={() => setNewFolderOpen(true)} className="btn-secondary h-12 shadow-soft">
                <FolderPlus className="size-5 text-raspberry" aria-hidden /> {t('New folder')}
              </button>
            </div>
          )
        ) : (
          source.length > 0 && (
            <SearchBar
              value={query}
              onChange={setQuery}
              placeholder={t(tab === 'mine' ? 'Search your recipes' : 'Search favorites')}
              trailing={source.length > 1 && !query ? <RearrangeButton onClick={() => setSorting(true)} /> : undefined}
            />
          )
        )}
      </div>

      {/* Keyed on the tab so switching deals the new set of cards in. */}
      <div key={tab} className="mt-5">
        {!ready ? null : tab === 'folders' ? foldersTab() : recipesTab()}
      </div>

      <SettingsSheet open={settingsOpen} onClose={() => setSettingsOpen(false)} />
      <FolderSheet
        open={newFolderOpen}
        onClose={() => setNewFolderOpen(false)}
        // A new folder is empty, and filling it is the next thing you want, so go straight in.
        onCreated={(folder) => navigate(`/folder/${folder.id}`)}
      />
    </div>
  )
}
