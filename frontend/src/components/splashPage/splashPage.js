import LoginFormModal from "../loginFormPage"
import SignUpFormModal from "../signupFormPage"
import './splash.css'

export default function SplashPage(){
    return (
        <div className='splashPage'>
            <h1 className='splashHeader'>unTokd: the social weedia network</h1>

            <p className='splashBody'>discover new strains, see what your friends are smoking, and find where to get the best weed.</p>

            <div className='splashButtonContainer'>
                <LoginFormModal id='splashButtons'/>
                <SignUpFormModal id='splashButtons'/>
            </div>
        </div>
    )
}
