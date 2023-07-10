import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer >
    <div class="footer-content">
      <div class="logo">
        {/* <img src="logo.png" alt="Logo"> */}
        <h3>WeGo Website</h3>
      </div>
      <div class="footer-columns">
        <div class="column">
          <h4>About Us</h4>
          <ul>
            <li><a href="#">About the Company</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Testimonials</a></li>
          </ul>
        </div>
        <div class="column">
          <h4>Services</h4>
          <ul>
            <li><a href="#">Horseback Riding</a></li>
            <li><a href="#">Trail Rides</a></li>
            <li><a href="#">Lessons</a></li>
          </ul>
        </div>
        <div class="column">
          <h4>Contact</h4>
          <ul>
            <li><a href="#">Location</a></li>
            <li><a href="#">Phone</a></li>
            <li><a href="#">Email</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bottom-bar">
      <p>&copy; 2023 Riding Website. All rights reserved.</p>
      <ul>
        <li><a href="#">Terms of Service</a></li>
        <li><a href="#">Privacy Policy</a></li>
      </ul>
    </div>
  </footer>
  )
}

export default Footer