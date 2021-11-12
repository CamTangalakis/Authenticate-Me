import { useSelector } from 'react-redux'
import CommentEditModal from './commentModal'
import * as commentActions from '../../store/comment'

export default function CommentsFeed ({checkin}) {
    const userId = useSelector(state=>state.session.user.id)
    const comments = checkin.Comments
    // console.log(checkin.Comments)
    const deleteComment = async() => {

    }

    return (
        <>
            {comments?.map((comment, i)=>
            <div key={i}>
                <p>{comment?.comment}</p>

                {/* {userId === checkin?.userId ? ( */}
                    <div>
                        {/* <button type='button'>Edit</button> */}
                        <CommentEditModal comment={comment}/>
                        <button type='button' onClick={deleteComment}>Delete</button>
                    </div>
                {/* ) : null} */}
            </div>
            )}
        </>
    )
}
