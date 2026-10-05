export default function SectionHeader({ eyebrow, title, intro }) {
  return (
    <div className="mb-12 max-w-2xl" data-reveal>
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-signal">{eyebrow}</p>
      <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">{title}</h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>}
    </div>
  )
}
