import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home'
import Book from './pages/Book/Book';
import Share from './pages/Share/Share';
import About from './pages/About/About';

function App() {
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
