import { useState } from 'react';
import './App.css';
import {Header} from "./components/FirstBlock/Header";
import {Intro} from "./components/SecondBlock/Intro";
import {Footer} from "./components/Footer/Footer";
import {LoginPage} from "./components/Modals/LoginPage";
import { RegistrationPage } from './components/Modals/RegistrationPage';

function App() {
  const [loginModal, setLoginModal] = useState(false)
  const [RegistrationModal, setRegistrationModal] = useState(false)

  return (
    <div>
        <Header openLoginModal={() => setLoginModal(true)} openRegistrationModal={() => setRegistrationModal(true)}/>
        <Intro/>
        <Footer/>
        {loginModal && <LoginPage onClose={() => setLoginModal(false)}/>}
        {RegistrationModal && <RegistrationPage onClose={() => setRegistrationModal(false)}/>}
    </div>
  );
}

export default App;
