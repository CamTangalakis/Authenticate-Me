import { useSelector } from 'react-redux'
import * as commentActions from '../../store/comment'

export default function CommentsFeed ({checkin}) {
    // const comments = useSelector(state=> state.comment)
    // const comments = ['test1', 'test2', 'test3']
    const comments = checkin.Comments
    console.log(comments, '<----------')

    // console.log(comment, '!!!!!!!!!!!!!!!!!!')

    return (
        <>
            {/* <p>{comments}</p> */}
            {/* // {comments.checkinI=== } */}
            {comments.map((comment)=>
                <p>{comment.comment}</p>
            )}
        </>
    )
}
