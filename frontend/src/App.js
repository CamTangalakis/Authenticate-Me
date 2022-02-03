import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/navigation/index";
import SplashPage from "./components/splashPage/splashPage";
import HomePage from "./components/HomePage/HomePage";
import Footer from './components/Footer/footer'
import './index.css'
import AboutPage from "./components/About/about";
// import { getRating } from "./store/rating";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(()=> setIsLoaded(true));
    dispatch(sessionActions.getUsers())
    // dispatch(getRating())
  }, [dispatch]);

  return (
    <div className='page'>
      <Navigation isLoaded={isLoaded}/>
      <Routes>
        <Route path='/' exact={true} element={<SplashPage />} />
        <Route path='/home' exact={true} element={<HomePage /> } />
        <Route path='/dispensary'><h1>hellooooo</h1></Route>
        <Route path='/about' element={<AboutPage />}></Route>
      </Routes>
    <Footer />

    </div>
  );
}

export default App;
