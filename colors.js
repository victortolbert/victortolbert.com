const {getColors} = require('theme-colors')
const {generate, presetPalettes} = require('@ant-design/colors')

module.exports = {
  seaBuckthorn: getColors('#fbaa30'), //
  flamePea: getColors('#da5d3f'), //
  malachite: getColors('#00be00'),
  monza: getColors('#ca0015'),
  moonMist: getColors('#dce0cf'),
  paprika: getColors('#98002f'),
  peachSchnapps: getColors('#ffdbd2'),
  pomegranate: getColors('#fb4319'),
  scooter: getColors('#27c3e3'),
  oliveGreen: getColors('#b2b45d'), // Promise Serves primary
  mineShaft: getColors('#323232'), // Promise Serves secondary
  green: {
    50: '#e2fbed',
    100: '#c2ebd4',
    200: '#9fddb9',
    300: '#7ccf9e',
    400: '#58c184',
    500: '#3ea76a',
    600: '#2e8251',
    700: '#1f5d3a',
    800: '#0f3921',
    900: '#001506',
  },
  red: {
    50: '#ffe5e9',
    100: '#f9bcc2',
    200: '#ee919a',
    300: '#e66673',
    400: '#dd3b4b',
    500: '#c42231',
    600: '#991826',
    700: '#6e101a',
    800: '#44070e',
    900: '#1e0001',
  },
  indigo: {
    50: '#f2e5ff',
    100: '#d2b5ff',
    200: '#b285fa',
    300: '#9356f7',
    400: '#7425f3',
    500: '#5a0cda',
    600: '#4608aa',
    700: '#32057b',
    800: '#1e024c',
    900: '#0c001e',
  },
  yellow: {
    50: '#fff9da',
    100: '#ffecad',
    200: '#ffdf7d',
    300: '#ffd24b',
    400: '#ffc61a',
    500: '#e6ac00',
    600: '#b38600',
    700: '#806000',
    800: '#4e3900',
    900: '#1d1300',
  },
}
