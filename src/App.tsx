import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { HashRouter, Navigate, Route, Routes, useLocation, useNavigationType, type Location } from 'react-router'
import { BottomNav } from './components/BottomNav'
import { ToastProvider } from './components/Toast'
import { I18nProvider } from './hooks/I18nProvider'
import { LibraryProvider } from './hooks/LibraryProvider'
import { RecipeEditorProvider } from './hooks/RecipeEditorProvider'
import { moveBackStack, type StackEntry } from './lib/backStack'
import { recall, remember } from './lib/pageMemory'
import { DiscoverPage } from './pages/DiscoverPage'
import { FolderPage } from './pages/FolderPage'
import { LibraryPage } from './pages/LibraryPage'
import { RecipeDetailPage } from './pages/RecipeDetailPage'

/** Which remembered scroll position a location uses: one per page, and one per Library tab. */
function scrollKey(pathname: string, search: string): string {
  if (pathname !== '/library') return pathname
  return `${pathname}?${new URLSearchParams(search).get('tab') ?? 'favorites'}`
}

/**
 * Every page opens where you left it, whether you come back with Back or
 * through the bottom bar: its own scroll position, kept while the app is open.
 * Discover and the Library also get back the filters, search and tab they had.
 */
function PageMemory() {
  const { pathname, search } = useLocation()
  const key = scrollKey(pathname, search)
  const current = useRef(key)

  useEffect(() => {
    const record = () => remember(`scroll:${current.current}`, window.scrollY)
    window.addEventListener('scroll', record, { passive: true })
    return () => window.removeEventListener('scroll', record)
  }, [])

  useEffect(() => {
    if (pathname === '/' || pathname === '/library') remember(`search:${pathname}`, search)
  }, [pathname, search])

  useLayoutEffect(() => {
    current.current = key
    const target = recall<number>(`scroll:${key}`) ?? 0
    window.scrollTo(0, target)
    if (!target) return
    // A page that is still filling in (the library loading, photos taking
    // their height) can be too short to reach the spot yet, so keep trying for
    // a moment — unless you start scrolling yourself.
    let frames = 0
    let frame = 0
    const retry = () => {
      if (Math.abs(window.scrollY - target) < 2 || ++frames > 40) return
      window.scrollTo(0, target)
      frame = requestAnimationFrame(retry)
    }
    const stop = () => cancelAnimationFrame(frame)
    frame = requestAnimationFrame(retry)
    window.addEventListener('touchstart', stop, { once: true, passive: true })
    window.addEventListener('wheel', stop, { once: true, passive: true })
    return () => {
      stop()
      window.removeEventListener('touchstart', stop)
      window.removeEventListener('wheel', stop)
    }
  }, [key])

  return null
}

let nextEntryId = 0
const newEntryId = () => nextEntryId++

const historyIndex = () => (window.history.state as { idx?: number } | null)?.idx ?? 0

/**
 * The pages you came through to get here, in the order the browser history
 * has them. Each one stays mounted while another lies on top of it, so Back
 * shows it exactly as you left it rather than building it again.
 */
function useBackStack(): StackEntry<Location>[] {
  const location = useLocation()
  const navigationType = useNavigationType()
  const [stack, setStack] = useState(() => ({
    location,
    entries: moveBackStack<Location>([], historyIndex(), 'PUSH', location, newEntryId),
  }))
  let entries = stack.entries
  // Every move through the history is a new location object; an address typed
  // by hand can share its key with another, so the object is what counts.
  if (stack.location !== location) {
    entries = moveBackStack(stack.entries, historyIndex(), navigationType, location, newEntryId)
    setStack({ location, entries })
  }
  return entries.filter((entry) => entry !== undefined)
}

function StackPage({ location, active }: { location: Location; active: boolean }) {
  // Where it was scrolled when the next page went on top. While hidden it is
  // held at that height, out of the flow, so nothing in it moves or starts
  // over; when it comes back the scroll is set to the same place.
  const [hiddenAt, setHiddenAt] = useState<number | null>(null)
  if (!active && hiddenAt === null) setHiddenAt(window.scrollY)
  if (active && hiddenAt !== null) setHiddenAt(null)
  return (
    <div
      inert={!active}
      className={active ? undefined : 'pointer-events-none invisible fixed inset-x-0 mx-auto max-w-md'}
      style={active ? undefined : { top: -(hiddenAt ?? window.scrollY) }}
    >
      {/* Keyed on the path so every new page fades in as you arrive on it. */}
      <div key={location.pathname} className="animate-page-in">
        <Routes location={location}>
          <Route index element={<DiscoverPage />} />
          <Route path="library" element={<LibraryPage />} />
          <Route path="recipe/:id" element={<RecipeDetailPage />} />
          <Route path="folder/:id" element={<FolderPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  )
}

function Layout() {
  const { pathname } = useLocation()
  // The page you are on is the top one; the rest wait underneath.
  const pages = useBackStack()
  // A recipe has the whole screen: its photo runs to the top, and no bar sits at the bottom.
  const isRecipe = pathname.startsWith('/recipe/')
  return (
    <>
      <PageMemory />
      <main className={`mx-auto min-h-dvh max-w-md ${isRecipe ? 'pb-[calc(3rem_+_env(safe-area-inset-bottom))]' : 'pb-36'}`}>
        {pages.map((page, i) => (
          <StackPage key={page.id} location={page.location} active={i === pages.length - 1} />
        ))}
      </main>
      {!isRecipe && <BottomNav />}
    </>
  )
}

export function App() {
  return (
    <I18nProvider>
      <LibraryProvider>
        <ToastProvider>
          <HashRouter>
            {/* Inside the router, so saving a new recipe can open its page. */}
            <RecipeEditorProvider>
              <Layout />
            </RecipeEditorProvider>
          </HashRouter>
        </ToastProvider>
      </LibraryProvider>
    </I18nProvider>
  )
}
