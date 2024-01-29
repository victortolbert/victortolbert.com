let appIp = 'abc'
const button = document.querySelector('button')!

function add4(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2
  }
  return
}

function clickHandler(message: string) {
  // let userName = 'Vic'
  console.log('Clicked!' + message)
}

// a comment
if (button) {
  button.addEventListener('click', clickHandler.bind(null, 'You’ve clicked the button'))
}

// const nickname = 'Vic'
// console.log(nickname)
