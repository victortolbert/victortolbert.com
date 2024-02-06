// import AudioPlayer from '~/components/AudioPlayer.vue'

// Form elements
//   - Input
//   - Textarea
//   - Select
//   - Checkbox
//   - Radio
//   - Button

// Form components
//   - Dialog(Modal)
//   - Disclosure
//   - Popover
//   - Radio group
//   - Listbox(Select)
//   - Menu(Dropdown)
//   - Switch(Toggle)
//   - Tabs
//   - Transition

// Other
//   - Alert
//   - Card
//   - Media Object
//   - Pagination
//   - Table

// Composables
// -

export default [
  {
    header: 'Elements',
    attributes: {},
    class: 'mt-4',
    hidden: false,
    hiddenOnCollapse: true,
  },
  // {
  //   component: AudioPlayer,
  //   props: {
  //     foo: 'bar'
  //   },
  //   hidden: true,
  //   hiddenOnCollapse: true,
  // },
  {
    title: 'Styleguide',
    attributes: {},
    child: [
      {
        title: 'Naming Conventions',
        href: '/naming',
        external: false,
        hidden: true,
      },
      {
        title: 'Bootstrap',
        href: '/bootstrap',
        external: false,
        hidden: true,
      },
      {
        title: 'Kendo UI',
        href: '/kendo',
        external: false,
        hidden: true,
      },
    ],
    class: '',
    exact: true,
    external: false,
    hidden: true,
    hiddenOnCollapse: false,
    // icon: 'fad fa-folders',
    icon: {
      element: 'span',
      class: 'fad fa-book',
      attributes: {},
      text: '',
    },
  },
  {
    title: 'Layout',
    icon: 'fad fa-swatchbook',
    href: '/layout',
    hidden: false,
    child: [
      {
        title: '24 Columm CSS Grid',
        href: '/css-grid',
        external: false,
        hidden: false,
      },
    ],
  },
  {
    title: 'Tokens',
    icon: 'fad fa-swatchbook',
    hidden: true,
    child: [
      {
        title: 'Color',
        href: '/color',
        external: false,
        hidden: true,
      },
      {
        title: 'Graphics',
        href: '/svgs',
        external: false,
        hidden: true,
      },
      {
        title: 'Spacing',
        href: '/spacing',
        external: false,
        hidden: true,
      },
      {
        title: 'Typography',
        href: '/typography',
        external: false,
        hidden: true,
      },
    ],
  },
  {
    title: 'Base',
    icon: 'fad fa-cubes',
    hidden: false,
    child: [
      {
        title: 'Avatar',
        href: '/avatar',
        external: false,
        hidden: true,
      },
      {
        title: 'Badge',
        href: '/badge',
        external: false,
        hidden: true,
      },
      {
        title: 'Banner',
        href: '/banner',
        external: false,
        hidden: true,
        badge: {
          text: 'new',
          class: ' bg-accent-600 rounded-sm p-1 px-2 uppercase font-semibold tracking-wider shadow text-2xs text-white',
          attributes: {},
          element: 'span',
        },
      },
      {
        title: 'Box',
        href: '/box',
        external: false,
        hidden: true,
      },
      {
        title: 'Button',
        href: '/button',
        external: false,
        hidden: true,
      },
      {
        title: 'Card',
        href: '/card',
        external: false,
        hidden: true,
      },
      {
        title: 'Checkbox',
        href: '/checkbox',
        external: false,
        hidden: true,
      },
      {
        title: 'Grid (Kendo)',
        href: '/kendo-grid',
        hidden: false,
        child: [
          {
            title: 'Column menu',
            href: '/kendo/grid/column-menu',
            hidden: false,
          },
          {
            title: 'Custom cell',
            href: '/kendo/grid/custom-cell',
            hidden: false,
          },
          {
            title: 'Detail row',
            href: '/kendo/grid/detail-row',
            hidden: false,
          },
          {
            title: 'Column width minimum',
            href: '/kendo/grid/column-width-minimum',
            hidden: false,
          },
          {
            title: 'Column width percentage',
            href: '/kendo/grid/column-width-percentage',
            hidden: false,
          },
          {
            title: 'Selection',
            href: '/kendo/grid/selection',
            hidden: false,
          },
        ],
      },
      {
        title: 'Icon',
        href: '/icon',
        external: false,
        hidden: true,
      },
      {
        title: 'Image',
        href: '/image',
        external: false,
        hidden: true,
      },
      {
        title: 'Input',
        href: '/input',
        external: false,
        hidden: true,
      },
      {
        title: 'Label',
        href: '/label',
        external: false,
        hidden: true,
      },
      {
        title: 'Modal',
        href: '/modal',
        external: false,
        hidden: true,
      },
      {
        title: 'Radio Group',
        href: '/radio-group',
        external: false,
        hidden: true,
      },
      {
        title: 'Select',
        href: '/select',
        external: false,
        hidden: true,
      },
      {
        title: 'Switch',
        href: '/switch',
        external: false,
        hidden: true,
      },
      {
        title: 'Tabs',
        href: '/tabs',
        external: false,
        hidden: true,
      },
      {
        title: 'Table',
        hidden: false,
        href: '/table',
        child: [

        ],
      },
      {
        title: 'Textarea',
        href: '/textarea',
        external: false,
        hidden: true,
      },
    ],
  },
  {
    title: 'Web Components',
    icon: 'fad fa-atom-alt',
    hidden: true,
    child: [
      {
        title: 'Hancock Claims',
        icon: 'fad fa-building',
        child: [
          {
            title: 'Dashboard',
            href: '/dashboard',
            icon: 'fad fa-analytics',
            external: false,
            hidden: true,
          },
          {
            title: 'Billing',
            href: '/billing',
            icon: 'fad fa-credit-card',
            external: false,
            hidden: true,
          },
          {
            title: 'Claims',
            href: '/claims',
            icon: 'fad fa-credit-card',
            external: false,
            hidden: true,
          },
          {
            title: 'Customers',
            href: '/customers',
            icon: 'fad fa-building',
            external: false,
            hidden: true,
          },

          {
            title: 'Projects',
            icon: 'fad fa-folders',
            child: [
              {
                title: 'Projects List',
                href: '/projects',
                icon: 'fad fa-list',
                external: false,
                hidden: true,
              },
            ],
          },
          {
            title: 'Users',
            href: '/users',
            icon: 'fad fa-users',
            external: false,
            hidden: true,
          },
          {
            title: 'Reports',
            href: '/reports',
            icon: 'fad fa-users',
            external: false,
            hidden: true,
          },
          {
            title: 'Auto Scheduler',
            href: '/autoscheduler',
            icon: 'fad fa-calendar-star',
            external: false,
            hidden: true,
          },
          {
            title: 'Property Inspection',
            href: '/properties/1/inspection',
            icon: 'fad fa-laptop-house',
            external: false,
            hidden: true,
          },
        ],
      },
      {
        title: 'Books',
        href: '/books',
        icon: 'fad fa-book-heart',
        external: false,
        hidden: true,
      },
      {
        title: 'Calendar',
        href: '/calendar',
        icon: 'fad fa-calendar-alt',
        external: false,
        hidden: true,
      },
      {
        title: 'Events',
        href: '/events',
        icon: 'fad fa-ticket',
        external: false,
        hidden: true,
      },
      {
        title: 'Messages',
        href: '/messages',
        icon: 'fad fa-credit-card',
        external: false,
        hidden: true,
      },
      {
        title: 'Movies',
        href: '/movies',
        icon: 'fad fa-camera-movie',
        external: false,
        hidden: true,
      },
      {
        title: 'Music',
        href: '/music',
        icon: 'fad fa-cassette-tape',
        external: false,
        hidden: true,
      },
      {
        title: 'Plants',
        href: '/plants',
        icon: 'fad fa-seedling',
        external: false,
        hidden: true,
      },
    ],
  },
  {
    title: 'Bootstrap',
    href: '/style',
    icon: 'fab fa-bootstrap',
    external: false,
    hidden: true,
  },
  {
    title: 'Kendo UI',
    href: '/style',
    icon: 'fab fa-vuejs',
    external: false,
    hidden: true,
  },
  {
    title: 'Cheatsheets',
    icon: 'fab fa-js-square',
    hidden: true,
    child: [
      {
        title: 'Regular Expressions (Regex)',
        href: '/regex',
        external: false,
        hidden: true,
      },
    ],
  },
  {
    title: 'Angular',
    href: '/angular',
    icon: 'fab fa-angular',
    external: false,
    hidden: true,
  },
  {
    title: 'React',
    href: '/react',
    icon: 'fab fa-react',
    external: false,
    hidden: true,
  },
  {
    title: 'JavaScript',
    href: '/javascript',
    icon: 'fab fa-js-square',
    external: false,
    hidden: true,
  },
  {
    title: 'HTML',
    href: '/html',
    icon: 'fab fa-html5',
    external: false,
    hidden: true,
  },
  {
    title: 'CSS',
    href: '/css',
    icon: 'fab fa-css3-alt',
    external: false,
    hidden: true,
  },
  {
    title: 'Vue 3',
    icon: 'fab fa-vuejs',
    class: 'text-vue-three',
    hidden: true,
    hiddenOnCollapse: false,
    child: [
      {
        title: 'Layout',
        href: '/layout',
        external: false,
        hidden: true,
      },
      {
        title: 'Charts',
        href: '/charts',
        external: false,
        hidden: true,
      },
      {
        title: 'Grids',
        href: '/grids',
        external: false,
        hidden: true,
        badge: {
          text: 'new',
          class: 'vsm--badge_default',
          // attributes: {}
          // element: 'span'
        },
      },
      {
        title: 'Motion',
        href: '/motion',
        external: false,
        hidden: true,
      },
      {
        title: 'Navigation',
        href: '/navigation',
        external: false,
        hidden: true,
      },
      {
        title: 'Forms',
        href: '/forms',
        external: false,
        hidden: true,
      },

    ],
  },
  {
    header: 'Code',
    attributes: {},
    class: '',
    hidden: true,
    hiddenOnCollapse: true,
    external: false,
  },
  {
    title: 'Examples',
    icon: 'fad fa-building',
    hidden: true,
    external: false,
  },
  {
    title: 'Inbox',
    href: '/inbox',
    icon: 'fad fa-inbox',
    hidden: true,
    external: false,
  },
  {
    title: 'Scratchpad',
    href: '/scratch',
    icon: 'fad fa-lightbulb-on',
    hidden: true,
    external: false,
  },
  {
    title: 'Archive',
    href: '/archive',
    icon: 'fad fa-archive',
    hidden: true,
    external: false,
  },
  {
    title: 'Composables',
    href: '/composables',
    icon: 'fad fa-function',
    hidden: true,
    external: false,
  },
  {
    title: 'Resources',
    href: '/resources',
    icon: 'fad fa-books',
    hidden: true,
    external: false,
  },
  {
    title: 'Reports',
    href: '/reports',
    icon: 'fad fa-file-contract',
    hidden: true,
    external: false,
  },
  {
    title: 'Collections',
    href: '/collections',
    icon: 'fad fa-album-collection',
    hidden: true,
    external: false,
  },
]
