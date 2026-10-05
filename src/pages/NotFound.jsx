import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="mx-auto grid min-h-[70vh] max-w-xl place-content-center px-4 text-center">
      <p className="font-mono text-sm text-amber">404 · route not found</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight">Nothing is running at this address.</h1>
      <Link to="/" className="mt-8 font-medium text-signal">← Back home</Link>
    </section>
  )
}
