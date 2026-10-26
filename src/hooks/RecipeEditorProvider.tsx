import { FilePen, Plus, Trash2 } from 'lucide-react'
import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { RecipeEditorSheet, type EditorSession } from '../components/RecipeEditor'
import { RecipeImage } from '../components/RecipeImage'
import { Sheet } from '../components/Sheet'
import { rekey, toDraft, type SavedDraft } from '../lib/recipeDraft'
import { getEditorBackup } from '../lib/storage'
import type { Recipe } from '../types/recipe'
import { useI18n } from './i18nContext'
import { useLibrary } from './libraryContext'
import { RecipeEditorContext, type RecipeEditorState } from './recipeEditorContext'
import { useToast } from './toastContext'

let sessions = 0

/** The recipe pop-up, reachable from anywhere: the + button, empty states, Edit on a recipe. */
export function RecipeEditorProvider({ children }: { children: ReactNode }) {
  const { ready, userRecipes, drafts } = useLibrary()
  const { t } = useI18n()
  const showToast = useToast()
  const [choosing, setChoosing] = useState(false)
  const [session, setSession] = useState<EditorSession | null>(null)
  const [editing, setEditing] = useState(false)

  const start = useCallback((next: Omit<EditorSession, 'key'>) => {
    setSession({ ...next, key: ++sessions })
    setEditing(true)
  }, [])

  const openNew = useCallback(() => {
    if (drafts.length > 0) setChoosing(true)
    else start({ initial: toDraft() })
  }, [drafts.length, start])

  const openEdit = useCallback((recipe: Recipe) => start({ existing: recipe, initial: toDraft(recipe) }), [start])

  // Was the app closed while the pop-up held unsaved work? Then open it again with that work.
  const recovered = useRef(false)
  useEffect(() => {
    if (!ready || recovered.current) return
    recovered.current = true
    void getEditorBackup().then((backup) => {
      if (!backup) return
      const existing = backup.existingId ? userRecipes.find((recipe) => recipe.id === backup.existingId) : undefined
      start({ existing, draftId: backup.draftId, initial: rekey(backup.draft), restored: true })
      showToast(t('Picked up where you left off'))
    })
  }, [ready, userRecipes, start, showToast, t])

  const value = useMemo<RecipeEditorState>(() => ({ openNew, openEdit }), [openNew, openEdit])

  return (
    <RecipeEditorContext.Provider value={value}>
      {children}
      <DraftChooserSheet
        open={choosing}
        onClose={() => setChoosing(false)}
        onPick={(saved) => {
          setChoosing(false)
          if (saved) start({ draftId: saved.id, initial: rekey(saved.draft) })
          else start({ initial: toDraft() })
        }}
      />
      {/* Keyed per session, so every opening starts from what it was given. */}
      {session && <RecipeEditorSheet key={session.key} session={session} open={editing} onClose={() => setEditing(false)} />}
    </RecipeEditorContext.Provider>
  )
}

/** With drafts waiting, the + button first asks: something new, or carry on with one of these? */
function DraftChooserSheet({ open, onClose, onPick }: { open: boolean; onClose: () => void; onPick: (draft: SavedDraft | null) => void }) {
  const { t, lang } = useI18n()
  const showToast = useToast()
  const { drafts, deleteDraft } = useLibrary()
  const date = new Intl.DateTimeFormat(lang, { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })

  return (
    <Sheet open={open} onClose={onClose} title={t('Add a recipe')}>
      <button
        type="button"
        onClick={() => onPick(null)}
        className="flex w-full animate-fade-up items-center gap-3 rounded-2xl bg-linear-to-br from-strawberry to-raspberry p-3 text-left text-white shadow-lift transition-transform active:scale-[0.98]"
      >
        <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-white/20">
          <Plus className="size-6" strokeWidth={2.6} aria-hidden />
        </span>
        <span>
          <span className="block font-extrabold">{t('New recipe')}</span>
          <span className="block text-sm font-semibold text-white/85">{t('Start from scratch')}</span>
        </span>
      </button>

      <h3 className="mb-2.5 mt-6 font-sans text-sm font-extrabold uppercase tracking-[0.12em] text-ink-faint">{t('Carry on with a draft')}</h3>
      <ul className="space-y-2">
        {drafts.map((saved, index) => (
          <li key={saved.id} className="flex animate-fade-up items-center gap-2" style={{ animationDelay: `${Math.min(index + 1, 8) * 40}ms` }}>
            <button
              type="button"
              onClick={() => onPick(saved)}
              className="flex min-w-0 flex-1 items-center gap-3 rounded-2xl bg-white p-2 pr-3 text-left shadow-sm transition-transform active:scale-[0.98]"
            >
              <span className="size-12 shrink-0 overflow-hidden rounded-xl">
                <RecipeImage recipe={{ image: saved.draft.image, name: '', category: saved.draft.category }} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate font-bold">{saved.draft.name.trim() || t('Untitled recipe')}</span>
                <span className="flex items-center gap-1 text-sm text-ink-soft">
                  <FilePen className="size-3.5 shrink-0" aria-hidden />
                  {t('Draft · {date}', { date: date.format(new Date(saved.savedAt)) })}
                </span>
              </span>
            </button>
            <button
              type="button"
              onClick={async () => {
                await deleteDraft(saved.id)
                showToast(t('Draft deleted'))
                if (drafts.length === 1) onClose()
              }}
              aria-label={t('Delete draft “{name}”', { name: saved.draft.name.trim() || t('Untitled recipe') })}
              className="grid size-11 shrink-0 place-items-center rounded-full bg-white text-ink-soft shadow-sm transition-transform active:scale-90"
            >
              <Trash2 className="size-[18px]" aria-hidden />
            </button>
          </li>
        ))}
      </ul>
    </Sheet>
  )
}
