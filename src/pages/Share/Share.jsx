import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Share.css'

const Share = () => {
  return (
    <>
    <Navbar/>

    <section className="share-form p1">
      <h2>Share your journey with others</h2>
      <form>
        <fieldset>
          <legend>Journey Data</legend>

          <div className="input-text">
            <input type="text" id='name' />
            <label htmlFor="">Name</label>
          </div>

          <div className="input-text">
            <input type="tel" id='ph-no'/>
            <label htmlFor="ph-no">Phone No</label>
          </div>

          <div className="input-text">
            <input type="text" id='source' />
            <label htmlFor="source">Going From</label>
          </div>

          <div className="input-text">
            <input type="text" id='destination' />
            <label htmlFor="destination">Destination</label>
          </div>

          <div className="input-text">
            <input type="number" id='seat' />
            <label htmlFor="seat">Available Seat</label>
          </div>

          <div className="input-text">
            <input type="number" id='price' />
            <label htmlFor="price">Price/Seat</label>
          </div>

          <div className="input-select">
            <label for="cars">Choose a type:</label>

            <select id="cars">
              <option value="volvo">Car</option>
              <option value="saab">Bike</option>
            </select>
          </div>

          <div className="input-text">
            <input type="date" id='date' />
            <label htmlFor="date">Date</label>
          </div>

          <div className="input-text">
            <input type="time" id='date' />
            <label htmlFor="date">Time</label>
          </div>
          <button>Submit Here</button>

        </fieldset>
      </form>
    </section>
    </>
  )
}

export default Share