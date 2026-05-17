import Button from '@/components/ui/Button'

export default function FotoAbout() {
  return (
    <section className="bg-pitch border-t border-b border-ash py-16 px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <blockquote className="text-2xl md:text-3xl font-light text-white italic leading-snug">
          &ldquo;El silencio de la calle habla más que cualquier estudio.&rdquo;
        </blockquote>

        <div>
          <p className="text-ghost text-sm leading-relaxed font-mono mb-6">
            Fotógrafo documental basado en Madrid. Trabajo principalmente en condiciones de baja
            luz, capturando la tensión entre lo humano y lo urbano. Disponible para proyectos
            editoriales, colaboraciones de marca y exposiciones.
          </p>
          <div className="flex gap-4 mb-6">
            {['Instagram', 'Behance', 'VSCO'].map((link) => (
              <span
                key={link}
                className="text-volt hover:underline text-xs font-mono cursor-pointer"
              >
                {link} →
              </span>
            ))}
          </div>
          <Button variant="primary">Contactar</Button>
        </div>
      </div>
    </section>
  )
}
