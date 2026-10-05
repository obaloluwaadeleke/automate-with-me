import { skills } from '../data/site.js'
import SectionHeader from './SectionHeader.jsx'

const timeline = [
  { when: 'Current', what: 'AI Automation Specialist', where: 'Freelance & personal builds', note: 'Designing, building and testing Make, n8n and AI workflows: lead routing, document processing and approval systems.' },
  { when: '2016 – now', what: 'Founder & Creative Director', where: 'Acmes Media', note: 'Web, branding and content projects, turning client requirements into defined processes and deliverables.' },
  { when: '2025 – now', what: 'Founder', where: 'Tech for Teens', note: 'Teaching practical tech and creative skills to teenagers from low-income backgrounds.' },
]

export default function About() {
  return (
    <section id="about" className="border-y border-line bg-panel/40">
      <div className="mx-auto grid max-w-6xl gap-16 px-4 py-24 sm:px-6 lg:grid-cols-2">
        <div>
          <SectionHeader eyebrow="About" title="Ten years of client work. Automation focus." />
          <div className="space-y-5 text-lg leading-relaxed text-muted" data-reveal>
            <p>
              I'm Obaloluwa, a Computer Science graduate based in Lagos. I design, build and troubleshoot business
              workflows with Make, n8n, APIs and AI models, and I document them so your team can run them without me.
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
