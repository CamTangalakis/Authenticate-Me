import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './profileButton';
import LoginFormModal from '../loginFormPage';
import SignUpFormModal from '../signupFormPage/index';
import CheckinFormModal from '../checkins/index';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <div id='checkinButton'>
        <CheckinFormModal id='formButton'/>
        <ProfileButton user={sessionUser} />
      </div>
    );
  } else {
    sessionLinks = (
      <div id='formButtons'>
        <LoginFormModal id='formButton'/>
        <SignUpFormModal id='formButton'/>
      </div>
    );
  }

  return (
    <ul className='navBar'>
      <div className='weedia'>
        <NavLink exact to="/" className='homeButton'>unTokd</NavLink>
        <h3>the new social weedia</h3>
      </div>
        {isLoaded && sessionLinks}
    </ul>
  );
}

export default Navigation;
