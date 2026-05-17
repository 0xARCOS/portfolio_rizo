import SectionLabel from '@/components/ui/SectionLabel'

const SWATCHES = [
  { bg: 'bg-void border border-ash', hex: '#0A0A0A', text: 'text-white' },
  { bg: 'bg-ember',                  hex: '#FF3D00', text: 'text-white' },
  { bg: 'bg-volt',                   hex: '#F5E642', text: 'text-void' },
  { bg: 'bg-chalk',                  hex: '#E8E8E8', text: 'text-void' },
  { bg: 'bg-ash',                    hex: '#2E2E2E', text: 'text-white' },
]

const TYPE_SAMPLES = [
  { size: 'text-5xl', weight: 'font-black', label: 'Display / 700' },
  { size: 'text-2xl', weight: 'font-semibold', label: 'Heading / 600' },
  { size: 'text-base', weight: 'font-normal', label: 'Body / 400' },
  { size: 'text-xs font-mono', weight: 'font-normal', label: 'Mono / 400' },
]

export default function BrandPalette() {
  return (
    <section className="bg-void px-6 md:px-12 py-16">
      <SectionLabel>Sistema de Color</SectionLabel>

      <div className="flex gap-2 flex-wrap mb-12">
        {SWATCHES.map((s) => (
          <div key={s.hex} className={`${s.bg} w-24 h-24 md:w-32 md:h-32 rounded-sm flex flex-col justify-end p-3`}>
            <span className={`${s.text} text-xs font-mono`}>{s.hex}</span>
          </div>
        ))}
      </div>

      <SectionLabel>Sistema Tipográfico</SectionLabel>
      <div className="space-y-4 max-w-xl">
        {TYPE_SAMPLES.map((s) => (
          <div key={s.label} className="flex items-baseline gap-4">
            <span className={`${s.size} ${s.weight} text-white`}>Aa</span>
            <span className="text-smoke font-mono text-xs">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
