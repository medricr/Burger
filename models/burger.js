// Bring in the orm 
var orm = require('../config/orm.js');
// Construct the burger helper functions which will talk to the ORM
var burger = {
    // Return all items in the database
    all: function(cb){
        orm.selectAll('burger_table',function(res){
            cb(res);
        })
    },
    // Create a new burger
    create: function(cols, vals, cb){
        orm.insertOne('burger_table',cols,vals,function(res){
            cb(res);
        })
    },
    // Update the state of an item in the database
    update: function(objColVals, condition, cb){
        orm.updateOne('burger_table',objColVals, condition, function(res){
            cb(res);
        });
    }
}
// Export the burger object
module.exports = burger;