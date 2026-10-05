import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { mailto, profile } from '../data/site.js'

const links = [
  { href: '/#work', label: 'Work' },
  { href: '/#services', label: 'Services' },
  { href: '/#process', label: 'Process' },
  { href: '/#about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname, hash } = useLocation()

  useEffect(() => setOpen(false), [pathname, hash])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled || open ? 'bg-ink/85 backdrop-blur-md border-b border-line' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2.5 font-medium tracking-tight">
          <span className="pulse-dot inline-block size-2.5 rounded-full bg-signal" aria-hidden />
          {profile.name}
        </Link>

        <ul className="hidden items-center gap-7 text-sm text-muted md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link to={l.href} className="transition-colors hover:text-fg">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={mailto()}
            className="hidden rounded-full bg-signal px-4 py-2 text-sm font-medium text-ink transition hover:brightness-110 sm:inline-block"
          >
            Start a project
          </a>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full border border-line md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            <span className="relative block h-3 w-4" aria-hidden>
              <span className={`absolute left-0 h-px w-4 bg-fg transition ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
              <span className={`absolute left-0 h-px w-4 bg-fg transition ${open ? 'top-1.5 -rotate-45' : 'top-3'}`} />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <ul id="mobile-menu" className="border-t border-line px-4 pb-5 pt-2 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <Link to={l.href} className="block py-3 text-lg">
                {l.label}
              </Link>
            </li>
          ))}
          <li className="pt-3">
            <a href={mailto()} className="block rounded-full bg-signal py-3 text-center font-medium text-ink">
              Start a project
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}
