import { useState } from 'react'
import { contactForm, mailto, profile } from '../data/site.js'

const field =
  'w-full rounded-xl border border-line bg-ink px-4 py-3 text-fg placeholder:text-dim transition focus:border-signal focus:outline-none'

function ContactForm() {
  // idle | sending | sent | error
  const [status, setStatus] = useState('idle')

  async function onSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    if (data._honey) return // bots fill hidden fields; people don't

    setStatus('sending')
    try {
      const res = await fetch(contactForm.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...data,
          _subject: `Portfolio enquiry: ${data.topic} (${data.name})`,
          _replyto: data.email,
          _template: 'table',
        }),
      })
      const body = await res.json().catch(() => ({}))
      if (!res.ok || body.success === 'false' || body.success === false) throw new Error(body.message)
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div role="status" className="grid min-h-96 place-content-center rounded-2xl border border-signal/30 bg-signal/[0.06] p-8 text-center">
        <span className="mx-auto grid size-12 place-items-center rounded-full bg-signal text-xl text-ink" aria-hidden>✓</span>
        <p className="mt-5 text-2xl font-semibold tracking-tight">Message received.</p>
        <p className="mt-2 text-muted">I'll reply to your email within one working day.</p>
        <button type="button" onClick={() => setStatus('idle')} className="mt-6 text-sm font-medium text-signal hover:underline">
          Send another message
        </button>
      </div>
    )
  }

  const sending = status === 'sending'

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-2xl border border-line bg-panel p-6 text-left sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm text-muted">Name</span>
          <input name="name" required autoComplete="name" className={field} placeholder="Your name" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm text-muted">Email</span>
          <input name="email" type="email" required autoComplete="email" className={field} placeholder="you@company.com" />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm text-muted">
            Company <span className="text-dim">(optional)</span>
          </span>
          <input name="company" autoComplete="organization" className={field} placeholder="Company name" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm text-muted">What's it about?</span>
          <select name="topic" required defaultValue="" className={field}>
            <option value="" disabled>Choose one</option>
            {contactForm.topics.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-sm text-muted">The process you want automated</span>
        <textarea
          name="message"
          required
          rows={5}
          minLength={20}
          className={`${field} resize-y`}
          placeholder="What happens today, which tools are involved, and what slows your team down."
        />
      </label>
      {/* honeypot: hidden from people, tempting to bots */}
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <button
        type="submit"
        disabled={sending}
        className="w-full rounded-full bg-signal px-7 py-4 font-medium text-ink transition hover:brightness-110 disabled:cursor-wait disabled:opacity-70"
      >
        {sending ? 'Sending…' : 'Send message'}
      </button>

      <p aria-live="polite" className="min-h-5 text-center text-sm">
        {status === 'error' && (
          <span className="text-amber">
            That didn't go through. Please try again, or{' '}
            <a href={mailto('Automation audit request')} className="underline">email me directly</a>.
          </span>
        )}
      </p>
    </form>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-28 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div data-reveal>
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-signal">Contact</p>
          <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            What does your team do <span className="font-serif font-normal italic text-signal">every day</span> that a
            workflow could do instead?
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Tell me about one manual process, such as invoices, lead follow-ups, approvals or reports. I'll reply with
            how I'd automate it and how it could fail. No obligation.
          </p>
          {profile.calendly && (
            <a
              href={profile.calendly}
              target="_blank"
              rel="noreferrer"
              className="group mt-10 flex items-center gap-4 rounded-2xl border border-signal/30 bg-signal/[0.06] p-5 transition hover:border-signal/60"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-signal text-ink" aria-hidden>
                <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4.5" width="18" height="16" rx="2.5" />
                  <path d="M3 9.5h18M8 2.5v4M16 2.5v4" />
                </svg>
              </span>
              <span className="flex-1">
                <span className="block text-lg font-semibold tracking-tight">Prefer to talk? Book a call</span>
                <span className="block text-sm text-muted">Pick a time that suits you on Calendly.</span>
              </span>
              <span className="text-signal transition group-hover:translate-x-1" aria-hidden>↗</span>
            </a>
          )}
          <ul className="mt-10 space-y-4 text-sm">
            <li>
              <span className="block font-mono text-xs uppercase tracking-wider text-dim">Email</span>
              <a href={`mailto:${profile.email}`} className="text-lg hover:text-signal">{profile.email}</a>
            </li>
            <li>
              <span className="block font-mono text-xs uppercase tracking-wider text-dim">LinkedIn</span>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-lg hover:text-signal">
                Connect with me ↗
              </a>
            </li>
            <li>
              <span className="block font-mono text-xs uppercase tracking-wider text-dim">Availability</span>
              <span className="text-lg">{profile.availability}</span>
            </li>
          </ul>
        </div>

        <div data-reveal>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
