import { GetterTree } from 'vuex'
// import {generate} from '@ant-design/colors'
// import theme from '~/theme'
import {State} from './state'

export type Getters = {
  isReady(state: State): boolean
  primaryColors(state: State): string[]
}

export const getters: GetterTree<State, State> & Getters = {
  isReady(state) {
    return !state.isInitialized
  },
  primaryColors(state) {
    return [
      '',
      ''
    ]
  },
}
