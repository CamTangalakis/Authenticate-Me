import { useDispatch, useSelector } from 'react-redux'
import CommentEditModal from './commentModal'
import * as commentActions from '../../store/checkin'
import '../feed/feed.css'

export default function CommentsFeed ({checkin}) {
    const dispatch = useDispatch()
    const userId = useSelector(state=>state.session.user.id)
    const comments = checkin?.Comments

    return (
        <>
             {comments?.map((comment, i)=>
            <div key={i} className='commentBody'>
                <p className='commentText'>{comment?.comment}</p>

                {userId === checkin?.userId ? (
                    <div>
                        <button type='button' className='commentDelete' onClick={()=> {
                            return dispatch(commentActions.delComment(comment.id, checkin.id))
                        }}>Delete</button>
                    </div>
                 ) : null}
            </div>
            )}

        </>
    )
}
