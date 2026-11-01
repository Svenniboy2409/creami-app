import { ImagePlus, LoaderCircle, Trash2 } from 'lucide-react'
import { useState } from 'react'
import { useI18n } from '../hooks/i18nContext'
import { useLibrary } from '../hooks/libraryContext'
import { useToast } from '../hooks/toastContext'
import { compressImage } from '../lib/image'
import type { Folder } from '../types/recipe'
import { Sheet, SheetAction, SheetHeaderButton } from './Sheet'

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

/** Make a folder, or edit one: name, cover photo, delete. Done at the top closes it without saving. */
export function FolderSheet({ open, onClose, folder, startWith, onCreated, onDeleted }: Props) {
  const { t } = useI18n()
  const showToast = useToast()
  const { deleteFolder } = useLibrary()
  // Asking "are you sure?" about deleting, in the sheet itself; starts over each time it opens.
  const [confirming, setConfirming] = useState(false)
  const [wasOpen, setWasOpen] = useState(open)
  if (open !== wasOpen) {
    setWasOpen(open)
    if (open) setConfirming(false)
  }

  return (
    <Sheet
      open={open}
      onClose={onClose}
      title={t(folder ? 'Edit folder' : 'New folder')}
      action={<SheetHeaderButton onClick={onClose}>{t('Done')}</SheetHeaderButton>}
      contentKey={confirming}
    >
      {confirming && folder ? (
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
            <button type="button" onClick={() => setConfirming(false)} className="w-full py-3 font-bold text-ink-soft">
              {t('Cancel')}
            </button>
          </div>
        </div>
      ) : (
        // Inside the sheet, so it starts fresh every time the sheet opens.
        <FolderForm
          folder={folder}
          startWith={startWith}
          onDelete={folder ? () => setConfirming(true) : undefined}
          onSaved={(saved, created) => {
            showToast(created ? t('Folder “{name}” created', { name: saved.name }) : t('Folder saved'))
            if (created) onCreated?.(saved)
            onClose()
          }}
        />
      )}
    </Sheet>
  )
}

/**
 * The fields of a folder, as in the cocktail app: its name first, then a large
 * cover area, and the button at the bottom of the sheet. The keyboard only comes
 * up when you tap the name, and its return key saves too.
 */
export function FolderForm({
  folder,
  startWith = [],
  onSaved,
  onDelete,
}: {
  folder?: Folder
  startWith?: string[]
  onSaved: (folder: Folder, created: boolean) => void
  onDelete?: () => void
}) {
  const { t } = useI18n()
  const { createFolder, updateFolder } = useLibrary()
  const [name, setName] = useState(folder?.name ?? '')
  const [image, setImage] = useState(folder?.image)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const onPhoto = async (file: File | undefined) => {
    if (!file) return
    setBusy(true)
    try {
      setImage(await compressImage(file))
      setError(null)
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
    // Put the keyboard away first, so the sheet is back in its place for what comes next.
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur()
    setBusy(true)
    if (folder) {
      await updateFolder(folder.id, { name, image: image ?? null })
      onSaved({ ...folder, name: name.trim(), image }, false)
    } else {
      onSaved(await createFolder(name, { image, recipeIds: startWith }), true)
    }
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        void save()
      }}
      className="animate-fade-up"
      noValidate
    >
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
          autoComplete="off"
        />
      </label>

      <div className="mt-5">
        <p className="mb-1.5 text-sm font-bold text-ink-soft">
          {t('Cover')} <span className="font-semibold text-ink-faint">{t('(optional)')}</span>
        </p>
        <label className="relative block aspect-video cursor-pointer overflow-hidden rounded-3xl border-2 border-dashed border-cream-deep bg-white/60 transition-transform active:scale-[0.99]">
          <input type="file" accept="image/*" className="sr-only" onChange={(event) => void onPhoto(event.target.files?.[0])} aria-label={t('Cover photo')} />
          {image ? (
            <>
              <img src={image} alt="" className="size-full object-cover" />
              <span className="absolute bottom-2.5 right-2.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-extrabold text-raspberry shadow-sm backdrop-blur">
                {t('Replace')}
              </span>
            </>
          ) : (
            <span className="flex size-full flex-col items-center justify-center gap-2 px-6 text-center text-sm font-bold text-ink-soft">
              <span className="grid size-11 place-items-center rounded-full bg-strawberry-soft text-raspberry">
                <ImagePlus className="size-5" aria-hidden />
              </span>
              {t('Without a cover, the folder shows the recipes inside.')}
            </span>
          )}
          {busy && (
            <span className="absolute inset-0 grid place-items-center bg-white/60">
              <LoaderCircle className="size-6 animate-spin text-raspberry" aria-hidden />
            </span>
          )}
        </label>
        {image && (
          <button type="button" onClick={() => setImage(undefined)} className="mt-2 animate-pop-in px-1 text-sm font-extrabold text-raspberry">
            {t('Use a collage instead')}
          </button>
        )}
      </div>

      {onDelete && (
        <button
          type="button"
          onClick={onDelete}
          className="btn-secondary mt-6 w-full text-raspberry ring-2 ring-raspberry/20"
        >
          <Trash2 className="size-5" aria-hidden /> {t('Delete folder')}
        </button>
      )}

      {error && (
        <p role="alert" className="mt-4 animate-pop-in rounded-2xl bg-strawberry-soft px-4 py-2.5 text-center text-sm font-bold text-raspberry">
          {error}
        </p>
      )}

      {/* At the bottom of the sheet, also while the fields scroll under it. */}
      <div className="sticky bottom-0 -mx-5 -mb-6 mt-6 border-t border-cream-deep bg-cream px-5 pb-4 pt-3">
        <button type="submit" disabled={busy} className="btn-primary w-full">
          {t(folder ? 'Save changes' : 'Create folder')}
        </button>
      </div>
    </form>
  )
}
