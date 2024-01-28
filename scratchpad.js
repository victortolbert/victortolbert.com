const customer = {
  name: 'Carl',
  details: { age: 82 },
}
const customerCity = customer?.city ?? 'Unknown city'
console.log(customerCity)

const greet = function (name, gender) {
  return `Hello, ${gender === Symbol.for('female') ? 'Ms.' : 'Mr. '} ${name}`
}

console.log(greet('Sara', Symbol.for(' female')))
console.log(greet('Tom', Symbol.for('male')))

const stripMargin = function (texts, ...expressions) {
  const exceptLast = expressions.map((expression, index) => {
    return `${texts[index]}${expression.toString().toUpperCase()}`
  }).join('')

  const result = `${exceptLast}${texts[texts.length - 1]}`
  return result.replace(/[\n][|t|s]+(|w)/g, ' $1').trim()
}

const person = 'Jane'

const processed = stripMargin` This is for
  ${person} and it needs to be
        delivered by December 24th.`

console.log(processed)

const getDetails = function ({ name, born: { year: birthYear }, graduated: { year } }) {
  return `${name} was born in the year ${birthYear} and graduated in ${year}`
}
const details = getDetails({
  name: 'Sara',
  born: {
    month: 3,
    day: 23,
    year: 1992,
  },
  graduated: {
    month: 5,
    day: 2,
    year: 2015,
  },
})

console.log(details)

//

const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

for (const [i, letter] of letters.entries()) {
  if (i % 3 === 0)
    console.log(letter)
}

//
const numbers = [1, 2, 3]
console.log('The Symbol properties in arrays are:')
console.log(Object.getOwnPropertySymbols(Object.getPrototypeOf(numbers)))

//

class Message {
  constructor(text) {
    this.text = text
  }

  [Symbol.replace](word, substitute) {
    return this.text.replace(word, substitute)
  }
}

const message = new Message('There are no stupid questions.')
console.log('stupid'.replace(message, 's*****'))
console.log(''.replace(message, 'Yes, '))

//

const fibonocciSeries = function* () {
  let current = 1
  let next = 1

  yield * [current, next]

  while (true) {
    const temp = current
    current = next
    next = next + temp
    yield next
  }
}

for (const num of fibonocciSeries()) {
  if (num > 100)
    break
  console.log(num)
}

for (const value of fibonocciSeries()) {
  if (value > 25)
    break
  // process.stdout.write(value + ', ')
  console.log(value)
}
