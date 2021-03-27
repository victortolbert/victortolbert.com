export default password => {
  if (/[!@#$%^&*()\-_=+{};:,<.>§~]/.test(password) === false) {
    return false
  }

  return true
}
