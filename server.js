//Dependencies 
//=================================================================
var express = require("express");
var bp = require("body-parser");
var path = require("path");

//Sets Up the Express App
//=================================================================
var app = express();
var PORT = 3000;

//Sets Up the Express app to handle data parsing
//=================================================================
app.use(bodyParser.urlendcoded({
    extended: true
}));


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
