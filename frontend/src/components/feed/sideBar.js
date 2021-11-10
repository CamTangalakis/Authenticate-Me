import { useEffect } from "react"
import { useSelector } from "react-redux";
// import './index.css'
import * as strainActions from '../../store/strain'
import { useDispatch } from "react-redux";
import './feed.css'

export default function Feed() {
    // const [checkins, setCheckins] = useState()
    const dispatch = useDispatch()
    const strains = useSelector(state => state.strain);
    const sessionUser = useSelector(state => state.session.user)
    console.log(strains, '<------------')

    useEffect(()=> {
        dispatch(strainActions.getStrain())
    }, [dispatch])

    return (
        <div className='sideBar'>
            {sessionUser ?
               <h1 className='welcome'>Welcome, {sessionUser.username}!</h1> :
               <h1 className='welcome'>Welcome, user!</h1>}

        <h1>Strains</h1>
            <div>
                {Object.keys(strains).map((key)=> {
                    (<div className='strainFeed'>
                        <h2 className='strainList'>{strains[key]?.name}</h2>
                        {/* <p>{strains[key].description}</p> */}
                    </div>)
                })}
            </div>

        </div>
    )
}
