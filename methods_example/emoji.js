let scode = require("../index.js"),
    url = "example.com";

scode.emoji({ url })
        .then(function(result){
            console.log(result);
        });

