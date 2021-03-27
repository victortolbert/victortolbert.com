import {types, actions, licenses} from './constants.js'

const mappings = new Map()

mappings.set(
  actions.EXPORT_FILE,
  new Map([
    [types.PDF, [licenses.FREE, licenses.PAID]],
    [types.DOCX, [licenses.PAID]],
    [types.XLSX, [licenses.PAID]],
    [types.PPTX, [licenses.PAID]],
  ]),
)

function hasLicense(user, file, action) {
  if (!user || !file) {
    return false
  }

  if (mappings.has(action)) {
    const mapping = mappings.get(action)

    if (mapping.has(file.type)) {
      return mapping.get(file.type).includes(user.license)
    }
  }

  return false
}

export default hasLicense
