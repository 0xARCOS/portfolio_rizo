import Link from 'next/link'

type DemoHeaderProps = {
  badgeLabel: string
  badgeColor: string
  badgeTextColor: string
}

export default function DemoHeader({ badgeLabel, badgeColor, badgeTextColor }: DemoHeaderProps) {
  return (
    <nav className="bg-void border-b border-ash px-6 md:px-12 py-4 flex justify-between items-center sticky top-0 z-50">
      <Link
        href="/"
        className="text-ghost hover:text-volt font-mono text-sm transition-colors"
      >
        ← Volver al catálogo
      </Link>
      <div className="flex items-center gap-3">
        <span className="text-white font-black text-lg tracking-tighter">RIZO</span>
        <span className={`${badgeColor} ${badgeTextColor} text-label font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-sm`}>
          {badgeLabel}
        </span>
      </div>
    </nav>
  )
}
