import { mailto, profile } from '../data/site.js'

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-4 py-28 text-center sm:px-6" data-reveal>
        <p className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-signal">Contact</p>
        <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          What does your team do <span className="font-serif font-normal italic text-signal">every day</span> that a
          workflow could do instead?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Tell me about one manual process, such as invoices, lead follow-ups, approvals or reports. I'll reply with how I'd
          automate it and how it could fail. No obligation.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={mailto('Automation audit request')}
            className="rounded-full bg-signal px-7 py-4 font-medium text-ink transition hover:brightness-110"
          >
            Email me about a workflow
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-line px-7 py-4 font-medium transition hover:border-muted"
          >
            Connect on LinkedIn
          </a>
        </div>
        <p className="mt-8 font-mono text-sm text-dim">
          <a href={`mailto:${profile.email}`} className="hover:text-fg">{profile.email}</a>
          <span className="mx-2">·</span>
          {profile.availability}
        </p>
      </div>
    </section>
  )
}
