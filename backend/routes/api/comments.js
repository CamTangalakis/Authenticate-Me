const express = require('express')
const asyncHandler = require('express-async-handler');
const { Comment, User, Checkin } = require('../../db/models');
const router = express.Router();

router.post('/', asyncHandler(async (req, res, next)=> {
    const {userId, checkinId, commentBody} = req.body
    const comment = await Comment.newComment({userId, checkinId, commentBody}, User)

    return res.json({comment})
}))

router.get('/:checkinId', asyncHandler(async(req, res)=> {
    const checkinId = +req.params.checkinId
    let comment = await Comment.checkinComments(User, checkinId)
    res.json(comment)
}))

router.put('/:checkinid', asyncHandler(async(req, res)=> {
    const {id} = req.params
    const {commentBody} = req.body

    const comment = await Comment.update(commentBody, id)
    // await comment.update(commentBody)
    res.json(comment)
}))

router.delete('/:checkinid', asyncHandler(async(req, res)=> {
    const {id} = req.params
    const comment = await Comment.delete(id)
    res.send(comment)
}))

module.exports = router;
