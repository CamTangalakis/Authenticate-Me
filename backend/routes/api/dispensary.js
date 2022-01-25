const express = require('express')
const asyncHandler = require('express-async-handler');
const { Dispensary } = require('../../db/models');
const router = express.Router();

router.get('/', asyncHandler(async(req, res)=> {
    let dispensaries = await Dispensary.findAll()
    res.json(dispensaries)
}))

module.exports = router;
