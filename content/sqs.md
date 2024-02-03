## SQS

We use SQS, which can hold an infinite amount of requests. It’s Multi-AZ, meaning data is backed up across multiple areas of the country to ensure we don’t lose any data. We also utilize SQS FIFO (first in, first out), which means that your pageviews are guaranteed to be processed in the order that they came in.
