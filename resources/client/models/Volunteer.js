import Model from './Model'

export default class Volunteer extends Model {
  // Set the resource route of the model
  resource() {
    return 'people'
  }
}
