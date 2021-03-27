export default value => {
  if (/^\d{10}$/.test(value) === false) {
    return false
  }

  return true
}
