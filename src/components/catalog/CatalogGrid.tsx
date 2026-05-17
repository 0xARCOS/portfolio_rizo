import { portfolioFormats } from '@/data/portfolios'
import CatalogCard from './CatalogCard'

export default function CatalogGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {portfolioFormats.map((format) => (
        <CatalogCard key={format.id} format={format} />
      ))}
    </div>
  )
}
