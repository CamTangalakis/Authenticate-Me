import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Modal } from "./context/Modal";
import * as sessionActions from "./store/session";
import Navigation from "./components/navigation/index";
import SplashPage from "./components/splashPage/splashPage";
import HomePage from "./components/HomePage/HomePage";
import './index.css'

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(()=> setIsLoaded(true));
  }, [dispatch]);

  return (
    <div className='page'>
      <Navigation isLoaded={isLoaded}/>
      <Routes>
        <Route path='/' exact={true} element={<SplashPage />} />
        <Route path='/home' exact={true} element={<HomePage /> } />
        <Route path='/dispensary'><h1>hellooooo</h1></Route>
      </Routes>

    </div>
  );
}

export default App;
