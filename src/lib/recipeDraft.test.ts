import { describe, expect, it } from 'vitest'
import { findProblem, hasContent, rekey, toDraft, toRecipe } from './recipeDraft'

describe('recipe drafts', () => {
  it('points at the first thing a recipe still needs', () => {
    const draft = toDraft()
    expect(findProblem(draft)?.field).toBe('name')
    draft.name = 'Mango sorbet'
    expect(findProblem(draft)?.field).toBe('ingredients')
    draft.groups[0].items[0].name = 'mango'
    expect(findProblem(draft)?.field).toBe('steps')
    draft.steps[0].text = 'Blend and freeze.'
    expect(findProblem(draft)).toBeNull()
  })

  it('only counts a form with something typed in it as worth keeping', () => {
    const draft = toDraft()
    expect(hasContent(draft)).toBe(false)
    draft.steps[1].text = 'Re-spin'
    expect(hasContent(draft)).toBe(true)
  })

  it('gives a stored draft fresh keys but the same content', () => {
    const draft = toDraft()
    draft.groups[0].items[0].name = 'mango'
    const again = rekey(JSON.parse(JSON.stringify(draft)))
    expect(again.groups[0].items[0].name).toBe('mango')
    expect(again.groups[0].items[0].key).not.toBe(draft.groups[0].items[0].key)
  })

  it('turns a finished draft into a recipe', () => {
    const draft = toDraft()
    draft.name = '  Mango sorbet '
    draft.groups[0].items[0] = { ...draft.groups[0].items[0], qty: '1,5', unit: 'cup', name: 'mango' }
    draft.steps[0].text = 'Blend and freeze.'
    const recipe = toRecipe(draft)
    expect(recipe.name).toBe('Mango sorbet')
    expect(recipe.ingredients).toEqual([{ title: undefined, items: [{ qty: 1.5, unit: 'cup', name: 'mango', note: undefined }] }])
    expect(recipe.steps).toEqual([{ text: 'Blend and freeze.', program: undefined }])
  })
})
