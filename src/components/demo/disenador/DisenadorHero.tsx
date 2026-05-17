const TAGS = ['Identidad Visual', 'Editorial', 'Packaging', 'Motion']

export default function DisenadorHero() {
  return (
    <section className="bg-pitch min-h-[70vh] flex flex-col justify-center px-6 md:px-12 py-20 relative overflow-hidden">
      {/* Year rotated */}
      <span className="hidden md:block absolute right-12 top-1/2 -translate-y-1/2 writing-mode-vertical text-ghost font-mono text-xs tracking-widest opacity-40">
        2025
      </span>

      <div className="max-w-5xl">
        <h1 className="text-display font-black text-white tracking-tighter leading-none">
          ELENA
          <br />
          <span className="inline">MORA </span>
          <span className="inline-block bg-ember px-3 text-white align-baseline">DISEÑO</span>
        </h1>

        <div className="flex gap-2 flex-wrap mt-8">
          {TAGS.map((tag) => (
            <span
              key={tag}
              className="border border-ash text-ghost font-mono text-xs px-3 py-1 rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
