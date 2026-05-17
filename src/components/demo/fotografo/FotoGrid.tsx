import SectionLabel from '@/components/ui/SectionLabel'

const CELLS = [
  { cls: 'bg-zinc row-span-2', h: '' },
  { cls: 'bg-ash', h: 'h-48' },
  { cls: 'bg-[#222]', h: 'h-48' },
  { cls: 'bg-[#1c1c1c] col-span-2', h: 'h-56' },
  { cls: 'bg-zinc row-span-2', h: '' },
  { cls: 'bg-ash', h: 'h-48' },
  { cls: 'bg-[#222]', h: 'h-48' },
  { cls: 'bg-zinc', h: 'h-40' },
  { cls: 'bg-ash col-span-2', h: 'h-40' },
]

export default function FotoGrid() {
  return (
    <section className="bg-void px-6 md:px-12 py-16">
      <SectionLabel>Trabajos Recientes</SectionLabel>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-1.5 auto-rows-[200px]">
        {CELLS.map((cell, i) => (
          <div
            key={i}
            className={`${cell.cls} hover:opacity-70 transition-opacity cursor-pointer relative overflow-hidden group`}
          >
            {i === 3 && (
              <span className="absolute bottom-2 left-3 text-volt text-label font-mono opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                Calle Mayor, 03:14 AM
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
