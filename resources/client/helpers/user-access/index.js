import hasPermission from './permissions'
import hasLicense from './licenses'
import {actions, licenses, types, roles} from './constants'

function hasAccess(entity, action) {
  return hasPermission(entity, action) && hasLicense(entity, action)
}

export default hasAccess
export {hasPermission, hasLicense, actions, licenses, types, roles}
