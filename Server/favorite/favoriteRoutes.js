 const router = require('express').Router();
const {getAllFavorite} = require("./favoriteController")

router.post('/:id', getAllFavorite)





 module.exports = router;