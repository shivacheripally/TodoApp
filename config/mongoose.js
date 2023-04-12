//require the mongoose library
const mongoose = require('mongoose');
//connnect to db
mongoose.connect('mongodb+srv://shivacheripally14:s4fkxGKq9XaXzelg@cluster0.evidqem.mongodb.net/?retryWrites=true&w=majority');
//aquire the connection
const db = mongoose.connection;
//if Error
db.once('error',console.error.bind(console,'Error connecting to db'));
//if succesfully connected then sent a message
db.once('open',function(){
    console.log('Successfully Connected to DataBase');
});

// s4fkxGKq9XaXzelg

// mongodb+srv://shivacheripally14:<password>@cluster0.evidqem.mongodb.net/?retryWrites=true&w=majority