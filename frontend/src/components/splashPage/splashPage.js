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
                <h1>easy as...</h1>

                <div className='splashStepsImages'>
                    <img className='splashStepsImage up one' src='https://user-images.githubusercontent.com/85664060/151910930-64a2f03b-dc2a-4777-8b27-038fc786414c.PNG'/>
                    <img className='splashStepsImage two' src='https://user-images.githubusercontent.com/85664060/151910901-4403e008-39db-4750-a1a1-2090f2c52b9f.PNG' />
                    <img className='splashStepsImage three' src='https://user-images.githubusercontent.com/85664060/151910864-7e97d599-d1a2-49d5-a838-0a2cd1b92311.PNG' />
                </div>

                <div className='splashStepsWords'>
                    <div className='splashStepsWord'>grind</div>
                    <div className='splashStepsWord'>smoke</div>
                    <div className='splashStepsWord'>share</div>
                </div>
            </div>

            {/* <div className='splashNav'>
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
            </div> */}

            <div className='splashJoin'>
                <p className='splashJoinWords'>join today</p>
                <p className='splashJoinWords'>and discover what remains </p>
                <p className='splashJoinWords untokd'>untokd!</p>

                <div>
                    <LoginFormModal  className='loginButton'/>
                    <SignUpFormModal className='loginButton'/>
                </div>
            </div>
        </div>
    )
}
