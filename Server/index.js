var express = require("express");
var db =require('./database/index')

var app = express();
app.get("/",(req,res)=>{
  res.status(200).send("hello from the other side")
})
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/product', require('./Product/ProductRouter'))
var port = 4000;

app.listen(port, () => {
  console.log("yup connected : " + port);
});
