// const person: {
//   name: string
//   age: number
//   hobbies: string[]
//   role: [number, string]
// } = {
//   name: 'Victor',
//   age: 52,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// }

// const ADMIN = 0
// const READ_ONLY = 1
// const AUTHOR = 2

enum Role { ADMIN, READ_ONLY, AUTHOR }

const person ={
  name: 'Victor',
  age: 52,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
}

let favoriteActivities: string[]
favoriteActivities = ['Sports']

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
}

// person.role[1] = 10
// person.role = [0, 'admin', 'user']

console.log(person)
