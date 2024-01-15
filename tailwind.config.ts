import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import headlessUi from '@headlessui/tailwindcss'
import heroPatterns from 'tailwind-heropatterns'

export default <Partial<Config>>{
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      // fontFamily: {
      //   sans: ['DM Sans', 'DM Sans fallback', ...defaultTheme.fontFamily.sans],
      // },
      colors: {
        green: {
          50: '#EFFDF5',
          100: '#D9FBE8',
          200: '#B3F5D1',
          300: '#75EDAE',
          400: '#00DC82',
          500: '#00C16A',
          600: '#00A155',
          700: '#007F45',
          800: '#016538',
          900: '#0A5331',
          950: '#052e16',
        },
        brand: {
          DEFAULT: '#002894',
          50: '#edf5fa',
          100: '#dcebf5',
          200: '#accbe6',
          300: '#7fa8d4',
          400: '#3667b5',
          500: '#002894',
          600: '#002185',
          700: '#001a6e',
          800: '#001359',
          900: '#000d42',
          950: '#00072b',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        field: 'rgba(10, 10, 10, 0.1) 0px 1px 2px 0px inset',
        px: '0 0 0 1px rgba(0, 0, 0, 0.5)',
      },
      fontFamily: {
        sans: ['Inter var', 'Inter', ...defaultTheme.fontFamily.sans],
        serif: [...defaultTheme.fontFamily.serif],
        display: ['Bungee', 'Pica'],
        mono: ['Space Mono', 'Fira Code', ...defaultTheme.fontFamily.mono],
        mockup: ['Balsamiq Sans', 'cursive'],
        proto: [
          'Flow Circular',
          'Redacted Script',
          'Flow Block',
          'Blokk Neue',
          'Blokk',
          'Flow Rounded',
          'cursive',
        ],
      },
      fontSize: {
        '2xs': ['0.625rem', '0.875rem'],
      },
      maxWidth: {
        '8xl': '90rem',
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'wiggle': 'wiggle 1s infinite',
        'flash-code': 'flash-code 1s forwards',
        'flash-code-slow': 'flash-code 2s forwards',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'flash-code': {
          '0%': { backgroundColor: 'rgb(125 211 252 / 0.1)' },
          '100%': { backgroundColor: 'transparent' },
        },
        'wiggle': {
          '0%, 100%': {
            transform: 'scale(1.2) rotate(7deg)',
          },
          '50%': {
            transform: 'scale(0.8) rotate(-7deg)',
          },
        },
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'in-quad': 'cubic-bezier(.55, .085, .68, .53)',
        'out-quad': 'cubic-bezier(.25, .46, .45, .94)',
      },
    },
  },
  plugins: [
    headlessUi,
    heroPatterns({
      patterns: [],
      // The foreground colors of the pattern
      colors: {
        'default': '#9C92AC',
        'blue-dark': '#000044', // also works with rgb(0,0,205)
      },

      // The foreground opacity
      opacity: {
        default: '0.4',
        100: '1.0',
      },
    }),
  ],
}
