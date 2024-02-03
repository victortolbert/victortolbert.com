export default definePayloadPlugin(() => {
  // Identifies the AwesomeFramework class
  // And then gets the data (server-side)
  definePayloadReducer('AwesomeFramework', (data) => {
    if (data instanceof AwesomeFramework) {
      return {
        name: data.name,
      }
    }
  })

  // "Revive" the payload
  // Take the data -> create a new class instance
  definePayloadReviver('AwesomeFramework', (data) => {
    return new AwesomeFramework(data.name)
  })
})
