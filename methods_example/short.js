let scode = require("../index.js"),
    url = "example.com";

scode.short({ url })
        .then(function(result){
            console.log(result);
        });

