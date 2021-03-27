const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

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
        proto: [
          '"Flow Block"',
          '"Blokk Neue"',
          'Blokk',
          '"Flow Circular"',
          '"Flow Rounded"',
        ],
      },
      colors: {
        primary: {
          50: '#f5fbf7',
          100: '#eaf8f0',
          200: '#cbedd8',
          300: '#abe1c1',
          400: '#6ccb93',
          500: '#2DB564',
          600: '#29a35a',
          700: '#22884b',
          800: '#1b6d3c',
          900: '#165931',
        },
        secondary: {
          50: '#f5f9fd',
          100: '#eaf3fc',
          200: '#cbe1f7',
          300: '#abcff2',
          400: '#6daae8',
          500: '#2E86DE',
          600: '#2979c8',
          700: '#2365a7',
          800: '#1c5085',
          900: '#17426d',
        },
        tertiary: {
          50: '#fffbf5',
          100: '#fff6eb',
          200: '#fee9cd',
          300: '#fddbaf',
          400: '#fcc174',
          500: '#FAA638',
          600: '#e19532',
          700: '#bc7d2a',
          800: '#966422',
          900: '#7b511b',
        },

        // primary: colors.coolGray,
        orange: colors.amber,

        rose: colors.rose,
        lime: colors.lime,
        'light-blue': colors.lightBlue,

        danger: 'var(--color-danger)',
        warning: 'var(--color-warning)',
        success: 'var(--color-success)',
        info: 'var(--color-info)',
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
      // typography: {
      //   DEFAULT: {
      //     css: {
      //       color: '#333',
      //       a: {
      //         color: '#3182ce',
      //         '&:hover': {
      //           color: '#2c5282',
      //         },
      //       },
      //     },
      //   },
      // },
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
    // typography: theme => ({
    //   default: {
    //     css: {
    //       color: theme('colors.gray.900'),

    //       a: {
    //         color: theme('colors.blue.500'),
    //         '&:hover': {
    //           color: theme('colors.blue.700'),
    //         },
    //       },
    //     },
    //   },

    //   dark: {
    //     css: {
    //       color: theme('colors.gray.100'),

    //       a: {
    //         color: theme('colors.blue.100'),
    //         '&:hover': {
    //           color: theme('colors.blue.100'),
    //         },
    //       },
    //     },
    //   },
    // }),
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
    // typography: ['responsive', 'dark'],
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
    content: ['./application/views/**/*.php', './resources/**/*.vue'],
  },
  darkMode: 'class',
}
