import type { MerchantAuthentication } from '~/types'

/**
 *  Get Merchant Details
 *
 *  Request object for fetching merchant details.
 *
 *  Call this function and supply your authentication information to receive
 *  merchant details in the response. The information that is returned is
 *  helpful for OAuth and Accept integrations.
 *
 *  Generate a PublicClientKey only if one is not generated or is not active
 *  Only the most recently generated active key is returned.
 *
 * @example
 * ```typescript
 * const request: GetMerchantDetailsRequest = {
 *   merchantAuthentication: {
 *     name: "8dzC8Xb48hf",
 *     transactionKey: "5s59CE9D9Jb4Cmwr",
 *   },
 * };
 * ```
 *
 * @see {@link https://developer.authorize.net/api/reference/index.html#transaction-reporting-get-merchant-details|Authorize.Net API Reference}
 *
 * @public
 */
export interface GetMerchantDetailsRequest {
  /**
   * Merchant authentication information.
   */
  merchantAuthentication: MerchantAuthentication
}
