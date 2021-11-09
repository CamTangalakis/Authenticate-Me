const express = require('express')
const asyncHandler = require('express-async-handler');
const { Strain } = require('../../db/models');
const router = express.Router();

router.get('/', asyncHandler(async(req, res)=> {
    let strains = Strain.findAll()
    res.json(strains)
}))

module.exports = router;
