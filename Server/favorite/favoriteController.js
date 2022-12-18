const User= require("../user/userSchema");
const Product =require('../Product/ProductSchema');
const favorite =require('./favoriteSchema')



const getAllFavorite= async(req,res)=>{

    console.log(req.body);
    const user= await User.findOne({id:req.params._id})
      const userSaved= await user.save()
    console.log(userSaved);
    if(userSaved){
        let product= await new favorite({userId:userSaved,
            productId:req.body._id,
        productName:req.body.productName,
    desc:req.body.description,
    category:req.body.category,
    price :req.body.price,
    imageUrl:req.body.imageUrl,
    color:req.body.color,
    gender:req.body.gendre,
    posted_at:req.body.posted_at})
    product.save()
    res.send(product)
    }
   
}





module.exports ={getAllFavorite}