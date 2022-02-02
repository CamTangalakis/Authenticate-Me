const express = require('express')
const asyncHandler = require('express-async-handler');
const { Rating } = require('../../db/models');
const router = express.Router();

// router.get('/', asyncHandler(async(req, res)=> {
//     let ratings = await Rating.findAll()
//     res.json(ratings)
// }))

// router.post('/', asyncHandler(async(req, res) => {
//     const {strainId, rating} = req.body
//     const rating = await Rating.create({strainId, rating})
//     return res.json(rating)
// }))

module.exports = router;
