import React, { useState } from 'react'
import './Book.css'
import Navbar from '../../Components/Navbar/Navbar'
import { createRef, getRides, updateRide } from '../../api/auth'

const Book = () => {

  const [data, setData] = useState([]);
  const [source, setSource] = useState("");
  const [desti, setDesti] = useState("");  
  const [date, setDate] = useState("");  






  const handleSubmmit = async (e) => {
    e.preventDefault();

    try {
      const arr = await getRides();
      setData(arr);
      console.log( arr[0].id)
    } catch (err) {
      alert(err);
    }

  }

  return (
    <>
      <Navbar />
      <div className="book p1">

        <div className="search">
          <h2>Search Your Ride</h2>
          <div className="input">
            <input type="text" placeholder='Sorce' required onChange={(e) => {setSource(e.target.value)}}/>
            <i className="fa-solid fa-arrow-right"></i>
            <input type="text" placeholder='Destination' required onChange={(e) => {setDesti(e.target.value)}}/>
          </div>
          <input type="date" required onChange={ (e) => {setDate(e.target.value)}}/>
          <button onClick={handleSubmmit}> Search </button>
        </div>

        <div className="results">

          {data.map((ele, ind) => {
            return ( (ele._document.data.value.mapValue.fields.src.stringValue === source) && (ele._document.data.value.mapValue.fields.dst.stringValue === desti) && (ele._document.data.value.mapValue.fields.date.stringValue === date))?
              (
                <div className="part" ind={ind}>
                  <p><strong>Name : </strong> {ele._document.data.value.mapValue.fields.name.stringValue} </p>
                  <p><strong>Ph No : </strong> {ele._document.data.value.mapValue.fields.ph_no.stringValue} </p>
                  <div className="name">
                    <p>{ele._document.data.value.mapValue.fields.src.stringValue}</p>
                    <i className="fa-solid fa-arrow-right"></i>
                    <p>{ele._document.data.value.mapValue.fields.dst.stringValue}</p>
                  </div>
                  <div className="date-time">
                    <p>{ele._document.data.value.mapValue.fields.date.stringValue}</p>
                    <p>{ele._document.data.value.mapValue.fields.time.stringValue}</p>
                  </div>
                  <p><strong>Type : </strong> {ele._document.data.value.mapValue.fields.type.stringValue} </p>
                  <p><strong>Available Seat : </strong> {ele._document.data.value.mapValue.fields.seat.stringValue} </p>
                  <p><strong>Price/Seat : </strong> {ele._document.data.value.mapValue.fields.price.stringValue} </p>
                  <button onClick={ async () =>{
                    await updateRide(ele.id, ele._document.data.value.mapValue.fields.seat.stringValue)
                    await createRef(localStorage.getItem("user"), ele._document.data.value.mapValue.fields.name.stringValue, ele._document.data.value.mapValue.fields.ph_no.stringValue, ele._document.data.value.mapValue.fields.src.stringValue, ele._document.data.value.mapValue.fields.dst.stringValue, ele._document.data.value.mapValue.fields.price.stringValue )
                    alert("Booking Done Successfully")
                  }}> Book Now </button>
                </div>
              ):(
                <></>
              )
          })}

          

        </div>

      </div>
    </>
  )
}

export default Book