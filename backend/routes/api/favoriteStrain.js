const express = require('express')
const asyncHandler = require('express-async-handler');
const { FavoriteStrain } = require('../../db/models');
const router = express.Router();

router.post('/', asyncHandler(async(req, res)=> {
    const {userId, strainId} = req.body
    const fav = await FavoriteStrain.create({userId, strainId})
    return res.json({fav})
}))

router.delete('/:id/', asyncHandler(async(req, res)=>{
    const id = req.params
    const fav = await FavoriteStrain.findByPk(id);
    await fav.destroy();
    res.json({message: "Fav destroyed successfully!"});
}))


module.exports = router;
