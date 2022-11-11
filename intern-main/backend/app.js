// main library
const express = require('express');

// access
const cors = require('cors');

// morgan - printing
const morgan = require('morgan');

// env variable
const dotenv = require('dotenv');
dotenv.config();

// routes
const userRoute = require('./routes/user');
const app = express();

app.use(cors());
app.use(morgan('dev'));

app.use('/user', userRoute);

module.exports = app;
