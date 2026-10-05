import { services } from '../data/site.js'
import SectionHeader from './SectionHeader.jsx'

export default function Services() {
  return (
    <section id="services" className="border-y border-line bg-panel/40">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <SectionHeader
          eyebrow="What I build"
          title="Hand off the repetitive work. Keep the decisions."
          intro="AI handles the reading, sorting and drafting. Your people keep the decisions that matter, with a clear record of what the workflow did."
        />
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article key={s.title} data-reveal className="flex flex-col bg-ink p-7">
              <span className="font-mono text-xs text-dim">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-muted">{s.body}</p>
              <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-signal/80">
                {s.tags.map((t) => (
                  <li key={t}>#{t.toLowerCase().replace(/\s+/g, '-')}</li>
                ))}
              </ul>
            </article>
          ))}
          <article data-reveal className="flex flex-col justify-between bg-signal p-7 text-ink">
            <h3 className="text-xl font-semibold tracking-tight">Not sure what to automate first?</h3>
            <p className="mt-3 leading-relaxed text-ink/75">
              Send me the task your team repeats most often. I'll reply with how I'd automate it and what it would take.
            </p>
            <a href="#contact" className="mt-6 font-medium underline decoration-ink/30 underline-offset-4 hover:decoration-ink">
              Get a free workflow audit →
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}
