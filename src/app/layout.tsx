import type { Metadata } from 'next'
import { Space_Grotesk, DM_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
})

export const metadata: Metadata = {
  title: 'RIZO — Catálogo de Portafolios Urbanos',
  description: 'Portafolios que venden antes de hablar. Formatos para fotógrafos, diseñadores y artistas callejeros.',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${dmMono.variable}`}>
      <body className="bg-void text-chalk antialiased">
        {children}
      </body>
    </html>
  )
}
