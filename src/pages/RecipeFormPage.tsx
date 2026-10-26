import { ArrowDown, ArrowUp, Camera, ChefHat, ImagePlus, LoaderCircle, Plus, Trash2, X } from 'lucide-react'
import { useId, useRef, useState, type ReactNode } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import { ChipRow, Segmented } from '../components/Chips'
import { EmptyState } from '../components/EmptyState'
import { RecipeImage } from '../components/RecipeImage'
import { CATEGORIES, CATEGORY_ORDER, DIFFICULTIES, MODEL_ORDER, MODELS, PINT_SIZES, PROGRAMS, SUGGESTED_TAGS } from '../data/creami'
import { useLibrary } from '../hooks/libraryContext'
import { useRecipe } from '../hooks/useRecipes'
import { compressImage } from '../lib/image'
import { parseQty } from '../lib/quantity'
import { newRecipeId } from '../lib/storage'
import type { Category, CreamiModel, Difficulty, PintSize, Recipe } from '../types/recipe'

const UNITS = ['g', 'ml', 'tbsp', 'tsp', 'cup', 'scoop', 'pinch', 'pcs']

let keySeed = 0
const nextKey = () => `k${++keySeed}`

interface DraftItem {
  key: string
  qty: string
  unit: string
  name: string
  note: string
}
interface DraftGroup {
  key: string
  title: string
  items: DraftItem[]
}
interface DraftStep {
  key: string
  text: string
  program: string
}
interface Draft {
  name: string
  tagline: string
  description: string
  image?: string
  category: Category
  program: string
  models: CreamiModel[]
  basePint: PintSize
  prepMin: string
  freezeHours: string
  servings: string
  difficulty: Difficulty | ''
  groups: DraftGroup[]
  steps: DraftStep[]
  tips: string
  tags: string[]
}

const emptyItem = (): DraftItem => ({ key: nextKey(), qty: '', unit: '', name: '', note: '' })
const emptyStep = (): DraftStep => ({ key: nextKey(), text: '', program: '' })

function toDraft(recipe?: Recipe): Draft {
  if (!recipe) {
    return {
      name: '',
      tagline: '',
      description: '',
      category: 'ice-cream',
      program: 'Ice Cream',
      models: ['original'],
      basePint: 16,
      prepMin: '10',
      freezeHours: '24',
      servings: '',
      difficulty: 'easy',
      groups: [{ key: nextKey(), title: '', items: [emptyItem(), emptyItem(), emptyItem()] }],
      steps: [emptyStep(), emptyStep()],
      tips: '',
      tags: [],
    }
  }
  return {
    name: recipe.name,
    tagline: recipe.tagline ?? '',
    description: recipe.description ?? '',
    image: recipe.image,
    category: recipe.category,
    program: recipe.program,
    models: recipe.models,
    basePint: recipe.basePint,
    prepMin: String(recipe.times.prepMin),
    freezeHours: String(recipe.times.freezeHours),
    servings: recipe.servings ?? '',
    difficulty: recipe.difficulty ?? '',
    groups: recipe.ingredients.map((group) => ({
      key: nextKey(),
      title: group.title ?? '',
      items: group.items.map((item) => ({
        key: nextKey(),
        qty: item.qty === undefined ? '' : String(Math.round(item.qty * 100) / 100),
        unit: item.unit ?? '',
        name: item.name,
        note: item.note ?? '',
      })),
    })),
    steps: recipe.steps.map((step) => ({ key: nextKey(), text: step.text, program: step.program ?? '' })),
    tips: (recipe.tips ?? []).join('\n'),
    tags: recipe.tags,
  }
}

const toInt = (value: string, fallback: number) => {
  const n = Number.parseInt(value, 10)
  return Number.isFinite(n) && n >= 0 ? n : fallback
}
const clean = (value: string) => value.trim() || undefined

function toRecipe(draft: Draft, existing?: Recipe): Recipe {
  const now = new Date().toISOString()
  const name = draft.name.trim()
  return {
    id: existing?.id ?? newRecipeId(name),
    origin: 'user',
    name,
    tagline: clean(draft.tagline),
    description: clean(draft.description),
    image: draft.image,
    category: draft.category,
    tags: draft.tags,
    models: draft.models.length ? draft.models : ['original'],
    program: draft.program.trim() || 'Ice Cream',
    basePint: draft.basePint,
    servings: clean(draft.servings),
    difficulty: draft.difficulty || undefined,
    times: { prepMin: toInt(draft.prepMin, 0), freezeHours: toInt(draft.freezeHours, 24) },
    ingredients: draft.groups
      .map((group) => ({
        title: clean(group.title),
        items: group.items
          .filter((item) => item.name.trim())
          .map((item) => ({ qty: parseQty(item.qty), unit: clean(item.unit), name: item.name.trim(), note: clean(item.note) })),
      }))
      .filter((group) => group.items.length > 0),
    steps: draft.steps.filter((step) => step.text.trim()).map((step) => ({ text: step.text.trim(), program: clean(step.program) })),
    tips: draft.tips
      .split('\n')
      .map((tip) => tip.trim())
      .filter(Boolean),
    createdAt: existing?.createdAt ?? now,
    updatedAt: now,
  }
}

function validate(draft: Draft): string | null {
  if (!draft.name.trim()) return 'Give your recipe a name.'
  if (!draft.groups.some((group) => group.items.some((item) => item.name.trim()))) return 'Add at least one ingredient.'
  if (!draft.steps.some((step) => step.text.trim())) return 'Add at least one step.'
  return null
}

function Card({ title, children, hint }: { title: string; children: ReactNode; hint?: string }) {
  return (
    <section className="card p-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      {hint && <p className="mt-0.5 text-sm text-ink-soft">{hint}</p>}
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  )
}

function Label({ text, children, optional }: { text: string; children: ReactNode; optional?: boolean }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-bold text-ink-soft">
        {text}
        {optional && <span className="font-semibold text-ink-faint"> · optional</span>}
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

function RecipeForm({ existing }: { existing?: Recipe }) {
  const navigate = useNavigate()
  const { saveRecipe } = useLibrary()
  const [draft, setDraft] = useState<Draft>(() => toDraft(existing))
  const [dirty, setDirty] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)
  const [processingImage, setProcessingImage] = useState(false)
  const errorRef = useRef<HTMLParagraphElement>(null)
  const ids = useId()

  const change = (patch: Partial<Draft>) => {
    setDraft((current) => ({ ...current, ...patch }))
    setDirty(true)
    setError(null)
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
      setError('That photo could not be loaded. Try a JPEG or PNG.')
    } finally {
      setProcessingImage(false)
    }
  }

  const cancel = () => {
    if (dirty && !window.confirm('Discard your changes?')) return
    if (window.history.state?.idx > 0) navigate(-1)
    else navigate(existing ? `/recipe/${existing.id}` : '/library')
  }

  const submit = async () => {
    const problem = validate(draft)
    if (problem) {
      setError(problem)
      requestAnimationFrame(() => errorRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }))
      return
    }
    setSaving(true)
    try {
      const recipe = toRecipe(draft, existing)
      await saveRecipe(recipe)
      navigate(`/recipe/${recipe.id}`, { replace: true })
    } catch {
      setError('Saving failed. Is your storage full?')
      setSaving(false)
    }
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        void submit()
      }}
      className="px-5"
      noValidate
    >
      <header className="pt-safe sticky top-0 z-20 -mx-5 bg-cream/90 px-5 backdrop-blur-lg">
        <div className="flex items-center gap-3 py-3">
          <button type="button" onClick={cancel} aria-label="Cancel" className="icon-btn bg-white shadow-sm">
            <X className="size-5" aria-hidden />
          </button>
          <h1 className="flex-1 text-xl font-semibold">{existing ? 'Edit recipe' : 'New recipe'}</h1>
        </div>
      </header>

      <div className="mt-2 space-y-4">
        <div className="relative overflow-hidden rounded-tile shadow-soft">
          <label className="block cursor-pointer">
            <input type="file" accept="image/*" className="sr-only" onChange={(event) => void onPhoto(event.target.files?.[0])} aria-label="Recipe photo" />
            {draft.image ? (
              <div className="aspect-[4/3]">
                <RecipeImage recipe={{ image: draft.image, name: 'Recipe photo', category: draft.category }} />
              </div>
            ) : (
              <div className="flex aspect-[4/3] flex-col items-center justify-center gap-2 border-2 border-dashed border-strawberry bg-strawberry-soft/60 text-raspberry">
                <ImagePlus className="size-10" strokeWidth={1.6} aria-hidden />
                <span className="font-extrabold">Add a photo</span>
                <span className="text-sm font-semibold text-ink-soft">Take one or pick from your gallery</span>
              </div>
            )}
            {processingImage && (
              <div className="absolute inset-0 grid place-items-center bg-white/60">
                <LoaderCircle className="size-8 animate-spin text-raspberry" aria-label="Processing photo" />
              </div>
            )}
          </label>
          {draft.image && (
            <div className="absolute bottom-3 right-3 flex gap-2">
              <span className="pointer-events-none flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-2 text-sm font-bold shadow-sm">
                <Camera className="size-4" aria-hidden /> Tap to change
              </span>
              <button type="button" onClick={() => change({ image: undefined })} aria-label="Remove photo" className="icon-btn size-9">
                <Trash2 className="size-4" aria-hidden />
              </button>
            </div>
          )}
        </div>

        <Card title="The basics">
          <Label text="Name">
            <input className="field" value={draft.name} onChange={(e) => change({ name: e.target.value })} placeholder="Salted caramel gelato" required />
          </Label>
          <Label text="Tagline" optional>
            <input className="field" value={draft.tagline} onChange={(e) => change({ tagline: e.target.value })} placeholder="Silky, sweet and a little salty" />
          </Label>
          <Label text="Description" optional>
            <textarea
              className="field min-h-24 resize-y"
              value={draft.description}
              onChange={(e) => change({ description: e.target.value })}
              placeholder="What makes this one special?"
            />
          </Label>
        </Card>

        <Card title="Type & program">
          <div>
            <span className="mb-1.5 block text-sm font-bold text-ink-soft">Category</span>
            <ChipRow
              label="Category"
              value={draft.category}
              onChange={(category) => change({ category })}
              options={CATEGORY_ORDER.map((c) => ({ value: c, label: CATEGORIES[c].label }))}
            />
          </div>
          <Label text="Main program">
            <input className="field" list={`${ids}-programs`} value={draft.program} onChange={(e) => change({ program: e.target.value })} placeholder="Ice Cream" />
          </Label>
          <datalist id={`${ids}-programs`}>
            {PROGRAMS.map((program) => (
              <option key={program} value={program} />
            ))}
          </datalist>
          <div>
            <span className="mb-1.5 block text-sm font-bold text-ink-soft">
              Difficulty <span className="font-semibold text-ink-faint"> · optional</span>
            </span>
            <Segmented
              label="Difficulty"
              value={draft.difficulty}
              onChange={(difficulty) => change({ difficulty })}
              options={(Object.keys(DIFFICULTIES) as Difficulty[]).map((d) => ({ value: d, label: DIFFICULTIES[d] }))}
            />
          </div>
        </Card>

        <Card title="Machines" hint="Which Creami models does this work with?">
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
                  className={`rounded-2xl px-3 py-2.5 text-left ring-2 transition-colors ${
                    active ? 'bg-pistachio-soft ring-pistachio' : 'bg-cream ring-transparent'
                  }`}
                >
                  <span className="block font-bold">{MODELS[model].short}</span>
                  <span className="block text-xs text-ink-soft">{MODELS[model].detail.split(' · ')[0]}</span>
                </button>
              )
            })}
          </div>
          <div>
            <span className="mb-1.5 block text-sm font-bold text-ink-soft">Amounts are for a…</span>
            <Segmented
              label="Pint size"
              value={draft.basePint}
              onChange={(basePint) => change({ basePint })}
              options={([16, 24] as const).map((size) => ({ value: size, label: `${PINT_SIZES[size].label} pint`, hint: PINT_SIZES[size].detail.split(' · ')[0] }))}
            />
          </div>
        </Card>

        <Card title="Timing">
          <div className="grid grid-cols-3 gap-2">
            <Label text="Prep (min)">
              <input className="field" inputMode="numeric" value={draft.prepMin} onChange={(e) => change({ prepMin: e.target.value })} />
            </Label>
            <Label text="Freeze (h)">
              <input className="field" inputMode="numeric" value={draft.freezeHours} onChange={(e) => change({ freezeHours: e.target.value })} />
            </Label>
            <Label text="Servings">
              <input className="field" value={draft.servings} onChange={(e) => change({ servings: e.target.value })} placeholder="4–6" />
            </Label>
          </div>
        </Card>

        <Card title="Ingredients" hint="Amounts like 150, 1,5 or 1/2 all work.">
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
                    placeholder={groupIndex === 0 ? 'Base' : 'Mix-ins'}
                    aria-label="Group name"
                  />
                  {groupIndex > 0 && (
                    <SmallIconButton label="Remove group" onClick={() => change({ groups: draft.groups.filter((g) => g.key !== group.key) })}>
                      <Trash2 className="size-4" aria-hidden />
                    </SmallIconButton>
                  )}
                </div>
              )}
              {group.items.map((item, itemIndex) => (
                <div key={item.key} className="flex items-center gap-1.5">
                  <input
                    className="field w-14 shrink-0 px-1.5 text-center"
                    inputMode="decimal"
                    value={item.qty}
                    onChange={(e) => updateItem(group.key, item.key, { qty: e.target.value })}
                    placeholder="150"
                    aria-label={`Amount for ingredient ${itemIndex + 1}`}
                  />
                  <input
                    className="field w-[4.25rem] shrink-0 px-1.5 text-center"
                    list={`${ids}-units`}
                    autoCapitalize="none"
                    value={item.unit}
                    onChange={(e) => updateItem(group.key, item.key, { unit: e.target.value })}
                    placeholder="g"
                    aria-label={`Unit for ingredient ${itemIndex + 1}`}
                  />
                  <input
                    className="field min-w-0 flex-1 px-2.5"
                    value={item.name}
                    onChange={(e) => updateItem(group.key, item.key, { name: e.target.value })}
                    placeholder="whole milk"
                    aria-label={`Ingredient ${itemIndex + 1}`}
                  />
                  <SmallIconButton
                    label={`Remove ingredient ${itemIndex + 1}`}
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
                <Plus className="size-4" strokeWidth={3} aria-hidden /> Add ingredient
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => change({ groups: [...draft.groups, { key: nextKey(), title: '', items: [emptyItem()] }] })}
            className="w-full rounded-2xl border-2 border-dashed border-cream-deep py-2.5 text-sm font-bold text-ink-soft"
          >
            + Add a group (e.g. Mix-ins or Topping)
          </button>
        </Card>

        <Card title="Method">
          {draft.steps.map((step, index) => (
            <div key={step.key} className="rounded-2xl bg-cream p-3 ring-1 ring-cream-deep">
              <div className="mb-2 flex items-center gap-1">
                <span className="grid size-7 place-items-center rounded-full bg-strawberry font-display text-sm font-bold">{index + 1}</span>
                <span className="flex-1" />
                <SmallIconButton label={`Move step ${index + 1} up`} onClick={() => moveStep(index, -1)} disabled={index === 0}>
                  <ArrowUp className="size-4" aria-hidden />
                </SmallIconButton>
                <SmallIconButton label={`Move step ${index + 1} down`} onClick={() => moveStep(index, 1)} disabled={index === draft.steps.length - 1}>
                  <ArrowDown className="size-4" aria-hidden />
                </SmallIconButton>
                <SmallIconButton
                  label={`Remove step ${index + 1}`}
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
                placeholder={index === 0 ? 'Blend all base ingredients until smooth, pour into the pint and freeze for 24 hours.' : 'Process on the Ice Cream program.'}
                aria-label={`Step ${index + 1}`}
              />
              <input
                className="field mt-2 bg-white py-2"
                list={`${ids}-programs`}
                value={step.program}
                onChange={(e) => change({ steps: draft.steps.map((s) => (s.key === step.key ? { ...s, program: e.target.value } : s)) })}
                placeholder="Program for this step (optional)"
                aria-label={`Program for step ${index + 1}`}
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() => change({ steps: [...draft.steps, emptyStep()] })}
            className="flex items-center gap-1.5 rounded-full px-2 py-1.5 text-sm font-extrabold text-raspberry"
          >
            <Plus className="size-4" strokeWidth={3} aria-hidden /> Add step
          </button>
        </Card>

        <Card title="Tips & tags">
          <Label text="Tips" optional>
            <textarea
              className="field min-h-20 resize-y"
              value={draft.tips}
              onChange={(e) => change({ tips: e.target.value })}
              placeholder={'One tip per line\nRe-spin once if it looks crumbly'}
            />
          </Label>
          <div>
            <span className="mb-1.5 block text-sm font-bold text-ink-soft">Tags</span>
            <div className="flex flex-wrap gap-2">
              {SUGGESTED_TAGS.map((tag) => {
                const active = draft.tags.includes(tag)
                return (
                  <button
                    key={tag}
                    type="button"
                    role="checkbox"
                    aria-checked={active}
                    onClick={() => change({ tags: active ? draft.tags.filter((t) => t !== tag) : [...draft.tags, tag] })}
                    className={`rounded-full px-3 py-1.5 text-sm font-bold transition-colors ${active ? 'bg-ink text-cream' : 'bg-cream text-ink-soft ring-1 ring-cream-deep'}`}
                  >
                    #{tag}
                  </button>
                )
              })}
            </div>
          </div>
        </Card>

        {error && (
          <p ref={errorRef} role="alert" className="rounded-2xl bg-strawberry-soft px-4 py-3 text-center font-bold text-raspberry">
            {error}
          </p>
        )}
      </div>

      <div className="pb-safe fixed inset-x-0 bottom-0 z-30 bg-linear-to-t from-cream via-cream/95 to-cream/0">
        <div className="mx-auto max-w-md px-5 pb-4 pt-6">
          <button type="submit" disabled={saving || processingImage} className="btn-primary w-full text-lg">
            {saving ? <LoaderCircle className="size-5 animate-spin" aria-hidden /> : null}
            {existing ? 'Save changes' : 'Save recipe'}
          </button>
        </div>
      </div>
    </form>
  )
}

export function RecipeFormPage() {
  const { id } = useParams()
  const { ready } = useLibrary()
  const recipe = useRecipe(id)

  if (!id) return <RecipeForm />
  if (!ready) return null
  if (!recipe || recipe.origin !== 'user') {
    return (
      <div className="px-5 pt-16">
        <EmptyState
          icon={ChefHat}
          title="Can’t edit this recipe"
          action={
            <Link to="/" className="btn-primary">
              Back to Discover
            </Link>
          }
        >
          Only recipes you added yourself can be edited.
        </EmptyState>
      </div>
    )
  }
  return <RecipeForm key={recipe.id} existing={recipe} />
}
