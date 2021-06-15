let scode = require("../index.js"),
    url = "example.com",
    code = "shrtcode_example" + Math.round(Math.random() * 999999);

scode.custom({ url, code })
        .then(function(result){
            console.log(result);
        });

