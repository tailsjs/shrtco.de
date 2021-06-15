# Methods
Shorten a link
```js
scode.short({ url: "example.com" })
```
|Argument|Type|Required|Description|
|-|-|-|-|
|url|string|true|Url for shorting|

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
scode.info({ code: "example" }) 
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
Shorten a link with custom code
```js
scode.custom({ url: "example.com", code: "example" }) 
```
|Argument|Type|Required|Description|
|-|-|-|-|
|url|string|true|Url for shorting|
|code|string|true|Your code for shorted url|

Return:
```js
{
  ok: true,
  result: {
    code: 'example',
    short_link: 'shrtco.de/example',
    full_short_link: 'https://shrtco.de/example',
    short_link2: '9qr.de/example',
    full_short_link2: 'https://9qr.de/example',
    share_link: 'shrtco.de/share/shrtcode_example767837',
    full_share_link: 'https://shrtco.de/share/example',
    original_link: 'http://example.com'
  }
}
```
Shorten a link by emoji
```js
scode.emoji({ url: "example.com" })
```
|Argument|Type|Required|Description|
|-|-|-|-|
|url|string|true|Url for shorting|

Return:
```js
{
  ok: true,
  result: {
    code: '🎥😦',
    short_link: 'shrtco.de/🎥😦',
    full_short_link: 'https://shrtco.de/🎥😦',
    short_link2: '9qr.de/🎥😦',
    full_short_link2: 'https://9qr.de/🎥😦',
    share_link: 'shrtco.de/share/🎥😦',
    full_share_link: 'https://shrtco.de/share/🎥😦',
    original_link: 'http://example.com'
  }
}
```
Shorten a link with password
```js
scode.pass({ url: "example.com", pass: "example" }) 
```
|Argument|Type|Required|Description|
|-|-|-|-|
|url|string|true|Url for shorting|
|pass|string|true|Your password for shorted url|

Return:
```js
{
  ok: true,
  result: {
    code: 'BnNeu',
    short_link: 'shrtco.de/BnNeu',
    full_short_link: 'https://shrtco.de/BnNeu',
    short_link2: '9qr.de/BnNeu',
    full_short_link2: 'https://9qr.de/BnNeu',
    share_link: 'shrtco.de/share/BnNeu',
    full_share_link: 'https://shrtco.de/share/BnNeu',
    original_link: 'http://example.com'
  }
}
```