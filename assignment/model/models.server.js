var mongoose = require('mongoose');
//used in local machine
// var db = mongoose.connect('mongodb://localhost:27017/webdev');

//used in heroku
var db = mongoose.connect('mongodb://');

module.exports = db;
