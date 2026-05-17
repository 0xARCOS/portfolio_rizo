import Link from 'next/link'
import { PortfolioFormat, PreviewBlock } from '@/data/portfolios'
import ClientBadge from './ClientBadge'

function PreviewBlockEl({ block }: { block: PreviewBlock }) {
  if (block.type === 'text') {
    return <div className={block.classes}>{block.content}</div>
  }
  if (block.type === 'line') {
    return <div className={block.classes} />
  }
  return <div className={block.classes} />
}

function PreviewArea({ config }: { config: PortfolioFormat['previewConfig'] }) {
  const isGrid = config.layout === 'grid-3col' || config.layout === 'flash-grid'

  return (
    <div className={`h-48 overflow-hidden p-3 ${config.bgClass} ${isGrid ? 'grid grid-cols-3 gap-1.5 content-start' : 'flex flex-col justify-start'}`}>
      {config.blocks.map((block, i) => (
        <PreviewBlockEl key={i} block={block} />
      ))}
    </div>
  )
}

export default function CatalogCard({ format }: { format: PortfolioFormat }) {
  return (
    <div className="group relative bg-pitch border border-ash hover:border-volt hover:shadow-volt transition-all duration-200 rounded flex flex-col">
      <PreviewArea config={format.previewConfig} />

      <div className="flex flex-col flex-1 px-5 pb-5">
        <div className="pt-4">
          <ClientBadge
            label={format.clientLabel}
            bgColor={format.badgeColor}
            textColor={format.badgeTextColor}
          />
        </div>

        <h2 className="text-2xl font-bold text-white mt-3">{format.formatName}</h2>
        <p className="text-sm text-ghost mt-1 leading-relaxed">{format.tagline}</p>

        <div className="border-t border-ash mt-4 pt-3">
          <ul className="space-y-1">
            {format.features.map((f) => (
              <li key={f} className="flex gap-2 text-xs font-mono text-smoke">
                <span className="text-ash">—</span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-ash mt-4 pt-3 flex justify-between items-center">
          <span className="text-xs font-mono text-ghost">{format.timeEstimate}</span>
          <Link
            href={`/demo/${format.id}`}
            className="border border-volt text-volt hover:bg-volt hover:text-void transition-colors rounded-sm px-3 py-1.5 text-xs font-mono"
          >
            Ver Demo →
          </Link>
        </div>
      </div>
    </div>
  )
}
