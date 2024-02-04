fetch() global function

Note: This feature is available in Web Workers

The global fetch() method starts the process of fetching a resource from the network, returning a promise that is fulfilled once the response is available.

The promise resolves to the Response object representing the response to your request.

A fetch() promise only rejects when a network error is encountered (which is usually when there's a permissions issue or similar). A fetch() promise does not reject on HTTP errors (404, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.

The fetch() method is controlled by the connect-src directive of Content Security Policy rather than the directive of the resources it's retrieving.
