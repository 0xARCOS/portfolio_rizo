import SectionLabel from '@/components/ui/SectionLabel'

const STYLES = [
  'Blackwork', 'Neo-traditional', 'Linework fino', 'Flash japonés', 'Dotwork', 'Lettering'
]

export default function TatuadorAbout() {
  return (
    <section className="bg-void border-t border-ash py-16 px-6 md:px-12">
      <SectionLabel>El Artista</SectionLabel>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <p className="text-ghost text-sm leading-relaxed">
            Llevo 10 años tatuando en Barcelona. Empecé en la escena underground antes de abrir mi propio
            estudio en el Raval. Me especializo en diseños de flash y piezas a medida con referencias en
            el arte tradicional japonés y el grabado europeo.
          </p>
          <p className="text-ghost text-sm leading-relaxed">
            Cada pieza es única. No repito diseños de flash una vez vendidos. Si buscas algo que dure
            y tenga carácter, estás en el lugar correcto.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-smoke font-mono text-label uppercase tracking-widest mb-2">Estilos</p>
          {STYLES.map((style) => (
            <span
              key={style}
              className="border border-ash px-4 py-3 font-mono text-sm text-chalk hover:border-white hover:text-white transition-colors cursor-default"
            >
              {style}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
