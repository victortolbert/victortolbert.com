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
    siteName: 'Frontier',
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
      'to': 'https://github.com/progroup/frontier',
      'target': '_blank',
      'aria-label': 'Frontier on GitHub',
    }],
  },
  footer: {
    credits: 'Copyright © 2023',
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/progroup/frontier',
      'target': '_blank',
      'aria-label': 'Frontier on GitHub',
    }],
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Ecosystem',
      edit: 'https://github.com/progroup/frontier/edit/main/content',
      links: [],
    },
  },
})
