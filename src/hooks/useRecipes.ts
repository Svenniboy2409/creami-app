import { useMemo } from 'react'
import { CURATED_RECIPES } from '../data/recipes'
import type { Recipe } from '../types/recipe'
import { useLibrary } from './libraryContext'

export function useAllRecipes(): Recipe[] {
  const { userRecipes } = useLibrary()
  return useMemo(() => [...CURATED_RECIPES, ...userRecipes], [userRecipes])
}

export function useRecipe(id: string | undefined): Recipe | undefined {
  const all = useAllRecipes()
  return all.find((recipe) => recipe.id === id)
}
