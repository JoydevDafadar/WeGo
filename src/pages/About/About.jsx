import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../Footer/Footer'
import './About.css'

const About = () => {
  return (
    <>
    <Navbar/>
    <section class="about-section">
      <div class="container">
        <h1>About Us</h1>
        <p>Welcome to Car Driving School, where we provide comprehensive driving lessons and courses to help you become a confident and responsible driver. Our team of experienced and certified instructors is dedicated to ensuring your success on the road.</p>

        <h2>Our Mission</h2>
        <p>At Car Driving School, our mission is to empower individuals with the knowledge and skills needed to drive safely and confidently. We strive to create a positive and supportive learning environment that caters to the unique needs of each student.</p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>Experienced and certified instructors</li>
          <li>Flexible scheduling options</li>
          <li>Customized lessons tailored to your needs</li>
          <li>Safe and well-maintained vehicles for training</li>
          <li>Competitive pricing and discounts</li>
          <li>Excellent track record of student success</li>
        </ul>
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default About