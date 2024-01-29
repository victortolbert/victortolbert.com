function add(n1: number, n2: number) {
  return n1 + n2
}

function add2(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2
  if (showResult) {
    console.log(phrase + result)
  } else {
    return result
  }
}

let number1: number
number1 = 1

const number2 = 2.8
const printResult = true
let resultPhrase = 'Result is: '
resultPhrase = '5'

const result = add(number1, number2)
add2(number1, number2, printResult, resultPhrase)
