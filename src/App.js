import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './pages/Home/Home'
import Book from './pages/Book/Book';
import Share from './pages/Share/Share';
import About from './pages/About/About';
import { createContext, useEffect, useState } from 'react';
import Confirmation from './pages/Confirmation/Confirmation';

const userContext = createContext();

function App() {
  const [alert, setAlert] = useState(true);
  const [msg, setMsg] = useState("Welcome to WeGo .. ");


  useEffect(()=>{
    setTimeout(()=>{
      setAlert(false);
    }, 2000)
  },[alert]);


  return (
    <>
    <userContext.Provider value={{setAlert, setMsg}}>
    <BrowserRouter>
      <div class="alert" style={alert?{}:{top:"-150px"}}>
        <p>
          {msg}
        </p>
      <div class="line" style={alert?{animation:"line-animation 2s 1 linear"}  :{}}>
        </div>
      </div>
      
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Book" element={<Book />} />
        <Route path="/Share" element={<Share />} />
        <Route path="/About" element={<About />} />
        <Route path="/Confirmation" element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
    </userContext.Provider>
    
    </>
  );
}

export  {App, userContext};
