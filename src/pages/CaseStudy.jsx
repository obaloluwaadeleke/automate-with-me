import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProject, projects } from '../data/projects.js'
import { mailto, profile } from '../data/site.js'
import WorkflowDiagram from '../components/WorkflowDiagram.jsx'
import StatusBadge from '../components/StatusBadge.jsx'
import NotFound from './NotFound.jsx'

function Block({ label, children }) {
  return (
    <section className="grid gap-4 border-t border-line py-10 md:grid-cols-[12rem_1fr] md:gap-10" data-reveal>
      <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-signal">{label}</h2>
      <div className="text-lg leading-relaxed text-muted">{children}</div>
    </section>
  )
}

function Bullets({ items, marker = '→' }) {
  return (
    <ul className="space-y-3">
      {items.map((b) => (
        <li key={b} className="grid grid-cols-[1.25rem_1fr]">
          <span className="text-dim" aria-hidden>{marker}</span>
          <span>{b}</span>
        </li>
      ))}
    </ul>
  )
}

export default function CaseStudy() {
  const { slug } = useParams()
  const project = getProject(slug)

  useEffect(() => {
    if (project) document.title = `${project.title}: ${project.kicker} | ${profile.name}`
  }, [project])

  if (!project) return <NotFound />

  const index = projects.indexOf(project)
  const next = projects[(index + 1) % projects.length]

  return (
    <article className="mx-auto max-w-6xl px-4 pt-28 pb-20 sm:px-6 sm:pt-36">
      <Link to="/#work" className="font-mono text-sm text-muted hover:text-fg">
        ← All builds
      </Link>

      <header className="mt-8 max-w-3xl">
        <div className="flex flex-wrap items-center gap-3">
          <p className="font-mono text-xs text-muted">{project.kicker}</p>
          <StatusBadge status={project.status} />
        </div>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">{project.title}</h1>
        <p className="mt-5 text-xl leading-relaxed text-muted">{project.summary}</p>
        {(project.links.live || project.links.code) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.live && (
              <a href={project.links.live} target="_blank" rel="noreferrer" className="rounded-full bg-signal px-5 py-2.5 font-medium text-ink hover:brightness-110">
                Open live app ↗
              </a>
            )}
            {project.links.code && (
              <a href={project.links.code} target="_blank" rel="noreferrer" className="rounded-full border border-line px-5 py-2.5 font-medium hover:border-muted">
                View code ↗
              </a>
            )}
          </div>
        )}
      </header>

      <div className="mt-14">
        <WorkflowDiagram flow={project.flow} title={`${project.slug}.workflow`} />
      </div>

      {project.image && (
        <img
          src={project.image}
          alt={`${project.title} interface`}
          width="800"
          height="600"
          className="mt-8 w-full rounded-2xl border border-line"
          loading="lazy"
        />
      )}

      <div className="mt-16">
        <Block label="The problem">
          <p>{project.problem}</p>
        </Block>
        <Block label="What I built">
          <Bullets items={project.built} />
        </Block>
        <Block label="How it handles failure">
          <Bullets items={project.reliability} marker="✓" />
        </Block>
        <Block label="Outcome">
          <p className="text-fg">{project.outcome}</p>
        </Block>
        <Block label="Stack">
          <ul className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <li key={s} className="rounded-full border border-line px-3 py-1 text-sm">{s}</li>
            ))}
          </ul>
        </Block>
      </div>

      <footer className="mt-10 grid gap-4 md:grid-cols-2">
        <a href={mailto(`Something like ${project.title}`)} className="rounded-2xl border border-line bg-panel p-7 transition hover:border-dim">
          <p className="font-mono text-xs text-muted">Want something similar?</p>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-signal">Let's talk about your workflow →</p>
        </a>
        {next !== project && (
          <Link to={`/work/${next.slug}`} className="rounded-2xl border border-line bg-panel p-7 transition hover:border-dim">
            <p className="font-mono text-xs text-muted">Next build</p>
            <p className="mt-2 text-2xl font-semibold tracking-tight">{next.title} →</p>
          </Link>
        )}
      </footer>
    </article>
  )
}
