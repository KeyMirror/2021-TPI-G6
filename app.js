const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// express app
const app = express();

// middlewares
const { handlerNotFound } = require('./middlewares');

// routes
const indexRouter = require('./presentation/routes/index');
const notificationsRouter = require('./presentation/routes/notifications.routes'); 

// uses routes
app.use('/', indexRouter);
app.use('/notifications', notificationsRouter);

// uses modules
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// catch 404 and forward to error handler
app.use(handlerNotFound);

module.exports = app;
