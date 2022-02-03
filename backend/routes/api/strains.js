const express = require('express')
const asyncHandler = require('express-async-handler');
const { Strain } = require('../../db/models');
const router = express.Router();

router.get('/', asyncHandler(async(req, res)=> {
    let strains = await Strain.findAll()
    res.json(strains)
}))

router.post('/', asyncHandler(async(req, res) => {
    const {name, strainType, description, photo, brand} = req.body
    const strain = await Strain.create({name, strainType, description, photo, brand})
    return res.json(strain)
}))

module.exports = router;
