import Button from '@/components/ui/Button'

export default function DisenadorAbout() {
  return (
    <section className="bg-ember text-void py-16 px-6 md:px-12">
      <div className="max-w-4xl">
        <p className="text-label font-mono uppercase tracking-widest mb-4 opacity-60">Sobre mí</p>
        <h2 className="text-3xl md:text-4xl font-black leading-tight mb-8">
          Construyo marcas<br />que no piden permiso.
        </h2>
        <p className="text-void/70 text-sm font-mono leading-relaxed max-w-md mb-8">
          Diseñadora gráfica con 8 años trabajando con marcas independientes, sellos musicales y
          proyectos culturales en Madrid y Barcelona. Si tu marca necesita hablar alto, estoy disponible.
        </p>
        <Button variant="white">
          Hablemos
        </Button>
      </div>
    </section>
  )
}
