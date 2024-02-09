export interface ChargeCustomerProfileResponse {
  transactionResponse: TransactionResponse
  refId: string
  messages: Messages
}

interface TransactionResponse {
  responseCode: string
  authCode: string
  avsResultCode: string
  cvvResultCode: string
  cavvResultCode: string
  transId: string
  refTransID: string
  transHash: string
  testRequest: string
  accountNumber: string
  accountType: string
  messsages: TransactionResponseMessage[]
  transHashSha2: string
  profile: Profile
  SupplementalDataQualificationIndicator: number
  networkTransId: string
}

interface Messages {
  resultCode: string
  message: Message[]
}

interface Message {
  code: string
  text: string
}

interface TransactionResponseMessage {
  code: string
  description: string
}

interface Profile {
  customerProfileId: string
  paymentProfile: PaymentProfile
}

interface PaymentProfile {
  paymentProfileId: string
}

// Example:
// {
//   "transactionResponse": {
//     "responseCode": "1",
//     "authCode": "4JYKA2",
//     "avsResultCode": "Y",
//     "cvvResultCode": "P",
//     "cavvResultCode": "2",
//     "transId": "2157786076",
//     "refTransID": "",
//     "transHash": "",
//     "testRequest": "0",
//     "accountNumber": "XXXX2222",
//     "accountType": "Visa",
//     "messages": [
//       {
//         "code": "1",
//         "description": "This transaction has been approved."
//       }
//     ],
//     "transHashSha2": "",
//     "profile": {
//       "customerProfileId": "40338125",
//       "customerPaymentProfileId": "1000177237"
//     },
//     "SupplementalDataQualificationIndicator": 0,
//     "networkTransId": "6PUPU4XXWSO7CCQL0YJNYY7"
//   },
//   "refId": "123456",
//   "messages": {
//     "resultCode": "Ok",
//     "message": [
//       {
//         "code": "I00001",
//         "text": "Successful."
//       }
//     ]
//   }
// }
