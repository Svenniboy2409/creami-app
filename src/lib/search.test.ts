import { describe, expect, it } from 'vitest'
import type { Recipe } from '../types/recipe'
import { filterRecipes, normalize, presentValues, readQuery, searchRecipes } from './search'

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

const vanilla = recipe('vanilla', 'Vanilla Bean Ice Cream', { tags: ['egg-free'], tastes: ['sweet', 'creamy'] })
const pistachio = recipe('pistachio', 'Pistachio Gelato', { category: 'gelato', program: 'Gelato', tags: ['nutty'] })
const coconut = recipe('coconut', 'Coconut Sorbet', {
  category: 'sorbet',
  program: 'Sorbet',
  tags: ['vegan'],
  tastes: ['fruity', 'refreshing'],
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
    expect(ids(filterRecipes(all, { taste: 'refreshing' }))).toEqual(['coconut'])
  })

  it('finds a taste by name, in either language', () => {
    expect(ids(searchRecipes(all, 'zoet'))).toEqual(['vanilla'])
    expect(ids(searchRecipes(all, 'refreshing'))).toEqual(['coconut'])
  })
})

describe('typed filters', () => {
  const sundae = recipe('sundae', 'Brownie Sundae', {
    difficulty: 'medium',
    times: { prepMin: 15, freezeHours: 24 },
    models: ['original', 'deluxe'],
    ingredients: [
      { title: 'Base', items: [{ name: 'milk' }] },
      { title: 'Mix-ins', items: [{ name: 'brownie' }] },
      { title: 'Toppings', items: [{ name: 'sprinkles' }] },
    ],
  })
  const quick = recipe('quick', 'Lemon Sorbet', { category: 'sorbet', program: 'Sorbet', difficulty: 'easy', times: { prepMin: 5, freezeHours: 12 } })
  // Vanilla: no level, 5 minutes, 24 hours, the Original only, no mix-ins or toppings.
  const list = [sundae, quick, vanilla]

  it('finds a machine', () => {
    expect(ids(searchRecipes(list, 'deluxe'))).toEqual(['sundae'])
  })

  it('finds a level in either language', () => {
    expect(ids(searchRecipes(list, 'medium'))).toEqual(['sundae'])
    expect(ids(searchRecipes(list, 'makkelijk'))).toEqual(['quick'])
    expect(ids(searchRecipes(list, 'niveau gemiddeld'))).toEqual(['sundae'])
  })

  it('finds the recipes with mix-ins or toppings, however that is typed', () => {
    for (const query of ['mix-ins', 'Mix-Ins', 'mixins', 'mixin', 'mix in']) expect(ids(searchRecipes(list, query))).toEqual(['sundae'])
    for (const query of ['toppings', 'topping']) expect(ids(searchRecipes(list, query))).toEqual(['sundae'])
  })

  it('reads prep and freezing times, exactly', () => {
    expect(ids(searchRecipes(list, '5 min'))).toEqual(['quick', 'vanilla'])
    expect(ids(searchRecipes(list, '15 minuten'))).toEqual(['sundae'])
    expect(searchRecipes(list, '10 min')).toEqual([])
    expect(ids(searchRecipes(list, '12 u'))).toEqual(['quick'])
    expect(ids(searchRecipes(list, '24h'))).toEqual(['sundae', 'vanilla'])
    expect(ids(searchRecipes(list, 'prep 15'))).toEqual(['sundae'])
    expect(ids(searchRecipes(list, 'vriezen 12'))).toEqual(['quick'])
    expect(ids(searchRecipes(list, '12'))).toEqual(['quick'])
  })

  it('combines typed filters with words', () => {
    expect(ids(searchRecipes(list, 'sorbet 5 min'))).toEqual(['quick'])
    expect(ids(searchRecipes(list, 'deluxe toppings 15 min'))).toEqual(['sundae'])
    expect(searchRecipes(list, 'easy 24 uur')).toEqual([])
  })

  it('takes the filter out of the words, and leaves a lone filter word alone while you type', () => {
    expect(readQuery('Prep 10 min deluxe')).toEqual({ text: 'deluxe', prep: [10], freeze: [], either: [] })
    expect(searchRecipes(list, 'prep')).toEqual(list)
  })
})

describe('presentValues', () => {
  it('lists what occurs, in the usual order', () => {
    expect(presentValues(all)).toEqual({
      categories: ['ice-cream', 'gelato', 'sorbet'],
      tastes: ['sweet', 'fruity', 'refreshing', 'creamy'],
      programs: ['Ice Cream', 'Gelato', 'Sorbet'],
      tags: ['egg-free', 'vegan', 'nutty'],
    })
  })
})
