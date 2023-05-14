import { useState } from 'react';
import './App.css';
import {Header} from "./components/FirstBlock/Header";
import {Intro} from "./components/SecondBlock/Intro";
import {Footer} from "./components/Footer/Footer";
import {LoginPage} from "./components/Modals/LoginPage";
import { RegistrationPage } from './components/Modals/RegistrationPage';

function App() {
  const [loginModal, setLoginModal] = useState(false)

  return (
    <div>
        <Header openModal={() => setLoginModal(true)}/>
        <Intro/>
        <Footer/>
        {loginModal && <LoginPage onClose={() => setLoginModal(false)}/>}
        {/* {loginModal && <RegistrationPage onClose={() => setLoginModal(false)}/>} */}
    </div>
  );
}

export default App;
