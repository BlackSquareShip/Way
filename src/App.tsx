import React from 'react';
import './App.css';
import {Header} from "./components/FirstBlock/Header";
import {Intro} from "./components/SecondBlock/Intro";
import {Footer} from "./components/Footer/Footer";

function App() {
  return (
    <div>
        <Header/>
        <Intro/>
        <Footer/>
    </div>
  );
}

export default App;
