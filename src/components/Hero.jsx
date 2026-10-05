import { Link } from 'react-router-dom'
import { mailto, profile, stats } from '../data/site.js'

// A run log for one workflow execution, shown beside the portrait. The status
// colours match the ones used in the workflow diagrams further down the page.
const runLog = [
  { t: '09:14:02', msg: 'webhook received · invoice_0412.pdf', tone: 'text-muted' },
  { t: '09:14:03', msg: 'ai.extract → vendor, amount, due_date', tone: 'text-violet' },
  { t: '09:14:03', msg: 'validate: amount missing → retry', tone: 'text-amber' },
  { t: '09:14:05', msg: 'validate: ok', tone: 'text-signal' },
  { t: '09:14:05', msg: 'airtable.create → rec_8Hf2…', tone: 'text-sky' },
  { t: '09:14:06', msg: 'run complete · 4.1s · 0 dropped', tone: 'text-signal' },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3 py-1.5 font-mono text-xs text-muted">
            <span className="size-1.5 rounded-full bg-signal" aria-hidden />
            {profile.role} · {profile.location}
          </p>
          <h1 className="text-[2.6rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.2rem]">
            Automations that{' '}
            <span className="font-serif font-normal italic text-signal">don’t fail silently.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            I build Make, n8n and AI workflows that take repetitive work off your team. Each one is validated,
            handles errors and alerts someone when something goes wrong, so nothing gets quietly lost.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={mailto('Automation audit request')}
              className="rounded-full bg-signal px-6 py-3.5 text-center font-medium text-ink transition hover:brightness-110"
            >
              Get a free workflow audit
            </a>
            <Link
              to="/#work"
              className="rounded-full border border-line px-6 py-3.5 text-center font-medium transition hover:border-muted"
            >
              See the builds
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="overflow-hidden rounded-2xl border border-line bg-panel">
            <picture>
              <source srcSet={profile.photo} type="image/webp" />
              <img
                src={profile.photoFallback}
                alt={`Portrait of ${profile.name}`}
                width="800"
                height="1000"
                fetchPriority="high"
                className="aspect-[4/5] w-full object-cover"
              />
            </picture>
          </div>
          <div
            className="absolute -bottom-8 -left-4 right-6 rounded-xl border border-line bg-ink/90 p-4 font-mono text-[11px] leading-relaxed shadow-2xl shadow-black/60 backdrop-blur sm:-left-10 sm:right-10 sm:text-xs"
            role="img"
            aria-label="Example workflow run log: an invoice is extracted by AI, fails validation once, is retried and saved, with nothing dropped."
          >
            <div className="mb-2 flex items-center justify-between text-dim">
              <span>example run · invoice-intake</span>
              <span className="flex items-center gap-1.5 text-signal">
                <span className="pulse-dot size-1.5 rounded-full bg-signal" /> live
              </span>
            </div>
            {runLog.map((l, i) => (
              <p key={i} className="log-line truncate" style={{ animationDelay: `${300 + i * 380}ms` }}>
                <span className="text-dim">{l.t}</span> <span className={l.tone}>{l.msg}</span>
              </p>
            ))}
          </div>
        </div>
      </div>

      <dl className="relative mx-auto mt-24 grid max-w-6xl gap-px overflow-hidden px-4 sm:grid-cols-3 sm:px-6">
        {stats.map((s) => (
          <div key={s.label} className="border-t border-line py-6 sm:pr-8">
            <dt className="sr-only">{s.label}</dt>
            <dd>
              <span className="block text-4xl font-semibold tracking-tight">{s.value}</span>
              <span className="mt-2 block text-sm text-muted">{s.label}</span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
