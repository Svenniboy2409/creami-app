import type { Recipe } from '../types/recipe'
import { NL } from './strings-nl'

export type Lang = 'en' | 'nl'
export type Vars = Record<string, string | number>

export const LANGUAGES: { code: Lang; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
]

const KEY = 'creami:lang'

// Kept in localStorage rather than IndexedDB: the very first render has to be
// in the right language, and IndexedDB only answers asynchronously.
export function getStoredLang(): Lang {
  try {
    const saved = localStorage.getItem(KEY)
    if (LANGUAGES.some((l) => l.code === saved)) return saved as Lang
  } catch {
    // Private mode or blocked storage.
  }
  return 'en'
}

export function storeLang(lang: Lang): void {
  try {
    localStorage.setItem(KEY, lang)
  } catch {
    // The choice just won't survive a reload.
  }
}

/**
 * Keys are the English text itself, so a string that has not been translated
 * yet still reads as something sensible instead of as a key.
 */
export function translate(lang: Lang, key: string, vars?: Vars): string {
  const text = lang === 'nl' ? (NL[key] ?? key) : key
  if (!vars) return text
  return text.replace(/\{(\w+)\}/g, (match, name: string) => (name in vars ? String(vars[name]) : match))
}

/** The recipe as it reads in this language: translated fields where there are any, the original elsewhere. */
export function localizeRecipe(recipe: Recipe, lang: Lang): Recipe {
  const text = lang === 'en' ? undefined : recipe.translations?.[lang]
  return text ? { ...recipe, ...text } : recipe
}
