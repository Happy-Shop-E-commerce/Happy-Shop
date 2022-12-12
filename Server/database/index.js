var mongoose = require("mongoose");
var mongoUri = "";

mongoose.connect(mongoUri, () => {
  console.log("Database connected  :)");
});
var db = mongoose.connect(mongoUri);

module.exports = db;
