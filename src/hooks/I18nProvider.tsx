import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { getStoredLang, localizeRecipe, storeLang, translate, type Lang, type Vars } from '../lib/i18n'
import type { Recipe } from '../types/recipe'
import { I18nContext, type I18nState } from './i18nContext'

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getStoredLang)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = useCallback((next: Lang) => {
    storeLang(next)
    setLangState(next)
  }, [])

  const value = useMemo<I18nState>(() => {
    const t = (key: string, vars?: Vars) => translate(lang, key, vars)
    return {
      lang,
      setLang,
      t,
      tn: (n: number, one: string, many: string) => t(n === 1 ? one : many, { n }),
      localize: (recipe: Recipe) => localizeRecipe(recipe, lang),
    }
  }, [lang, setLang])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
