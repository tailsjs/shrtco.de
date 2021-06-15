# Change Log
All notable changes to this project will be documented in this file.
 
## [1.0.4] - 2021-06-15

## Added
CHANGELOGS.md and METHODS.md

## Updated
Methods has been shorted.

```js
// OLD
shrtcode.shorten(link)
shrtcode.customShorten(link, code)
shrtcode.emojiCode(link)
shrtcode.passShort(link, pass)

// NEW
scode.short({ url })
scode.custom({ url, code })
scode.emoji({ url })
scode.pass({ url, pass })
```

README.md has beed shorted.

## [1.0.3] - 2021-06-04

## Added
Typings.

## [1.0.2] - 2020-07-30

## Added
New methods!
```js
shrtcode.customShorten(link, code)
shrtcode.emojiCode(link)
shrtcode.passShort(link, pass)
```

## [1.0.1] - 2019-07-19

## Fixes
Fixed README.md

## [1.0.0] - 2019-07-19

## RELEASE!

 <!--
- [PROJECTNAME-UUUU](http://tickets.projectname.com/browse/PROJECTNAME-UUUU)
  MINOR Fix module foo tests
- [PROJECTNAME-RRRR](http://tickets.projectname.com/browse/PROJECTNAME-RRRR)
  MAJOR Module foo's timeline uses the browser timezone for date resolution 
-->


The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).