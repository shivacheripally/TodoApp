const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    taskdata : {
        type : String,
        required : true
    },
    taskcategory:{
        type : String,
        required : true
    },
    date:{
        type: String,
        required: true
    },
    completed:{
        type:Boolean,
        default: false
    }
});

const List = mongoose.model('List',Schema);

module.exports = List;
