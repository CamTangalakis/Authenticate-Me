import { useSelector } from 'react-redux'
import * as commentActions from '../../store/comment'

export default function CommentsFeed ({checkinId}) {
    const comments = useSelector(state=> state.comment)
    console.log(comments, '<----------')



    return (
        <>
            <p>comments</p>
            {/* // {comments.checkinI=== } */}
            {/* {comments.map(comment=>
                (<p>{comment}</p>)
            )} */}
        </>
    )
}
