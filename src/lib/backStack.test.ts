import { describe, expect, it } from 'vitest'
import { KEEP_PAGES, moveBackStack, type BackStack } from './backStack'

type Loc = { key: string; path: string }

function walk() {
  let id = 0
  let stack: BackStack<Loc> = [{ id: id++, location: { key: 'a', path: '/' } }]
  const move = (index: number, type: string, key: string, path: string) => {
    stack = moveBackStack(stack, index, type, { key, path }, () => id++)
    return stack
  }
  const ids = () => stack.map((entry) => entry?.id)
  return { move, ids }
}

describe('back stack', () => {
  it('keeps the page you came from, so Back shows that same page', () => {
    const { move, ids } = walk()
    move(1, 'PUSH', 'b', '/recipe/x')
    expect(ids()).toEqual([0, 1])
    move(0, 'POP', 'a', '/')
    expect(ids()).toEqual([0])
  })

  it('keeps a page through a change in place, with its new address', () => {
    const { move, ids } = walk()
    const stack = move(0, 'REPLACE', 'a2', '/?q=choc')
    expect(ids()).toEqual([0])
    expect(stack[0]?.location.path).toBe('/?q=choc')
  })

  it('starts a new page for a link followed after going back', () => {
    const { move, ids } = walk()
    move(1, 'PUSH', 'b', '/recipe/x')
    move(0, 'POP', 'a', '/')
    move(1, 'PUSH', 'c', '/recipe/y')
    expect(ids()).toEqual([0, 2])
  })

  it('builds a page anew when Back lands on one it no longer has', () => {
    const { move, ids } = walk()
    for (let i = 1; i <= KEEP_PAGES + 1; i++) move(i, 'PUSH', `k${i}`, `/recipe/${i}`)
    expect(ids().filter((id) => id !== undefined)).toHaveLength(KEEP_PAGES)
    const stack = move(0, 'POP', 'a', '/')
    expect(stack).toHaveLength(1)
    expect(stack[0]?.id).toBe(KEEP_PAGES + 2)
  })
})
