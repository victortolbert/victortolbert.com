import Model from './Model'

export default class Advocate extends Model {
  // Set the resource route of the model
  resource() {
    return 'people'
  }
}
