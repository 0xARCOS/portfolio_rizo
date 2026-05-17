import SectionLabel from '@/components/ui/SectionLabel'

const SYMBOLS = ['✦', '◆', '▲', '⊕', '※', '⋈', '✺', '◈', '⬡', '✧', '◉', '⬢']
const SOLD_INDICES = [2, 5, 9]

export default function FlashGrid() {
  return (
    <section className="bg-void px-4 md:px-8 py-16">
      <div className="flex justify-between items-center px-2 md:px-4 mb-6">
        <SectionLabel>Flash Disponible</SectionLabel>
        <span className="text-ghost font-mono text-xs -mt-6">24 diseños</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px bg-ash">
        {SYMBOLS.map((sym, i) => {
          const sold = SOLD_INDICES.includes(i)
          return (
            <div
              key={i}
              className={`${sold ? 'bg-zinc' : 'bg-void'} aspect-square flex items-center justify-center hover:bg-zinc transition-colors cursor-pointer relative group`}
            >
              <span className={`text-4xl ${sold ? 'opacity-20' : 'opacity-25'} text-white select-none`}>
                {sym}
              </span>
              {sold && (
                <span className="absolute inset-0 flex items-end justify-start p-2">
                  <span className="text-ember text-label font-mono uppercase tracking-widest">Vendido</span>
                </span>
              )}
              {!sold && (
                <span className="absolute inset-0 flex items-end justify-start p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-label font-mono">Ver precio →</span>
                </span>
              )}
            </div>
          )
        })}
      </div>

      <div className="border border-ash rounded p-4 mt-4 flex flex-col sm:flex-row justify-between gap-3 mx-px">
        <span className="font-mono text-sm text-ghost">Flash pequeño: desde 80€</span>
        <span className="font-mono text-sm text-ghost">Flash mediano: desde 150€</span>
        <span className="font-mono text-sm text-ghost">Flash grande: desde 250€</span>
      </div>
    </section>
  )
}
