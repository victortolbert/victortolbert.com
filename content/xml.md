# XML

## OPML

OPML (Outline Processor Markup Language) is an XML format for outlines (defined as "a tree, where each node contains a set of named attributes with string values". Originally developed by UserLand Software as a native file format for the outliner application in its Radio UserLand product, it has since been adopted for other uses, the most common being to exchange lists of web feeds between web feed aggregators.

## XBEL

The XML Bookmark Exchange Language (XBEL), is an open XML standard for sharing Internet URIs, also known as bookmarks (or favorites in Internet Explorer).

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE xbel>
<xbel version="1.0">
    <folder folded="no">
        <title>Wikimedia resources</title>
        <folder folded="yes">
            <title>Wikimedia websites</title>
            <bookmark href="https://en.wikipedia.org/">
                <title>Wikipedia</title>
            </bookmark>
            <bookmark href="https://en.wikibooks.org/">
                <title>Wikibooks</title>
            </bookmark>
        </folder>
    </folder>
</xbel>
```

[XBEL]: https://en.wikipedia.org/wiki/XBEL ""
[OPML]: https://en.wikipedia.org/wiki/OPML
