import { useEffect, useLayoutEffect, useRef } from 'react'
import { HashRouter, Navigate, Outlet, Route, Routes, useLocation, useNavigationType } from 'react-router'
import { BottomNav } from './components/BottomNav'
import { StatusBarScrim } from './components/StatusBarScrim'
import { ToastProvider } from './components/Toast'
import { I18nProvider } from './hooks/I18nProvider'
import { LibraryProvider } from './hooks/LibraryProvider'
import { RecipeEditorProvider } from './hooks/RecipeEditorProvider'
import { DiscoverPage } from './pages/DiscoverPage'
import { FolderPage } from './pages/FolderPage'
import { LibraryPage } from './pages/LibraryPage'
import { RecipeDetailPage } from './pages/RecipeDetailPage'

/** Starts new pages at the top, and restores the scroll position when going back. */
function ScrollMemory() {
  const location = useLocation()
  const navigationType = useNavigationType()
  const positions = useRef(new Map<string, number>())
  const currentKey = useRef(location.key)

  useEffect(() => {
    const remember = () => positions.current.set(currentKey.current, window.scrollY)
    window.addEventListener('scroll', remember, { passive: true })
    return () => window.removeEventListener('scroll', remember)
  }, [])

  useLayoutEffect(() => {
    currentKey.current = location.key
    window.scrollTo(0, navigationType === 'POP' ? (positions.current.get(location.key) ?? 0) : 0)
  }, [location.key, navigationType])

  return null
}

function Layout() {
  const { pathname } = useLocation()
  // A recipe has the whole screen: its photo runs to the top, and no bar sits at the bottom.
  const isRecipe = pathname.startsWith('/recipe/')
  return (
    <>
      <ScrollMemory />
      {!isRecipe && <StatusBarScrim />}
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
