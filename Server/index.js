var express = require("express");

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var port = 4000;

app.listen(port, () => {
  console.log("yup connected : " + port);
});

