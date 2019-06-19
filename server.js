// require express for running the server
var express = require('express');
// set up express app
var app = express();
var PORT = process.env.PORT || 8080;
// set up express to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// allow app to serve static files
app.use(express.static('public'));
// set up handlebars functionality
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// require mysql
var mysql = require("mysql");
// set up connection to mysql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "movies_db"
});
// open connection to database
connection.connect(function(err){
    if(err) throw err;
    console.log('connected as id ' + connection.threadId);
})
// start server listening
app.listen(PORT,function(){
    console.log('app listening on port ' + PORT);
})


