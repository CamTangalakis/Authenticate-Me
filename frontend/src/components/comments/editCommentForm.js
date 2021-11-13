import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as commentActions from '../../store/checkin'
import './commentStyling.css'

export default function EditCommentForm ({comment, checkin, setShowModal}) {
    const dispatch = useDispatch()
    const text = comment.comment
    const [commentText, setCommentText] = useState(text)
    const userId = useSelector(state=> state.session.user.id)
    const checkinId = checkin.id
    console.log(comment.id, userId, checkinId, commentText, '<----------')

    const onSubmit = async(e) => {
        e.preventDefault()
        await dispatch(commentActions.editComment({id: comment.id, userId, checkinId, comment: commentText}))
        setShowModal(false);
    }

    return (
        <form onSubmit={onSubmit} className='commentEditForm'>
            <h2 className='editHeader'>Edit Comment</h2>
            <input type='textarea'
                className='editField'
                value={commentText}
                onChange={(e)=>setCommentText(e.target.value)}
                />

            <button type='submit' className='submitComment'>Submit</button>
        </form>
    )
}
