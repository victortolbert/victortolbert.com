import Model from './Model'

export default class Task extends Model {
  // Set the resource route of the model
  resource() {
    return 'tasks'
  }
}
