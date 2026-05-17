import Marquee from '@/components/ui/Marquee'
import SectionLabel from '@/components/ui/SectionLabel'
import CatalogGrid from '@/components/catalog/CatalogGrid'

const CLIENT_TYPES = ['Fotógrafo Urbano', 'Diseñador Gráfico', 'Tatuador / Artista']

export default function CatalogPage() {
  return (
    <main className="min-h-screen bg-void">
      {/* Header */}
      <header className="border-b border-ash px-6 md:px-12 lg:px-20 pt-16 pb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <h1 className="text-display font-black text-white tracking-tighter leading-none">
              RIZO
            </h1>
            <p className="text-xl md:text-2xl text-ghost font-light max-w-sm mt-3">
              Portafolios que venden antes de hablar.
            </p>
          </div>
          <div className="flex md:flex-col gap-2 flex-wrap">
            {CLIENT_TYPES.map((t) => (
              <span
                key={t}
                className="border border-ash text-smoke font-mono text-label px-3 py-1 rounded-sm whitespace-nowrap"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Marquee */}
      <Marquee />

      {/* Catalog */}
      <section className="px-6 md:px-12 lg:px-20 py-12">
        <SectionLabel>03 Formatos Disponibles</SectionLabel>
        <CatalogGrid />
      </section>

      {/* Footer */}
      <footer className="border-t border-ash mt-12 px-6 md:px-12 lg:px-20 py-10 bg-void">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <p className="text-2xl font-black text-white">RIZO</p>
            <p className="text-smoke text-sm font-mono mt-1">Portafolios urbanos a medida</p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-ghost text-sm mb-2">¿Listo para tu portafolio?</p>
            <a
              href="mailto:hola@rizo.studio"
              className="text-volt font-semibold hover:text-volt-dim transition-colors font-mono text-sm"
            >
              hola@rizo.studio →
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
