// Import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

// Create a new express application named 'app'
const app = express();

// Set our backend port to be either an environment variable or port 5000
const port = process.env.PORT || 5000;

// This application level middleware prints incoming requests to the servers console, useful to see incoming requests
app.use((req, res, next) => {
    console.log(`Request_Endpoint: ${req.method} ${req.url}`);
    next();
});

// Configure the bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Configure the CORs middleware
app.use(cors());

// Require Route
const api = require('./routes/routes');

// Configure app to use route
app.use('/api/v1/', api);

// This middleware informs the express application to serve our compiled React files
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
};

// Catch any bad requests
app.get('*', (req, res) => {
    res.status(200).json({
        msg: 'Catch All'
    });
});


var foo = function(){
    var userInput;

    userInput = "addition";
console.log(userInput);

    if (userInput === "multiply"){
        operation = "multiply";
    }

    if (userInput === "addition"){
        operation = "addition";
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
app.post('/', function(req, res) {
  console.log(req.body);
  res.send(200);
  foo();
});
// Configure our server to listen on the port defiend by our port variable
app.listen(port, () => console.log(`BACK_END_SERVICE_PORT: ${port}`));

