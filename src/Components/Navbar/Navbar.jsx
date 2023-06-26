import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

import Login from '../Login/Login'



const Navbar = () => {


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
                <Link to='/'><li>Home</li></Link>
                <Link to='/Book'><li>Book</li></Link>
                <Link to='/Share'><li>Share</li></Link>
                <Link to='/About'><li>About Us</li></Link>
            </ul>
        </div>
        <Login/>
    </nav>
    </>
  )
}

export default Navbar;