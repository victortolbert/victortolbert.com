import type { MerchantAuthentication } from '~/types'

export interface ChargeCreditCardRequest {
  merchantAuthentication: MerchantAuthentication
  refId?: string
  transactionRequest: TransactionRequest
}

interface TransactionRequest {
  transactionType: string
  amount: string
  currencyCode?: string
  payment: Payment
  billTo?: BillTo
  lineItems?: LineItems
  tax?: Tax
  duty?: Duty
  shipping?: Shipping
  poNumber?: string
  customer?: Customer
  shipTo?: ShipTo
  customerIP?: string
  transactionSettings?: TransactionSettings
  userFields?: UserFields
  processingOptions?: ProcessingOptions
  subsequentAuthInformation?: SubsequentAuthInformation
  authorizationIndicatorType?: AuthorizationIndicatorType
}

interface Payment {
  opaqueData: OpaqueData
}

interface OpaqueData {
  dataDescriptor: string
  dataValue: string
}

interface LineItems {
  LineItem: LineItem
}

interface LineItem {
  itemId: string
  name: string
  description: string
  quantity: string
  unitPrice: string
}

interface Tax {
  amount: string
  name: string
  description: string
}

interface Duty {
  amount: string
  name: string
  description: string
}

interface Shipping {
  amount: string
  name: string
  description: string
}

interface Customer {
  id: string
}

interface BillTo {
  firstName?: string
  lastName?: string
  company?: string
  address?: string
  city?: string
  state?: string
  zip?: string
  country?: string
}

interface ShipTo {
  firstName: string
  lastName: string
  company: string
  address: string
  city: string
  state: string
  zip: string
  country: string
}

interface TransactionSettings {
  setting: Setting[]
}

interface Setting {
  settingName: string
  settingValue: string
}

interface UserFields {
  userField: UserField[]
}

interface UserField {
  name: string
  value: string
}

interface ProcessingOptions {
  isSubsequentAuth: string
}

interface SubsequentAuthInformation {
  originalNetworkTransId: string
  originalAuthAmount: string
  reason: string
}

interface AuthorizationIndicatorType {
  authorizationIndicator: string
}

// Example:
// {
//   "createTransactionRequest": {
//     "merchantAuthentication": {
//       "name": "5KP3u95bQpv",
//       "transactionKey": "346HZ32z3fP4hTG2"
//     },
//     "refId": "123456",
//     "transactionRequest": {
//       "transactionType": "authCaptureTransaction",
//       "amount": "5",
//       "payment": {
//         "creditCard": {
//           "cardNumber": "5424000000000015",
//           "expirationDate": "2025-12",
//           "cardCode": "999"
//         }
//       },
//       "lineItems": {
//         "lineItem": {
//           "itemId": "1",
//           "name": "vase",
//           "description": "Cannes logo",
//           "quantity": "18",
//           "unitPrice": "45.00"
//         }
//       },
//       "tax": {
//         "amount": "4.26",
//         "name": "level2 tax name",
//         "description": "level2 tax"
//       },
//       "duty": {
//         "amount": "8.55",
//         "name": "duty name",
//         "description": "duty description"
//       },
//       "shipping": {
//         "amount": "4.26",
//         "name": "level2 tax name",
//         "description": "level2 tax"
//       },
//       "poNumber": "456654",
//       "customer": {
//         "id": "99999456654"
//       },
//       "billTo": {
//         "firstName": "Ellen",
//         "lastName": "Johnson",
//         "company": "Souveniropolis",
//         "address": "14 Main Street",
//         "city": "Pecan Springs",
//         "state": "TX",
//         "zip": "44628",
//         "country": "US"
//       },
//       "shipTo": {
//         "firstName": "China",
//         "lastName": "Bayles",
//         "company": "Thyme for Tea",
//         "address": "12 Main Street",
//         "city": "Pecan Springs",
//         "state": "TX",
//         "zip": "44628",
//         "country": "US"
//       },
//       "customerIP": "192.168.1.1",
//       "transactionSettings": {
//         "setting": {
//           "settingName": "testRequest",
//           "settingValue": "false"
//         }
//       },
//       "userFields": {
//         "userField": [
//           {
//             "name": "MerchantDefinedFieldName1",
//             "value": "MerchantDefinedFieldValue1"
//           },
//           {
//             "name": "favorite_color",
//             "value": "blue"
//           }
//         ]
//       },
//       "processingOptions": {
//         "isSubsequentAuth": "true"
//       },
//       "subsequentAuthInformation": {
//         "originalNetworkTransId": "123456789NNNH",
//         "originalAuthAmount": "45.00",
//         "reason": "resubmission"
//       },
//       "authorizationIndicatorType": {
//         "authorizationIndicator": "final"
//       }
//     }
//   }
// }
