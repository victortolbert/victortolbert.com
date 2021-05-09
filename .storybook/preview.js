//Import the global style enabling tailwind classes
import '../resources/client/assets/css/tailwind.css'

import theme from './theme'

export const parameters = {
  options: {
    // storySort: (a, b) =>
    //   a[1].kind === b[1].kind
    //     ? 0
    //     : a[1].id.localeCompare(b[1].id, undefined, {numeric: true}),
    storySort: {
      order: [
        'Introduction',
        'Pages',
        ['Home', 'Login', 'Admin'],
        'Components',
      ],
    },

    theme,
  },
  actions: {argTypesRegex: '^on[A-Z].*'},
  backgrounds: {
    values: [
      {name: 'red', value: '#f00'},
      {name: 'green', value: '#0f0'},
    ],
  },
  html: {
    removeEmptyComments: true,
    // prettier: {
    //   tabWidth: 4,
    //   useTabs: false,
    //   htmlWhitespaceSensitivity: 'strict',
    // },
  },
}

// export const decorators = [
//   story => ({
//     components: {story},
//     template: '<div style="margin: 3em;"><story /></div>',
//   }),
// ]

// import React from 'react'

// import {ThemeProvider} from 'styled-components'

// export const decorators = [
//   Story => (
//     <ThemeProvider theme="default">
//       <Story />
//     </ThemeProvider>
//   ),
// ]
