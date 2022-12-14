let mongoose = require("mongoose");
const db = require("../database/index.js");
mongoose.Promise = global.Promise;

let userSchema = mongoose.Schema({
  name: String,
  email: String,
  pwd: String,
});

module.exports = mongoose.model("user", userSchema);
