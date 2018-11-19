let mongoose = require('mongoose');

// Tell mongoose to use built in Promise library
mongoose.Promise = global.Promise;
// Connect to the database
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};