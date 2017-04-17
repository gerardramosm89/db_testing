const express = require('express');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/muber');

app.use(bodyParser.json());

routes(app);

module.exports = app;