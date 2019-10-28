var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 3000;

//connecting static files
app.use(express.static("public"));

//connecting body parser elements
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//connecting handlebars for template defaultLayout and Main
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Routes will throw an error untill until controllers are added.
var routes = require("./controllers/burgers_controller.js");
app.use(routes); 

//shows up when node server.js is run in terminal
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});