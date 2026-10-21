import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FARM } from '../data.js'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-bold transition ${
      isActive ? 'bg-grass-600 text-white' : 'text-grass-900 hover:bg-grass-100'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-grass-100 bg-milk/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-grass-600 text-xl">🐄</span>
          <span className="font-display text-xl font-extrabold leading-none text-grass-900">
            Sharma <span className="text-barn">Dairy</span> Farm
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
          <a href={`tel:${FARM.phones[0].raw}`} className="btn-primary ml-3 !px-5 !py-2 text-sm">
            📞 Call Now
          </a>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-2xl md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <nav className="border-t border-grass-100 bg-milk px-4 pb-4 md:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-1 pt-3">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            ))}
            <a href={`tel:${FARM.phones[0].raw}`} className="btn-primary mt-2">
              📞 Call {FARM.phones[0].display}
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
