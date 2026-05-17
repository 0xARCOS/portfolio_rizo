export default function FotoHero() {
  const cells = [
    'bg-zinc col-span-2 row-span-2',
    'bg-ash',
    'bg-[#222]',
    'bg-ash',
    'bg-zinc',
    'bg-[#1c1c1c]',
    'bg-ash col-span-2',
    'bg-zinc',
  ]

  return (
    <section className="relative min-h-screen bg-void overflow-hidden">
      {/* CSS grid simulating photo wall */}
      <div className="absolute inset-0 grid grid-cols-3 gap-1 opacity-60">
        {cells.map((cls, i) => (
          <div key={i} className={cls} />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end min-h-screen px-6 md:px-12 pb-20">
        <div className="w-16 h-1 bg-volt mb-6" />
        <p className="font-mono text-ghost text-xs tracking-[0.3em] uppercase mb-3">
          Fotografía urbana · Madrid
        </p>
        <h1 className="text-display font-black text-white tracking-tighter leading-none">
          MARCO<br />REYES
        </h1>
        <p className="text-ghost text-lg font-light mt-4 max-w-sm">
          Capturo lo que la ciudad olvida mostrar.
        </p>
      </div>
    </section>
  )
}
