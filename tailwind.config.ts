import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        void:        '#080808',
        pitch:       '#111111',
        zinc:        '#1A1A1A',
        ash:         '#2E2E2E',
        smoke:       '#6B6B6B',
        ghost:       '#A0A0A0',
        chalk:       '#E8E8E8',
        volt:        '#F5E642',
        'volt-dim':  '#C4B82E',
        ember:       '#FF3D00',
        'ember-dim': '#CC3100',
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-dm-mono)', 'monospace'],
      },
      fontSize: {
        label:   ['0.65rem', { lineHeight: '1rem', letterSpacing: '0.15em' }],
        display: ['clamp(3rem, 8vw, 7rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        hero:    ['clamp(2rem, 5vw, 4.5rem)', { lineHeight: '1.0', letterSpacing: '-0.02em' }],
      },
      boxShadow: {
        volt:      '4px 4px 0px #F5E642',
        ember:     '4px 4px 0px #FF3D00',
        'volt-lg': '8px 8px 0px #F5E642',
      },
      gridTemplateColumns: {
        catalog:     'repeat(auto-fill, minmax(320px, 1fr))',
        'foto-hero': '2fr 1fr 1fr',
        flash:       'repeat(auto-fill, minmax(180px, 1fr))',
      },
      animation: {
        marquee:      'marquee 25s linear infinite',
        'pulse-volt': 'pulse-volt 2s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-volt': {
          '0%, 100%': { boxShadow: '0 0 0px #F5E642' },
          '50%':      { boxShadow: '0 0 20px #F5E642' },
        },
      },
    },
  },
  plugins: [],
}

export default config
