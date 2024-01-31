export class Tax {
  static forAmount(amount) {
    return amount * Tax.stateRate
  }
}

Tax.stateRate = '. 08'

console.log(Tax.stateRate) // 0.08
console.log(Tax.forAmount(100)) // 8

// const forAmount = Tax.forAmount
// this.stateRate = 0.01
// console.log(forAmount.call(this, 100))
