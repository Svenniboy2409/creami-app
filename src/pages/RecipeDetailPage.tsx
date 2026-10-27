import {
  ArrowLeft,
  BookOpen,
  Check,
  ChefHat,
  ChevronRight,
  Clock,
  FolderCheck,
  FolderMinus,
  FolderPlus,
  Gauge,
  IceCreamBowl,
  Lightbulb,
  Pencil,
  Snowflake,
  Trash2,
  type LucideIcon,
} from 'lucide-react'
import { useState, type ReactNode } from 'react'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router'
import { Segmented } from '../components/Chips'
import { EmptyState } from '../components/EmptyState'
import { FavoriteButton } from '../components/FavoriteButton'
import { FolderPickerSheet } from '../components/FolderPickerSheet'
import { RecipeImage } from '../components/RecipeImage'
import { Sheet, SheetAction } from '../components/Sheet'
import { TONES, type ToneClasses } from '../components/tone'
import { CATEGORIES, DIFFICULTIES, MODEL_ORDER, MODELS, PINT_SIZES } from '../data/creami'
import { useI18n } from '../hooks/i18nContext'
import { useLibrary } from '../hooks/libraryContext'
import { useRecipeEditor } from '../hooks/recipeEditorContext'
import { useToast } from '../hooks/toastContext'
import { useRecipe } from '../hooks/useRecipes'
import { useRemembered } from '../lib/pageMemory'
import { formatAmount, scaleGroups, scaleServings } from '../lib/scale'
import type { PintSize, Recipe } from '../types/recipe'

function formatMinutes(min: number, t: (key: string, vars?: Record<string, number>) => string): string {
  if (min < 60) return t('{n} min', { n: min })
  const h = Math.floor(min / 60)
  const m = min % 60
  return m ? t('{h} h {m} min', { h, m }) : t('{n} h', { n: h })
}

function Fact({ icon: Icon, label, value, toneSoft }: { icon: LucideIcon; label: string; value: string; toneSoft: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5 rounded-2xl bg-white px-1 py-3 text-center shadow-sm">
      <span className={`grid size-9 place-items-center rounded-full ${toneSoft}`}>
        <Icon className="size-[18px]" aria-hidden />
      </span>
      <span className="text-[11px] font-bold uppercase tracking-wide text-ink-faint">{label}</span>
      <span className="text-sm font-extrabold leading-tight">{value}</span>
    </div>
  )
}

function Section({ title, aside, children }: { title: string; aside?: ReactNode; children: ReactNode }) {
  return (
    <section className="mt-9">
      <div className="mb-3 flex items-baseline justify-between gap-3">
        <h2 className="text-2xl font-semibold">{title}</h2>
        {aside}
      </div>
      {children}
    </section>
  )
}

const NOTHING_TICKED: string[] = []

function Ingredients({ recipe, pint, tone }: { recipe: Recipe; pint: PintSize; tone: ToneClasses }) {
  const { t } = useI18n()
  // Ticked-off ingredients stay ticked while the app is open, even after looking at another recipe.
  const [ticked, setTicked] = useRemembered<string[]>(`recipe:${recipe.id}:checked`, NOTHING_TICKED)
  const checked = new Set(ticked)
  const groups = scaleGroups(recipe.ingredients, recipe.basePint, pint)
  const toggle = (key: string) => setTicked((current) => (current.includes(key) ? current.filter((k) => k !== key) : [...current, key]))

  return (
    <div className="space-y-4">
      {groups.map((group, g) => (
        // A hairline all round, so the white card's rounded top shows against the cream page as well as its bottom.
        <div key={g} className="card overflow-hidden ring-1 ring-cream-deep">
          {group.title && <h3 className={`px-4 py-2.5 text-base font-semibold ${tone.soft} ${tone.text}`}>{group.title}</h3>}
          <ul className="divide-y divide-cream-deep">
            {group.items.map((item, i) => {
              const key = `${g}-${i}`
              const done = checked.has(key)
              return (
                <li key={key}>
                  <button
                    type="button"
                    role="checkbox"
                    aria-checked={done}
                    onClick={() => toggle(key)}
                    className="flex w-full items-start gap-3 px-4 py-3 text-left"
                  >
                    <span
                      className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full border-2 transition-colors ${done ? 'animate-chip-pop' : ''} ${
                        done ? 'border-pistachio-deep bg-pistachio-deep text-white' : 'border-ink-faint/60'
                      }`}
                    >
                      {done && <Check className="size-3" strokeWidth={3.5} aria-hidden />}
                    </span>
                    <span className={`flex-1 transition-opacity ${done ? 'line-through opacity-45' : ''}`}>
                      {(item.qty !== undefined || item.unit) && (
                        <span className="mr-1.5 font-extrabold text-raspberry">{formatAmount(item.qty, item.unit && t(item.unit))}</span>
                      )}
                      <span className="font-semibold">{item.name}</span>
                      {item.note && <span className="block text-sm text-ink-soft">{item.note}</span>}
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </div>
  )
}

export function RecipeDetailPage() {
  const { id } = useParams()
  const original = useRecipe(id)
  const { ready, deleteRecipe, folders, toggleInFolder } = useLibrary()
  const { t, tn, localize } = useI18n()
  const showToast = useToast()
  const { openEdit } = useRecipeEditor()
  const navigate = useNavigate()
  const [pint, setPint] = useRemembered<PintSize | null>(`recipe:${id}:pint`, null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [folderOpen, setFolderOpen] = useState(false)
  // Set when the recipe was opened from inside a folder.
  const [params] = useSearchParams()
  const fromFolder = folders.find((folder) => folder.id === params.get('folder'))

  if (!original) {
    if (!ready) return null
    return (
      <div className="px-5 pt-16">
        <EmptyState
          icon={ChefHat}
          title={t('Recipe not found')}
          action={
            <Link to="/" className="btn-primary">
              {t('Back to Discover')}
            </Link>
          }
        >
          {t('This recipe may have been deleted.')}
        </EmptyState>
      </div>
    )
  }

  const recipe = localize(original)
  const category = CATEGORIES[recipe.category] ?? CATEGORIES.other
  const tone = TONES[category.tone]
  const activePint = pint ?? recipe.basePint
  const hasAmounts = recipe.ingredients.some((group) => group.items.some((item) => item.qty !== undefined))
  const isUserRecipe = recipe.origin === 'user'
  const servings = scaleServings(recipe.servings, activePint / recipe.basePint)
  const inFolders = folders.filter((folder) => folder.recipeIds.includes(recipe.id)).length

  const goBack = () => {
    if (window.history.state?.idx > 0) navigate(-1)
    else navigate('/')
  }

  return (
    <article>
      {/* The photo runs right to the top edge, under the status bar when the app
          is on the home screen; only Back and the heart sit on it. */}
      <div className="relative h-[calc(min(100vw,28rem)*0.88_+_var(--safe-top))] overflow-hidden rounded-b-[2.25rem] shadow-soft">
        <RecipeImage recipe={recipe} className="animate-hero-in" />
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[calc(var(--safe-top)_+_6rem)] bg-linear-to-b from-ink/40 to-transparent" />
        <div className="pt-safe absolute inset-x-0 top-0">
          <div className="flex items-center justify-between p-4">
            <button type="button" onClick={goBack} aria-label={t('Back')} className="icon-btn">
              <ArrowLeft className="size-5" aria-hidden />
            </button>
            <FavoriteButton id={recipe.id} name={recipe.name} className="size-11" toast />
          </div>
        </div>
      </div>

      <div className="px-5 pt-6">
        <div className="flex flex-wrap gap-1.5">
          <span className={`rounded-full px-3 py-1 text-xs font-extrabold ${tone.soft} ${tone.text}`}>{t(category.label)}</span>
          {recipe.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-white px-3 py-1 text-xs font-bold text-ink-soft shadow-sm">
              #{t(tag)}
            </span>
          ))}
        </div>
        <h1 className="mt-3 text-[2rem] font-semibold leading-[1.1] tracking-tight">{recipe.name}</h1>
        {recipe.tagline && <p className="mt-2 text-lg font-semibold text-ink-soft">{recipe.tagline}</p>}
        {recipe.description && <p className="mt-3 whitespace-pre-line leading-relaxed text-ink/85">{recipe.description}</p>}

        <div className="mt-6 grid grid-cols-4 gap-2">
          <Fact icon={Clock} label={t('Prep')} value={formatMinutes(recipe.times.prepMin, t)} toneSoft={`${tone.soft} ${tone.text}`} />
          <Fact icon={Snowflake} label={t('Freeze')} value={t('{n} h', { n: recipe.times.freezeHours })} toneSoft={`${tone.soft} ${tone.text}`} />
          <Fact icon={IceCreamBowl} label={t('Program')} value={recipe.program} toneSoft={`${tone.soft} ${tone.text}`} />
          <Fact
            icon={Gauge}
            label={t('Level')}
            value={recipe.difficulty ? t(DIFFICULTIES[recipe.difficulty]) : '—'}
            toneSoft={`${tone.soft} ${tone.text}`}
          />
        </div>

        <div className="mt-6">
          <h2 className="mb-2 font-sans text-sm font-extrabold uppercase tracking-[0.12em] text-ink-faint">{t('Works with')}</h2>
          <ul className="flex flex-wrap gap-2">
            {MODEL_ORDER.map((model) => {
              const ok = recipe.models.includes(model)
              return (
                <li
                  key={model}
                  className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-bold ${
                    ok ? 'bg-pistachio-soft text-pistachio-deep' : 'bg-cream-deep/70 text-ink-faint line-through'
                  }`}
                >
                  {ok && <Check className="size-3.5" strokeWidth={3} aria-hidden />}
                  {MODELS[model].short}
                  <span className="sr-only">{t(ok ? '(compatible)' : '(not tested)')}</span>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Folders are separate from favorites: a recipe can sit in a folder with or without the heart. */}
        <div className="mt-6 flex flex-col gap-2">
          <button
            type="button"
            onClick={() => setFolderOpen(true)}
            className={`btn-secondary w-full shadow-soft ${inFolders ? 'bg-strawberry-soft text-raspberry' : ''}`}
          >
            {inFolders ? <FolderCheck className="size-5" aria-hidden /> : <FolderPlus className="size-5 text-raspberry" aria-hidden />}
            {inFolders ? tn(inFolders, 'In {n} folder', 'In {n} folders') : t('Add to folder')}
          </button>
          {fromFolder?.recipeIds.includes(recipe.id) && (
            <button
              type="button"
              onClick={async () => {
                await toggleInFolder(fromFolder.id, recipe.id)
                showToast(t('Removed from {folder}', { folder: fromFolder.name }))
              }}
              className="flex animate-pop-in items-center justify-center gap-2 py-2 text-sm font-extrabold text-raspberry"
            >
              <FolderMinus className="size-4" aria-hidden /> {t('Remove from {folder}', { folder: fromFolder.name })}
            </button>
          )}
        </div>

        <Section
          title={t('Ingredients')}
          aside={
            servings ? (
              <span key={servings} className="inline-block animate-chip-pop text-sm font-bold text-ink-soft">
                {t('{servings} servings', { servings })}
              </span>
            ) : null
          }
        >
          {hasAmounts && (
            <div className="mb-4">
              <Segmented
                label={t('Pint size')}
                value={activePint}
                onChange={setPint}
                options={([16, 24] as const).map((size) => ({
                  value: size,
                  label: t('{size} pint', { size: PINT_SIZES[size].label }),
                  hint: PINT_SIZES[size].detail.split(' · ')[0],
                }))}
              />
            </div>
          )}
          <Ingredients recipe={recipe} pint={activePint} tone={tone} />
        </Section>

        <Section title={t('Method')}>
          <ol className="space-y-3">
            {recipe.steps.map((step, index) => (
              <li key={index} className="card flex gap-3.5 p-4">
                <span className={`grid size-8 shrink-0 place-items-center rounded-full font-display text-base font-bold ${tone.solid} text-ink`}>
                  {index + 1}
                </span>
                <div className="min-w-0 flex-1 pt-1">
                  {step.title && <h3 className="mb-1 text-base font-semibold">{step.title}</h3>}
                  <p className="whitespace-pre-line leading-relaxed">{step.text}</p>
                  {step.program && (
                    <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-ink px-3 py-1.5 text-xs font-extrabold uppercase tracking-wider text-cream">
                      <IceCreamBowl className="size-3.5" aria-hidden />
                      {step.program === 'Re-spin' || step.program === 'Mix-in' ? step.program : t('Run: {program}', { program: step.program })}
                    </span>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </Section>

        {recipe.tips && recipe.tips.length > 0 && (
          <Section title={t('Tips')}>
            <ul className="space-y-2 rounded-tile bg-vanilla-soft p-4 ring-1 ring-vanilla">
              {recipe.tips.map((tip, index) => (
                <li key={index} className="flex gap-3">
                  <Lightbulb className="mt-0.5 size-5 shrink-0 text-vanilla-deep" aria-hidden />
                  <span className="leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
          </Section>
        )}

        {recipe.ideas && recipe.ideas.length > 0 && (
          <Section title={t('Try these flavours')}>
            <ul className="flex flex-wrap gap-2">
              {recipe.ideas.map((idea) => (
                <li key={idea.name}>
                  {/* An idea the app has a recipe for opens it; the others are there to inspire. */}
                  {idea.recipeId ? (
                    <Link
                      to={`/recipe/${idea.recipeId}`}
                      className="flex items-center gap-1 rounded-full bg-white py-2 pl-4 pr-3 text-sm font-extrabold text-raspberry shadow-sm ring-2 ring-strawberry/60 transition-transform active:scale-95"
                    >
                      {idea.name}
                      <ChevronRight className="size-4" strokeWidth={2.6} aria-hidden />
                    </Link>
                  ) : (
                    <span className="block rounded-full bg-white px-4 py-2 text-sm font-bold text-ink-soft shadow-sm">{idea.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </Section>
        )}

        {recipe.nutrition && (
          <Section title={t('Nutrition')} aside={<span className="text-sm font-bold text-ink-soft">{t(recipe.nutrition.per === 'pint' ? 'per pint' : 'per serving')}</span>}>
            <dl className="grid grid-cols-3 gap-2">
              {(
                [
                  ['Calories', recipe.nutrition.kcal, 'kcal'],
                  ['Protein', recipe.nutrition.protein, 'g'],
                  ['Carbs', recipe.nutrition.carbs, 'g'],
                  ['Sugar', recipe.nutrition.sugar, 'g'],
                  ['Fat', recipe.nutrition.fat, 'g'],
                ] as const
              )
                .filter(([, value]) => value !== undefined)
                .map(([label, value, unit]) => (
                  <div key={label} className="rounded-2xl bg-white p-3 text-center shadow-sm">
                    <dt className="text-[11px] font-bold uppercase tracking-wide text-ink-faint">{t(label)}</dt>
                    <dd className="mt-0.5 font-extrabold">
                      {value} <span className="text-xs font-bold text-ink-soft">{unit}</span>
                    </dd>
                  </div>
                ))}
            </dl>
          </Section>
        )}

        {/* Who made it and where it came from; which language it was translated from isn't worth the space. */}
        {(recipe.credits?.author || recipe.credits?.url) && (
          <p className="mt-9 flex items-start gap-2 text-sm text-ink-soft">
            <BookOpen className="mt-0.5 size-4 shrink-0" aria-hidden />
            <span>
              {recipe.credits.author && <>{t('Original by {author}.', { author: recipe.credits.author })} </>}
              {recipe.credits.url && (
                <a href={recipe.credits.url} target="_blank" rel="noreferrer" className="font-bold text-raspberry underline underline-offset-2">
                  {t('View source')}
                </a>
              )}
            </span>
          </p>
        )}

        {isUserRecipe && (
          <div className="mt-10 flex gap-2">
            <button type="button" onClick={() => openEdit(original)} className="btn-secondary flex-1">
              <Pencil className="size-4" aria-hidden /> {t('Edit')}
            </button>
            <button type="button" onClick={() => setMenuOpen(true)} className="btn-secondary flex-1 text-raspberry">
              <Trash2 className="size-4" aria-hidden /> {t('Delete')}
            </button>
          </div>
        )}
      </div>

      <FolderPickerSheet open={folderOpen} onClose={() => setFolderOpen(false)} recipeId={recipe.id} />

      <Sheet open={menuOpen} onClose={() => setMenuOpen(false)} title={t('Delete this recipe?')}>
        <p className="mb-4 text-[15px] text-ink-soft">{t('“{name}” will be removed from this device. This can’t be undone.', { name: recipe.name })}</p>
        <div className="space-y-2">
          <SheetAction
            icon={Trash2}
            label={t('Delete recipe')}
            danger
            onClick={async () => {
              setMenuOpen(false)
              navigate('/library', { replace: true })
              await deleteRecipe(recipe.id)
              showToast(t('Recipe deleted'))
            }}
          />
          <button type="button" onClick={() => setMenuOpen(false)} className="w-full py-3 font-bold text-ink-soft">
            {t('Cancel')}
          </button>
        </div>
      </Sheet>
    </article>
  )
}
