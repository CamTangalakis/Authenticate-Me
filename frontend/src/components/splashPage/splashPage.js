import LoginFormModal from "../loginFormPage"
import SignUpFormModal from "../signupFormPage"
import './splash.css'

export default function SplashPage(){
    return (
        <div className='splashPage'>

            <div className='splashIntro'>
                <img className='splashHeaderImage' src='https://user-images.githubusercontent.com/85664060/150947484-0150dcd1-1c12-4392-996f-8fa7ec1f0133.png' width='100%'/>
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
                <div className='splashNavOne'>
                    <h2>discover new strains</h2>
                    <p>image</p>
                </div>

                <div className='splashNavTwo'>
                    <p>image</p>
                    <h2>share new finds</h2>
                </div>

                <div className='splashNavOne'>
                    <h2>see what's out there</h2>
                    <p>image</p>
                </div>
            </div>

            <div className='splashJoin'>
                <p>join today and discover</p>
                <p>what remains untokd!</p>

                <div>
                    <button>Sign Up</button>
                    <button>Log In</button>
                </div>
            </div>
        </div>
    )
}
