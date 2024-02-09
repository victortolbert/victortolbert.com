export interface CreateCustomerProfileResponse {
  customerProfileId: string
  customerPaymentProfileIdList: string[]
  customerShippingAddressIdList: string[]
  validationDirectResponseList: string[]
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
//   "customerProfileId": "527262",
//   "customerPaymentProfileIdList": [
//     "86"
//   ],
//   "customerShippingAddressIdList": [],
//   "validationDirectResponseList": [
//           "1,1,1,This transaction has been approved.,AJ10K8,Y,10585,none,Test transaction for ValidateCustomerPaymentProfile.,0.00,CC,auth_only,MerchantCustID,Customer FirstName,Customer LastName,,123 Main St.,Bellevue,WA,98004,US,123-123-1235,,customer-profile-email@here.com,,,,,,,,,0.00,0.00,0.00,FALSE,none,675F28BF1C590B17CD2892CD75EC4B67,P,2,,,,,,,,,,,XXXX1111,Visa,,,,,,,0STSMT7WLO5D80U0KJR4Z9A,,,,,,,,,,"
//   ],
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
