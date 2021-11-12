import { useState } from "react"
import { useDispatch } from "react-redux"
import * as commentActions from '../../store/comment'

export default function CommentEditForm (content) {
    const dispatch = useDispatch()
    const [commentText, setCommentText] = useState(content)
    console.log(commentText, '<-----------')

    const onSubmit = async (e) => {
        await dispatch(commentActions.editComment())
    }

    return (
        <form onSubmit={onSubmit}>
            <h2>Edit comment</h2>
            <input
                type='textarea'
                value={commentText}
                onChange={(e)=>setCommentText(e.target.value)}
            ></input>
        </form>
    )
}
