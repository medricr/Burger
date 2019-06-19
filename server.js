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
// start server listening
app.listen(PORT,function(){
    console.log('app listening on port ' + PORT);
})


