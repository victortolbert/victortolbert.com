import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
import { UserModule } from '~/types'
// import resolveConfig from 'tailwindcss/resolveConfig'
// import tailwindConfig from '../tailwind.config.js'
// const { theme } = resolveConfig(tailwindConfig)

Chartkick.options = {
  colors: ['#da5d3f', '#003936', '#ffdbd2'],
}

export const install: UserModule = ({ app }) => {
  app.use(Chartkick.use(Chart))
}
