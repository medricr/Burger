var orm = require('../config/orm.js');

var burger = {
    all: function(cb){
        orm.selectAll('burger_table',function(res){
            cb(res);
        })
    },
    create: function(cols, vals, cb){
        console.log('create fire');
        orm.insertOne('burger_table',cols,vals,function(res){
            cb(res);
        })
    },
    update: function(objColVals, condition, cb){
        orm.updateOne('burger_table',objColVals, condition, function(res){
            console.log(res);
            cb(res);
        });
    }

}

module.exports = burger;