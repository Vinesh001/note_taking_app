const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    heading:{
        type:String,
        required:true,
        trim:true
    },
    body:{
        type:String,
        required:true,
        trim:true
    }
}) 

const Note = mongoose.model('Note', noteSchema);

module.exports = Note