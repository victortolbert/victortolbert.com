const TAX_RATE = 1.1
const SHIPPING_DEFAULT = 5

// export const calculateTotal = (items, options = {}) => {
//   if (items == null || items.length === 0) return 0

//   let total = 0
//   items.forEach(item => {
//     total += item.price * item.quantity
//   })

//   total = total - total * (options.discount || 0)
//   total = total * TAX_RATE
//   if (options.shipping !== 0) {
//     total = total + (options.shipping || SHIPPING_DEFAULT)
//   }
//   return total
// }

export function calculateTotal(items, { shipping = SHIPPING_DEFAULT, discount = 0 } = {}) {
  if (items == null || items.length === 0)
    return 0

  const itemCost = items.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)
  const discountRate = 1 - discount

  return itemCost * discountRate * TAX_RATE + shipping
}

export function capitalize(str) {
  if (typeof str !== 'string')
    return ''
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const flattened = arr => [].concat(...arr)

export function numberToAccountingString(number) {
  if (number == null)
    return
  if (number < 0)
    return `(${Math.abs(number)})`
  return number.toString()
}

export const strip = html => html.replace(/<[^>]*>/g, '')

export const truncate = str => `${strip(str).substr(0, 50)}...`

const testItems = [
  { price: 15, quantity: 2 },
  { price: 20, quantity: 1 },
  { price: 5, quantity: 4 },
]

console.log(calculateTotal(testItems, {}))
console.log(calculateTotal(testItems, { shipping: 0 }))
console.log(calculateTotal(testItems, { discount: 1, shipping: 0 }))
console.log(calculateTotal(testItems, { shipping: 12 }))
