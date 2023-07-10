import React, { useState, useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Confirmation.css'
// import { useState, useEffect } from 'react-router-dom'
import { getRef } from '../../api/auth'

const Confirmation = () => {

    const [arr, setArr] = useState([]);


    useEffect( () => {
        const fetchdata = async( ) => {
            const data = await getRef(localStorage.getItem('user'))
            setArr( data );
            // console.log( arr );
        }

        fetchdata();
    }, []);

  return (
    <>
    <Navbar/>
    
    <div className="items p1 ">

        {arr.map((ele)=>{
            return(
                <div className="item">
                    <h3>{ele._document.data.value.mapValue.fields.src.stringValue} --- {ele._document.data.value.mapValue.fields.dst.stringValue}</h3>
                    <p><strong>Name : </strong> {ele._document.data.value.mapValue.fields.name.stringValue} </p>
                    <p><strong>Ph No : </strong> {ele._document.data.value.mapValue.fields.ph_no.stringValue} </p>
                    <p><strong>Price : </strong> {ele._document.data.value.mapValue.fields.price.stringValue} </p>
                </div>
            )
        })}

    </div>

    </>
  )
}

export default Confirmation