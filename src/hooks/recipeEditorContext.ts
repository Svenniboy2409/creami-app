import { createContext, useContext } from 'react'
import type { Recipe } from '../types/recipe'

export interface RecipeEditorState {
  /** The + button: a new recipe, or first a choice when there are drafts to carry on with. */
  openNew: () => void
  /** Edit one of your own recipes. */
  openEdit: (recipe: Recipe) => void
}

export const RecipeEditorContext = createContext<RecipeEditorState | null>(null)

export function useRecipeEditor(): RecipeEditorState {
  const editor = useContext(RecipeEditorContext)
  if (!editor) throw new Error('useRecipeEditor must be used inside <RecipeEditorProvider>')
  return editor
}
