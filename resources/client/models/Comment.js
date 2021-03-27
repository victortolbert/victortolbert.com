import Model from './Model'

export default class Comment extends Model {
  // Set the resource route of the model
  resource() {
    return 'comments'
  }
}
