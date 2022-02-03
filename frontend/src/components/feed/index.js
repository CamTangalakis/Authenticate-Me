import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as checkinActions from '../../store/checkin';
import FullFeed from './feed.js'
import './feed.css'
// import '../../context/Modal.css'

export default function Feed() {
    const dispatch = useDispatch()
    const checkins = useSelector((state) => ({...state.checkin}))

    useEffect(()=> {
        dispatch(checkinActions.getCheckin())
    }, [dispatch])
    console.log('IN THE FEED!!!!!!!!!!!!!!!!1')

    return (
        <div className='feedLayout'>
            {Object.keys(checkins).reverse().map((key, i) =>
                <FullFeed checkin={checkins[key]} key={i}/>
            )}
        </div>
    )
}
