//require the mongoose library
const mongoose = require('mongoose');
//connnect to db
mongoose.connect('mongodb+srv://shivacheripally14:rOnPqyxsxZ17xsF5@cluster0.igq0tjf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
//aquire the connection
const db = mongoose.connection;
//if Error
db.once('error',console.error.bind(console,'Error connecting to db'));
//if succesfully connected then sent a message
db.once('open',function(){
    console.log('Successfully Connected to DataBase');
});
