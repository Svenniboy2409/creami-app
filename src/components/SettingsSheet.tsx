import { Check, Download, Upload } from 'lucide-react'
import { useRef, type ReactNode } from 'react'
import { useI18n } from '../hooks/i18nContext'
import { useLibrary } from '../hooks/libraryContext'
import { useToast } from '../hooks/toastContext'
import { LANGUAGES } from '../lib/i18n'
import { Segmented } from './Chips'
import { Sheet, SheetAction, SheetHeaderButton } from './Sheet'
import { Switch } from './Switch'

function Group({ title, hint, children }: { title: string; hint?: string; children: ReactNode }) {
  return (
    <section>
      <h3 className="mb-2.5 font-sans text-sm font-extrabold uppercase tracking-[0.12em] text-ink-faint">{title}</h3>
      {children}
      {hint && <p className="mt-2 px-1 text-sm leading-snug text-ink-soft">{hint}</p>}
    </section>
  )
}

/** Everything about the app rather than about a recipe: language, how folders look, and your data. */
export function SettingsSheet({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { lang, setLang, t } = useI18n()
  const showToast = useToast()
  const { folderView, setFolderView, illustrations, setIllustrations, exportBackup, importBackup } = useLibrary()
  const fileInput = useRef<HTMLInputElement>(null)

  const onImport = async (file: File | undefined) => {
    if (!file) return
    try {
      const count = await importBackup(file)
      showToast(t(count === 1 ? 'Restored {n} recipe' : 'Restored {n} recipes', { n: count }))
    } catch (error) {
      // A file that isn't JSON at all fails in the parser, whose message means nothing to anyone.
      showToast(error instanceof Error && !(error instanceof SyntaxError) ? t(error.message) : t('Could not read that file'))
    } finally {
      if (fileInput.current) fileInput.current.value = ''
    }
  }

  return (
    <Sheet open={open} onClose={onClose} title={t('Settings')} action={<SheetHeaderButton onClick={onClose}>{t('Done')}</SheetHeaderButton>}>
      <div className="space-y-7">
        <Group title={t('Language')} hint={t('Interface and recipes. Your own recipes stay as you wrote them.')}>
          <div role="radiogroup" aria-label={t('Language')} className="space-y-2">
            {LANGUAGES.map((option) => {
              const active = option.code === lang
              return (
                <button
                  key={option.code}
                  type="button"
                  role="radio"
                  aria-checked={active}
                  onClick={() => setLang(option.code)}
                  className={`flex w-full items-center gap-3 rounded-2xl bg-white p-3.5 text-left shadow-sm ring-2 transition-[box-shadow,transform] active:scale-[0.98] ${
                    active ? 'ring-strawberry' : 'ring-transparent'
                  }`}
                >
                  <span className="text-2xl leading-none" aria-hidden>
                    {option.flag}
                  </span>
                  <span className="flex-1 font-bold">{option.name}</span>
                  {active && <Check key={option.code} className="size-5 animate-chip-pop text-raspberry" strokeWidth={3} aria-hidden />}
                </button>
              )
            })}
          </div>
        </Group>

        <Group title={t('Folders')} hint={t('How your folders look in the Library.')}>
          <Segmented
            label={t('Folders')}
            value={folderView}
            onChange={setFolderView}
            options={[
              { value: 'grid', label: t('Tiles') },
              { value: 'list', label: t('List') },
            ]}
          />
        </Group>

        <Group title={t('Pictures')}>
          <Switch
            checked={illustrations}
            onChange={setIllustrations}
            label={t('Illustrations instead of photos')}
            hint={t('Shows the app’s recipes as colourful drawings. Photos you added yourself always stay.')}
          />
        </Group>

        <Group title={t('Backup')}>
          <p className="mb-3 px-1 text-sm leading-snug text-ink-soft">
            {t('Your recipes, favorites and folders live on this device only. Export a backup now and then, or use it to move everything to another phone.')}
          </p>
          <div className="space-y-2">
            <SheetAction
              icon={Download}
              label={t('Export backup')}
              detail={t('Save a .json file with everything')}
              onClick={async () => {
                await exportBackup()
                showToast(t('Backup exported'))
              }}
            />
            <SheetAction icon={Upload} label={t('Import backup')} detail={t('Restore from a backup file')} onClick={() => fileInput.current?.click()} />
          </div>
          <input
            ref={fileInput}
            type="file"
            accept="application/json,.json"
            className="hidden"
            aria-label={t('Backup file')}
            onChange={(event) => void onImport(event.target.files?.[0])}
          />
        </Group>
      </div>
    </Sheet>
  )
}
