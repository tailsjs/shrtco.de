let shrtcode = require("./index.js"),
    url = "somesitewighrandomed"+ Math.round(Math.random() * 999999) + "numbersfortestthiscrapmodulefromtailsjs.com",
    pass = "examplepass";

shrtcode.passShort(url, pass)
        .then(function(result){
            console.log(result);
        });

