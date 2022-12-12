var express = require("express");
var morgan = require("morgan");

var app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var port = 4000;

app.listen(port, () => {
  console.log("yup connected : " + port);
});
