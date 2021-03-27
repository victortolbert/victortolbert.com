import Model from './Model'

export default class Person extends Model {
  // Set the resource route of the model
  resource() {
    return 'people'
  }
}
