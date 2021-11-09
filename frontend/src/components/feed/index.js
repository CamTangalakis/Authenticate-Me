import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as sessionActions from '../../store/checkin';

export default function Feed() {
    const dispatch = useDispatch()
    const checkins = useSelector((state) => state.checkin)
    // const [checkin, setCheckin] = useState()

    // dispatch(sessionActions.getCheckin())

    useEffect(()=> {
        dispatch(sessionActions.getCheckin())
    }, [dispatch])

    return (
        <>
            <h1>feed</h1>
                {/* {Object.keys(checkins).map((key) => <p>{checkins[key].text}</p>)} */}
        </>
    )
}
