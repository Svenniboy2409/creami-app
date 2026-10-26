import { Check, FolderPlus } from 'lucide-react'
import { useRef, useState } from 'react'
import { useI18n } from '../hooks/i18nContext'
import { useLibrary } from '../hooks/libraryContext'
import { useToast } from '../hooks/toastContext'
import { FolderCover } from './FolderCover'
import { Sheet } from './Sheet'

/**
 * Tick the folders a recipe belongs to. Changes are saved straight away, and
 * reported in one toast when the sheet closes rather than one under the finger
 * for every tap.
 */
export function FolderPickerSheet({ open, onClose, recipeId }: { open: boolean; onClose: () => void; recipeId: string }) {
  const { t } = useI18n()
  const showToast = useToast()
  const { folders } = useLibrary()
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
    if (entries.length === 1) {
      const [id, inside] = entries[0]
      showToast(t(inside ? 'Added to {folder}' : 'Removed from {folder}', { folder: name(id) }))
    } else if (entries.length > 1) {
      showToast(t('{n} folders updated', { n: entries.length }))
    }
    onClose()
  }

  return (
    <Sheet open={open} onClose={close} title={t('Add to folder')}>
      <FolderPicker recipeId={recipeId} onChange={note} />
    </Sheet>
  )
}

function FolderPicker({ recipeId, onChange }: { recipeId: string; onChange: (folderId: string, inside: boolean) => void }) {
  const { t, tn } = useI18n()
  const { folders, toggleInFolder, createFolder } = useLibrary()
  const [creating, setCreating] = useState(folders.length === 0)
  const [name, setName] = useState('')

  const create = async () => {
    if (!name.trim()) return
    // A folder made from a recipe's page starts with that recipe in it.
    const folder = await createFolder(name, { recipeIds: [recipeId] })
    onChange(folder.id, true)
    setName('')
    setCreating(false)
  }

  return (
    <div className="space-y-2">
      {creating ? (
        <form
          onSubmit={(event) => {
            event.preventDefault()
            void create()
          }}
          className="flex animate-fade-up gap-2"
        >
          <input
            className="field bg-white"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder={t('Name of the new folder')}
            aria-label={t('Name of the new folder')}
            enterKeyHint="done"
            maxLength={60}
            autoFocus
          />
          <button type="submit" disabled={!name.trim()} className="btn-primary shrink-0 px-5 py-3">
            {t('Create')}
          </button>
        </form>
      ) : (
        <button
          type="button"
          onClick={() => setCreating(true)}
          className="flex w-full items-center gap-3 rounded-2xl border-2 border-dashed border-strawberry/60 p-3 text-left font-bold text-raspberry transition-transform active:scale-[0.98]"
        >
          <span className="grid size-12 place-items-center rounded-xl bg-strawberry-soft">
            <FolderPlus className="size-5" aria-hidden />
          </span>
          {t('New folder')}
        </button>
      )}

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
                    inside ? 'animate-chip-pop border-raspberry bg-raspberry text-white' : 'border-ink-faint/50'
                  }`}
                >
                  {inside && <Check className="size-4" strokeWidth={3.2} aria-hidden />}
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
