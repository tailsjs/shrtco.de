let shrtcode = require("./index.js"),
    link = "example.com";

shrtcode.shorten(link)
        .then(function(result){
            console.log(result);
        });

