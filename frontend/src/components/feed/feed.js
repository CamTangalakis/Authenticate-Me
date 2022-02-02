import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import * as checkinActions from '../../store/checkin'
import { Modal } from '../../context/Modal';
import CheckinEditForm from "../checkins/CheckinEditForm";
import CommentsFeed from "../comments/Comments";
// import Delete from '../../images'
import './feed.css'

export default function FullFeed({checkin}) {
    const dispatch = useDispatch()
    const currentUser = useSelector((state) => state.session.user)
    const strains = useSelector((state) => state.strain)
    const users = useSelector((state)=> state.session.users)

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

    let stars = ''
    let ratingNumber = checkin?.rating
    if (ratingNumber === 0) stars = ''
    else {
        for (let i=0; i<5; i++) {
            if (ratingNumber >= 1) stars += '★'
            else stars += '☆';
            ratingNumber -= 1;
        }
    }

    const getUser = (id) => {
        for (let i in users) {
            if (users[i].id === id) return users[i]
        }
    }

    return (
        <div id='feedParts'>
            <div className='userInfo'>
                <img src={getUser(checkin?.userId)?.profilePic} className='userPic'/>
                <div className='username'>{getUser(checkin?.userId)?.username}</div>
            </div>

            <div className='strainHeader'>
                <h3>{strain?.name}</h3>
                <p className='stars'>{stars}</p>
            </div>
            <p id='checkinText'>{checkin?.text}</p>

            <div className='feedButtons'>
                <button type='button' id='commentButton' onClick={() => setShowComments(!showComments)}><strong>Comment</strong> <i class="fas fa-chevron-down"></i></button>

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
                    {currentUser ? (
                        <form onSubmit={submitComment} className='commentForm'>
                            <input type='hidden' />
                            <input type='text'
                                value={commentText}
                                className='commentInputField'
                                onChange={(e)=>setCommentText(e.target.value)}
                                placeholder='Add a comment...' />
                            <button type='submit' className='submitComment'>Submit</button>
                        </form>
                    ): null}

                    <CommentsFeed checkin={checkin}/>
                </div>
            )}

        </div>
    )
}
