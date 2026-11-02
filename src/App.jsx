import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Publications from './pages/Publications.jsx'
import { profile } from './content.js'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => window.scrollTo(0, 0), [pathname])
  return null
}

export default function App() {
  useEffect(() => {
    document.title = profile.name
  }, [])

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="publications" element={<Publications />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}
