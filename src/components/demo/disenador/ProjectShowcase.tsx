const PROJECTS = [
  {
    num: '01',
    title: 'Identidad Nocturna',
    desc: 'Rebranding completo para club de jazz underground. Sistema visual basado en tipografía condensada y paleta monocromática rota.',
    accent: 'bg-ember',
    blocks: ['bg-ember h-full', 'bg-zinc h-3/4', 'bg-ash h-1/2'],
    reverse: false,
  },
  {
    num: '02',
    title: 'Packaging Crudo',
    desc: 'Diseño de packaging para cerveza artesanal. Estética industrial, etiquetas de corte recto, tipografía bold sin concesiones.',
    accent: 'bg-volt',
    blocks: ['bg-volt h-full opacity-80', 'bg-pitch h-3/4', 'bg-zinc h-1/2'],
    reverse: true,
  },
]

export default function ProjectShowcase() {
  return (
    <>
      {PROJECTS.map((p) => (
        <section key={p.num} className="bg-pitch border-t border-b border-ash py-16 md:py-20 px-6 md:px-12">
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${p.reverse ? 'md:[direction:rtl]' : ''}`}>
            <div className={p.reverse ? 'md:[direction:ltr]' : ''}>
              <span className="text-[6rem] font-black text-ash leading-none block">{p.num}</span>
              <h2 className="text-3xl font-bold text-white -mt-4">{p.title}</h2>
              <p className="text-ghost text-sm leading-relaxed mt-4 max-w-sm font-mono">{p.desc}</p>
            </div>
            <div className={`h-64 flex gap-2 ${p.reverse ? 'md:[direction:ltr]' : ''}`}>
              {p.blocks.map((b, i) => (
                <div key={i} className={`${b} flex-1 rounded-sm`} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
