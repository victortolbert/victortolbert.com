export function delay(t = 100) {
  return new Promise(resolve => setTimeout(resolve, t))
}

export async function getData() {
  await delay(500)

  return {
    message: 'Hello',
    time: Date.now(),
  }
}

const user = {
  email: 'john@travolta.io',
  password: '123456',
  name: 'John',
}

export function checkIfUserExistsInDB(email: string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === user.email)
        resolve(true)

      else
        reject(new Error('user not found'))
    }, 1000)
  })
}

export function authenticateUser(email: string, password: string) {
  return new Promise((resolve, reject) => {
    console.log(email === user.email && password === user.password)
    setTimeout(() => {
      if (email === user.email && password === user.password) {
        resolve({
          email: user.email,
          name: user.name,
        })
      }
      else {
        reject(new Error('supplied credentials do not match any user'))
      }
    }, 1000)
  })
}

export function postFormToDB(form: any) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(form), 1000)
  })
}

export * from './carriers'
export * from './jokes'
export * from './products'
