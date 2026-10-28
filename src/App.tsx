import { useEffect, useLayoutEffect, useRef } from 'react'
import { HashRouter, Navigate, Outlet, Route, Routes, useLocation } from 'react-router'
import { BottomNav } from './components/BottomNav'
import { ToastProvider } from './components/Toast'
import { I18nProvider } from './hooks/I18nProvider'
import { LibraryProvider } from './hooks/LibraryProvider'
import { RecipeEditorProvider } from './hooks/RecipeEditorProvider'
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

function Layout() {
  const { pathname } = useLocation()
  // A recipe has the whole screen: its photo runs to the top, and no bar sits at the bottom.
  const isRecipe = pathname.startsWith('/recipe/')
  return (
    <>
      <PageMemory />
      <main className={`mx-auto min-h-dvh max-w-md ${isRecipe ? 'pb-[calc(3rem_+_env(safe-area-inset-bottom))]' : 'pb-36'}`}>
        {/* Keyed on the path so every page fades in as you arrive on it. */}
        <div key={pathname} className="animate-page-in">
          <Outlet />
        </div>
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
              <Routes>
                <Route element={<Layout />}>
                  <Route index element={<DiscoverPage />} />
                  <Route path="library" element={<LibraryPage />} />
                  <Route path="recipe/:id" element={<RecipeDetailPage />} />
                  <Route path="folder/:id" element={<FolderPage />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
              </Routes>
            </RecipeEditorProvider>
          </HashRouter>
        </ToastProvider>
      </LibraryProvider>
    </I18nProvider>
  )
}
