export default function StatusBadge({ status }) {
  const live = status === 'Live'
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[11px] ${
        live ? 'border-signal/40 text-signal' : 'border-line text-muted'
      }`}
    >
      <span className={`size-1.5 rounded-full ${live ? 'pulse-dot bg-signal' : 'bg-dim'}`} aria-hidden />
      {status}
    </span>
  )
}
