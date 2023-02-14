const express = require('express');
const userRouter = express.Router();
const verifyToken = require('../../middelware/auth');
const {
    addUser,
    login,
    checkLogin,
    getAllUsers,
    getUser
} = require('./user.controller');

userRouter.post('/addUser',addUser);
userRouter.post('/login',login);
userRouter.post('/getUserBlood',getUser);
userRouter.post('/checkLogin',verifyToken,checkLogin);
userRouter.post('/getAllUser',verifyToken,getAllUsers);

module.exports = userRouter;