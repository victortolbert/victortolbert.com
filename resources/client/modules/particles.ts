import Particles from 'particles.vue3'
import { UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  app.use(Particles)
}
