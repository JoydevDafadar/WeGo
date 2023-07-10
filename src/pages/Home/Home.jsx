import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <>
    < Navbar/>

    <section className='hero '>
      
      <div className="tagline p1">
        <h1>We Are Here For Your <strong>Sweet Journey</strong></h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero commodi accusantium hic sapiente magnam at velit quae vitae ullam repellat.
        </p>
      </div>

      <img src="./Image/hero_image.png" className='heroImg' alt="hero_Img" />

      <div className='first '></div>
      <div className="second"></div>
      <div className="third"></div>
    </section>

    <h2 className='p1 heading'>Grab Your Need -</h2>
    <section className='p1 selection'>
      <Link to='/Book'>
      <div className='section'>
        <i className="fa-solid fa-plus"></i> 
        <p>Book Your Seat</p>
      </div>
      </Link>
      <Link to='/Share'>
      <div className='section'> 
        <i className="fa-solid fa-share"></i>
        <p>Share Your Journey</p>
      </div>
      </Link>
    </section>

    <Footer/>

    </>
  )
}

export default Home