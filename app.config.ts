export default defineAppConfig({
  ui: {
    primary: 'slate',
    gray: 'slate',
    tooltip: {
      background: '!bg-background',
      popper: {
        strategy: 'absolute',
      },
    },
    icons: {
      dark: 'i-ph-moon-duotone',
      light: 'i-ph-sun-duotone',
      search: 'i-ph-magnifying-glass-duotone',
      external: 'i-ph-arrow-up-right',
      chevron: 'i-ph-caret-down',
      hash: 'i-ph-hash-duotone',
    },
    header: {
      wrapper: 'lg:mb-0 lg:border-0',
      popover: {
        links: {
          active: 'dark:bg-gray-950/50',
          inactive: 'dark:hover:bg-gray-950/50',
        },
      },
    },
  },
  seo: {
    siteName: 'Demo - Docs',
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
      'to': 'https://github.com/victortolbert/demo',
      'target': '_blank',
      'aria-label': 'Demo on GitHub',
    }],
  },
  footer: {
    credits: 'Copyright © 2023',
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/victortolbert/demo',
      'target': '_blank',
      'aria-label': 'Demo on GitHub',
    }],
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Ecosystem',
      edit: 'https://github.com/victortolbert/docs/edit/main/content',
      links: [],
    },
  },
})
