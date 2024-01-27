const customer = {
  name: 'Carl',
  details: { age: 82 },
}
const customerCity = customer?.city ?? 'Unknown city'
console.log(customerCity) // Unknown city
