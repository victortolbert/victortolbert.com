export default defineAppConfig({
  // The key to override a component will be its path, for example ui.landing.hero will override the LandingHero component.
  ui: {
    primary: 'sky',
    gray: 'cool',
    container: {
      constrained: 'max-w-4xl',
    },
    variables: {
      light: {
        background: '255 255 255',
        foreground: 'var(--color-gray-700)',
      },
      dark: {
        background: 'var(--color-gray-900)',
        foreground: 'var(--color-gray-200)',
      },
      header: {
        height: '4rem',
      },
    },
    content: {
      prose: {
        code: {
          button: {
            icon: {
              copy: 'i-ph-copy-duotone',
              copied: 'i-ph-check-square-duotone',
            },
          },
          icon: {
            terminal: 'i-ph-terminal-window-duotone',
          },
        },
      },
    },
    icons: {
      dynamic: true,
      dark: 'i-ph-moon-duotone',
      light: 'i-ph-sun-duotone',
      search: 'i-ph-magnifying-glass-duotone',
      external: 'i-ph-arrow-up-right',
      chevron: 'i-ph-caret-down',
      hash: 'i-ph-hash-duotone',
    },
    header: {
      // wrapper: 'lg:mb-0 lg:border-0',
      // popover: {
      //   links: {
      //     active: 'dark:bg-gray-950/50',
      //     inactive: 'dark:hover:bg-gray-950/50'
      //   }
      // },
      links: {
        trailingIcon: {
          name: 'i-ph-caret-down', // Defaults to `ui.icons.chevron`
        },
      },
      button: {
        icon: {
          open: 'i-ph-list',
          close: 'i-ph-x',
        },
      },
    },
    footer: {
      bottom: {
        left: 'text-sm text-gray-500 dark:text-gray-400',
        wrapper: 'border-t border-gray-200 dark:border-gray-800',
      },
    },
    tooltip: {
      background: '!bg-background',
    },
    // formGroup: {
    //   help: 'text-xs mt-1 text-gray-500 dark:text-gray-400',
    //   error: 'text-xs mt-1 text-red-500 dark:text-red-400',
    //   label: {
    //     base: 'text-sm block font-medium text-gray-500 dark:text-gray-200',
    //   },
    // },
    // button: {
    //   rounded:
    //     'rounded-md transition-transform active:scale-x-[0.98] active:scale-y-[0.99]',
    // },
    // modal: {
    //   overlay: {
    //     background: 'bg-[rgba(0,8,47,.275)] saturate-50',
    //   },
    //   padding: 'p-0',
    //   rounded: 'rounded-t-2xl sm:rounded-xl',
    //   transition: {
    //     enterFrom: 'opacity-0 translate-y-full sm:translate-y-0 sm:scale-x-95',
    //     leaveFrom: 'opacity-100 translate-y-0 sm:scale-x-100',
    //   },
    // },

  },
  app: {
    name: names => names[Math.floor(Math.random() * names.length)],
    description: names => names[Math.floor(Math.random() * names.length)],
    menu: [],
    names: [
      'code examples',
      'code snippets',
      'demos',
      'lab',
      'playground',
      'sandbox',
    ],
    descriptions: [
      'Lightweight user interface design patterns',
      'Reusable components',
      'User interface engineering and digital product management',
      'Client-side components for Angular, React, Svelte, Vue and good old plain HTML',
      'Headless and light-weight UI Components with examples using plain CSS, Boostrap 5, Bulma, and Tailwind',
    ],
  },
  seo: {
    siteName: 'Victor Tolbert | Software Engineer',
  },
  header: {
    logo: {
      alt: '',
      light: '',
      dark: '',
    },
    search: true,
    colorMode: true,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/victortolbert/victortolbert.com',
      'target': '_blank',
      'aria-label': 'Website source code on GitHub',
    }],
  },
  footer: {
    credits: 'Copyright © 2024',
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-nuxtdotjs',
      'to': 'https://victortolbert.com',
      'target': '_blank',
      'aria-label': 'Website',
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/victortolbert/victortolbert.com',
      'target': '_blank',
      'aria-label': 'Website source code on GitHub',
    }],
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/victortolbert/victortolbert.com/edit/main/content',
      links: [{
        icon: 'i-heroicons-star',
        label: 'Star on GitHub',
        to: 'https://github.com/nuxt/ui',
        target: '_blank',
      }, {
        icon: 'i-heroicons-book-open',
        label: 'Nuxt UI Pro docs',
        to: 'https://ui.nuxt.com/pro/guide',
        target: '_blank',
      }, {
        icon: 'i-simple-icons-nuxtdotjs',
        label: 'Purchase a license',
        to: 'https://ui.nuxt.com/pro/purchase',
        target: '_blank',
      }],
    },
  },
})
