import * as querystring from 'node:querystring'

export class UrlEncoderDecoder {
  static encode(url: string): string {
    try {
      const decodedUrl = decodeURIComponent(url)
      const parts = decodedUrl.split('?')
      const baseUrl = parts[0]
      const queryString = parts.slice(1).join('?')
      const encodedQueryString = querystring.stringify(querystring.parse(queryString))
      const encodedUrl = baseUrl + (encodedQueryString ? `?${encodedQueryString}` : '')
      return encodeURIComponent(encodedUrl)
    }
    catch (error) {
      throw new Error(`Unable to encode URL: ${error.message}`)
    }
  }

  static decode(encodedUrl: string): string {
    try {
      const decodedUrl = decodeURIComponent(encodedUrl)
      const parts = decodedUrl.split('?')
      const baseUrl = parts[0]
      const queryString = parts.slice(1).join('?')
      const decodedQueryString = querystring.stringify(querystring.parse(queryString))
      const decodedUrlWithQuery = baseUrl + (decodedQueryString ? `?${decodedQueryString}` : '')
      return decodedUrlWithQuery
    }
    catch (error) {
      throw new Error(`Unable to decode URL: ${error.message}`)
    }
  }
}

export default UrlEncoderDecoder
