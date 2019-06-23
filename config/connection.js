// require mysql
var mysql = require("mysql");
// set up connection to mysql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "burgers_db"
});
// open connection to database
connection.connect(function(err){
    if(err) throw err;
    console.log('connected as id ' + connection.threadId);
})
// export connection for use elsewhere in the program
module.exports = connection;