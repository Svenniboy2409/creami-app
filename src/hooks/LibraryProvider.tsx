import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import {
  createBackup,
  deleteUserRecipe,
  getFavorites,
  listUserRecipes,
  requestPersistence,
  restoreBackup,
  saveUserRecipe,
  setFavorites as persistFavorites,
} from '../lib/storage'
import type { Recipe } from '../types/recipe'
import { LibraryContext, type LibraryState } from './libraryContext'

const loadLibrary = () => Promise.all([listUserRecipes(), getFavorites()])

export function LibraryProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false)
  const [userRecipes, setUserRecipes] = useState<Recipe[]>([])
  const [favorites, setFavorites] = useState<Set<string>>(new Set())

  const apply = useCallback(([recipes, favs]: [Recipe[], string[]]) => {
    setUserRecipes(recipes)
    setFavorites(new Set(favs))
  }, [])

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

  const saveRecipe = useCallback(async (recipe: Recipe) => {
    await saveUserRecipe(recipe)
    setUserRecipes((current) => [recipe, ...current.filter((r) => r.id !== recipe.id)])
    void requestPersistence()
  }, [])

  const deleteRecipe = useCallback(async (id: string) => {
    await deleteUserRecipe(id)
    setUserRecipes((current) => current.filter((r) => r.id !== id))
    setFavorites((current) => {
      if (!current.has(id)) return current
      const next = new Set(current)
      next.delete(id)
      void persistFavorites([...next])
      return next
    })
  }, [])

  const toggleFavorite = useCallback(
    async (id: string) => {
      const next = new Set(favorites)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      setFavorites(next)
      await persistFavorites([...next])
    },
    [favorites],
  )

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
    () => ({ ready, userRecipes, favorites, saveRecipe, deleteRecipe, toggleFavorite, exportBackup, importBackup }),
    [ready, userRecipes, favorites, saveRecipe, deleteRecipe, toggleFavorite, exportBackup, importBackup],
  )

  return <LibraryContext.Provider value={value}>{children}</LibraryContext.Provider>
}
