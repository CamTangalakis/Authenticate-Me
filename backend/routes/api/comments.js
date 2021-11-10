const express = require('express')
const asyncHandler = require('express-async-handler');
const { Comment } = require('../../db/models');
const router = express.Router();

router.post('/', asyncHandler(async (req, res, next)=> {
    const {userId, checkinId, commentBody} = req.body
    const comment = await Comment.create({userId, checkinId, commentBody})

    return res.json({comment})
}))

router.get('/', asyncHandler(async(req, res)=> {
    let comment = Comment.findAll()
    res.json(comment)
}))

router.put('/:id', asyncHandler(async(req, res)=> {
    const {id} = req.params
    const {commentBody} = req.body

    const comment = await Comment.findByPk(id)
    await comment.update(commentBody)
    res.json({message: 'Comment edited!'})
}))

router.delete('/:id', asyncHandler(async(req, res)=> {
    const {id} = req.params
    const comment = await Comment.findByPk(id)
    await comment.destroy();
    res.send('Comment deleted!')
}))

module.exports = router;
