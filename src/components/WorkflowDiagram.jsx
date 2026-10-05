import { Fragment } from 'react'

const kinds = {
  trigger: { label: 'Trigger', dot: 'bg-fg', text: 'text-fg' },
  ai: { label: 'AI step', dot: 'bg-violet', text: 'text-violet' },
  logic: { label: 'Logic', dot: 'bg-amber', text: 'text-amber' },
  data: { label: 'Data', dot: 'bg-sky', text: 'text-sky' },
  action: { label: 'Action', dot: 'bg-signal', text: 'text-signal' },
}

function Connector({ index }) {
  const delay = { animationDelay: `${index * 0.4}s` }
  return (
    <li className="relative mx-auto h-6 w-px shrink-0 bg-line md:mx-0 md:h-px md:w-5 md:self-center" aria-hidden>
      <span className="packet-y absolute -left-[2.5px] size-1.5 rounded-full bg-signal md:hidden" style={delay} />
      <span className="packet absolute -top-[2.5px] hidden size-1.5 rounded-full bg-signal md:block" style={delay} />
    </li>
  )
}

function Node({ node, step }) {
  const k = kinds[node.kind] ?? kinds.action
  return (
    <li className="w-full rounded-xl border border-line bg-panel p-4 md:w-auto md:min-w-32 md:flex-1 md:basis-0 md:p-3.5">
      <div className="mb-2 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider">
        <span className={`flex items-center gap-1.5 ${k.text}`}>
          <span className={`size-1.5 rounded-full ${k.dot}`} aria-hidden />
          {k.label}
        </span>
        <span className="text-dim">{String(step).padStart(2, '0')}</span>
      </div>
      <p className="font-medium leading-snug">{node.label}</p>
      {node.note && <p className="mt-1 text-sm text-muted">{node.note}</p>}
      {node.branches && (
        <ul className="mt-2 space-y-1 border-t border-line pt-2 font-mono text-[11px] text-muted">
          {node.branches.map((b) => (
            <li key={b}>↳ {b}</li>
          ))}
        </ul>
      )}
    </li>
  )
}

export default function WorkflowDiagram({ flow, title }) {
  return (
    <figure className="rounded-2xl border border-line bg-ink p-4 sm:p-6">
      <figcaption className="mb-4 flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-dim">
        <span>{title}</span>
        <span className="flex flex-wrap gap-3">
          {Object.entries(kinds).map(([key, k]) => (
            <span key={key} className="flex items-center gap-1.5">
              <span className={`size-1.5 rounded-full ${k.dot}`} aria-hidden />
              {k.label}
            </span>
          ))}
        </span>
      </figcaption>
      <div className="overflow-x-auto pb-2">
        <ol className="flex flex-col md:flex-row md:items-stretch">
          {flow.map((node, i) => (
            <Fragment key={node.label}>
              {i > 0 && <Connector index={i} />}
              <Node node={node} step={i + 1} />
            </Fragment>
          ))}
        </ol>
      </div>
    </figure>
  )
}
