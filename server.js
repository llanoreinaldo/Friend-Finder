//Dependencies 
//=================================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Sets Up the Express App
//=================================================================
var app = express();
var appPORT = process.env.PORT || 8080;

//Enables Express to serve static files.
app.use(express.static('app/public'))

//Sets Up the Express app to handle data parsing
//=================================================================
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Require additional routing files for API Routes and HMTL Routes
require('.app/routing/apiRoutes.js')(app);
require('.app/routing/htmlRoutes.js')(app);


// Starts the server to begin listening
// =============================================================
app.listen(appPORT, function () {
    console.log("App listening on PORT " + appPORT);
});