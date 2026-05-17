const CONTENT = 'FLASH GALLERY · PRINT BRAND · INK CANVAS · PORTAFOLIOS URBANOS · '

export default function Marquee() {
  return (
    <div className="overflow-hidden bg-volt py-2">
      <div className="flex animate-marquee whitespace-nowrap">
        {[1, 2].map((i) => (
          <span key={i} className="text-void font-mono text-label tracking-widest uppercase px-8 font-semibold">
            {CONTENT}
          </span>
        ))}
      </div>
    </div>
  )
}
