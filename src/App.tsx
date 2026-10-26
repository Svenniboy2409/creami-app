import { useEffect, useLayoutEffect, useRef } from 'react'
import { HashRouter, Navigate, Outlet, Route, Routes, useLocation, useNavigationType } from 'react-router'
import { BottomNav } from './components/BottomNav'
import { LibraryProvider } from './hooks/LibraryProvider'
import { DiscoverPage } from './pages/DiscoverPage'
import { LibraryPage } from './pages/LibraryPage'
import { RecipeDetailPage } from './pages/RecipeDetailPage'
import { RecipeFormPage } from './pages/RecipeFormPage'

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
  const isForm = pathname === '/new' || pathname.endsWith('/edit')
  return (
    <>
      <ScrollMemory />
      <main className={`mx-auto min-h-dvh max-w-md ${isForm ? 'pb-32' : 'pb-36'}`}>
        <Outlet />
      </main>
      {!isForm && <BottomNav />}
    </>
  )
}

export function App() {
  return (
    <LibraryProvider>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<DiscoverPage />} />
            <Route path="library" element={<LibraryPage />} />
            <Route path="new" element={<RecipeFormPage />} />
            <Route path="recipe/:id" element={<RecipeDetailPage />} />
            <Route path="recipe/:id/edit" element={<RecipeFormPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </HashRouter>
    </LibraryProvider>
  )
}
