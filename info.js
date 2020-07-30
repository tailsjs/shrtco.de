let shrtcode = require("./index.js"),
    code = "example";

shrtcode.info(code)
        .then(function(result){
            console.log(result);
        });

