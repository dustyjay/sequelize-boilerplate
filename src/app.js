require('dotenv').config();
const express = require('express');
// const bodyParser = require('body-parser');
const app = express();
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api', indexRouter);

module.exports = app;
