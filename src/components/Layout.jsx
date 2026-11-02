import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { profile } from '../content.js'
import { Icon, asset } from './ui.jsx'

const navClass = ({ isActive }) =>
  `rounded-md px-3 py-1.5 text-sm transition ${
    isActive ? 'bg-stone-200/70 text-stone-900' : 'text-stone-600 hover:text-stone-900'
  }`

export default function Layout() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col bg-stone-50 font-sans text-stone-800 antialiased">
      <header className="sticky top-0 z-20 border-b border-stone-200 bg-stone-50/90 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="font-serif text-lg font-semibold text-stone-900">
            {profile.name}
          </Link>

          <div className="hidden items-center gap-1 sm:flex">
            <NavLink to="/" end className={navClass}>About</NavLink>
            <NavLink to="/projects" className={navClass}>Projects</NavLink>
            <NavLink to="/publications" className={navClass}>Publications</NavLink>
            <a
              href={asset(profile.cv)}
              target="_blank"
              rel="noreferrer"
              className="ml-2 inline-flex items-center gap-1.5 rounded-md bg-teal-800 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-teal-900"
            >
              <Icon name="download" className="h-4 w-4" /> CV
            </a>
          </div>

          <button
            className="rounded-md p-2 text-stone-700 sm:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d={open ? 'M6 6l12 12M18 6 6 18' : 'M4 7h16M4 12h16M4 17h16'} strokeLinecap="round" />
            </svg>
          </button>
        </nav>

        {open && (
          <div className="flex flex-col gap-1 border-t border-stone-200 px-4 py-3 sm:hidden" onClick={() => setOpen(false)}>
            <NavLink to="/" end className={navClass}>About</NavLink>
            <NavLink to="/projects" className={navClass}>Projects</NavLink>
            <NavLink to="/publications" className={navClass}>Publications</NavLink>
            <a href={asset(profile.cv)} target="_blank" rel="noreferrer" className={navClass({})}>
              Download CV
            </a>
          </div>
        )}
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-12 sm:px-6 sm:py-16">
        <Outlet />
      </main>

      <footer className="border-t border-stone-200">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-6 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <a href={`mailto:${profile.email}`} className="hover:text-stone-800">{profile.email}</a>
        </div>
      </footer>
    </div>
  )
}
