const express = require('express')
const asyncHandler = require('express-async-handler');
const { Comment, User, Checkin } = require('../../db/models');
const router = express.Router();

router.post('/', asyncHandler(async (req, res, next)=> {
    const {userId, checkinId, comment} = req.body
    const comm = await Comment.newComment({userId, checkinId, comment}, User)

    return res.json({comm})
}))

router.get('/:checkinId', asyncHandler(async(req, res)=> {
    const checkinId = +req.params.checkinId
    let comment = await Comment.checkinComments(User, checkinId)
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
    const comment = await Comment.findByPk(id);
    await comment.destroy();
    res.json({message: "Comment destroyed successfully!"});
}))

module.exports = router;
