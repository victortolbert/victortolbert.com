export default defineAppConfig({
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
  ui: {
    primary: 'brand',
    gray: 'neutral',
    container: {
      constrained: 'max-w-4xl',
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
    },
    footer: {
      bottom: {
        left: 'text-sm text-gray-500 dark:text-gray-400',
        wrapper: 'border-t border-gray-200 dark:border-gray-800',
      },
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
