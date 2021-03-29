import Oruga from '@oruga-ui/oruga-next'
import {UserModule} from '~/types'
import '@oruga-ui/oruga-next/dist/oruga.css'
import '@oruga-ui/oruga-next/dist/oruga-full-vars.css'

export const install: UserModule = ({app}) => {
  app.use(Oruga, {
    iconPack: 'fas',
    iconComponent: 'FontAwesomeIcon',
  })
}
