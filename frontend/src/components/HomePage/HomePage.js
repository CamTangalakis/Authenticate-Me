import Feed from "../feed"
import SideBar from "../feed/sideBar"

const HomePage = () => {

    return (
        <div className='feed'>
            {/* <h1> HELLOOOOO </h1> */}
            <Feed className='page'/>
            <SideBar />
        </div>
    )
}

export default HomePage
