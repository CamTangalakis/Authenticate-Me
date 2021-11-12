const express = require('express')
const asyncHandler = require('express-async-handler');
const { Comment, User, Checkin } = require('../../db/models');
const router = express.Router();

router.post('/', asyncHandler(async (req, res, next)=> {
    const {userId, checkinId, comment} = req.body
    const comm = await Comment.newComment({userId, checkinId, comment})

    return res.json({comm})
}))

router.get('/', asyncHandler(async(req, res)=> {
    // const checkinId = +req.params.checkinId
    let comment = Comment.checkinComments()
    res.json(comment)
}))

router.put('/:id', asyncHandler(async(req, res)=> {
    const {id} = req.params
    const {commentBody} = req.body

    const comment = await Comment.update(commentBody, id)
    // await comment.update(commentBody)
    res.json(comment)
}))

router.delete('/:id', asyncHandler(async(req, res)=> {
    const {id} = req.params
    const comment = await Comment.delete(id)
    res.send(comment)
}))

module.exports = router;
