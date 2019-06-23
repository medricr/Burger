// require connection to mysql from connection.js
var connection = require('./connection.js');
// set up SQL statement functions
var orm = {
    // function which shows all items in the database
    selectAll: function(table, cb){
        var queryString = 'SELECT * FROM ??';
        connection.query(queryString, [table], function(err,result){
            if(err) throw err;
            console.log(result);
            cb(result);
        })
    },
    // TODO: function which allows the user to insert one entry into the databse
    insertOne: function(table, col1, col2, val1, val2){
        var queryString = 'INSERT INTO ' + table;
        queryString += ' (';
        queryString += col1.toString();
        queryString += ',';
        queryString += col2.toString();
        queryString += ') VALUES (';
        queryString += val1.toString();
        queryString += ',';
        queryString += val2;
        queryString += ')';
    }
}

module.exports = orm;