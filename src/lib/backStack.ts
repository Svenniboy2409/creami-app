/** A page in the back stack: one place in the browser history, and what it shows there. */
export interface StackEntry<L> {
  id: number
  location: L
}

/** Indexed like the browser history; a gap is a page that is no longer kept. */
export type BackStack<L> = (StackEntry<L> | undefined)[]

/** Pages kept alive behind the one you see; going back further builds a page anew. */
export const KEEP_PAGES = 6

/**
 * The back stack after a move through the history to `index`. A link followed
 * (PUSH) is a new page, and so is Back onto a page that is no longer kept; a
 * change in place (REPLACE: a filter, a tab) and Back onto a page that is
 * still there keep that page, so it is never built again.
 */
export function moveBackStack<L extends { key: string }>(
  stack: BackStack<L>,
  index: number,
  navigationType: string,
  location: L,
  newId: () => number,
): BackStack<L> {
  const entries = stack.slice(0, navigationType === 'PUSH' ? index : index + 1)
  const here = entries[index]
  const same = here !== undefined && (navigationType === 'REPLACE' || (navigationType === 'POP' && here.location.key === location.key))
  entries[index] = { id: same ? here.id : newId(), location }
  for (let i = 0; i <= index - KEEP_PAGES; i++) entries[i] = undefined
  return entries
}
