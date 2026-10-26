import { describe, expect, it } from 'vitest'
import type { Recipe } from '../types/recipe'
import { filterRecipes, normalize, presentValues, searchRecipes } from './search'

const recipe = (id: string, name: string, extra: Partial<Recipe> = {}): Recipe => ({
  id,
  origin: 'curated',
  name,
  category: 'ice-cream',
  tags: [],
  models: ['original'],
  program: 'Ice Cream',
  basePint: 16,
  times: { prepMin: 5, freezeHours: 24 },
  ingredients: [{ items: [{ name: 'whole milk' }] }],
  steps: [{ text: 'Mix' }],
  ...extra,
})

const vanilla = recipe('vanilla', 'Vanilla Bean Ice Cream', { tags: ['egg-free'] })
const pistachio = recipe('pistachio', 'Pistachio Gelato', { category: 'gelato', program: 'Gelato', tags: ['nutty'] })
const coconut = recipe('coconut', 'Coconut Sorbet', {
  category: 'sorbet',
  program: 'Sorbet',
  tags: ['vegan'],
  models: ['original', 'deluxe'],
  ingredients: [{ items: [{ name: 'coconut milk' }, { name: 'lime juice' }] }],
})
const choc = recipe('choc', 'White Chocolate Ice Cream', {
  translations: { nl: { name: 'Witte-chocolade-ijs', ingredients: [{ items: [{ name: 'volle melk' }] }] } },
})
const all = [vanilla, pistachio, coconut, choc]
const ids = (recipes: Recipe[]) => recipes.map((r) => r.id)

describe('normalize', () => {
  it('drops accents, case and punctuation', () => {
    expect(normalize('Crème-Brûlée  GELATO!')).toBe('creme brulee gelato')
  })
})

describe('searchRecipes', () => {
  it('returns the list untouched for an empty query', () => {
    expect(searchRecipes(all, '  ')).toBe(all)
  })

  it('forgives typos', () => {
    expect(ids(searchRecipes(all, 'vanila'))).toEqual(['vanilla'])
    expect(ids(searchRecipes(all, 'pistahcio'))).toEqual(['pistachio'])
  })

  it('matches at word starts, not inside words', () => {
    expect(ids(searchRecipes(all, 'nut'))).toEqual(['pistachio'])
    expect(ids(searchRecipes(all, 'coco'))).toEqual(['coconut'])
  })

  it('finds half-typed words while you type', () => {
    expect(ids(searchRecipes(all, 'pist'))).toEqual(['pistachio'])
  })

  it('searches ingredients, programs, categories and tags', () => {
    expect(ids(searchRecipes(all, 'lime'))).toEqual(['coconut'])
    expect(ids(searchRecipes(all, 'gelato'))).toEqual(['pistachio'])
    expect(ids(searchRecipes(all, 'vegan'))).toEqual(['coconut'])
  })

  it('needs every word to match somewhere', () => {
    expect(ids(searchRecipes(all, 'coconut lime'))).toEqual(['coconut'])
    expect(searchRecipes(all, 'coconut bacon')).toEqual([])
  })

  it('puts name matches above ingredient matches', () => {
    expect(ids(searchRecipes(all, 'ice cream'))).toEqual(['vanilla', 'choc'])
    expect(ids(searchRecipes(all, 'milk'))[0]).toBe('vanilla')
  })

  it('finds recipes by their Dutch name and translated tags', () => {
    expect(ids(searchRecipes(all, 'witte chocolade'))).toEqual(['choc'])
    expect(ids(searchRecipes(all, 'eivrij'))).toEqual(['vanilla'])
    expect(ids(searchRecipes(all, 'notig'))).toEqual([])
  })

  it('leaves near misses out once something matches exactly', () => {
    expect(ids(searchRecipes([recipe('a', 'Mint'), recipe('b', 'Mind the Gap')], 'mint'))).toEqual(['a'])
  })
})

describe('filterRecipes', () => {
  it('combines filters with the search', () => {
    expect(ids(filterRecipes(all, { model: 'deluxe' }))).toEqual(['coconut'])
    expect(ids(filterRecipes(all, { category: 'gelato' }))).toEqual(['pistachio'])
    expect(ids(filterRecipes(all, { program: 'Sorbet' }))).toEqual(['coconut'])
    expect(ids(filterRecipes(all, { tag: 'egg-free', query: 'vanilla' }))).toEqual(['vanilla'])
    expect(filterRecipes(all, { tag: 'egg-free', query: 'pistachio' })).toEqual([])
  })
})

describe('presentValues', () => {
  it('lists what occurs, in the usual order', () => {
    expect(presentValues(all)).toEqual({
      categories: ['ice-cream', 'gelato', 'sorbet'],
      programs: ['Ice Cream', 'Gelato', 'Sorbet'],
      tags: ['egg-free', 'vegan', 'nutty'],
    })
  })
})
