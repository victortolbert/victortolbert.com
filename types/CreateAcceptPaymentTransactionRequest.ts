import type { MerchantAuthentication } from '~/types'

export interface CreateAcceptPaymentTransactionRequest {
  merchantAuthentication: MerchantAuthentication
  refId: string
  transactionRequest: TransactionRequest
}

interface TransactionRequest {
  transactionType: string
  amount: string
  payment: Payment
  lineItems?: LineItems
  poNumber?: string
  customer?: Customer
  billTo?: BillTo
  shipTo?: ShipTo
  customerIP?: string
  userFields?: UserFields
}

interface Customer {
  type?: string
  id?: string
  email?: string
}

interface UserFields {
  userField: UserField[]
}

interface UserField {
  name: string
  value: string
}

interface ShipTo {
  firstName?: string
  lastName?: string
  company?: string
  address?: string
  city?: string
  state?: string
  zip?: string
  country?: string
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
  phoneNumber?: string
  faxNumber?: string
}

interface LineItems {
  lineItem: LineItem
}

interface LineItem {
  itemId: string
  name: string
  description: string
  quantity: string
  unitPrice: string
}

interface Payment {
  opaqueData: OpaqueData
}

interface OpaqueData {
  dataDescriptor: string
  dataValue: string
}

/**
 *
 *  Create an Accept Payment Transaction
 *
 *  Use this function to create an Authorize.net payment transaction request,
 *  using the Accept Payment nonce in place of card data.
 *
 */

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
//         "amount": "5",
//         "payment": {
//           "opaqueData": {
//             "dataDescriptor": "COMMON.ACCEPT.INAPP.PAYMENT",
//             "dataValue": "1234567890ABCDEF1111AAAA2222BBBB3333CCCC4444DDDD5555EEEE6666FFFF7777888899990000"
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
//       "poNumber": "456654",
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
//       }
//     }
//   }
// }
