let scode = require("../index.js"),
    url = "somesitewighrandomed"+ Math.round(Math.random() * 999999) + "numbersfortestthiscrapmodulefromtailsjs.com",
    pass = "examplepass";

scode.pass({ url, pass })
        .then(function(result){
            console.log(result);
        });

