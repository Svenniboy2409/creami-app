import { ImagePlus, LoaderCircle, Trash2 } from 'lucide-react'
import { useState } from 'react'
import { useI18n } from '../hooks/i18nContext'
import { useLibrary } from '../hooks/libraryContext'
import { useToast } from '../hooks/toastContext'
import { compressImage } from '../lib/image'
import type { Folder } from '../types/recipe'
import { FolderCover } from './FolderCover'
import { Sheet, SheetAction } from './Sheet'

interface Props {
  open: boolean
  onClose: () => void
  /** The folder to rename, re-cover or delete; without one the sheet makes a new folder. */
  folder?: Folder
  /** Recipes a new folder starts with, e.g. the one whose page it was made from. */
  startWith?: string[]
  onCreated?: (folder: Folder) => void
  onDeleted?: () => void
}

/** Make a folder, or edit one: name, cover photo, delete. */
export function FolderSheet(props: Props) {
  const { t } = useI18n()
  return (
    <Sheet open={props.open} onClose={props.onClose} title={t(props.folder ? 'Edit folder' : 'New folder')}>
      {/* Inside the sheet, so it starts fresh every time the sheet opens. */}
      <FolderForm {...props} />
    </Sheet>
  )
}

function FolderForm({ onClose, folder, startWith = [], onCreated, onDeleted }: Props) {
  const { t } = useI18n()
  const showToast = useToast()
  const { createFolder, updateFolder, deleteFolder } = useLibrary()
  const [name, setName] = useState(folder?.name ?? '')
  const [image, setImage] = useState(folder?.image)
  const [busy, setBusy] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const onPhoto = async (file: File | undefined) => {
    if (!file) return
    setBusy(true)
    try {
      setImage(await compressImage(file))
    } catch {
      setError(t('That photo could not be loaded. Try a JPEG or PNG.'))
    } finally {
      setBusy(false)
    }
  }

  const save = async () => {
    if (!name.trim()) {
      setError(t('Give your folder a name.'))
      return
    }
    if (folder) {
      await updateFolder(folder.id, { name, image: image ?? null })
      showToast(t('Folder saved'))
      onClose()
    } else {
      const created = await createFolder(name, { image, recipeIds: startWith })
      showToast(t('Folder “{name}” created', { name: created.name }))
      onCreated?.(created)
      onClose()
    }
  }

  if (confirmDelete && folder) {
    return (
      <div className="animate-fade-up">
        <p className="mb-4 text-[15px] leading-relaxed text-ink-soft">
          {t('“{name}” will be deleted. The recipes inside stay where they are.', { name: folder.name })}
        </p>
        <div className="space-y-2">
          <SheetAction
            icon={Trash2}
            label={t('Delete folder')}
            danger
            onClick={async () => {
              onClose()
              onDeleted?.()
              await deleteFolder(folder.id)
              showToast(t('Folder deleted'))
            }}
          />
          <button type="button" onClick={() => setConfirmDelete(false)} className="w-full py-3 font-bold text-ink-soft">
            {t('Cancel')}
          </button>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        void save()
      }}
      className="space-y-4"
      noValidate
    >
      <div className="flex items-center gap-4">
        <label className="relative block size-24 shrink-0 cursor-pointer overflow-hidden rounded-3xl shadow-soft">
          <input type="file" accept="image/*" className="sr-only" onChange={(event) => void onPhoto(event.target.files?.[0])} aria-label={t('Cover photo')} />
          <FolderCover folder={{ image, recipeIds: folder?.recipeIds ?? startWith }} className="size-full" />
          <span className="absolute bottom-1.5 right-1.5 grid size-7 place-items-center rounded-full bg-white/90 text-raspberry shadow-sm">
            <ImagePlus className="size-4" aria-hidden />
          </span>
          {busy && (
            <span className="absolute inset-0 grid place-items-center bg-white/60">
              <LoaderCircle className="size-6 animate-spin text-raspberry" aria-hidden />
            </span>
          )}
        </label>
        <div className="min-w-0 flex-1 text-sm text-ink-soft">
          <p className="font-bold text-ink">{t('Cover photo')}</p>
          <p className="mt-0.5 leading-snug">{t('Tap to pick one, or leave it to show the recipes inside.')}</p>
          {image && (
            <button type="button" onClick={() => setImage(undefined)} className="mt-1.5 font-extrabold text-raspberry">
              {t('Remove photo')}
            </button>
          )}
        </div>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-sm font-bold text-ink-soft">{t('Name')}</span>
        <input
          className="field bg-white"
          value={name}
          onChange={(event) => {
            setName(event.target.value)
            setError(null)
          }}
          placeholder={t('Summer sorbets')}
          enterKeyHint="done"
          maxLength={60}
          autoFocus={!folder}
        />
      </label>

      {error && (
        <p role="alert" className="animate-pop-in rounded-2xl bg-strawberry-soft px-4 py-2.5 text-center text-sm font-bold text-raspberry">
          {error}
        </p>
      )}

      <button type="submit" disabled={busy} className="btn-primary w-full">
        {t(folder ? 'Save' : 'Create folder')}
      </button>

      {folder && (
        <button type="button" onClick={() => setConfirmDelete(true)} className="flex w-full items-center justify-center gap-2 py-2 font-bold text-raspberry">
          <Trash2 className="size-4" aria-hidden /> {t('Delete folder')}
        </button>
      )}
    </form>
  )
}
