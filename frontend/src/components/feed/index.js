import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as checkinActions from '../../store/checkin';
import FullFeed from './feed.js'
import './feed.css'
// import '../../context/Modal.css'

export default function Feed() {
    const dispatch = useDispatch()
    const checkins = useSelector((state) => ({...state.checkin}))

    // console.log(comments, '<-----------------')
    // console.log(checkins, strains, '<-----------------')

    useEffect(()=> {
        dispatch(checkinActions.getCheckin())
    }, [dispatch])

    return (
        <div className='feedLayout'>
            {Object.keys(checkins).reverse().map((key, i) =>
                <FullFeed checkin={checkins[key]} key={i}/>
            )}
        </div>
    )
}
