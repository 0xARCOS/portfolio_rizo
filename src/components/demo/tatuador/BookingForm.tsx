'use client'

import { useState } from 'react'
import SectionLabel from '@/components/ui/SectionLabel'

const INPUT_CLS = 'bg-zinc border border-ash focus:border-volt outline-none text-white font-mono text-sm px-4 py-3 rounded-sm w-full transition-colors placeholder:text-smoke'

export default function BookingForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="bg-pitch border-t border-ash py-16 px-6 md:px-12">
      <SectionLabel>Reservar Sesión</SectionLabel>

      {sent ? (
        <div className="max-w-2xl py-12 flex flex-col items-start gap-4">
          <div className="w-12 h-1 bg-volt" />
          <p className="text-white text-xl font-semibold">Mensaje recibido.</p>
          <p className="text-ghost font-mono text-sm">Respondemos en menos de 24 horas.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 max-w-2xl">
          <input className={INPUT_CLS} type="text"  placeholder="Nombre" required />
          <input className={INPUT_CLS} type="email" placeholder="Email" required />
          <input className={INPUT_CLS} type="text"  placeholder="Tipo de tatuaje" />
          <input className={INPUT_CLS} type="text"  placeholder="Zona del cuerpo" />
          <input className={INPUT_CLS} type="text"  placeholder="Tamaño estimado (cm)" />
          <input className={INPUT_CLS} type="text"  placeholder="¿Tienes referencia?" />
          <textarea
            className={`${INPUT_CLS} md:col-span-2 resize-none`}
            rows={4}
            placeholder="Cuéntame tu idea..."
          />
          <div className="md:col-span-2 flex flex-col gap-2">
            <button
              type="submit"
              className="w-full md:w-auto bg-volt text-void font-bold px-8 py-3 hover:bg-volt-dim transition-colors rounded-sm font-mono uppercase tracking-wider text-sm"
            >
              Enviar solicitud
            </button>
            <p className="text-smoke font-mono text-xs">Respondemos en menos de 24 horas.</p>
          </div>
        </form>
      )}
    </section>
  )
}
