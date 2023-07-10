import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Share.css'
import { createRide } from '../../api/auth';
import Footer from '../Footer/Footer';






const Share = () => {

  const [newname, setNewName] = useState("");
  const [newphno, setNewPhNo] = useState("");
  const [newsrc, setNewSrc] = useState("");
  const [newdst, setNewDst] = useState("");
  const [newseat, setNewseat] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const HandleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createRide(newname, newphno, newsrc,newdst, newseat, price, type, date, time)
      // console.log(newname, newphno, newsrc,newdst, newseat, price, type, date, time)
      alert( "Ride Regintration submitted successfully" )
      
    } catch (error) {
      alert(error)
    }
  }


  return (
    <>
    <Navbar/>

    <section className="share-form p1">
      <h2>Share your journey with others</h2>
      <form>
        <fieldset>
          <legend>Journey Data</legend>

          <div className="input-text">
            <input type="text" id='name' onChange={(e) => {setNewName(e.target.value)}} required/>
            <label htmlFor="">Name</label>
          </div>

          <div className="input-text">
            <input type="tel" id='ph-no' onChange={(e) => {setNewPhNo(e.target.value)}} required/>
            <label htmlFor="ph-no">Phone No</label>
          </div>

          <div className="input-text">
            <input type="text" id='source' onChange={(e) => {setNewSrc(e.target.value)}} required/>
            <label htmlFor="source">Going From</label>
          </div>

          <div className="input-text">
            <input type="text" id='destination'  onChange={(e) => {setNewDst(e.target.value)}} required/>
            <label htmlFor="destination">Destination</label>
          </div>

          <div className="input-text">
            <input type="number" id='seat' onChange={(e) => {setNewseat(e.target.value)}} required/>
            <label htmlFor="seat">Available Seat</label>
          </div>

          <div className="input-text">
            <input type="number" id='price' onChange={(e) => {setPrice(e.target.value)}} required/>
            <label htmlFor="price">Price/Seat</label>
          </div>

          <div className="input-select">
            <label for="cars">Choose a type:</label>

            <select id="cars" onChange={(e) => {setType(e.target.value)}} required>
              <option >Select Here</option>
              <option value="Car">Car</option>
              <option value="Bike">Bike</option>
            </select>
          </div>

          <div className="input-text">
            <input type="date" id='date' onChange={(e) => {setDate(e.target.value)}} required/>
            <label htmlFor="date">Date</label>
          </div>

          <div className="input-text">
            <input type="time" id='time'  onChange={(e) => {setTime(e.target.value)}} required/>
            <label htmlFor="date">Time</label>
          </div>
          <button onClick={HandleSubmit}>Submit Here</button>

        </fieldset>
      </form>
    </section>
    <Footer/>
    </>
  )
}

export default Share