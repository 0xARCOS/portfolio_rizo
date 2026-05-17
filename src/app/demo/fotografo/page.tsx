import DemoHeader from '@/components/demo/DemoHeader'
import FotoHero from '@/components/demo/fotografo/FotoHero'
import FotoGrid from '@/components/demo/fotografo/FotoGrid'
import FotoAbout from '@/components/demo/fotografo/FotoAbout'

export const metadata = {
  title: 'Flash Gallery — Demo · RIZO',
}

export default function FotografoDemo() {
  return (
    <main className="bg-void">
      <DemoHeader badgeLabel="Fotógrafo Urbano" badgeColor="bg-volt" badgeTextColor="text-void" />
      <FotoHero />
      <FotoGrid />
      <FotoAbout />
    </main>
  )
}
