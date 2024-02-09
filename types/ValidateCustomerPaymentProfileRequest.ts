import type { MerchantAuthentication } from '~/types'

export interface ValidateCustomerPaymentProfileRequest {
  merchantAuthentication: MerchantAuthentication
  customerProfileId: string
  customerPaymentProfileId: string
  validationMode: string
}

// Example:
// {
//   "validateCustomerPaymentProfileRequest": {
//     "merchantAuthentication": {
//       "name": "5KP3u95bQpv",
//         "transactionKey": "346HZ32z3fP4hTG2"
//     },
//     "customerProfileId": "10000",
//       "customerPaymentProfileId": "20000",
//         "validationMode": "liveMode"
//   }
// }
