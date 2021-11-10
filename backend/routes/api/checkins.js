const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { Checkin } = require('../../db/models');
const router = express.Router();

const validateCheckin = [
    check('text')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Please provide a comment.'),
    check('strainId')
        .exists({checkFalsy: true})
        .notEmpty()
        .withMessage('Please pick a strain.'),
    handleValidationErrors
]

router.post('/', validateCheckin, asyncHandler(async (req, res, next)=> {
    const {userId, strainId, text} = req.body
    const checkin = await Checkin.create({userId, strainId, text})

    return res.json({checkin})
}))

router.get('/', asyncHandler(async(req, res)=> {
    let checkins = await Checkin.findAll()
    res.json(checkins)
}))

router.put(`/:id`, asyncHandler(async(req, res)=> {
    const {id} = req.params
    const {text} = req.body
    const checkin = await Checkin.findByPk(id);
    await checkin.put({text})
    res.send('Checkin edited!!!')
}))

router.delete(`/:id`, asyncHandler(async(req, res)=> {
    const {id} = req.params
    // console.log(id, '<--------------')
    const checkin = await Checkin.findByPk(id);
    await checkin.destroy();
    res.send("Checkin destroyed successfully!");
}))

module.exports = router;
