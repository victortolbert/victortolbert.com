import type { MerchantAuthentication } from '~/types'

export interface UpdateCustomerProfileRequest {
  merchantAuthentication: MerchantAuthentication
  profile: Profile
}

interface Profile {
  merchantCustomerId: string
  description: string
  email: string
  customerProfileId: string
}

// Example:
// {
//   "updateCustomerProfileRequest": {
//     "merchantAuthentication": {
//       "name": "5KP3u95bQpv",
//       "transactionKey": "346HZ32z3fP4hTG2"
//     },
//     "profile": {
//       "merchantCustomerId": "custId123",
//       "description": "some description",
//       "email": "newaddress@example.com",
//       "customerProfileId": "10000"
//     }
//   }
// }
