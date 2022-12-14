var mongoose = require('mongoose');
const db = require('../database/index.js');
mongoose.Promise = global.Promise;

var userSchema = mongoose.Schema({
    name:String,
    email:String,
    pwd:String,
    isAdmin : Boolean,
   
  
    
});
 

module.exports = mongoose.model("user",userSchema);