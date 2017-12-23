var Mongoose = require('mongoose');
Mongoose.Promise = global.Promise;

//replace your connection path and db name here

var path = 'localhost'/*your connection path*/;
var dbName = 'food'/*your dbName*/;

var db = Mongoose.createConnection(path, dbName);

module.exports = db;
