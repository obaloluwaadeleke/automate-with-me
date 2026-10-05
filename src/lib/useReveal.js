import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Fades [data-reveal] elements in as they scroll into view.
// Content stays visible without JS; the class on <html> opts into the effect.
// Uses a plain scroll check rather than IntersectionObserver: IO callbacks can
// be throttled in background or embedded views, which leaves sections blank.
export function useReveal() {
  const { pathname } = useLocation()

  useEffect(() => {
    const root = document.documentElement
    root.classList.add('js-reveal')

    const check = () => {
      const pending = document.querySelectorAll('[data-reveal]:not(.is-in)')
      const limit = window.innerHeight * 0.95
      pending.forEach((el) => {
        if (el.getBoundingClientRect().top < limit) el.classList.add('is-in')
      })
      if (pending.length === 0) window.removeEventListener('scroll', check)
    }

    check()
    const t = setTimeout(check, 50) // after routed content mounts
    window.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check)
    return () => {
      clearTimeout(t)
      window.removeEventListener('scroll', check)
      window.removeEventListener('resize', check)
    }
  }, [pathname])
}
