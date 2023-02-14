const express = require('express');
const messageRouter = express.Router();
const verifyToken = require('../../middelware/auth');
const {
    postMessage,
    getAllMessages
} = require('./Messages.controller');

messageRouter.post('/postMessage',verifyToken,postMessage);
messageRouter.post('/getAllMessages',verifyToken,getAllMessages);

module.exports = messageRouter;