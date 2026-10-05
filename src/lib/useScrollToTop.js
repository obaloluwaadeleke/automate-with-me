import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Route changes start at the top; hash links (/#work) scroll to their section.
export function useScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
}
