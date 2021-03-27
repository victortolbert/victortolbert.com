import Model from './Model'

export default class Message extends Model {
  // Set the resource route of the model
  resource() {
    return 'messages'
  }
}
