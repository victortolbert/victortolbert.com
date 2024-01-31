export default defineAppConfig({
  ui: {
    primary: 'neutral',
    gray: 'neutral',
    formGroup: {
      help: 'text-xs mt-1 text-gray-500 dark:text-gray-400',
      error: 'text-xs mt-1 text-red-500 dark:text-red-400',
      label: {
        base: 'text-sm block font-medium text-gray-500 dark:text-gray-200',
      },
    },
    button: {
      rounded:
        'rounded-md transition-transform active:scale-x-[0.98] active:scale-y-[0.99]',
    },
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
    container: {
      constrained: 'max-w-3xl',
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
})
