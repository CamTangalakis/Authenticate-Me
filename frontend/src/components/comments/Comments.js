import { useDispatch, useSelector } from 'react-redux'
import CommentEditModal from './commentModal'
import * as commentActions from '../../store/comment'

export default function CommentsFeed ({checkin}) {
    const dispatch = useDispatch()
    const userId = useSelector(state=>state.session.user.id)
    const comments = checkin.Comments
    // console.log(checkin.Comments)
    // const deleteComment = async() => {
    //     await dispatch(commentActions.delComment())
    // }

    return (
        <>
            {comments?.map((comment, i)=>
            <div key={i}>
                <p>{comment?.comment}</p>

                {/* {userId === checkin?.userId ? ( */}
                    <div>
                        {/* <button type='button'>Edit</button> */}
                        <CommentEditModal comment={comment}/>
                        <button type='button' onClick={()=> {
                            return dispatch(commentActions.delComment(comment.id))
                        }}>Delete</button>
                    </div>
                {/* ) : null} */}
            </div>
            )}
        </>
    )
}
