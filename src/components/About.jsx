import { certification, skills } from '../data/site.js'
import SectionHeader from './SectionHeader.jsx'

const timeline = [
  { when: 'Current', what: 'AI Automation Specialist', where: 'Freelance & personal builds', note: 'Designing, building and testing Make, n8n and AI workflows: lead routing, document processing and approval systems.' },
  { when: '2016 – now', what: 'Founder & Creative Director', where: 'Acmes Media', note: 'Web, branding and content projects, turning client requirements into defined processes and deliverables.' },
  { when: '2025 – now', what: 'Founder', where: 'Tech for Teens', note: 'Teaching practical tech and creative skills to teenagers from low-income backgrounds.' },
]

function CertCard() {
  const { title, issuer, year, url } = certification
  const meta = [issuer, year].filter(Boolean).join(' · ')
  return (
    <div data-reveal className="flex items-start gap-4 rounded-2xl border border-signal/30 bg-signal/[0.06] p-5">
      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-signal text-ink" aria-hidden>
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z" />
          <path d="m8.5 13.5-1.5 7.5 5-3 5 3-1.5-7.5" />
        </svg>
      </span>
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal">Certification</p>
        <p className="mt-1 text-lg font-semibold tracking-tight">{title}</p>
        {meta && <p className="mt-0.5 text-sm text-muted">{meta}</p>}
        {url && (
          <a href={url} target="_blank" rel="noreferrer" className="mt-2 inline-block text-sm font-medium text-signal hover:underline">
            Verify credential ↗
          </a>
        )}
      </div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="border-y border-line bg-panel/40">
      <div className="mx-auto grid max-w-6xl gap-16 px-4 py-24 sm:px-6 lg:grid-cols-2">
        <div>
          <SectionHeader eyebrow="About" title="Ten years of client work. Certified in automation." />
          <div className="space-y-5 text-lg leading-relaxed text-muted" data-reveal>
            <p>
              I'm Obaloluwa, a Computer Science graduate and certified AI automation specialist based in Lagos. I
              design, build and troubleshoot business workflows with Make, n8n, APIs and AI models, and I document
              them so your team can run them without me.
            </p>
            <p>
              Before asking whether a workflow works, I ask what happens when it doesn't: a malformed payload, an
              empty AI response, a duplicate trigger, an expired token. I build those cases in from the start
              rather than finding them after launch.
            </p>
            <p>
              I've also run <span className="text-fg">Acmes Media</span> for ten years. That taught me to turn a
              client's vague request into a defined process, which is most of the work in automation.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          <CertCard />
          <ol className="space-y-6" data-reveal>
            {timeline.map((t) => (
              <li key={t.what + t.where} className="grid gap-1 border-l border-line pl-5 sm:grid-cols-[7rem_1fr] sm:gap-4">
                <span className="font-mono text-xs text-dim sm:pt-1">{t.when}</span>
                <div>
                  <p className="font-medium">
                    {t.what} <span className="text-muted">· {t.where}</span>
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{t.note}</p>
                </div>
              </li>
            ))}
          </ol>

          <div data-reveal>
            <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-signal">Toolkit</h3>
            <dl className="space-y-4">
              {skills.map((g) => (
                <div key={g.group} className="grid gap-2 sm:grid-cols-[7rem_1fr] sm:gap-4">
                  <dt className="text-sm text-dim sm:pt-1">{g.group}</dt>
                  <dd className="flex flex-wrap gap-1.5">
                    {g.items.map((s) => (
                      <span key={s} className="rounded-full border border-line px-2.5 py-1 text-xs">
                        {s}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
