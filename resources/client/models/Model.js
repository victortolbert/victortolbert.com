import {Model as BaseModel} from 'vue-api-query'

export default class Model extends BaseModel {
  // Define a base url for a REST API
  baseURL() {
    return 'https://api.victortolbert.com'
  }

  // Implement a default request method
  request(config) {
    return this.$http.request(config)
  }

  // // Override default query parameter names
  // parameterNames() {
  //   const defaultParams = super.parameterNames()
  //   const customParams = {
  //     include: 'include_custom',
  //   }

  //   return {...defaultParams, ...customParams}
  // }

  // // Configure object-to-formadata
  // formData() {
  //   return {
  //     // indices: false,
  //     // nullsAsUndefineds: false,
  //     // booleansAsIntegers: false,
  //     // allowEmptyArrays: false,
  //   }
  // }
}
