var bodyParser = require('body-parser');
var data=[{item:"get milk"},{item: "get haircut" },{item: "workout"}];

var urlencodedParser = bodyParser.urlencoded({ extended: false })

module.exports= function(app){
    app.get('/todo',function(req,res){
        res.render('todo',{todos: data});
    })

    app.post('/todo',urlencodedParser,function(req,res){
        data.push(res.body);
        res.json({todo:data}); 
    })

    app.delete('/todo',(req,res)=>{

    })

}