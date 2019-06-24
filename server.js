// require express for running the server
var express = require('express');
// set up express app
var app = express();
var PORT = process.env.PORT || 8080;
// set up express to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// allow app to serve static files
app.use(express.static("public"));
// set up handlebars functionality
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Bring in the routes from the controller file
var routes = require("./controllers/burger_controller.js");
// Tell the app to use the above routes
app.use(routes);
// start server listening
app.listen(PORT,function(){
    console.log('app listening on port ' + PORT);
})


