const express = require('express');
const bloodRouter = express.Router();
const verifyToken= require('../../middelware/auth')
const {
    getAllBlood,
    getBloodByUsername,
    addBlood,
    deleteBlood,
    updataBlood,
    requestBlood
} = require('./Blood.controller');

bloodRouter.post('/getAllBloods',verifyToken,getAllBlood);
bloodRouter.post('/getBlood/:name',verifyToken,getBloodByUsername);
bloodRouter.post('/addBlood',verifyToken,addBlood);
bloodRouter.post('/updateBlood',verifyToken,updataBlood);
bloodRouter.post('/requestBlood',verifyToken,requestBlood);
bloodRouter.delete('/deleteBlood',verifyToken,deleteBlood);

module.exports = bloodRouter