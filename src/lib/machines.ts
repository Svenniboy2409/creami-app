import { MODEL_ORDER, MODEL_PROGRAMS, PROGRAMS } from '../data/creami'
import type { CreamiModel, Recipe } from '../types/recipe'

type Runs = Pick<Recipe, 'program' | 'steps'>

/** Every program the recipe runs that the app knows; one typed into the form rules nothing out. */
function knownPrograms(recipe: Runs): string[] {
  const used = [recipe.program, ...recipe.steps.map((step) => step.program)]
  return [...new Set(used.filter((program): program is string => !!program && PROGRAMS.includes(program)))]
}

/** The programs the recipe needs that this machine doesn't have. */
export function missingPrograms(recipe: Runs, model: CreamiModel): string[] {
  return knownPrograms(recipe).filter((program) => !MODEL_PROGRAMS[model].includes(program))
}

/** The machines a recipe works with: the ones it lists that have every program it runs. */
export function machinesFor(recipe: Runs & Pick<Recipe, 'models'>): CreamiModel[] {
  return MODEL_ORDER.filter((model) => recipe.models.includes(model) && missingPrograms(recipe, model).length === 0)
}

/** For each program the recipe needs that some machines lack: which machines those are. */
export function programGaps(recipe: Runs): { program: string; models: CreamiModel[] }[] {
  return knownPrograms(recipe)
    .map((program) => ({ program, models: MODEL_ORDER.filter((model) => !MODEL_PROGRAMS[model].includes(program)) }))
    .filter((gap) => gap.models.length > 0)
}
