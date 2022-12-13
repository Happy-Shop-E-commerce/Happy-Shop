module.exports = function (req,res,next) {  
if(!req.admin.isAdmin) { 
    return res.status(403).send('you are not Admin user')
}

next() ; 

}