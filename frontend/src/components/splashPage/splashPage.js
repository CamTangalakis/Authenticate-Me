import LoginFormModal from "../loginFormPage"
import SignUpFormModal from "../signupFormPage"
import './splash.css'

export default function SplashPage(){
    return (
        <div className='splashPage'>

            <div className='splashIntro'>
                <img src='../../images/unTokdSplash.png' width='100%'/>
            </div>

            <div className='splashSteps'>
                <h1>cool art</h1>
                <h1>easy as...</h1>

                <div className='splashStepsImages'>
                    <div>image 1</div>
                    <div>image 2</div>
                    <div>image 3</div>
                </div>

                <div className='splashStepsWords'>
                    <div>grind...</div>
                    <div>smoke</div>
                    <div>share</div>
                </div>
            </div>

            <div className='splashNav'>
                <div>
                    <h2>discover new strains</h2>
                    <p>image</p>
                </div>

                <div>
                    <p>image</p>
                    <h2>share new finds</h2>
                </div>

                <div>
                    <h2>see what's out there</h2>
                    <p>image</p>
                </div>
            </div>

            <div className='splashJoin'>
                <h1>join today and discover</h1>
                <h1>what remains untokd!</h1>

                <button>Sign Up</button>
                <button>Log In</button>
            </div>
        </div>
    )
}
