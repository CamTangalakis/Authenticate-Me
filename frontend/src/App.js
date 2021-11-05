import {Route, Routes} from 'react-router-dom'
import LoginFormPage from './components/loginFormPage';

function App() {
  return (
    <>
      <h1>Hello from App</h1>
      <Routes>
        <Route exact path='/login' element={<LoginFormPage />} />
      </Routes>
    </>
  );
}

export default App;
