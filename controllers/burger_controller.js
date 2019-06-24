var express = require('express');
// Set up router object
var router = express.Router();
//  Bring in the burger model
var burger = require('../models/burger.js');
// ******************************************************************
// Routes for getting and manipulating data from the database
// ******************************************************************

// Route for retrieving and showing all data in the database. When other actions are completed, the page is reloaded, defaulting to this route
router.get("/",function(req,res){
    burger.all(function(data){
        var hbsObject = {
            burger_table: data
        };
        res.render('index',hbsObject);
    });
});
// Route for inserting new burgers into the database
router.post('/api/burgers',function(req,res){
    burger.create(['burger_name','devoured'],[req.body.name,false],function(result){
        res.json({id: result.insertId});
    });
});
// Route for "eating" the burgers, moving them from one panel to the other
router.put("/api/burgers/:id",function(req,res){
    var condition = 'id = ' + req.params.id;
    burger.update({
        devoured: true
    },condition, function(result){
        if(result.changedRows == 0){
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
})
// Export the router object
module.exports = router;