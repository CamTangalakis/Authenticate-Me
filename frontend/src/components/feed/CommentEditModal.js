import { useState } from "react"
import { useDispatch } from "react-redux"
import * as commentActions from '../../store/comment'

export default function CommentEditForm (content) {
    const dispatch = useDispatch()
    const [text, setText] = useState(content)

    const onSubmit = async (e) => {
        await dispatch(commentActions.editComment())
    }

    return (
        <form onSubmit={onSubmit}>
            <h2>Edit comment</h2>
            <input
                type='textarea'
                value={text}
                onChange={(e)=>setText(e.target.value)}
            ></input>
        </form>
    )
}
