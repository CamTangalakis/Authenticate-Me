import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import * as checkinActions from '../../store/checkin';
import * as commentActions from '../../store/comment'
import { Modal } from '../../context/Modal';
import CheckinEditForm from "../checkins/CheckinEditForm";
import './feed.css'

export default function FullFeed({checkin}) {
    const dispatch = useDispatch()
    const currentUser = useSelector((state) => state.session.user)
    const comments = useSelector((state)=> state.comment)
    const strains = useSelector((state) => state.strain)

    const [commentText, setCommentText] = useState('')
    const [showComments, setShowComments] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const strainId = checkin?.strainId
    const strain = strains[strainId]

    // console.log(checkin, strain, '<------------')

    const submitComment = async (e) => {
        const userId = currentUser.id
        const checkinId = checkin.id
        return dispatch(commentActions.postComment({userId, checkinId, commentText}))
    }

    return (
        <div id='feedParts'>

            <a href='/'>{strain?.name}</a>
            <p id='checkinText'>{checkin?.text}</p>
            {/* <h1>{checkin.strainId}</h1> */}

            <div className='feedButtons'>
                <button type='button' onClick={() => setShowComments(!showComments)}>Comment</button>

                {currentUser?.id === checkin?.userId ? (
                    <div id={`checkinButtons`}>
                        {/* {setCheckinId(checkin.id)} */}
                        <button type='button' id='editButton' onClick={() => setShowModal(true)}>Edit</button>
                            {showModal && (
                                <Modal onClose={() => setShowModal(false)}>
                                    <CheckinEditForm checkin={checkin} setShowModal={setShowModal}/>
                                </Modal>
                            )}

                        <button type='button' id={`deleteButton ${checkin.id}`} onClick={() => {
                            return dispatch(checkinActions.delCheckin(checkin.id))
                        }} >Delete</button>
                    </div>
                ) : null}
            </div>

            {showComments && (
                <div className='comments'>
                    <input type='text' onSubmit={submitComment} placeholder='Add a comment...'></input>
                    {/* onChange={setCheckinId(checkin.id)} */}
                        <button type='submit'>Submit</button>
                    {comments.checkinId === checkin.id ? (
                        <p>{comments.commentBody}</p>
                    ) : null}
                </div>
            )}
        </div>
    )
}
