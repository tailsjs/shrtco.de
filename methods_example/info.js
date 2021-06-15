let scode = require("../index.js"),
    code = "example";

scode.info({ code })
        .then(function(result){
            console.log(result);
        });

