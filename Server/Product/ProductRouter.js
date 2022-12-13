const router = require("express").Router();
const post = require('./ProductSchema.js') 
const auth = require("../middleware/auth") 
const admin = require("../middleware/admin")
  const {getAll,getOne,deleteOne,createOne,updateOne }= require('./ProductController')

   router.get("/",getAll)
    router.get("/:id",getOne)

    router.delete("/:id",[auth,admin],deleteOne)
    router.put("/:id",[auth,admin],updateOne)
    router.post("/",[auth,admin],createOne)

    module.exports = router;