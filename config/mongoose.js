//require the mongoose library
const mongoose = require('mongoose');
//connnect to db
mongoose.connect('mongodb://127.0.0.1:27017/Todo_list_db');
//aquire the connection
const db = mongoose.connection;
//if Error
db.once('error',console.error.bind(console,'Error connecting to db'));
//if succesfully connected then sent a message
db.once('open',function(){
    console.log('Successfully Connected to DataBase');
});
