const router = require("express").Router();
const post = require('./ProductSchema.js')
  const {getAll,getOne,deleteOne,createOne,updateOne }= require('./ProductController')

   router.get("/",getAll)
    router.get("/:id",getOne)

    router.delete("/:id",deleteOne)
    router.put("/:id",updateOne)
    router.post("/",createOne)

    module.exports = router;