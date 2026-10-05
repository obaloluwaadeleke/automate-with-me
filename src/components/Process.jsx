import { process } from '../data/site.js'
import SectionHeader from './SectionHeader.jsx'

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeader
        eyebrow="How I work"
        title="Most of the work is planning for failure"
        intro="Getting a workflow to run once is easy. My process spends most of its time on what happens when inputs are messy or an API fails."
      />
      <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {process.map((p) => (
          <li key={p.step} data-reveal className="relative border-t border-line pt-6">
            <span className="absolute -top-px left-0 h-px w-10 bg-signal" aria-hidden />
            <span className="font-mono text-sm text-signal">{p.step}</span>
            <h3 className="mt-3 text-xl font-semibold tracking-tight">{p.title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{p.body}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
