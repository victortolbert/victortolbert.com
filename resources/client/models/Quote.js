import Model from './Model'

export default class Quote extends Model {
  // Set the resource route of the model
  resource() {
    return 'quotes'
  }
}
