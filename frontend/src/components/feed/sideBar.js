import { useEffect } from "react"
import { useSelector } from "react-redux";
// import './index.css'
import * as strainActions from '../../store/strain'
import { useDispatch } from "react-redux";
import StrainsModal from "./sideBarModal";
import './feed.css'

export default function SideBar() {
    // const [checkins, setCheckins] = useState()
    const dispatch = useDispatch()
    const strains = useSelector((state) => state.strain);
    const sessionUser = useSelector((state) => state.session.user)

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
                {strains?.map(strain => (
                    <div className='strainFeed'>
                        {/* <h2 className='strainList'>{strain.name}</h2> */}
                        <StrainsModal strain={strain}/>
                    </div>
                ))}
            </div>

        </div>
    )
}
