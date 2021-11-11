import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import * as checkinActions from '../../store/checkin';
import * as commentActions from '../../store/comment'
import { Modal } from '../../context/Modal';
import CheckinEditForm from "../checkins/CheckinEditForm";
import CommentsFeed from "./Comments";
import SplashPage from "../splashPage/splashPage";
import './feed.css'

export default function FullFeed({checkin}) {
    const dispatch = useDispatch()
    const currentUserId = useSelector((state) => state.session.user.id)
    const strains = useSelector((state) => state.strain)

    const [commentBody, setCommentBody] = useState('')
    const [showComments, setShowComments] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false);
    const strainId = checkin?.strainId
    const strain = strains[strainId]

    console.log(commentBody, '<--------------')

    const submitComment = async (e) => {
        e.preventDefault()

        const userId = currentUserId
        const checkinId = checkin.id
        // console.log(userId, checkinId, commentBody)
        if(commentBody){
            await dispatch(commentActions.postComment({userId, checkinId, comment: commentBody}))
        }
    }

    return (
        <div id='feedParts'>
            <h3>{strain?.name}</h3>
            <p id='checkinText'>{checkin?.text}</p>

            <div className='feedButtons'>
                <button type='button' onClick={() => setShowComments(!showComments)}>Comment</button>

                {currentUserId === checkin?.userId ? (
                    <div id={`checkinButtons`}>
                        {/* {setCheckinId(checkin.id)} */}
                        <button type='button' id='editButton' onClick={() => setShowEditModal(true)}>Edit</button>
                            {showEditModal && (
                                <Modal onClose={() => setShowEditModal(false)}>
                                    <CheckinEditForm checkin={checkin} setShowModal={setShowEditModal}/>
                                </Modal>
                            )}

                        <button type='button' id={`deleteButton ${checkin?.id}`} onClick={() => {
                            return dispatch(checkinActions.delCheckin(checkin.id))
                        }} >Delete</button>
                    </div>
                ) : null}
            </div>

            {showComments && (
                <div className='comments'>
                    <form onSubmit={submitComment}>
                    <input type='text'
                        onChange={(e)=>setCommentBody(e.target.value)}
                        placeholder='Add a comment...' />
                        <button type='submit'>Submit</button>
                    </form>

                    <CommentsFeed checkin={checkin}/>
                </div>
            )}

        </div>
    )
}
