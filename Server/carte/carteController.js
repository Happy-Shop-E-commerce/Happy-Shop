// const User = require("../user/userSchema");
// const Product =require('../Product/ProductSchema');
// const carte =require('../carte/catreSchema')



// const postAllcarte= async(req,res)=>{

//     console.log(req.body);
//     const user= await User.findOne({id:req.params.user_id})
//       const userSaved= await user.save()
//     console.log(userSaved);
//     if(user){
//         let product= await new carte({userId:userSaved,
//             productId:req.body._id,
//         productName:req.body.productName,
//     desc:req.body.description,
//     category:req.body.category,
//     price :req.body.price,
//     imageUrl:req.body.imageUrl,
//     color:req.body.color,
//     gender:req.body.gendre,
//     posted_at:req.body.posted_at})
//     product.save()
//     res.send(product)
//     }
   
// }





// module.exports ={postAllcarte}