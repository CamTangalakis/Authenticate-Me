import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { Modal } from '../../context/Modal'
import CommentEditForm from './CommentEditModal'
import * as commentActions from '../../store/comment'

export default function CommentsFeed ({checkin}) {
    const dispatch = useDispatch()
    const comment = checkin.Comments
    const sessionUserId = useSelector(state => state.session.user.id)

    // const [text, setText] = useState()
    const [showEditModal, setShowEditModal] = useState(false)
    // console.log(checkin, comment, '<----------')

    // async function deleteComment(id){
    //     await dispatch(commentActions.delComment(id))
    // }
    // onClick={() => deleteComment(comm.id)}

    return (
        <>
        {comment.reverse().map((comm, i)=> (
            <div key={i}>
                <p>{comm.comment}</p>
                {sessionUserId === comm.userId ? (
                    <div>
                        <button type='button' onClick={setShowEditModal(true)}>Edit</button>
                            {showEditModal && (
                                <Modal onClose={() => setShowEditModal(false)}>
                                    <CommentEditForm content={comm.comment}/>
                                </Modal>
                            )}
                        <button type='button'>Delete</button>
                    </div>
                    ) : null }
            </div>
        ))}

        </>
    )
}
