const mongoose = require('mongoose');
const { schema } = require('./Blood.schema')

const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        require:true
    },
    isAdmin:{
        type:Boolean,
        require:false
    },
    bloodRequested:[],
    bloodApproved:[]
})

module.exports = mongoose.model('User',UserSchema);