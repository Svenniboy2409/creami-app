import { Check, FolderHeart, FolderPlus, Plus } from 'lucide-react'
import { useRef, useState } from 'react'
import { useI18n } from '../hooks/i18nContext'
import { useLibrary } from '../hooks/libraryContext'
import { useToast } from '../hooks/toastContext'
import { FolderCover } from './FolderCover'
import { FolderForm } from './FolderSheet'
import { Sheet, SheetHeaderButton } from './Sheet'

/**
 * Tick the folders a recipe belongs to. Changes are saved straight away, and
 * reported in one toast when the sheet closes rather than one under the finger
 * for every tap. "New folder" turns the same sheet into the folder form, with
 * Back to return; the new folder comes back ticked, with the recipe in it.
 */
export function FolderPickerSheet({ open, onClose, recipeId }: { open: boolean; onClose: () => void; recipeId: string }) {
  const { t } = useI18n()
  const showToast = useToast()
  const { folders } = useLibrary()
  const [view, setView] = useState<'pick' | 'form'>('pick')
  const [wasOpen, setWasOpen] = useState(open)
  if (open !== wasOpen) {
    setWasOpen(open)
    if (open) setView('pick')
  }
  // Folder id → whether the recipe ended up in it. Ticking and unticking the
  // same folder cancels out.
  const changes = useRef(new Map<string, boolean>())
  const initial = useRef(new Map<string, boolean>())

  const note = (folderId: string, inside: boolean) => {
    if (!initial.current.has(folderId)) initial.current.set(folderId, !inside)
    if (initial.current.get(folderId) === inside) changes.current.delete(folderId)
    else changes.current.set(folderId, inside)
  }

  const close = () => {
    const entries = [...changes.current.entries()]
    changes.current = new Map()
    initial.current = new Map()
    const name = (id: string) => folders.find((folder) => folder.id === id)?.name ?? ''
    const added = entries.filter(([, inside]) => inside).map(([id]) => id)
    const removed = entries.filter(([, inside]) => !inside).map(([id]) => id)
    if (added.length && !removed.length) {
      showToast(added.length === 1 ? t('Added to {folder}', { folder: name(added[0]) }) : t('Added to {n} folders', { n: added.length }))
    } else if (removed.length && !added.length) {
      showToast(removed.length === 1 ? t('Removed from {folder}', { folder: name(removed[0]) }) : t('Removed from {n} folders', { n: removed.length }))
    } else if (entries.length) {
      showToast(t('Folders updated'))
    }
    onClose()
  }

  const form = view === 'form'
  return (
    <Sheet
      open={open}
      onClose={close}
      title={t(form ? 'New folder' : 'Save to folder')}
      action={
        <SheetHeaderButton onClick={form ? () => setView('pick') : close}>{t(form ? 'Back' : 'Done')}</SheetHeaderButton>
      }
      footer={
        form ? undefined : (
          <button type="button" onClick={close} className="btn-primary w-full">
            {t('Done')}
          </button>
        )
      }
      contentKey={view}
    >
      {form ? (
        <FolderForm
          startWith={[recipeId]}
          onSaved={(folder) => {
            note(folder.id, true)
            setView('pick')
          }}
        />
      ) : (
        <FolderPicker recipeId={recipeId} onChange={note} onNew={() => setView('form')} />
      )}
    </Sheet>
  )
}

function FolderPicker({ recipeId, onChange, onNew }: { recipeId: string; onChange: (folderId: string, inside: boolean) => void; onNew: () => void }) {
  const { t, tn } = useI18n()
  const { folders, toggleInFolder } = useLibrary()

  if (folders.length === 0) {
    return (
      <div className="flex animate-fade-up flex-col items-center px-2 pb-2 pt-4 text-center">
        <span className="grid size-16 place-items-center rounded-full bg-strawberry-soft text-raspberry">
          <FolderHeart className="size-7" aria-hidden />
        </span>
        <h3 className="mt-4 text-xl font-semibold">{t('No folders yet')}</h3>
        <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">
          {t('Folders let you group the recipes you save. Make your first one and this recipe goes straight in.')}
        </p>
        <button type="button" onClick={onNew} className="btn-primary mt-5">
          <FolderPlus className="size-5" aria-hidden /> {t('New folder')}
        </button>
      </div>
    )
  }

  return (
    <div className="animate-fade-up">
      <ul className="space-y-2">
        {folders.map((folder, index) => {
          const inside = folder.recipeIds.includes(recipeId)
          return (
            <li key={folder.id} className="animate-fade-up" style={{ animationDelay: `${Math.min(index, 8) * 35}ms` }}>
              <button
                type="button"
                role="checkbox"
                aria-checked={inside}
                onClick={async () => onChange(folder.id, await toggleInFolder(folder.id, recipeId))}
                className={`flex w-full items-center gap-3 rounded-2xl bg-white p-2 pr-4 text-left shadow-sm ring-2 transition-[box-shadow,transform] active:scale-[0.98] ${
                  inside ? 'ring-strawberry' : 'ring-transparent'
                }`}
              >
                <FolderCover folder={folder} className="size-12 shrink-0 rounded-xl" />
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-bold">{folder.name}</span>
                  <span className="block text-sm text-ink-soft">{tn(folder.recipeIds.length, '{n} recipe', '{n} recipes')}</span>
                </span>
                <span
                  className={`grid size-7 shrink-0 place-items-center rounded-full border-2 transition-colors ${
                    inside ? 'animate-chip-pop border-raspberry bg-raspberry text-white' : 'border-ink-faint/50 text-ink-faint'
                  }`}
                >
                  {inside ? <Check className="size-4" strokeWidth={3.2} aria-hidden /> : <Plus className="size-4" strokeWidth={3} aria-hidden />}
                </span>
              </button>
            </li>
          )
        })}
      </ul>
      <button
        type="button"
        onClick={onNew}
        className="mt-2.5 flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-strawberry/60 p-3 font-bold text-raspberry transition-transform active:scale-[0.98]"
      >
        <Plus className="size-5" aria-hidden /> {t('New folder')}
      </button>
    </div>
  )
}
