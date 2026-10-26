import { createContext, useContext } from 'react'
import type { Lang, Vars } from '../lib/i18n'
import type { Recipe } from '../types/recipe'

export interface I18nState {
  lang: Lang
  setLang: (lang: Lang) => void
  /** Translates an English interface string, filling in `{name}` placeholders. */
  t: (key: string, vars?: Vars) => string
  /** Picks the singular or plural form for `n` and fills in `{n}`. */
  tn: (n: number, one: string, many: string) => string
  /** The recipe's text in the interface language, where it has a translation. */
  localize: (recipe: Recipe) => Recipe
}

export const I18nContext = createContext<I18nState | null>(null)

export function useI18n(): I18nState {
  const i18n = useContext(I18nContext)
  if (!i18n) throw new Error('useI18n must be used inside <I18nProvider>')
  return i18n
}
