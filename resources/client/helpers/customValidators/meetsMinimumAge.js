export default value => {
  const [year, month, day] = value.split('-')
  const minAge = 13
  const birthDate = new Date(year, month - 1, day)
  const tempDate = new Date(
    birthDate.getFullYear() + minAge,
    birthDate.getMonth(),
    birthDate.getDate(),
  )
  if (tempDate <= new Date()) {
    return true
  }
  return false
}
