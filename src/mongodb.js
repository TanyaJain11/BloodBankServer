const mongoose = require('mongoose');

require('dotenv').config({ path:'mongodb://localhost:27017/Blood-Bank' });

mongoose.set('strictQuery',true);

mongoose.connection.on('open',()=>{
    console.log('Database Connected!');
});
async function connectDatabase(){
    try {
         await mongoose.connect("mongodb://localhost:27017/Blood-Bank")

        // await mongoose.connect(`${process.env.MONGO_URL}`,{
        //     useNewUrlParser: true, 
        //     useUnifiedTopology: true 
        // });
    } catch (error) {
        console.log(error);
    }
} 

module.exports = connectDatabase;


// const express = require("express");
// const colors = require("colors");
// const moragan = require("morgan");
// const dotenv = require("dotenv");
// const connectDB = require("./config/db");
// const { default: mongoose } = require("mongoose");

//dotenv conig
// dotenv.config();

//mongodb connection
// connectDB();

// mongoose.connect("mongodb://localhost:27017/gas-booking")

