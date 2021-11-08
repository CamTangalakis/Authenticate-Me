// import { useDispatch } from "react-redux";
// import React, { useState, useEffect } from "react";
// import * as sessionActions from "./store/session";
import {Route, Routes} from 'react-router-dom'
import { useState } from 'react';
import LoginFormPage from './components/loginFormPage';
import SignUpFormPage from './components/signupFormPage';
import Navigation from "./components/navigation";

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import * as sessionActions from './store/session';


function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <h2>Welcome to unTokd</h2>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Routes>
          <Route path='/login' element={<LoginFormPage />} />
          <Route path='/signup' element={<SignUpFormPage />} />
        </Routes>
      )}
    </>
  );
}

export default App;
