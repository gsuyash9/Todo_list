var mongoose = require('mongoose');
var bodyParser = require('body-parser');
// require('dotenv').config();
// var data = [{item: 'Task no.1'},{item: 'Task no.2'},{item: 'Task no.3'}];

mongoose.connect('mongodb+srv://myfirstdb:993565@cluster0.i5wkz.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser: true});

// Constructing Schema
const todoSchema = new mongoose.Schema({

    item: String

});

var Todo = mongoose.model('Todo', todoSchema);


var urlencodedParser = bodyParser.urlencoded({ extended: true });



module.exports = function(app){

app.get('/todo', (req,res) => {

    // Getting data from MongoDB

    Todo.find({}, (err,data) => {

        if(err)
            throw err;
        
        res.render('todo',{todos: data});

    });
    
    

});

app.post('/todo',urlencodedParser,(req,res) => {

    // Adding to Database

    var item = Todo(req.body).save((err,data) => {

        if(err)
            throw err;

        res.render('todo', {todos: data});

    });

    

});

app.delete('/todo/:item',(req,res) => {

    console.log('request received\n');

    Todo.find({item: req.params.item.trim().replace( /\-/g," ")}).remove((err,data) => {

        console.log('item removed\n');

        if(err)
            throw err;

        res.render('todo', {todos: data});

    });

   

  

});

};