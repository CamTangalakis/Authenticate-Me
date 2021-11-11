import { useSelector } from 'react-redux'
import * as commentActions from '../../store/comment'

export default function CommentsFeed ({checkinId}) {
    const comments = useSelector(state=> state.comment)
    // const comments = ['test1', 'test2', 'test3']
    console.log(comments, '<----------')

    const comment = commentActions.getComment()
    console.log(comment, '!!!!!!!!!!!!!!!!!!')

    return (
        <>
            {/* <p>comments</p> */}
            {/* // {comments.checkinI=== } */}
            {/* {comments.map(comment=>
                (<p>{comment}</p>)
            )} */}
        </>
    )
}
