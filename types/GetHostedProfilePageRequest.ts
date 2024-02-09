import type { MerchantAuthentication } from '~/types'

export interface GetHostedProfilePageRequest {
  merchantAuthentication: MerchantAuthentication
  customerProfileId: string
  hostedProfileSettings: HostedProfileSettings
}

interface HostedProfileSettings {
  setting: Setting[]
}

interface Setting {
  settingName: string
  settingValue: string
}

// {
//   "getHostedProfilePageRequest": {
//     "merchantAuthentication": {
//       "name": "5KP3u95bQpv",
//       "transactionKey": "346HZ32z3fP4hTG2"
//     },
//     "customerProfileId": "YourProfileID",
//     "hostedProfileSettings": {
//       "setting": [
//         {
//           "settingName": "hostedProfileReturnUrl",
//           "settingValue": "https://returnurl.com/return/"
//         },
//         {
//           "settingName": "hostedProfileReturnUrlText",
//           "settingValue": "Continue to confirmation page."
//         },
//         {
//           "settingName": "hostedProfilePageBorderVisible",
//           "settingValue": "true"
//         }
//       ]
//     }
//   }
// }
