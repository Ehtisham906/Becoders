// import logo from './logo.svg';
import './App.css';
import Jumbotron from './Components/Jumbotron';
import Navbar from './Components/Navbar';
import { useState } from 'react';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Services from './Components/Services';
import Blogs from './Components/Blogs';
import Contact from './Components/Contact';
import RegisterNow from './Components/RegisterNow';

function App() {

  let [mode, setMode] = useState('light');

  let toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#242424";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      document.body.style.transition = "0.3s"
    }
  }


  return (
    <>
      <Router>

        <Navbar toggleMode={toggleMode} mode={mode} />
        <Routes>
          <Route excat path="/" element={<Jumbotron mode={mode} />} />
          <Route excat path='/about' element={<About mode={mode} />} />
          <Route excat path='/services' element={<Services mode={mode} />} />
          <Route excat path='/blogs' element={<Blogs mode={mode} />} />
          <Route excat path='/contact' element={<Contact mode={mode} />} />
          <Route excat path='/register' element={<RegisterNow />} />



        </Routes>
      </Router>
    </>

  );
}

export default App;
