/** An on/off switch whose knob slides across, for a setting that is simply on or off. */
export function Switch({ checked, onChange, label, hint }: { checked: boolean; onChange: (on: boolean) => void; label: string; hint?: string }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="flex w-full items-center gap-3 rounded-2xl bg-white p-3.5 text-left shadow-sm transition-transform active:scale-[0.98]"
    >
      <span className="min-w-0 flex-1">
        <span className="block font-bold">{label}</span>
        {hint && <span className="mt-0.5 block text-sm leading-snug text-ink-soft">{hint}</span>}
      </span>
      <span
        aria-hidden
        className={`relative h-8 w-[3.25rem] shrink-0 rounded-full transition-colors duration-300 ${checked ? 'bg-raspberry' : 'bg-cream-deep'}`}
      >
        <span
          className={`absolute left-1 top-1 size-6 rounded-full bg-white shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.2,0.9,0.3,1.3)] ${
            checked ? 'translate-x-5' : ''
          }`}
        />
      </span>
    </button>
  )
}
