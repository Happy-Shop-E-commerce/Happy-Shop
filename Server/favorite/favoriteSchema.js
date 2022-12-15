var mongoose = require('mongoose');

  const favoriteSchema= mongoose.Schema(
    { userId:String,
        productId:String,
        productName:String,
        desc:String,
        category:String,
        price :String,
        imageUrl:String,
        color:String,
        gender:String,
        posted_at:String
        
    }
  )
  module.exports = mongoose.model("favorite",favoriteSchema);