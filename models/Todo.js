class Todo {
  constructor() {
    this['learn JavaScript'] = 'done'
    this['write elegant code'] = 'work-in-progress'
    this['automate tests'] = 'work-in-progress'
  }

  get completedCount() {
    return Object.keys(this)
      .filter(key => this[key] === 'done')
      .length
  }
}

const todo = new Todo()

console.log(todo['learn JavaScript']) // 'done'
console.log(todo['write elegant code']) // 'work-in-progress'
console.log(todo['automate tests']) // 'work-in-progress'
console.log(todo.completedCount)
