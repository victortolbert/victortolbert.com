export default password => {
  if (/[a-z]/.test(password) === false) {
    return false
  }

  return true
}
