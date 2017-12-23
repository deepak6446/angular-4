var Mongoose = require('mongoose');
var db = require('../config/connectMongoose.js');

var userSchema =  new Mongoose.Schema ({
    username : { type : String, required : true, unique: true, index: true, trim: true},
    password : { type : String, required : true},
});

userSchema.index({username: 1}, {unique: true}); //combine key index
var user = db.model('users', userSchema); //put collection name here

module.exports = user;