const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Checkin, Strain } = require('../../db/models');
const router = express.Router();


router.post('/', asyncHandler(async (req, res, next)=> {
    const {userId, strainId, text} = req.body
    const checkin = await Checkin.create({userId, strainId, text})

    return res.json({checkin})
}))

router.get('/', asyncHandler(async(req, res)=> {
    let checkins = Checkin.findAll()
    res.json(checkins)
}))

module.exports = router;
