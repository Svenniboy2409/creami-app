import { useI18n } from '../hooks/i18nContext'
import { ChipRow } from './Chips'
import { Sheet, SheetHeaderButton } from './Sheet'

export interface FilterGroup {
  key: string
  label: string
  /** Every option except "All", which the sheet adds itself. */
  options: { value: string; label: string }[]
  value: string
  onChange: (value: string) => void
}

/**
 * Every filter in one place, including the ones that also sit on the page,
 * so the sheet always shows the whole picture of what is selected.
 */
export function FilterSheet({
  open,
  onClose,
  groups,
  count,
  onReset,
}: {
  open: boolean
  onClose: () => void
  groups: FilterGroup[]
  /** How many recipes the current selection leaves, for the button at the bottom. */
  count: number
  onReset: () => void
}) {
  const { t, tn } = useI18n()
  const active = groups.some((group) => group.value !== 'all')

  return (
    <Sheet
      open={open}
      onClose={onClose}
      title={t('Filters')}
      action={
        <SheetHeaderButton onClick={onReset} disabled={!active}>
          {t('Reset')}
        </SheetHeaderButton>
      }
      footer={
        <button type="button" onClick={onClose} className="btn-primary w-full">
          {/* Re-keyed on the count so the label gives a little bounce as it changes. */}
          <span key={count} className="inline-block animate-chip-pop">
            {tn(count, 'Show {n} recipe', 'Show {n} recipes')}
          </span>
        </button>
      }
    >
      <div className="space-y-6">
        {groups.map((group) => (
          <section key={group.key}>
            <h3 className="mb-2.5 font-sans text-sm font-extrabold uppercase tracking-[0.12em] text-ink-faint">{group.label}</h3>
            <ChipRow
              wrap
              label={group.label}
              value={group.value}
              onChange={group.onChange}
              options={[{ value: 'all', label: t('All') }, ...group.options]}
            />
          </section>
        ))}
      </div>
    </Sheet>
  )
}
