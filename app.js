const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// express app
const app = express();

// routes
const indexRouter = require('./routes/index');
const notificationsRouter = require('./routes/notifications.routes'); 

// uses routes
app.use('/', indexRouter);
app.use('/notifications', notificationsRouter);

// uses modules
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

module.exports = app;
