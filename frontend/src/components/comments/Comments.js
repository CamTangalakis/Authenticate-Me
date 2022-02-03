import { useDispatch, useSelector } from 'react-redux'
import CommentEditModal from './commentModal'
import * as commentActions from '../../store/checkin'
import '../feed/feed.css'

export default function CommentsFeed ({checkin}) {
    const dispatch = useDispatch()
    const userId = useSelector(state=>state.session?.user?.id)
    const users = useSelector( state => state.session?.users)
    const comments = checkin?.Comments
    console.log(checkin, userId, '<---!!!!!!!!!!!!!!')

    const getUser = (id) => {
        for (let i in users) {
            if (users[i].id === id) return users[i]
        }
    }

    return (
        <>
             {comments?.map((comment, i)=>
                <div key={i} className='commentBody'>
                    <div className='userInfo'>
                        <img src={getUser(comment?.userId)?.profilePic} className='userPic'/>
                        <div className='username'>{getUser(comment?.userId)?.username}</div>

                        {userId === comment?.userId ? (
                            <div className='commentButtons'>
                                <button type='button' className='commentDelete' onClick={()=> {
                                    return dispatch(commentActions.delComment(comment.id, checkin.id))
                                }}>Delete</button>
                                <CommentEditModal comment={comment} checkin={checkin}/>
                            </div>
                        ) : null}
                    </div>
                <p className='commentText'>{comment?.comment}</p>

            </div>
            )}

        </>
    )
}
