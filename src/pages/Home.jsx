import { useEffect } from 'react'
import Hero from '../components/Hero.jsx'
import Work from '../components/Work.jsx'
import Services from '../components/Services.jsx'
import Process from '../components/Process.jsx'
import About from '../components/About.jsx'
import Contact from '../components/Contact.jsx'
import { profile } from '../data/site.js'

export default function Home() {
  useEffect(() => {
    document.title = `${profile.name} | ${profile.role}`
  }, [])

  return (
    <>
      <Hero />
      <About />
      <Work />
      <Services />
      <Process />
      <Contact />
    </>
  )
}
