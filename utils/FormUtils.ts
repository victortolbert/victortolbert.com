export const moneyMaskOptions = {
  preProcess: (val: string) => val.replace(/[$,]/g, ''),
  postProcess: (val: string) => {
    if (!val)
      return ''

    const sub = 3 - (val.includes('.') ? val.length - val.indexOf('.') : 0)

    return Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(Number(val))
      .slice(0, sub ? -sub : undefined)
  },
}

export const yearMaskOptions = {
  postProcess: (val: string) => {
    const max = `${new Date().getFullYear()}`
    return val > max ? max : val
  },
}

export const cardholderMaskOptions = {
  tokens: {
    A: {
      pattern: /[A-Z]/,
      multiple: true,
      transform: (char: string) => char.toUpperCase(),
    },
  },
}

export const luhnChk = (function (arr: number[]) {
  return function (ccNum: string) {
    let len = ccNum.length
    let bit = 1
    let sum = 0
    let val

    while (len) {
      val = Number.parseInt(ccNum.charAt(--len), 10)
      // eslint-disable-next-line no-cond-assign
      sum += (bit ^= 1) ? arr[val] : val
    }

    return sum && sum % 10 === 0
  }
}([0, 2, 4, 6, 8, 1, 3, 5, 7, 9]))

export function validateCardCode(input: string) {
  return /^\d{3}\d?$/.test(input)
}

export function validateCardNumber(input: string) {
  return /^(?:4[0-9]{12}(?:[0-9]{3})?|(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})$/.test(input)
}

export function validateExpDate(input: string) {
  return /^\d\d\/\d\d$/.test(input)
}
