function apendJSON(){

    if (userInput === "multiply"){
        operation = "multiply";
    }

    console.log(operation);


    let obj = {
        type: "calculate",
        action: operation,
        keys: "max_temp"
    };
    
    let fs = require('fs'),
    jsonData = JSON.stringify(obj);
    
    fs.writeFile("sample.json", jsonData, function(err)
    
    {
    
        if (err){
            console.log(err);
        }
    });

}
