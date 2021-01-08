var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

//setup template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//Fire controllers
todoController(app);

//listen
app.listen(3006);
console.log("yoo we are online again");
