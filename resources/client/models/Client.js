import Model from './Model'

export default class Client extends Model {
  // Set the resource route of the model
  resource() {
    return 'clients'
  }
}
