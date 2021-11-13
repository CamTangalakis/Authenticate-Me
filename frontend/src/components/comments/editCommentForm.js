import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as commentActions from '../../store/checkin'

export default function EditCommentForm ({comment, checkin}) {
    const dispatch = useDispatch()
    const text = comment.comment
    const [commentText, setCommentText] = useState(text)
    const userId = useSelector(state=> state.session.user.id)
    const checkinId = checkin.id
    console.log(comment.id, userId, checkinId, commentText, '<----------')

    const onSubmit = async(e) => {
        e.preventDefault()
        await dispatch(commentActions.editComment({id: comment.id, userId, checkinId, comment: commentText}))
    }

    return (
        <form onSubmit={onSubmit}>
            <h2>Edit Comment</h2>
            <input type='textarea'
                value={commentText}
                onChange={(e)=>setCommentText(e.target.value)}
                />

            <button type='submit'>Submit</button>
        </form>
    )
}
