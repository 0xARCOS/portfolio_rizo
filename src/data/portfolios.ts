export type ClientType = 'fotografo' | 'disenador' | 'tatuador'

export type PreviewBlock = {
  type: 'rect' | 'text' | 'line'
  classes: string
  content?: string
}

export type PreviewConfig = {
  bgClass: string
  layout: 'grid-3col' | 'brand-hero' | 'flash-grid'
  blocks: PreviewBlock[]
}

export type PortfolioFormat = {
  id: string
  formatName: string
  clientType: ClientType
  clientLabel: string
  tagline: string
  description: string
  timeEstimate: string
  features: string[]
  badgeColor: string
  badgeTextColor: string
  previewConfig: PreviewConfig
}

export const portfolioFormats: PortfolioFormat[] = [
  {
    id: 'fotografo',
    formatName: 'Flash Gallery',
    clientType: 'fotografo',
    clientLabel: 'Fotógrafo Urbano',
    tagline: 'Imágenes que dominan la pantalla.',
    description:
      'Portfolio editorial oscuro con grid de fotos de alto impacto. Diseñado para fotógrafos que viven en la calle y necesitan que su trabajo hable por sí solo.',
    timeEstimate: '72 hrs entrega',
    features: [
      'Grid editorial responsive 3 columnas',
      'Hero de pantalla completa',
      'Sección about minimalista',
      'Formulario de contacto',
    ],
    badgeColor: 'bg-volt',
    badgeTextColor: 'text-void',
    previewConfig: {
      bgClass: 'bg-void',
      layout: 'grid-3col',
      blocks: [
        { type: 'rect', classes: 'col-span-2 row-span-2 bg-zinc' },
        { type: 'rect', classes: 'bg-ash' },
        { type: 'rect', classes: 'bg-[#222]' },
        { type: 'rect', classes: 'bg-ash' },
        { type: 'rect', classes: 'bg-zinc' },
        { type: 'rect', classes: 'bg-[#222]' },
        { type: 'line', classes: 'col-span-3 h-px bg-volt' },
      ],
    },
  },
  {
    id: 'disenador',
    formatName: 'Print Brand',
    clientType: 'disenador',
    clientLabel: 'Diseñador Gráfico',
    tagline: 'Tu marca, brutal y sin disculpas.',
    description:
      'Showcase de branding con tipografía grande, paletas de color y proyectos en detalle. Para diseñadores que venden identidad visual antes de decir hola.',
    timeEstimate: '96 hrs entrega',
    features: [
      'Hero tipográfico oversized',
      'Paleta de color interactiva',
      'Showcases de proyecto fullwidth',
      'Grid de logos y piezas',
    ],
    badgeColor: 'bg-ember',
    badgeTextColor: 'text-white',
    previewConfig: {
      bgClass: 'bg-pitch',
      layout: 'brand-hero',
      blocks: [
        { type: 'text',  classes: 'text-4xl font-black text-white leading-none tracking-tighter', content: 'BRAND' },
        { type: 'line',  classes: 'h-1 bg-ember w-1/3 my-2' },
        { type: 'rect',  classes: 'h-7 bg-zinc w-full mt-2' },
        { type: 'rect',  classes: 'h-7 bg-ash w-3/4 mt-1' },
        { type: 'rect',  classes: 'h-14 bg-ember w-full mt-3 opacity-80' },
      ],
    },
  },
  {
    id: 'tatuador',
    formatName: 'Ink Canvas',
    clientType: 'tatuador',
    clientLabel: 'Tatuador / Artista Callejero',
    tagline: 'Flash art. Sin filtros. Con reservas.',
    description:
      'Portfolio oscuro y crudo con galería de flash, secciones de estilo y formulario de reserva directo. Para artistas del tatuaje que construyen clientela en serio.',
    timeEstimate: '48 hrs entrega',
    features: [
      'Galería flash en grid denso',
      'Sección de estilos con descripción',
      'Formulario de reserva integrado',
      'Bio de artista estilo editorial',
    ],
    badgeColor: 'bg-white',
    badgeTextColor: 'text-void',
    previewConfig: {
      bgClass: 'bg-void',
      layout: 'flash-grid',
      blocks: [
        { type: 'rect', classes: 'bg-zinc aspect-square flex items-center justify-center' },
        { type: 'rect', classes: 'bg-ash aspect-square flex items-center justify-center' },
        { type: 'rect', classes: 'bg-zinc aspect-square flex items-center justify-center' },
        { type: 'rect', classes: 'bg-ash aspect-square flex items-center justify-center' },
        { type: 'rect', classes: 'bg-zinc aspect-square flex items-center justify-center' },
        { type: 'rect', classes: 'bg-ash aspect-square flex items-center justify-center' },
        { type: 'line', classes: 'col-span-3 h-px bg-white opacity-20 mt-1' },
        { type: 'text', classes: 'col-span-3 text-xs font-mono text-ghost mt-1 tracking-widest uppercase', content: 'Reservar sesión →' },
      ],
    },
  },
]
