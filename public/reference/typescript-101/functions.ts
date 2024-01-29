function add3(n1: number, n2: number) {
  return n1 + n2
}

function printResult2(num: number): void {
  console.log('Result: ' + num)
  return
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2
  cb(result)
}

console.log(printResult2(add3(5, 12)))

// let combineValues: Function
let combineValues: (a: number, b: number) => number

combineValues = add3
// combineValues = printResult2
// combineValues = 5

console.log(combineValues(8, 8))

addAndHandle(10, 20, (result) => {
  console.log(result)

})
