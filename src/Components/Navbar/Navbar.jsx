import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'

import Login from '../Login/Login'



const Navbar = () => {

    const location = useLocation();


  return (
    <>
    <nav className='p1' >
        <div className="logo">
            <Link to="/">
                <img src="./logo.png" alt="Logo" />
                <p>WeGo</p>
            </Link>
        </div>
        <div className='page'>
            <ul>
                <Link to='/'><li className={location.pathname === "/" ? "active" : ""}>Home</li></Link>
                <Link to='/Book'><li className={location.pathname === "/Book" ? "active" : ""}>Book</li></Link>
                <Link to='/Share'><li className={location.pathname === "/Share" ? "active" : ""}>Share</li></Link>
                <Link to='/About'><li className={location.pathname === "/About" ? "active" : ""}>About Us</li></Link>
            </ul>
        </div>
        <Login/>
    </nav>
    </>
  )
}

export default Navbar;