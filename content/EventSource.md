# EventSource

The EventSource interface is web content's interface to [server-sent events]().

An EventSource instance opens a persistent connection to an HTTP server, which sends events in text/event-stream format. The connection remains open until closed by calling `EventSource.close()`.
