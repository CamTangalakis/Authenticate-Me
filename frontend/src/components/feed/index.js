import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as sessionActions from '../../store/checkin';
import './feed.css'

export default function Feed() {
    const dispatch = useDispatch()
    const checkins = useSelector((state) => state.checkin)
    const currentUser = useSelector((state) => state.session.user)
    console.log(currentUser, '<-----------------')
    // const [checkin, setCheckin] = useState()

    // dispatch(sessionActions.getCheckin())

    useEffect(()=> {
        dispatch(sessionActions.getCheckin())
    }, [dispatch])

    return (
        <>
            <h1 className='feedLayout'>feed</h1>
                {Object.keys(checkins).map((key) =>
                <div id=''>
                    {/* <h1>{checkins[key]}</h1> */}
                    <a href='/'>Strain Name</a>
                    <p>{checkins[key].text}</p>

                    {/* {if currentUser.id === checkins[key].id} */}
                    <button type='button'>Edit</button>
                    <button type='button'>Delete</button>
                </div>
                )}
        </>
    )
}
