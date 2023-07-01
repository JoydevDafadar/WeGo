import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { init, initDB } from './api/init';

import Home from './pages/Home/Home'
import Book from './pages/Book/Book';
import Share from './pages/Share/Share';
import About from './pages/About/About';

function App() {
  const {app, analytics} = init();
  const db = initDB();
  window.app = app; window.db = db;
  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Book" element={<Book />} />
        <Route path="/Share" element={<Share />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
