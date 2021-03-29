import { reactive } from 'vue'
import { UserModule } from '~/types'

const GStore = reactive({ flashMessage: '' })

export const install: UserModule = ({ app }) => {
  app.provide('GStore', GStore)
}
