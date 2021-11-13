import { useDispatch, useSelector } from 'react-redux'
import CommentEditModal from './commentModal'
import * as commentActions from '../../store/checkin'
import '../feed/feed.css'

export default function CommentsFeed ({checkin}) {
    const dispatch = useDispatch()
    const userId = useSelector(state=>state.session?.user?.id)
    const comments = checkin?.Comments
    console.log(checkin, userId, '<---!!!!!!!!!!!!!!')

    return (
        <>
             {comments?.map((comment, i)=>
            <div key={i} className='commentBody'>
                <p className='commentText'>{comment?.comment}</p>

                {userId === comment?.userId ? (
                    <div>
                        <button type='button' className='commentDelete' onClick={()=> {
                            return dispatch(commentActions.delComment(comment.id, checkin.id))
                        }}>Delete</button>
                        <CommentEditModal comment={comment} checkin={checkin}/>
                    </div>
                 ) : null}
            </div>
            )}

        </>
    )
}
