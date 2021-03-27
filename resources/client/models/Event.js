import Model from './Model'

export default class Event extends Model {
  // Set the resource route of the model
  resource() {
    return 'events'
  }
}
