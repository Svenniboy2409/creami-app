import { ArrowDown, ArrowUp, Camera, FilePen, ImagePlus, LoaderCircle, Plus, Trash2, X } from 'lucide-react'
import { useId, useRef, useState, type ReactNode, type RefObject } from 'react'
import { useNavigate } from 'react-router'
import { CATEGORIES, CATEGORY_ORDER, DIFFICULTIES, MODEL_ORDER, MODELS, PINT_SIZES, PROGRAMS, SUGGESTED_TAGS } from '../data/creami'
import { useI18n } from '../hooks/i18nContext'
import { useLibrary } from '../hooks/libraryContext'
import { useToast } from '../hooks/toastContext'
import { compressImage } from '../lib/image'
import {
  emptyItem,
  emptyStep,
  findProblem,
  hasContent,
  newDraftId,
  nextKey,
  toRecipe,
  type Draft,
  type DraftField,
  type DraftGroup,
  type DraftItem,
} from '../lib/recipeDraft'
import type { Difficulty, Recipe } from '../types/recipe'
import { ChipRow, Segmented } from './Chips'
import { RecipeImage } from './RecipeImage'
import { Sheet, SheetAction, SheetHeaderButton } from './Sheet'

const UNITS = ['g', 'ml', 'tbsp', 'tsp', 'cup', 'scoop', 'pinch', 'pcs']

/** What the editor is working on: a new recipe, a draft being carried on with, or one of your recipes. */
export interface EditorSession {
  key: number
  initial: Draft
  existing?: Recipe
  draftId?: string
}

function Card({
  title,
  hint,
  children,
  invalid,
  sectionRef,
}: {
  title: string
  hint?: string
  children: ReactNode
  /** Bumped each time the card is pointed out, so its shake replays. */
  invalid?: number
  sectionRef?: RefObject<HTMLElement | null>
}) {
  return (
    <section ref={sectionRef} className={`card p-4 transition-shadow ${shakeClass(invalid)}`}>
      <h2 className={`text-lg font-semibold transition-colors ${invalid !== undefined ? 'text-raspberry' : ''}`}>{title}</h2>
      {hint && <p className="mt-0.5 text-sm text-ink-soft">{hint}</p>}
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  )
}

function Label({ text, children, optional }: { text: string; children: ReactNode; optional?: boolean }) {
  const { t } = useI18n()
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-bold text-ink-soft">
        {text}
        {optional && <span className="font-semibold text-ink-faint"> · {t('optional')}</span>}
      </span>
      {children}
    </label>
  )
}

function SmallIconButton({ label, onClick, disabled, children }: { label: string; onClick: () => void; disabled?: boolean; children: ReactNode }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      disabled={disabled}
      className="grid size-9 shrink-0 place-items-center rounded-full text-ink-soft transition-colors hover:bg-cream-deep disabled:opacity-30"
    >
      {children}
    </button>
  )
}

/** Shakes whenever `n` changes; nothing while it is undefined. */
const shakeClass = (n: number | undefined) => (n === undefined ? '' : `ring-2 ring-raspberry ${n % 2 ? 'animate-shake' : 'animate-shake-again'}`)

/** Brings a field into view inside the sheet: a third of the way down, not tucked under the buttons. */
function scrollToField(el: HTMLElement) {
  const body = el.closest<HTMLElement>('[data-sheet-body]')
  if (!body) return el.scrollIntoView({ behavior: 'smooth', block: 'center' })
  const top = el.getBoundingClientRect().top - body.getBoundingClientRect().top + body.scrollTop
  body.scrollTo({ top: Math.max(0, top - body.clientHeight / 4), behavior: 'smooth' })
}

/**
 * The recipe form as a pop-up from the + button (and Edit on your own recipes).
 * Mounted afresh for every session, so it always starts from what it was given.
 */
export function RecipeEditorSheet({ session, open, onClose }: { session: EditorSession; open: boolean; onClose: () => void }) {
  const { t } = useI18n()
  const navigate = useNavigate()
  const showToast = useToast()
  const { saveRecipe, saveDraft, deleteDraft } = useLibrary()
  const { existing, draftId } = session
  const [draft, setDraft] = useState<Draft>(session.initial)
  const [dirty, setDirty] = useState(false)
  const [saving, setSaving] = useState(false)
  const [processingImage, setProcessingImage] = useState(false)
  const [asking, setAsking] = useState(false)
  // Which part still needs something, and a counter that replays its shake.
  const [invalid, setInvalid] = useState<{ field: DraftField; n: number } | null>(null)
  const nameRef = useRef<HTMLInputElement>(null)
  const ingredientsRef = useRef<HTMLElement>(null)
  const stepsRef = useRef<HTMLElement>(null)
  const ids = useId()

  const change = (patch: Partial<Draft>) => {
    setDraft((current) => ({ ...current, ...patch }))
    setDirty(true)
    setInvalid(null)
  }

  const updateGroup = (groupKey: string, patch: (group: DraftGroup) => DraftGroup) =>
    change({ groups: draft.groups.map((group) => (group.key === groupKey ? patch(group) : group)) })

  const updateItem = (groupKey: string, itemKey: string, patch: Partial<DraftItem>) =>
    updateGroup(groupKey, (group) => ({
      ...group,
      items: group.items.map((item) => (item.key === itemKey ? { ...item, ...patch } : item)),
    }))

  const moveStep = (index: number, delta: -1 | 1) => {
    const steps = [...draft.steps]
    const [step] = steps.splice(index, 1)
    steps.splice(index + delta, 0, step)
    change({ steps })
  }

  const onPhoto = async (file: File | undefined) => {
    if (!file) return
    setProcessingImage(true)
    try {
      change({ image: await compressImage(file) })
    } catch {
      showToast(t('That photo could not be loaded. Try a JPEG or PNG.'))
    } finally {
      setProcessingImage(false)
    }
  }

  // Closing with work in it asks first; with nothing changed it just closes.
  const requestClose = () => {
    if (dirty && (existing || hasContent(draft))) setAsking(true)
    else onClose()
  }

  const keepAsDraft = async () => {
    await saveDraft({ id: draftId ?? newDraftId(), savedAt: new Date().toISOString(), draft })
    setAsking(false)
    onClose()
    showToast(t('Saved as draft'))
  }

  const pointOut = (field: DraftField, message: string) => {
    setInvalid((current) => ({ field, n: (current?.n ?? 0) + 1 }))
    showToast(t(message))
    const target = field === 'name' ? nameRef.current : field === 'ingredients' ? ingredientsRef.current : stepsRef.current
    if (!target) return
    scrollToField(target)
    // Then put the cursor where something is missing, once the scroll has landed.
    const input =
      field === 'name'
        ? nameRef.current
        : target.querySelector<HTMLElement>(field === 'ingredients' ? 'input[data-ingredient-name]' : 'textarea')
    window.setTimeout(() => input?.focus({ preventScroll: true }), 450)
  }

  const submit = async () => {
    const problem = findProblem(draft)
    if (problem) return pointOut(problem.field, problem.message)
    setSaving(true)
    try {
      const recipe = toRecipe(draft, existing)
      await saveRecipe(recipe)
      if (draftId) await deleteDraft(draftId)
      onClose()
      showToast(t(existing ? 'Changes saved' : 'Recipe saved'))
      if (!existing) navigate(`/recipe/${recipe.id}`)
    } catch {
      showToast(t('Saving failed. Is your storage full?'))
      setSaving(false)
    }
  }

  const shake = (field: DraftField) => (invalid?.field === field ? invalid.n : undefined)

  return (
    <>
      <Sheet
        tall
        open={open}
        onClose={requestClose}
        title={t(existing ? 'Edit recipe' : 'New recipe')}
        action={<SheetHeaderButton onClick={requestClose}>{t('Cancel')}</SheetHeaderButton>}
      >
        <form
          onSubmit={(event) => {
            event.preventDefault()
            void submit()
          }}
          noValidate
          className="space-y-4"
        >
          <div className="relative overflow-hidden rounded-tile shadow-soft">
            <label className="block cursor-pointer">
              <input type="file" accept="image/*" className="sr-only" onChange={(event) => void onPhoto(event.target.files?.[0])} aria-label={t('Recipe photo')} />
              {draft.image ? (
                <div className="aspect-[4/3]">
                  <RecipeImage recipe={{ image: draft.image, name: t('Recipe photo'), category: draft.category }} />
                </div>
              ) : (
                <div className="flex aspect-[4/3] flex-col items-center justify-center gap-2 rounded-tile border-2 border-dashed border-strawberry bg-strawberry-soft/60 text-raspberry">
                  <ImagePlus className="size-10" strokeWidth={1.6} aria-hidden />
                  <span className="font-extrabold">{t('Add a photo')}</span>
                  <span className="text-sm font-semibold text-ink-soft">{t('Take one or pick from your gallery')}</span>
                </div>
              )}
              {processingImage && (
                <div className="absolute inset-0 grid place-items-center bg-white/60">
                  <LoaderCircle className="size-8 animate-spin text-raspberry" aria-label={t('Processing photo')} />
                </div>
              )}
            </label>
            {draft.image && (
              <div className="absolute bottom-3 right-3 flex gap-2">
                <span className="pointer-events-none flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-2 text-sm font-bold shadow-sm">
                  <Camera className="size-4" aria-hidden /> {t('Tap to change')}
                </span>
                <button type="button" onClick={() => change({ image: undefined })} aria-label={t('Remove photo')} className="icon-btn size-9">
                  <Trash2 className="size-4" aria-hidden />
                </button>
              </div>
            )}
          </div>

          <Card title={t('The basics')}>
            <Label text={t('Name')}>
              <input
                ref={nameRef}
                className={`field ${shakeClass(shake('name'))}`}
                aria-invalid={invalid?.field === 'name'}
                value={draft.name}
                onChange={(e) => change({ name: e.target.value })}
                placeholder={t('Salted caramel gelato')}
                required
              />
            </Label>
            <Label text={t('Tagline')} optional>
              <input className="field" value={draft.tagline} onChange={(e) => change({ tagline: e.target.value })} placeholder={t('Silky, sweet and a little salty')} />
            </Label>
            <Label text={t('Description')} optional>
              <textarea
                className="field min-h-24 resize-y"
                value={draft.description}
                onChange={(e) => change({ description: e.target.value })}
                placeholder={t('What makes this one special?')}
              />
            </Label>
          </Card>

          <Card title={t('Type & program')}>
            <div>
              <span className="mb-1.5 block text-sm font-bold text-ink-soft">{t('Category')}</span>
              <ChipRow
                label={t('Category')}
                value={draft.category}
                onChange={(category) => change({ category })}
                options={CATEGORY_ORDER.map((c) => ({ value: c, label: t(CATEGORIES[c].label) }))}
              />
            </div>
            <Label text={t('Main program')}>
              <input className="field" list={`${ids}-programs`} value={draft.program} onChange={(e) => change({ program: e.target.value })} placeholder="Ice Cream" />
            </Label>
            <datalist id={`${ids}-programs`}>
              {PROGRAMS.map((program) => (
                <option key={program} value={program} />
              ))}
            </datalist>
            <div>
              <span className="mb-1.5 block text-sm font-bold text-ink-soft">
                {t('Difficulty')} <span className="font-semibold text-ink-faint"> · {t('optional')}</span>
              </span>
              <Segmented
                label={t('Difficulty')}
                value={draft.difficulty}
                onChange={(difficulty) => change({ difficulty })}
                options={(Object.keys(DIFFICULTIES) as Difficulty[]).map((d) => ({ value: d, label: t(DIFFICULTIES[d]) }))}
              />
            </div>
          </Card>

          <Card title={t('Machines')} hint={t('Which Creami models does this work with?')}>
            <div className="grid grid-cols-2 gap-2">
              {MODEL_ORDER.map((model) => {
                const active = draft.models.includes(model)
                return (
                  <button
                    key={model}
                    type="button"
                    role="checkbox"
                    aria-checked={active}
                    onClick={() => change({ models: active ? draft.models.filter((m) => m !== model) : [...draft.models, model] })}
                    className={`rounded-2xl px-3 py-2.5 text-left ring-2 transition-[background-color,box-shadow,transform] active:scale-[0.97] ${
                      active ? 'bg-pistachio-soft ring-pistachio' : 'bg-cream ring-transparent'
                    }`}
                  >
                    <span className="block font-bold">{MODELS[model].short}</span>
                    <span className="block text-xs text-ink-soft">{t(MODELS[model].detail.split(' · ')[0])}</span>
                  </button>
                )
              })}
            </div>
            <div>
              <span className="mb-1.5 block text-sm font-bold text-ink-soft">{t('Amounts are for a…')}</span>
              <Segmented
                label={t('Pint size')}
                value={draft.basePint}
                onChange={(basePint) => change({ basePint })}
                options={([16, 24] as const).map((size) => ({
                  value: size,
                  label: t('{size} pint', { size: PINT_SIZES[size].label }),
                  hint: PINT_SIZES[size].detail.split(' · ')[0],
                }))}
              />
            </div>
          </Card>

          <Card title={t('Timing')}>
            <div className="grid grid-cols-3 gap-2">
              <Label text={t('Prep (min)')}>
                <input className="field" inputMode="numeric" value={draft.prepMin} onChange={(e) => change({ prepMin: e.target.value })} />
              </Label>
              <Label text={t('Freeze (h)')}>
                <input className="field" inputMode="numeric" value={draft.freezeHours} onChange={(e) => change({ freezeHours: e.target.value })} />
              </Label>
              <Label text={t('Servings')}>
                <input className="field" value={draft.servings} onChange={(e) => change({ servings: e.target.value })} placeholder="4–6" />
              </Label>
            </div>
          </Card>

          <Card title={t('Ingredients')} hint={t('Amounts like 150, 1,5 or 1/2 all work.')} invalid={shake('ingredients')} sectionRef={ingredientsRef}>
            <datalist id={`${ids}-units`}>
              {UNITS.map((unit) => (
                <option key={unit} value={unit} />
              ))}
            </datalist>
            {draft.groups.map((group, groupIndex) => (
              <div key={group.key} className="space-y-2">
                {(draft.groups.length > 1 || group.title) && (
                  <div className="flex items-center gap-2">
                    <input
                      className="field py-2 font-display text-base"
                      value={group.title}
                      onChange={(e) => updateGroup(group.key, (g) => ({ ...g, title: e.target.value }))}
                      placeholder={t(groupIndex === 0 ? 'Base' : 'Mix-ins')}
                      aria-label={t('Group name')}
                    />
                    {groupIndex > 0 && (
                      <SmallIconButton label={t('Remove group')} onClick={() => change({ groups: draft.groups.filter((g) => g.key !== group.key) })}>
                        <Trash2 className="size-4" aria-hidden />
                      </SmallIconButton>
                    )}
                  </div>
                )}
                {group.items.map((item, itemIndex) => (
                  <div key={item.key} className="flex animate-fade-up items-center gap-1.5">
                    <input
                      className="field w-14 shrink-0 px-1.5 text-center"
                      inputMode="decimal"
                      value={item.qty}
                      onChange={(e) => updateItem(group.key, item.key, { qty: e.target.value })}
                      placeholder="150"
                      aria-label={t('Amount for ingredient {n}', { n: itemIndex + 1 })}
                    />
                    <input
                      className="field w-[4.25rem] shrink-0 px-1.5 text-center"
                      list={`${ids}-units`}
                      autoCapitalize="none"
                      value={item.unit}
                      onChange={(e) => updateItem(group.key, item.key, { unit: e.target.value })}
                      placeholder="g"
                      aria-label={t('Unit for ingredient {n}', { n: itemIndex + 1 })}
                    />
                    <input
                      data-ingredient-name
                      className="field min-w-0 flex-1 px-2.5"
                      value={item.name}
                      onChange={(e) => updateItem(group.key, item.key, { name: e.target.value })}
                      placeholder={t('whole milk')}
                      aria-label={t('Ingredient {n}', { n: itemIndex + 1 })}
                    />
                    <SmallIconButton
                      label={t('Remove ingredient {n}', { n: itemIndex + 1 })}
                      onClick={() => updateGroup(group.key, (g) => ({ ...g, items: g.items.filter((i) => i.key !== item.key) }))}
                      disabled={group.items.length === 1}
                    >
                      <X className="size-4" aria-hidden />
                    </SmallIconButton>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => updateGroup(group.key, (g) => ({ ...g, items: [...g.items, emptyItem()] }))}
                  className="flex items-center gap-1.5 rounded-full px-2 py-1.5 text-sm font-extrabold text-raspberry"
                >
                  <Plus className="size-4" strokeWidth={3} aria-hidden /> {t('Add ingredient')}
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => change({ groups: [...draft.groups, { key: nextKey(), title: '', items: [emptyItem()] }] })}
              className="w-full rounded-2xl border-2 border-dashed border-cream-deep py-2.5 text-sm font-bold text-ink-soft"
            >
              {t('+ Add a group (e.g. Mix-ins or Topping)')}
            </button>
          </Card>

          <Card title={t('Method')} invalid={shake('steps')} sectionRef={stepsRef}>
            {draft.steps.map((step, index) => (
              <div key={step.key} className="animate-fade-up rounded-2xl bg-cream p-3 ring-1 ring-cream-deep">
                <div className="mb-2 flex items-center gap-1">
                  <span className="grid size-7 place-items-center rounded-full bg-strawberry font-display text-sm font-bold">{index + 1}</span>
                  <span className="flex-1" />
                  <SmallIconButton label={t('Move step {n} up', { n: index + 1 })} onClick={() => moveStep(index, -1)} disabled={index === 0}>
                    <ArrowUp className="size-4" aria-hidden />
                  </SmallIconButton>
                  <SmallIconButton label={t('Move step {n} down', { n: index + 1 })} onClick={() => moveStep(index, 1)} disabled={index === draft.steps.length - 1}>
                    <ArrowDown className="size-4" aria-hidden />
                  </SmallIconButton>
                  <SmallIconButton
                    label={t('Remove step {n}', { n: index + 1 })}
                    onClick={() => change({ steps: draft.steps.filter((s) => s.key !== step.key) })}
                    disabled={draft.steps.length === 1}
                  >
                    <Trash2 className="size-4" aria-hidden />
                  </SmallIconButton>
                </div>
                <textarea
                  className="field min-h-20 resize-y bg-white"
                  value={step.text}
                  onChange={(e) => change({ steps: draft.steps.map((s) => (s.key === step.key ? { ...s, text: e.target.value } : s)) })}
                  placeholder={t(
                    index === 0 ? 'Blend all base ingredients until smooth, pour into the pint and freeze for 24 hours.' : 'Process on the Ice Cream program.',
                  )}
                  aria-label={t('Step {n}', { n: index + 1 })}
                />
                <input
                  className="field mt-2 bg-white py-2"
                  list={`${ids}-programs`}
                  value={step.program}
                  onChange={(e) => change({ steps: draft.steps.map((s) => (s.key === step.key ? { ...s, program: e.target.value } : s)) })}
                  placeholder={t('Program for this step (optional)')}
                  aria-label={t('Program for step {n}', { n: index + 1 })}
                />
              </div>
            ))}
            <button
              type="button"
              onClick={() => change({ steps: [...draft.steps, emptyStep()] })}
              className="flex items-center gap-1.5 rounded-full px-2 py-1.5 text-sm font-extrabold text-raspberry"
            >
              <Plus className="size-4" strokeWidth={3} aria-hidden /> {t('Add step')}
            </button>
          </Card>

          <Card title={t('Tips & tags')}>
            <Label text={t('Tips')} optional>
              <textarea
                className="field min-h-20 resize-y"
                value={draft.tips}
                onChange={(e) => change({ tips: e.target.value })}
                placeholder={t('One tip per line\nRe-spin once if it looks crumbly')}
              />
            </Label>
            <div>
              <span className="mb-1.5 block text-sm font-bold text-ink-soft">{t('Tags')}</span>
              <div className="flex flex-wrap gap-2">
                {SUGGESTED_TAGS.map((tag) => {
                  const active = draft.tags.includes(tag)
                  return (
                    <button
                      key={tag}
                      type="button"
                      role="checkbox"
                      aria-checked={active}
                      onClick={() => change({ tags: active ? draft.tags.filter((x) => x !== tag) : [...draft.tags, tag] })}
                      className={`rounded-full px-3 py-1.5 text-sm font-bold transition-colors ${
                        active ? 'animate-chip-pop bg-ink text-cream' : 'bg-cream text-ink-soft ring-1 ring-cream-deep'
                      }`}
                    >
                      #{t(tag)}
                    </button>
                  )
                })}
              </div>
            </div>
          </Card>

          {/* Stays at the bottom of the sheet while the form scrolls under it. */}
          <div className="sticky bottom-0 z-10 -mx-5 flex gap-2 bg-linear-to-t from-cream via-cream to-cream/0 px-5 pb-1 pt-6">
            {!existing && (
              <button type="button" onClick={() => void keepAsDraft()} disabled={!hasContent(draft) || saving} className="btn-secondary shrink-0 shadow-soft disabled:opacity-50">
                <FilePen className="size-[18px]" aria-hidden /> {t('Save as draft')}
              </button>
            )}
            <button type="submit" disabled={saving || processingImage} className="btn-primary flex-1">
              {saving ? <LoaderCircle className="size-5 animate-spin" aria-hidden /> : null}
              {t(existing ? 'Save changes' : 'Save recipe')}
            </button>
          </div>
        </form>
      </Sheet>

      <Sheet open={asking} onClose={() => setAsking(false)} title={t(existing ? 'Discard your changes?' : 'Keep this recipe for later?')}>
        <p className="mb-4 text-[15px] leading-relaxed text-ink-soft">
          {t(existing ? 'Your changes to this recipe haven’t been saved.' : 'You can save it as a draft and carry on later with the + button.')}
        </p>
        <div className="space-y-2">
          {!existing && <SheetAction icon={FilePen} label={t('Save as draft')} detail={t('Carry on later with the + button')} onClick={() => void keepAsDraft()} />}
          <SheetAction
            icon={Trash2}
            label={t(existing ? 'Discard changes' : draftId ? 'Discard these changes' : 'Discard recipe')}
            danger
            onClick={() => {
              setAsking(false)
              onClose()
            }}
          />
          <button type="button" onClick={() => setAsking(false)} className="w-full py-3 font-bold text-ink-soft">
            {t('Keep editing')}
          </button>
        </div>
      </Sheet>
    </>
  )
}
