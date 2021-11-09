import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as checkinActions from '../../store/checkin';
import './feed.css'

export default function Feed() {
    const dispatch = useDispatch()
    const checkins = useSelector((state) => state.checkin)
    const currentUser = useSelector((state) => state.session.user)
    const comments = useSelector((state )=> state.comments)
    const strains = useSelector(state => state.strain)
    // const strains = useSelector((state)=> state)
    console.log(strains, '<-----------------')
    // console.log(checkins, strains, '<-----------------')
    // const [checkin, setCheckin] = useState()

    // dispatch(checkinActions.getCheckin())

    useEffect(()=> {
        dispatch(checkinActions.getCheckin())
    }, [dispatch])

    const deleteCheckin = async (e) => {
        return dispatch(checkinActions.delCheckin())
    }

    return (
        <div className='feedLayout'>
            <h1>feed</h1>
                {Object.keys(checkins).map((key) =>
                <div id='feedParts'>

                    <a href='/'>{strains[checkins.strainId]}</a>
                    <p>{checkins[key].text}</p>

                    <div className='feedButtons'>
                        <button type='button'>Comment</button>

                        {currentUser.id === checkins[key].userId ? (
                            <div id='checkinButtons'>
                                <button type='button' id='editButton'>Edit</button>
                                <button type='button' id='deleteButton' onClick={deleteCheckin}>Delete</button>
                            </div>
                        ) : null}
                    </div>
                </div>
                )}
        </div>
    )
}
