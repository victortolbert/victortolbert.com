const defaultTheme = require('tailwindcss/defaultTheme')
const tailWindColors = require('tailwindcss/colors')

const angelArmiesColors = require('./resources/config/angel_armies/colors')
const boosterColors = require('./resources/config/booster/colors')
const defaultColors = require('./resources/config/__DEFAULT__/colors')
const emaColors = require('./resources/config/ema/colors')
const gaSpsColors = require('./resources/config/ga_sps_org/colors')
const promiseServesColors = require('./resources/config/promise_serves/colors')

const colors = {
  ...angelArmiesColors,
  ...boosterColors,
  ...defaultColors,
  ...emaColors,
  ...gaSpsColors,
  ...promiseServesColors,
  ...tailWindColors,
}

module.exports = {
  theme: {
    dark: 'class',
    extend: {
      aspectRatio: {
        17: '17',
        21: '21',
        22: '22',
        33: '33',
        34: '34',
        74: '74',
        76: '76',
        78: '78',
        105: '105',
        135: '135',
        205: '205',
      },
      boxShadow: {
        tag: '3px 3px 0 #004085',
        field: 'rgba(10, 10, 10, 0.1) 0px 1px 2px 0px inset',
      },
      fontSize: {
        '2xs': '.625rem', // 10px
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        display: ['Pica'],
        mono: [
          'Roboto Mono',
          'Cousine',
          'Input Mono',
          ...defaultTheme.fontFamily.mono,
        ],
        cursive: ['Balsamiq Sans', 'cursive'],
        proto: [
          'Redacted Script',
          '"Flow Block"',
          '"Blokk Neue"',
          'Blokk',
          '"Flow Circular"',
          '"Flow Rounded"',
        ],
        roboto: [
          'Roboto',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      colors: {
        // primary: colors.burgundy,
        // primary: colors.blueGray,
        // primary: colors.jacarta,
        // primary: colors.studio,
        // primary: colors.paprika,
        // primary: colors.emerald,
        // primary: colors.oliveGreen,
        // primary: colors['flame-pea'],
        // primary: colors['regal-blue'],
        // primary: 'var(--color-primary)',

        // secondary: colors['silver-chalice'],
        // secondary: colors.coolGray,
        // secondary: colors['clay-creek'],
        // secondary: colors['gold-tips'],
        // secondary: colors['tory-blue'],
        // secondary: colors['cornflower-blue'],
        // secondary: colors.mineShaft,
        // secondary: colors.deepTeal,
        // secondary: colors['chathams-blue'],
        // secondary: 'var(--color-secondary)',

        // tertiary: colors['hokey-pokey'],
        // tertiary: colors.trueGray,
        // tertiary: colors.mineShaft,
        // tertiary: colors['deep-sea'],
        // tertiary: colors['deep-sea'],
        // tertiary: colors['picton-blue'],
        // tertiary: colors['yellow-orange'],
        // tertiary: colors.candlelight,
        // tertiary: colors.peachSchnapps,
        // tertiary: 'var(--color-tertiary)',

        primary: {
          DEFAULT: 'var(--color-primary)',
          50: 'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
          900: 'var(--color-primary-900)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          50: 'var(--color-secondary-50)',
          100: 'var(--color-secondary-100)',
          200: 'var(--color-secondary-200)',
          300: 'var(--color-secondary-300)',
          400: 'var(--color-secondary-400)',
          500: 'var(--color-secondary-500)',
          600: 'var(--color-secondary-600)',
          700: 'var(--color-secondary-700)',
          800: 'var(--color-secondary-800)',
          900: 'var(--color-secondary-900)',
        },
        tertiary: {
          DEFAULT: 'var(--color-tertiary)',
          50: 'var(--color-tertiary-50)',
          100: 'var(--color-tertiary-100)',
          200: 'var(--color-tertiary-200)',
          300: 'var(--color-tertiary-300)',
          400: 'var(--color-tertiary-400)',
          500: 'var(--color-tertiary-500)',
          600: 'var(--color-tertiary-600)',
          700: 'var(--color-tertiary-700)',
          800: 'var(--color-tertiary-800)',
          900: 'var(--color-tertiary-900)',
        },

        orange: colors.amber,
        teal: colors.teal,

        rose: colors.rose,
        lime: colors.lime,
        'light-blue': colors.lightBlue,

        // danger: 'var(--color-danger)',
        // warning: 'var(--color-warning)',
        // success: 'var(--color-success)',
        // info: 'var(--color-info)',

        danger: colors.monza,
        warning: colors['sea-buckthorn'],
        success: colors.malachite,
        info: colors.scooter,

        email: 'var(--color-emailer)',
        emailer: 'var(--color-emailer)',
        sms: 'var(--color-sms)',
        copy: 'var(--color-copy)',
        brand: '#1B2A60',
        'booster-blue': '#003E7E',
        'booster-red': '#B3282D',
        bootstrap: '#7952B3',
        buefy: '#7957D5',
        bulma: '#00D1B2',
        codeigniter: '#EE4323',
        codepen: '#000000',
        ema: '#202d56',
        facebook: '#3b5998',
        github: '#181717',
        instagram: '#E4405F',
        laravel: '#FF2D20',
        linkedin: '#0077b5',
        php: '#777BB4',
        promiseserves: '#95ba3d',
        ruby: '#CC342D',
        twitter: '#1da1f2',
        vue: '#4FC08D',
        lynch: '#71809d',
        zumthor: '#E3ECFF',
        'dusty-gray': '#979797',
        trout: '#494e61',
        mineshaft: '#212121',
        'catskill-white': '#F6F8FB',
        'east-bay': '#3E5786',
        'dodger-blue': '#367cff',
        'polo-blue': '#88a2d2',
        'link-water': '#CED5F1',
        'temperture-01': '#3eff00',
        'temperture-02': '#b0ff00',
        'temperture-03': '#FFfa00',
        'temperture-04': '#FFdc00',
        'temperture-05': '#FFbe00',
        'temperture-06': '#FFa000',
        'temperture-07': '#FF8200',
        'temperture-08': '#FF6400',
        'temperture-09': '#FF4600',
        'temperture-10': '#FF2800',
        nuxt: {
          gray: '#243746',
          lightgreen: '#41B38A',
          green: '#158876',
        },
        main: {
          DEFAULT: colors.gray[700],
          dark: '#ffffff',
        },
        // primary: {
        //   DEFAULT: '#1fb6ff',
        //   dark: '#ffffff',
        // },
        highlight: {
          DEFAULT: colors.red[700],
          dark: colors.violet[800],
        },
        'highlight-background': {
          DEFAULT: colors.yellow[400],
          dark: '#1fb6ff',
        },
      },
      fill: theme => ({
        'nuxt-gray': theme('colors.nuxt.gray'),
        'nuxt-lightgreen': theme('colors.nuxt.lightgreen'),
        'nuxt-green': theme('colors.nuxt.green'),
      }),
      stroke: theme => ({
        'nuxt-gray': theme('colors.nuxt.gray'),
        'nuxt-lightgreen': theme('colors.nuxt.lightgreen'),
        'nuxt-green': theme('colors.nuxt.green'),
      }),
      animation: {
        wiggle: 'wiggle 1s infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'scale(1.2) rotate(7deg)',
          },
          '50%': {
            transform: 'scale(0.8) rotate(-7deg)',
          },
        },
      },
      spacing: {
        px: '1px',
        0: '0',
        1: '0.25rem', // 3px
        2: '0.5rem', // 6px
        3: '0.75rem', // 12px
        4: '1rem', // 16px
        5: '1.25rem', // 20px
        6: '1.5rem', // 24px
        8: '2rem', // 32px
        9: '2.25rem', // 36px
        10: '2.5rem', // 40px
        12: '3rem', // 48px
        14: '3.5rem', // 56px
        15: '3.75rem', // 60px
        16: '4rem', // 64px
        17: '4.25rem', // 68px
        18: '4.5rem', // 72px
        20: '5rem', // 80px
        22: '5.5rem', // 88px
        24: '6rem', // 96px
        28: '7rem', // 112px
        30: '7.5rem', // 120px
        32: '8rem', // 128px
        34: '8.5rem', // 136px
        40: '10rem', // 160px
        44: '11rem', // 176px
        48: '12rem', // 192px
        49: '12.25rem', // 196px
        56: '14rem', // 224px
        60: '15rem', // 240px
        64: '16rem', // 256px
        72: '18rem', // 288px
        76: '19rem', // 304px
        79: '19.75rem', // 316px
        84: '21rem', // 336px
        88: '22rem', // 352px
        94: '23.5rem', // 376px
        95: '23.75rem', // 380px
        96: '24rem', // 384px
        104: '26rem', // 416px
        128: '32rem', // 512px
        136: '34rem', // 554px
        148: '37rem', // 592px
        152: '38rem', // 608px
        160: '40rem', // 640px
        164: '41rem', // 656px
        200: '50rem', // 800px
        282: '70.5rem', // 1128px
        300: '75rem', // 1200px
        400: '100rem', // 1600px
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1440px',
      },
      maxWidth: theme => theme('spacing'),
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.900'),
            a: {
              color: theme('colors.blue.700'),
              '&:hover': {
                color: theme('colors.blue.700'),
                textDecoration: 'none',
              },
            },
            'h2 a': {
              color: theme('colors.gray.900'),
              textDecoration: 'none',
            },
            '.tag a': {
              textDecoration: 'none',
            },
          },
        },

        dark: {
          css: {
            color: '#7982a9',
            a: {
              color: '#9ECE6A',
              '&:hover': {
                color: '#9ECE6A',
              },
            },

            'h2 a': {
              color: '#A9B1D6',
            },

            h1: {
              color: '#A9B1D6',
            },
            h2: {
              color: '#A9B1D6',
            },
            h3: {
              color: '#A9B1D6',
            },
            h4: {
              color: '#A9B1D6',
            },
            h5: {
              color: '#A9B1D6',
            },
            h6: {
              color: '#A9B1D6',
            },

            strong: {
              color: '#A9B1D6',
            },

            code: {
              color: '#A9B1D6',
            },

            figcaption: {
              color: theme('colors.gray.500'),
            },

            '::selection': {
              backgroundColor: '#6f7bb635',
            },
          },
        },
      }),
    },
  },
  variants: {
    margin: ['responsive', 'last'],
    textColor: ['responsive', 'hover', 'focus', 'dark'],
    backgroundColor: [
      'responsive',
      'odd',
      'even',
      'hover',
      'focus',
      'group-hover',
      'dark',
    ],
    borderColor: ['responsive', 'hover', 'focus', 'dark'],
    borderWidth: ['responsive', 'first', 'last', 'hover', 'focus'],
    opacity: ['responsive', 'hover', 'focus', 'disabled'],
    outline: ['focus'],
    animation: ({after}) => after(['motion-safe', 'motion-reduce']),
    transitionProperty: ({after}) => after(['motion-reduce']),
    extend: {
      typography: ['dark'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
  configViewer: {
    baseFontSize: 16,
    typographyExample: 'Your example sentence',
    themeReplacements: {
      'var(--color-black)': '#000000',
    },
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
        './public/index.html',
        './resources/views/index.blade.php',
        './resources/**/*.{vue,js,ts,jsx,tsx}'
    ],
  },
  darkMode: 'class',
}
