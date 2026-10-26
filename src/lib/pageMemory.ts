import { useCallback, useState } from 'react'

// What each page was showing — its filters, tab, search, scroll position, the
// pint size and ticked-off ingredients of a recipe — kept for as long as the
// app is open, so leaving a page and coming back picks up where you were.
// Like the cocktail app, it lives in memory: a fresh start is a fresh start.
const memory = new Map<string, unknown>()

export function remember<T>(key: string, value: T): void {
  memory.set(key, value)
}

export function recall<T>(key: string): T | undefined {
  return memory.get(key) as T | undefined
}

/** `useState` that a page gets back when it is shown again. */
export function useRemembered<T>(key: string, initial: T): [T, (next: T | ((current: T) => T)) => void] {
  const read = () => (memory.has(key) ? (memory.get(key) as T) : initial)
  const [state, setState] = useState(() => ({ key, value: read() }))
  // Another key (the next recipe, another tab) means that one's own value.
  const current = state.key === key ? state : { key, value: read() }
  if (current !== state) setState(current)

  const set = useCallback(
    (next: T | ((value: T) => T)) =>
      setState((previous) => {
        const base = previous.key === key ? previous.value : memory.has(key) ? (memory.get(key) as T) : initial
        const value = typeof next === 'function' ? (next as (value: T) => T)(base) : next
        memory.set(key, value)
        return { key, value }
      }),
    [key, initial],
  )
  return [current.value, set]
}
