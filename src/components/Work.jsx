import { Link } from 'react-router-dom'
import { projects } from '../data/projects.js'
import SectionHeader from './SectionHeader.jsx'
import StatusBadge from './StatusBadge.jsx'

const nodeTone = {
  trigger: 'border-fg/40 text-fg',
  ai: 'border-violet/50 text-violet',
  logic: 'border-amber/50 text-amber',
  data: 'border-sky/50 text-sky',
  action: 'border-signal/50 text-signal',
}

// Compact pipeline preview for projects without a screenshot.
function FlowStrip({ flow }) {
  return (
    <div className="grid h-full min-h-48 place-items-center bg-panel-2 p-6">
      <ol className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-2 font-mono text-[11px]">
        {flow.map((n, i) => (
          <li key={n.label} className="flex items-center gap-1.5">
            {i > 0 && <span className="text-dim" aria-hidden>→</span>}
            <span className={`rounded-md border bg-ink px-2 py-1 ${nodeTone[n.kind]}`}>{n.label}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}

function ProjectCard({ project, featured }) {
  return (
    <article
      data-reveal
      className={`group relative overflow-hidden rounded-2xl border border-line bg-panel transition hover:border-dim ${
        featured ? 'lg:col-span-2 lg:grid lg:grid-cols-2' : ''
      }`}
    >
      <div className={`overflow-hidden border-b border-line ${featured ? 'lg:border-b-0 lg:border-r' : ''}`}>
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} interface`}
            loading="lazy"
            width="800"
            height="600"
            className="aspect-[4/3] h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <FlowStrip flow={project.flow} />
        )}
      </div>
      <div className="flex flex-col p-6 sm:p-8">
        <div className="mb-4 flex items-center justify-between gap-3">
          <p className="font-mono text-xs text-muted">{project.kicker}</p>
          <StatusBadge status={project.status} />
        </div>
        <h3 className="text-2xl font-semibold tracking-tight">
          <Link to={`/work/${project.slug}`} className="after:absolute after:inset-0">
            {project.title}
          </Link>
        </h3>
        <p className="mt-3 leading-relaxed text-muted">{project.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <li key={s} className="rounded-full border border-line px-2.5 py-1 text-xs text-muted">
              {s}
            </li>
          ))}
        </ul>
        <p className="mt-auto pt-6 text-sm font-medium text-signal">
          Read the case study <span className="inline-block transition group-hover:translate-x-1">→</span>
        </p>
      </div>
    </article>
  )
}

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeader
        eyebrow="Selected builds"
        title="Workflows I've designed, built and tested"
        intro="Each case study covers the problem, how the workflow runs, and how it handles bad input, failed API calls and edge cases."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} featured={i === 0} />
        ))}
      </div>
    </section>
  )
}
