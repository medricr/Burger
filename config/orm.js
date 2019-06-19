// require connection to mysql from connection.js
var connection = require('./connection.js');
// set up SQL statement functions
var orm = {
    // function which shows all items in the database
    selectAll: function(table){
        var queryString = 'SELECT * FROM ??';
        connection.query(queryString, [table], function(err,result){
            if(err) throw err;
            console.log(result);
        })
    },
    // TODO: function which allows the user to insert one entry into the databse
}

module.exports = orm;