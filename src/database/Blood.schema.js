const mongoose = require('mongoose');

const schema = {
    quantity:{
        type:Number,
        required:true
    },
    nameOfDoner:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    bloodGroup:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    }
}

const BloodSchema = new mongoose.Schema(schema)

module.exports = {
    bloodSchema:mongoose.model('Blood',BloodSchema),
    schema:schema
};