const express = require('express');
const path = require('path');
const port = 7000;
const app = express();
const bodyParser = require('body-parser');

const db = require('./config/mongoose');
const List = require('./models/list');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


app.use(express.urlencoded({extended : true}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('assets'));
app.use(bodyParser.json());

let tasks = [
    {
        "taskdata" : "this is the first sample task",
        "taskcategory" : "work",
        "date" : "1/1/2023"
    },
    {
        "taskdata" : "this is the first sample task",
        "taskcategory" : "Persoal",
        "date" : "1/1/2023"
    }
]

app.get('/',function(req,res){

    List.find({},function(err,tasks){
        if(err){
            console.log('Error while fecthing the data from db');
            return;
        }
        return res.render('home',{
            title : "My Contact LIst",
            taskList : tasks
        });
    });
    
});

app.post('/delete-tasks', function(req, res) {
    const ids = req.body.ids; // Array of task ids to delete
    List.deleteMany({_id: {$in: ids}}, function(err) {
      if (err) {
        console.log('Error while deleting tasks:', err);
        return res.status(500).send('Internal server error');
      }
      return res.redirect('back');
    });
});
  

app.post('/create-task',function(req,res){
    List.create({
        taskdata : req.body.taskdata,
        taskcategory : req.body.taskcategory,
        date: req.body.date
    },function(err,newTask){
        if(err){
            console.log("error white sending the data yo server");
            return;
        }
        return res.redirect('back');
    }
    );
});


app.listen(port,function(err){
    if(err){
        console.log(`Error while running the server : ${err}`);
        return;
    }
    console.log(`Server is up and running on port : ${port}`);
});