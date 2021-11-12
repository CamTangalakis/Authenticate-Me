import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import * as checkinActions from '../../store/checkin';
import * as commentActions from '../../store/checkin'
import { Modal } from '../../context/Modal';
import CheckinEditForm from "../checkins/CheckinEditForm";
import CommentsFeed from "../comments/Comments";
import './feed.css'

export default function FullFeed({checkin}) {
    const dispatch = useDispatch()
    const currentUser = useSelector((state) => state.session.user)
    const strains = useSelector((state) => state.strain)

    const [commentText, setCommentText] = useState('')
    const [showComments, setShowComments] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false);
    const strainId = checkin?.strainId
    const strain = strains[strainId]

    const submitComment = async (e) => {
        e.preventDefault()
        const userId = currentUser.id
        const checkinId = checkin.id
        if(commentText) await dispatch(checkinActions.postComment({userId:userId, checkinId:checkinId, comment:commentText}))
        setCommentText('')
    }

    return (
        <div id='feedParts'>

            <h3 className='strainHeader'>{strain?.name}</h3>
            <p id='checkinText'>{checkin?.text}</p>

            <div className='feedButtons'>
                <button type='button' id='commentButton' onClick={() => setShowComments(!showComments)}>Comment</button>

                {currentUser?.id === checkin?.userId ? (
                    <div id={`checkinButtons`}>
                        {/* {setCheckinId(checkin.id)} */}
                        <button type='button' id='editButton' onClick={() => setShowEditModal(true)}>Edit</button>
                            {showEditModal && (
                                <Modal onClose={() => setShowEditModal(false)}>
                                    <CheckinEditForm checkin={checkin} setShowModal={setShowEditModal}/>
                                </Modal>
                            )}

                        <button type='button' id='deleteButton' onClick={() => {
                            return dispatch(checkinActions.delCheckin(checkin.id))
                        }} >Delete</button>
                    </div>
                ) : null}
            </div>

            {showComments && (
                <div className='comments'>
                    <form onSubmit={submitComment}>
                        <input type='hidden' />
                        <input type='text'
                            value={commentText}
                            onChange={(e)=>setCommentText(e.target.value)}
                            placeholder='Add a comment...' />
                            <button type='submit'>Submit</button>
                    </form>

                    <CommentsFeed checkin={checkin}/>
                </div>
            )}

        </div>
    )
}
