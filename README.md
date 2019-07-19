# shrtco.de
Library for shrtco.de API

# Installing:
## NPM
`
npm install shrtco.de
`
## YARN
`
yarn add shrtco.de
`

# Using:
```js
let shrtcode = require("shrtcode") 
```

## Methods:
Shorten a link
```js
shrtcode.shorten(link)
```
|Argument|Type|Required|Description|
|-|-|-|-|
|link|string|true|Link for shorting|
Return:
```js
{
　"ok": true,
　"result": {
　　"code": "z2d2o",
　　"short_link": "shrtco.de/z2d2o",
　　"full_short_link": "https://shrtco.de/z2d2o",
　　"short_link2": "9qr.de/z2d2o",
　　"full_short_link2": "https://9qr.de/z2d2o",
　　"share_link": "shrtco.de/share/z2d2o",
　　"full_share_link": "https://shrtco.de/share/z2d2o",
　　"original_link": "http://example.org/very/long/link.html"
　}
}
```
Get infos on a short link by some code
```js
shrtcode.info('example') 
```
|Argument|Type|Required|Description|
|-|-|-|-|
|code|string|true|Code for info about shorten link|
Return:
```js
{
　"ok": true,
　"result": {
　　"code": "example",
　　"url": "http://www.example.com/",
　　"password_protected": false,
　　"blocked": false,
　　"created": "2018-05-17 16:46:29",
　　"timestamp": 1526568389
　}
}
```