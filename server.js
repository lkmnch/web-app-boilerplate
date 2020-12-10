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


var multi = function(){
    userInput = "multiply";
    console.log(userInput);
}

var addition = function(){
    userInput = "addition";
    console.log(userInput);
}

var division = function(){
    userInput = "division";
    console.log(userInput);
}

var substraction = function(){
    userInput = "substraction";
    console.log(userInput);
}
//--------------------------------------




var operationJSON = function () {
  
    if (userInput === "multiply") {
        operation = "multiply";
    }

    if (userInput === "addition") {
        operation = "addition";
    }

    if (userInput === "substraction") {
        operation = "substraction";
    }

    if (userInput === "division") {
        operation = "division";
    }


    console.log(operation);

    let obj = {
        type: "calculate",
        action: operation,
        keys: "max_temp"
    };

    let fs = require('fs'),
        jsonData = JSON.stringify(obj);

    fs.writeFile("sample.json", jsonData, function (err) {

        if (err) {
            console.log(err);
        }
    });

}

//_____________________________________________________
app.post('/multi', function (req, res) {
    console.log(req.body);
    res.send(200);
   multi();
  
});

app.post('/addition', function (req, res) {
    console.log(req.body);
    res.send(200);
    addition();
});

app.post('/division', function (req, res) {
    console.log(req.body);
    res.send(200);
    division();
});

app.post('/substraction', function (req, res) {
    console.log(req.body);
    res.send(200);
    substraction();
});




app.post('/operationJson', function (req, res) {
    console.log(req.body);
    res.send(200);
    operationJSON();
  
});



// Configure our server to listen on the port defiend by our port variable
app.listen(port, () => console.log(`BACK_END_SERVICE_PORT: ${port}`));

