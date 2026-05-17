import DemoHeader from '@/components/demo/DemoHeader'
import DisenadorHero from '@/components/demo/disenador/DisenadorHero'
import BrandPalette from '@/components/demo/disenador/BrandPalette'
import ProjectShowcase from '@/components/demo/disenador/ProjectShowcase'
import DisenadorAbout from '@/components/demo/disenador/DisenadorAbout'

export const metadata = {
  title: 'Print Brand — Demo · RIZO',
}

export default function DisenadorDemo() {
  return (
    <main className="bg-void">
      <DemoHeader badgeLabel="Diseñador Gráfico" badgeColor="bg-ember" badgeTextColor="text-white" />
      <DisenadorHero />
      <BrandPalette />
      <ProjectShowcase />
      <DisenadorAbout />
    </main>
  )
}
