import { ArrowUpDown } from 'lucide-react'
import { useI18n } from '../hooks/i18nContext'

/** The round button that switches rearranging on. */
export function RearrangeButton({ onClick }: { onClick: () => void }) {
  const { t } = useI18n()
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={t('Rearrange')}
      title={t('Rearrange')}
      className="grid size-12 shrink-0 place-items-center rounded-full bg-white text-ink shadow-soft transition-transform active:scale-90"
    >
      <ArrowUpDown className="size-5" aria-hidden />
    </button>
  )
}

/** Shown while rearranging, in place of the search bar. */
export function RearrangeBar({ onDone }: { onDone: () => void }) {
  const { t } = useI18n()
  return (
    <div className="flex animate-pop-in items-center justify-between gap-3 rounded-full bg-white py-1.5 pl-5 pr-1.5 shadow-soft ring-2 ring-strawberry/50">
      <span className="text-sm font-bold text-ink-soft">{t('Drag a card to move it')}</span>
      <button type="button" onClick={onDone} className="rounded-full bg-raspberry px-5 py-2.5 text-sm font-extrabold text-white shadow-lift transition-transform active:scale-95">
        {t('Done')}
      </button>
    </div>
  )
}
