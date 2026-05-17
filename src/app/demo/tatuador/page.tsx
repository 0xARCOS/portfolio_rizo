import DemoHeader from '@/components/demo/DemoHeader'
import TatuadorHero from '@/components/demo/tatuador/TatuadorHero'
import FlashGrid from '@/components/demo/tatuador/FlashGrid'
import BookingForm from '@/components/demo/tatuador/BookingForm'
import TatuadorAbout from '@/components/demo/tatuador/TatuadorAbout'

export const metadata = {
  title: 'Ink Canvas — Demo · RIZO',
}

export default function TatuadorDemo() {
  return (
    <main className="bg-void">
      <DemoHeader badgeLabel="Tatuador / Artista" badgeColor="bg-white" badgeTextColor="text-void" />
      <TatuadorHero />
      <FlashGrid />
      <BookingForm />
      <TatuadorAbout />
    </main>
  )
}
