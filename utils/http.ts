// import Cache from '~/cache'

export class HTTP {
  static async get(url: string) {
    try {
      // const cached = Cache.get(url)
      // if (cached) return cached
      const response = await fetch(url)
      return await response.json()
    }
    catch (err) {
      alert(err)
    }
  }
}
