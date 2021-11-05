import {Route, Routes} from 'react-router-dom'
import LoginFormPage from './components/loginFormPage';
import SignUpFormPage from './components/signupFormPage';

function App() {
  return (
    <>
      <h1>Hello from App</h1>
      <Routes>
        <Route exact path='/login' element={<LoginFormPage />} />
        <Route path='/signup' element={<SignUpFormPage />} />
      </Routes>
    </>
  );
}

export default App;
