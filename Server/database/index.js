var mongoose = require("mongoose");
mongoose.set('strictQuery', false);
var mongoUri = "mongodb+srv://happy:shop@cluster0.tq8hta3.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoUri, () => {
  console.log("Database connected  :)");
});
var db = mongoose.connect(mongoUri);

module.exports = db;
  
