import defaultTheme from 'tailwindcss/defaultTheme'
import defaultColors from 'tailwindcss/colors'

import animate from 'tailwindcss-animate'
import heroPatterns from 'tailwind-heropatterns'

import type { Config } from 'tailwindcss'
import { colors as appColors } from './assets/design/tokens/colors'

const colors = { ...defaultColors, ...appColors }

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
      containers: {
        '2xs': '16rem', // 256px
      },
      colors: {
        brand: colors.toreaBay,

        green: colors.emerald,
        status: colors.palette,
        secondary: colors.tango,

        danger: colors.rose,
        error: colors.rose,
        warning: colors.amber,
        info: colors.sky,
        success: colors.emerald,

        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        angular: '#b52e31',
        react: '#00d8ff',
        vue: '#42b883',

        // secondary: {
        //   DEFAULT: 'hsl(var(--secondary))',
        //   foreground: 'hsl(var(--secondary-foreground))',
        // },
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
        document: '8.5 / 11',
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
        // sans: ['"DM Sans"', '"DM Sans fallback"', ...defaultTheme.fontFamily.sans],
        sans: ['"Inter var"', 'Inter', ...defaultTheme.fontFamily.sans],
        serif: [...defaultTheme.fontFamily.serif],
        // display: ['Bungee', 'Pica'],
        // cursive: ['Kalam', 'cursive'],
        handwriting: ['Kalam', 'cursive'],
        mono: ['"Monaspace Argon"', '"Space Mono"', '"Fira Code"', ...defaultTheme.fontFamily.mono],
        display: ['Oswald', 'sans-serif'],
        body: ['"Open Sans"', 'sans-serif'],
        mockup: ['"Balsamiq Sans"', 'cursive'],
        proto: [
          '"Flow Circular"',
          '"Redacted Script"',
          '"Flow Block"',
          '"Blokk Neue"',
          'Blokk',
          '"Flow Rounded"',
          'cursive',
        ],
        salesforce: ['"Salesforce Sans"', 'system-ui', 'sans-serif'],
        kalam: ['Kalam', 'system-ui', 'sans-serif'],
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
    animate,
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
