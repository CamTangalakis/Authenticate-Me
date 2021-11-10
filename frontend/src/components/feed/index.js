import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as checkinActions from '../../store/checkin';
import * as commentActions from '../../store/comment'
import { Modal } from '../../context/Modal';
import CheckinEditForm from "../checkins/CheckinEditForm";
import './feed.css'

export default function Feed() {
    const dispatch = useDispatch()
    const checkins = useSelector((state) => state.checkin)
    const currentUser = useSelector((state) => state.session.user)
    const comments = useSelector((state )=> state.comment)
    const strains = useSelector(state => state.strain)

    const [commentText, setCommentText] = useState('')
    const [checkinId, setCheckinId] = useState(0)
    const [showComments, setShowComments] = useState(false)
    const [showModal, setShowModal] = useState(false);

    // console.log(comments, '<-----------------')
    // console.log(checkins, strains, '<-----------------')

    useEffect(()=> {
        dispatch(checkinActions.getCheckin())
    }, [dispatch])

    const submitComment = async (e) => {
        const userId = currentUser.id
        return dispatch(commentActions.postComment({userId, checkinId, commentText}))
    }

    return (
        <div className='feedLayout'>
            {Object.keys(checkins).map((key) =>
            <div id='feedParts'>

                {/* <a href='/'>{strains[checkins[key].strainId].name}</a> */}
                <p id='checkinText'>{checkins[key]?.text}</p>
                {/* <h1>{checkins[key].strainId}</h1> */}

                <div className='feedButtons'>
                    <button type='button' onClick={() => setShowComments(!showComments)}>Comment</button>

                    {currentUser.id === checkins[key]?.userId ? (
                        <div id={`checkinButtons`}>
                            {/* {setCheckinId(checkins[key].id)} */}
                            <button type='button' id='editButton' onClick={() => setShowModal(true)}>Edit</button>
                                {showModal && (
                                    <Modal onClose={() => setShowModal(false)}>
                                        <CheckinEditForm id={checkins[key].id}/>
                                    </Modal>
                                )}

                            <button type='button' id={`deleteButton ${checkins[key].id}`} onClick={() => {
                                return dispatch(checkinActions.delCheckin(checkins[key].id))
                            }} >Delete</button>
                        </div>
                    ) : null}
                </div>

                    {showComments && (
                        <div className='comments'>
                            <input type='text' onSubmit={submitComment} placeholder='Add a comment...'></input>
                            {/* onChange={setCheckinId(checkins[key].id)} */}
                                <button type='submit'>Submit</button>
                            {comments.checkinId === checkins[key].id ? (
                                <p>{comments.commentBody}</p>
                            ) : null}
                        </div>
                    )}
            </div>
            )}
        </div>
    )
}
