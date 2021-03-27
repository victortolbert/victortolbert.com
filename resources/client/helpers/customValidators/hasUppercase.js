export default password => {
  if (/[A-Z]/.test(password) === false) {
    return false
  }

  return true
}
