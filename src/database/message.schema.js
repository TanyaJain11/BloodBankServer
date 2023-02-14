const mongoose = require('mongoose');

const MessagesSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true
    },
    phoneNo:{
        type:Number,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true,
    }
})

module.exports = mongoose.model('Messages',MessagesSchema);