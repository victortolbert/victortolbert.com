import Model from './Model'

export default class User extends Model {
  // Set the resource route of the model
  resource() {
    return 'users'
  }

  // Lazy load the posts that belongs to the user
  posts() {
    return this.hasMany(Post)
  }

  // Computed properties are reactive -> user.fullName
  // Make sure to use "get" prefix
  get fullName() {
    return `${this.firstname} ${this.lastname}`
  }

  // Method -> user.makeBirthday()
  makeBirthday() {
    return (this.age += 1)
  }
}
