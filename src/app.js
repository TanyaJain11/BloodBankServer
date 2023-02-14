const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const bloodRouter = require('./Routes/Blood/Blood.router');
const userRouter = require('./Routes/User/user.router');
const messageRouter = require('./Routes/Messages/Messages.router');

app.use(express.json({}));
app.use(morgan('combined'));
app.use(cors());

app.use('/blood',bloodRouter);
app.use('/user',userRouter);
app.use('/message',messageRouter);

module.exports = app;