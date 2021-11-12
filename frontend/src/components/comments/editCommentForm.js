import { useState } from "react"
import { useDispatch } from "react-redux"
import * as commentActions from '../../store/checkin'

export default function EditCommentForm ({comment}) {
    const dispatch = useDispatch()
    const text = comment.comment
    const [commentText, setCommentText] = useState(text)
    // console.log(comment, '<--')

    const onSubmit = async() => {
        await dispatch(commentActions.editComment({commentId: comment.id, commentText}))
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
