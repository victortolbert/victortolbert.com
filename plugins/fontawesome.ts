import { config, dom, library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
import {
  faGithubSquare,
  faTwitter,
  faTwitterSquare,
  faYoutubeSquare,
} from '@fortawesome/free-brands-svg-icons'

// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { fad } from '@fortawesome/pro-duotone-svg-icons'
// import { fal } from '@fortawesome/pro-light-svg-icons'
// import { far } from '@fortawesome/pro-regular-svg-icons'

// Could not find one or more icon(s) { prefix: 'fas', iconName: 'angle-down' } { }
// Could not find one or more icon(s) { prefix: 'fas', iconName: 'angle-left' } { }
// Could not find one or more icon(s) { prefix: 'fas', iconName: 'angle-right' } { }
// Could not find one or more icon(s) { prefix: 'fas', iconName: 'caret-down' } { }
// Could not find one or more icon(s) { prefix: 'fas', iconName: 'times' } { }

import {
  faBus,
  faCamera,
  faCoffeePot,
  faCog,
  faFillDrip,
  faFireAlt,
  faHorseSaddle,
  faSpinner,
  faCoffee as fadCoffee,
} from '@fortawesome/pro-duotone-svg-icons'
import {
  faAngleDown,
  faAngleLeft,
  faAngleRight,
  faBell,
  faCaretDown,
  faCaretUp,
  faCheck,
  faCircle,
  faMoon,
  faSun,
  faTimes,
  faUpload,
  faUserSecret,
} from '@fortawesome/free-solid-svg-icons'
import {
  faBadge,
  faBasketball,
  faCheckSquare,
  faCircleInfo,
  faCompactDisc,
  faCompass,
  faHeart,
  faTriangleExclamation,
  faCoffee as fasCoffee,
} from '@fortawesome/pro-solid-svg-icons'

import { faBicycle, faSquare, faCoffee as farCoffee } from '@fortawesome/pro-regular-svg-icons'
import { faEnvelope, faCoffee as falCoffee } from '@fortawesome/pro-light-svg-icons'
import { faFeather, faCoffee as fatCoffee } from '@fortawesome/pro-thin-svg-icons'
import { faAlien, faCoffee as fassCoffee } from '@fortawesome/sharp-solid-svg-icons'
import { faPlateUtensils, faCoffee as fasrCoffee } from '@fortawesome/sharp-regular-svg-icons'
import { faFire, faCoffee as faslCoffee } from '@fortawesome/sharp-light-svg-icons'

import type { UserModule } from '~/types'

library.add(faTwitterSquare, faYoutubeSquare, faGithubSquare)

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})

// Brands
library.add(faTwitter)
// Duotone
library.add(faBus, faCamera, faCheckSquare, faCoffeePot, faCog, faFillDrip, faFireAlt, faHorseSaddle, faSpinner, fadCoffee)
// Solid
library.add(faAngleDown, faAngleLeft, faAngleRight, faBadge, faBasketball, faBell, faCaretDown, faCaretUp, faCircleInfo, faCompactDisc, faCompass, faTriangleExclamation, faHeart, faCheck, faCircle, faMoon, faSun, faTimes, faUpload, faUserSecret, fasCoffee)
// Regular
library.add(faBicycle, farCoffee, faSquare)
// Light
library.add(faEnvelope, falCoffee)
// Thin
library.add(faFeather, fatCoffee)
// Sharp Solid
library.add(faAlien, fassCoffee)
// Sharp Regular
library.add(faPlateUtensils, fasrCoffee)
// Sharp Light
library.add(faFire, faslCoffee)

// library.add(fas)
// library.add(fab)
// library.add(fad)
// library.add(far)
// library.add(fal)

dom.watch()

export const install: UserModule = ({ app }) => {
  app.component('FontAwesomeIcon', FontAwesomeIcon)
  app.component('FontAwesomeLayers', FontAwesomeLayers)
  app.component('FontAwesomeLayersText', FontAwesomeLayersText)
}
