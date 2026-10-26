import { createContext, useContext } from 'react'
import type { Recipe } from '../types/recipe'

export interface LibraryState {
  ready: boolean
  userRecipes: Recipe[]
  favorites: Set<string>
  saveRecipe: (recipe: Recipe) => Promise<void>
  deleteRecipe: (id: string) => Promise<void>
  toggleFavorite: (id: string) => Promise<void>
  exportBackup: () => Promise<void>
  importBackup: (file: File) => Promise<number>
}

export const LibraryContext = createContext<LibraryState | null>(null)

export function useLibrary(): LibraryState {
  const library = useContext(LibraryContext)
  if (!library) throw new Error('useLibrary must be used inside <LibraryProvider>')
  return library
}
