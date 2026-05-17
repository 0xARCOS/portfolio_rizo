export default function TatuadorHero() {
  return (
    <section className="bg-void min-h-screen flex flex-col justify-center relative overflow-hidden px-6 md:px-12">
      {/* Scattered dots texture */}
      {[
        'top-[10%] left-[15%]', 'top-[20%] left-[70%]', 'top-[35%] left-[85%]',
        'top-[60%] left-[8%]',  'top-[75%] left-[55%]', 'top-[15%] left-[45%]',
        'top-[50%] left-[30%]', 'top-[80%] left-[80%]', 'top-[5%]  left-[90%]',
        'top-[90%] left-[20%]',
      ].map((pos, i) => (
        <div key={i} className={`absolute ${pos} w-1 h-1 bg-white opacity-10 rounded-full`} />
      ))}

      <div className="relative z-10">
        <h1 className="text-display font-black text-white tracking-tighter leading-none">
          ALEX INK
        </h1>
        <p className="font-mono text-ghost text-xs tracking-[0.3em] uppercase mt-3">
          Blackwork · Neo-traditional · Flash
        </p>
        <div className="w-32 h-px bg-white opacity-30 my-6" />

        <div className="flex flex-col sm:flex-row gap-6">
          <div>
            <p className="text-smoke font-mono text-xs uppercase tracking-widest">Ubicación</p>
            <p className="text-chalk font-mono text-sm mt-1">Barcelona, ES</p>
          </div>
          <div>
            <p className="text-smoke font-mono text-xs uppercase tracking-widest">Estado</p>
            <p className="text-volt font-mono text-sm mt-1 animate-pulse-volt inline-block">
              ● Tomando Reservas
            </p>
          </div>
          <div>
            <p className="text-smoke font-mono text-xs uppercase tracking-widest">Próxima cita</p>
            <p className="text-chalk font-mono text-sm mt-1">~3 semanas</p>
          </div>
        </div>
      </div>
    </section>
  )
}
