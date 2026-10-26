import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { getFolderView, storeFolderView, type FolderView } from '../lib/prefs'
import {
  applyOrder,
  createBackup,
  deleteUserRecipe,
  getFavorites,
  getFolders,
  getRecipeOrder,
  listUserRecipes,
  newFolderId,
  requestPersistence,
  restoreBackup,
  saveUserRecipe,
  setFavorites as persistFavorites,
  setFolders as persistFolders,
  setRecipeOrder as persistRecipeOrder,
} from '../lib/storage'
import type { Folder, Recipe } from '../types/recipe'
import { LibraryContext, type LibraryState } from './libraryContext'

const loadLibrary = () => Promise.all([listUserRecipes(), getFavorites(), getFolders(), getRecipeOrder()])

/**
 * State that is also written to storage on every change. The latest value is
 * kept in a ref too, so a change is worked out once and saved once, rather than
 * inside a state updater that React may run twice.
 */
function useStoredList<T>(persist: (value: T[]) => Promise<void>) {
  const [value, setValue] = useState<T[]>([])
  const latest = useRef<T[]>([])
  const load = useCallback((next: T[]) => {
    latest.current = next
    setValue(next)
  }, [])
  const update = useCallback(
    (change: (current: T[]) => T[]) => {
      const next = change(latest.current)
      load(next)
      return persist(next)
    },
    [persist, load],
  )
  return [value, update, load, latest] as const
}

export function LibraryProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false)
  const [userRecipes, setUserRecipes] = useState<Recipe[]>([])
  const [favoriteIds, updateFavorites, loadFavorites] = useStoredList<string>(persistFavorites)
  const [folders, updateFolders, loadFolders, latestFolders] = useStoredList<Folder>(persistFolders)
  // Only read through the order of userRecipes, so its value isn't needed here.
  const [, updateRecipeOrder, loadRecipeOrder] = useStoredList<string>(persistRecipeOrder)
  const [folderView, setFolderViewState] = useState<FolderView>(getFolderView)

  const apply = useCallback(
    ([recipes, favs, folderList, order]: Awaited<ReturnType<typeof loadLibrary>>) => {
      setUserRecipes(applyOrder(recipes, order))
      loadFavorites(favs)
      loadFolders(folderList)
      loadRecipeOrder(order)
    },
    [loadFavorites, loadFolders, loadRecipeOrder],
  )

  useEffect(() => {
    let active = true
    loadLibrary()
      .then((data) => active && apply(data))
      .catch((error) => console.error('Could not load your library', error))
      .finally(() => active && setReady(true))
    return () => {
      active = false
    }
  }, [apply])

  const favorites = useMemo(() => new Set(favoriteIds), [favoriteIds])

  const saveRecipe = useCallback(async (recipe: Recipe) => {
    await saveUserRecipe(recipe)
    // An edited recipe keeps its place; a new one goes to the front.
    setUserRecipes((current) =>
      current.some((r) => r.id === recipe.id) ? current.map((r) => (r.id === recipe.id ? recipe : r)) : [recipe, ...current],
    )
    void requestPersistence()
  }, [])

  const deleteRecipe = useCallback(
    async (id: string) => {
      await deleteUserRecipe(id)
      setUserRecipes((current) => current.filter((r) => r.id !== id))
      const without = (ids: string[]) => ids.filter((x) => x !== id)
      await Promise.all([
        updateFavorites(without),
        updateRecipeOrder(without),
        updateFolders((current) =>
          current.map((folder) => (folder.recipeIds.includes(id) ? { ...folder, recipeIds: without(folder.recipeIds) } : folder)),
        ),
      ])
    },
    [updateFavorites, updateRecipeOrder, updateFolders],
  )

  // A new favorite goes to the front, so the newest is the first you see.
  const toggleFavorite = useCallback(
    (id: string) => updateFavorites((current) => (current.includes(id) ? current.filter((x) => x !== id) : [id, ...current])),
    [updateFavorites],
  )

  const reorderRecipes = useCallback(
    async (ids: string[]) => {
      setUserRecipes((current) => applyOrder(current, ids))
      await updateRecipeOrder(() => ids)
    },
    [updateRecipeOrder],
  )

  const reorderFavorites = useCallback((ids: string[]) => updateFavorites(() => ids), [updateFavorites])

  const createFolder = useCallback(
    async (name: string, options: { image?: string; recipeIds?: string[] } = {}) => {
      const folder: Folder = {
        id: newFolderId(),
        name: name.trim(),
        image: options.image,
        recipeIds: options.recipeIds ?? [],
        createdAt: new Date().toISOString(),
      }
      await updateFolders((current) => [folder, ...current])
      void requestPersistence()
      return folder
    },
    [updateFolders],
  )

  const changeFolder = useCallback(
    (id: string, change: (folder: Folder) => Folder) => updateFolders((current) => current.map((folder) => (folder.id === id ? change(folder) : folder))),
    [updateFolders],
  )

  const updateFolder = useCallback(
    (id: string, patch: { name?: string; image?: string | null }) =>
      changeFolder(id, (folder) => ({
        ...folder,
        name: patch.name?.trim() || folder.name,
        image: patch.image === null ? undefined : (patch.image ?? folder.image),
      })),
    [changeFolder],
  )

  const deleteFolder = useCallback((id: string) => updateFolders((current) => current.filter((folder) => folder.id !== id)), [updateFolders])

  const toggleInFolder = useCallback(
    async (folderId: string, recipeId: string) => {
      const inside = !latestFolders.current.find((folder) => folder.id === folderId)?.recipeIds.includes(recipeId)
      await changeFolder(folderId, (folder) => ({
        ...folder,
        recipeIds: inside ? [...folder.recipeIds, recipeId] : folder.recipeIds.filter((x) => x !== recipeId),
      }))
      return inside
    },
    [changeFolder, latestFolders],
  )

  const addToFolder = useCallback(
    (folderId: string, recipeIds: string[]) =>
      changeFolder(folderId, (folder) => ({ ...folder, recipeIds: [...new Set([...folder.recipeIds, ...recipeIds])] })),
    [changeFolder],
  )

  const reorderFolders = useCallback((ids: string[]) => updateFolders((current) => applyOrder(current, ids)), [updateFolders])

  const reorderFolder = useCallback(
    (folderId: string, recipeIds: string[]) => changeFolder(folderId, (folder) => ({ ...folder, recipeIds })),
    [changeFolder],
  )

  const setFolderView = useCallback((view: FolderView) => {
    storeFolderView(view)
    setFolderViewState(view)
  }, [])

  const exportBackup = useCallback(async () => {
    const backup = await createBackup()
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `creami-backup-${backup.exportedAt.slice(0, 10)}.json`
    link.click()
    setTimeout(() => URL.revokeObjectURL(url), 1000)
  }, [])

  const importBackup = useCallback(
    async (file: File) => {
      const count = await restoreBackup(JSON.parse(await file.text()))
      apply(await loadLibrary())
      return count
    },
    [apply],
  )

  const value = useMemo<LibraryState>(
    () => ({
      ready,
      userRecipes,
      favorites,
      favoriteIds,
      folders,
      folderView,
      setFolderView,
      saveRecipe,
      deleteRecipe,
      toggleFavorite,
      reorderRecipes,
      reorderFavorites,
      createFolder,
      updateFolder,
      deleteFolder,
      toggleInFolder,
      addToFolder,
      reorderFolders,
      reorderFolder,
      exportBackup,
      importBackup,
    }),
    [
      ready,
      userRecipes,
      favorites,
      favoriteIds,
      folders,
      folderView,
      setFolderView,
      saveRecipe,
      deleteRecipe,
      toggleFavorite,
      reorderRecipes,
      reorderFavorites,
      createFolder,
      updateFolder,
      deleteFolder,
      toggleInFolder,
      addToFolder,
      reorderFolders,
      reorderFolder,
      exportBackup,
      importBackup,
    ],
  )

  return <LibraryContext.Provider value={value}>{children}</LibraryContext.Provider>
}
