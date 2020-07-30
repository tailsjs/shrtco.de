let shrtcode = require("./index.js"),
    link = "example.com";

shrtcode.emojiCode(link)
        .then(function(result){
            console.log(result);
        });

