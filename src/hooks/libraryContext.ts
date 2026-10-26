import { createContext, useContext } from 'react'
import type { FolderView } from '../lib/prefs'
import type { SavedDraft } from '../lib/recipeDraft'
import type { Folder, Recipe } from '../types/recipe'

export interface LibraryState {
  ready: boolean
  /** Your own recipes, in the order you put them (newest first until you rearrange). */
  userRecipes: Recipe[]
  favorites: Set<string>
  /** Favorite ids in the order they are shown, newest first. */
  favoriteIds: string[]
  folders: Folder[]
  /** Unfinished new recipes, most recently saved first. */
  drafts: SavedDraft[]
  folderView: FolderView
  setFolderView: (view: FolderView) => void
  saveRecipe: (recipe: Recipe) => Promise<void>
  deleteRecipe: (id: string) => Promise<void>
  toggleFavorite: (id: string) => Promise<void>
  reorderRecipes: (ids: string[]) => Promise<void>
  reorderFavorites: (ids: string[]) => Promise<void>
  createFolder: (name: string, options?: { image?: string; recipeIds?: string[] }) => Promise<Folder>
  updateFolder: (id: string, patch: { name?: string; image?: string | null }) => Promise<void>
  deleteFolder: (id: string) => Promise<void>
  /** Puts the recipe in the folder or takes it out; resolves to whether it is in there now. */
  toggleInFolder: (folderId: string, recipeId: string) => Promise<boolean>
  addToFolder: (folderId: string, recipeIds: string[]) => Promise<void>
  reorderFolders: (ids: string[]) => Promise<void>
  reorderFolder: (folderId: string, recipeIds: string[]) => Promise<void>
  /** Saves a draft, replacing one with the same id, and puts it first. */
  saveDraft: (draft: SavedDraft) => Promise<void>
  deleteDraft: (id: string) => Promise<void>
  exportBackup: () => Promise<void>
  importBackup: (file: File) => Promise<number>
}

export const LibraryContext = createContext<LibraryState | null>(null)

export function useLibrary(): LibraryState {
  const library = useContext(LibraryContext)
  if (!library) throw new Error('useLibrary must be used inside <LibraryProvider>')
  return library
}
