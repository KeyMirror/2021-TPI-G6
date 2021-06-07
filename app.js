const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

// express app
const app = express();
app.use(cors()); 

// middlewares
const { handlerNotFound } = require('./middlewares');

// routes
const indexRouter = require('./presentation/routes/index');
const notificationsRouter = require('./presentation/routes/notifications.routes');
const reportsRouter = require('./presentation/routes/reports.routes')

// uses routes
app.use('/', indexRouter);
app.use('/notifications', notificationsRouter);
app.use('/reports', reportsRouter);

// uses modules
app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// catch 404 and forward to error handler
app.use(handlerNotFound);

// static
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/public')

module.exports = app;
