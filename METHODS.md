# Methods.

## How to short?
* From 2.0, shorter got a whole one method.
```js
const { Shorter } = require("shrtco.de");
const YOUR_URL = "example.com";

const shrt = new Shorter(YOUR_URL);

const shorted = await shrt.short();
const shortedWithPassAndEmoji = await shrt.short({
    pass: "HelloWorld",
    emoji: true
});
const shortedWithPassAndCode = await shrt.short({
    pass: "HelloWorld",
    code: "ExampleShortingYooo"
});

console.log(shorted);
console.log(shortedWithPassAndEmoji);
console.log(shortedWithPassAndCode)
```
* In params you can set pass, make emojicode or your code.
```json
{
    pass: "Here your password.",
    code: "HereYourCode",
    emoji: true
}
```

## Ok, how to get info about code?
* Simple.
```js
const { Info } = require("shrtco.de");
const YOUR_CODE = "example";

const info = new Info(YOUR_CODE);

console.log(await info)
```
* I wrote that markdown at 3:00pm.