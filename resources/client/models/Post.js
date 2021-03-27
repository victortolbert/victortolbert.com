import Model from './Model'
import User from './User'
import Comment from './Comment'

export default class Post extends Model {
  // Set the resource route of the model
  resource() {
    return 'posts'
  }

  // Define the primary key of the model
  primaryKey() {
    return 'slug'
  }

  // Apply model instances to eager loaded relationships
  relations() {
    return {
      user: User,
      comments: Comment,
    }
  }

  // // The relations method also support nested keys, by dot notation:
  // relations() {
  //   // Then we can access using the specified key: post.relationships.user
  //   return {
  //     'relationships.user': User,
  //     'relationships.comments': Comment,
  //   }
  // }
}
