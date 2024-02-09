export interface ValidateCustomerPaymentProfileResponse {
  directResponse: string
  messages: Messages
}

interface Messages {
  resultCode: string
  message: Message[]
}

interface Message {
  code: string
  text: string
}

// Example:
// {
//   "directResponse": "1,1,1,This transaction has been approved.,AEFDID,Y,10589,none,Test transaction for ValidateCustomerPaymentProfile.,0.00,CC,auth_only,MerchantCustID,John,Doe,,123 Main St.,Bellevue,WA,98004,US,000-000-0000,,customer-profile-email@here.com,,,,,,,,,0.00,0.00,0.00,FALSE,none,1F2335108CFF0B3AB540A08690010FB5,P,2,,,,,,,,,,,XXXX1111,Visa,,,,,,,0TEM8PSX492UM1QOOOQQA67,,,,,,,,,,",
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
