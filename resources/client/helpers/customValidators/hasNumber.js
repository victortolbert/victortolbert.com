export default password => {
  if (/\d/.test(password) === false) {
    return false
  }
  return true
}
