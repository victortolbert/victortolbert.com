import {UserModule} from '~/types'
import {abilitiesPlugin, Can} from '@casl/vue'
import {buildAbilityFor} from '~/ability'

// import ability from '@/services/ability'
const ability = buildAbilityFor('member')

if (process.env.NODE_ENV !== 'production') {
  // exposed for debugging
  ;(window as any).ability = ability
}

export const install: UserModule = ({app}) => {
  app.component('Can', Can)
  app.use(abilitiesPlugin, ability, {
    useGlobalProperties: true,
  })
}
