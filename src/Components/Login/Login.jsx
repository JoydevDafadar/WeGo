import React, { useEffect, useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom';

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTD_-gzijcmzD5vIhb7_XBfjwzOlkHO9o",
  authDomain: "wego-af74f.firebaseapp.com",
  projectId: "wego-af74f",
  storageBucket: "wego-af74f.appspot.com",
  messagingSenderId: "943499970684",
  appId: "1:943499970684:web:b14ea293c4b85b1cb621f9",
  measurementId: "G-G7S37KGVD3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



const Login = () => {

  // localStorage.setItem('useron', 'false');
  // localStorage.setItem('user', '');
  // console.log(localStorage.getItem('useronn'))

  // const [useron, setUseron] = useState(false);
  // const [user, setUser] = useState('');

  // const[useron, setUseron] = useState(localStorage.getItem('useron'));

  const[ login, setLogin ] = useState( false );
  const[ signup, setSignup ] = useState( false );

  const [signinemail, setSigninemail] = useState('');
  const [signinpass, setSigninpass] = useState('');

  const [signupemail, setSignupemail ] = useState('');
  const [signuppass, setSignuppass ] = useState('');
  const [signupconfirmpass, setSignupconfirmpass ] = useState('');


  const obj = {
    top: "20vh"
  }


  const signupSubmit = (e) =>{
    e.preventDefault();
    // console.log( signupemail + "  " + signuppass + "  " + signupconfirmpass);

    const auth = getAuth();

    if( signuppass === signupconfirmpass ){

      createUserWithEmailAndPassword(auth, signupemail, signuppass)
      .then((userCredential) => {
        setSignup(false);
        setisSignin("true");
        localStorage.setItem('useron', 'true');
        localStorage.setItem('user', userCredential.user.email);
      })
      .catch((error)=>{
        alert(error.message)
      })
    }
    else{
      alert('Entered Password and Confirm Password does not matched.')
    }

  }

  const signinSubmit = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, signinemail, signinpass)
      .then((userCredential) => {
        // Signed in 
        localStorage.setItem('user', userCredential.user.email);
        localStorage.setItem('useron', 'true');
        setisSignin("true");
        alert('signin Successfull')
        setLogin(false);
        
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  const logoutsubmit = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signOut(auth).then(() => {
      localStorage.setItem('useron', 'false');
      setisSignin("false");
      alert('Signout Successfull');
    }).catch((error) => {
      alert(error.message);
    });
  }



  // useEffect(() => {

  // },[])
  const [isSignin, setisSignin] = useState( localStorage.getItem('useron') )


  return ( isSignin !== "true" ) ? 
  (
    <div className="btn">
      <button
      onClick={ () => {
        setLogin( true );
        setSignup(false);
      }}
      >Login</button>

      <button
      onClick={() => {
        setSignup( true );
        setLogin( false);
      }}
      >Signup</button>

      <section style={ (login)?  obj : {} } className="login">
        <form>
          <h2>Login</h2>
          <div className="cross"><i className="fa-solid fa-xmark" 
          onClick={() => {
            setLogin(false);
          }}
          ></i></div>
          <div className="input-text">
            <label >Email</label>
            <input type="email" id='signinemail' onChange={(e) => {
              setSigninemail(e.target.value);
            }} required/>
          </div>
          <div className="input-text">
            <label>Password</label>
            <input type="password" id='signinpass' onChange={(e) =>{
              setSigninpass(e.target.value);
            }} required/>
          </div>
          <div className="forgot">
            <input type="checkbox" />
            <p>Remember me </p>
            <Link to="#">  Forgot Password? </Link>
          </div>
          <button onClick={signinSubmit}>Login</button>
          <div className='signup'>
            <p>Don't have any account?</p>
            <Link onClick={() => {
              setLogin(false);
              setSignup(true);
            }}>Signup</Link>
          </div>

        </form>
      </section>

      <section style={ (signup)?  obj : {} } className="login">
        <form>
          <h2>Sign up</h2>
          <div className="cross"><i className="fa-solid fa-xmark" 
          onClick={() => {
            setSignup(false);
          }}
          ></i></div>
          <div className="input-text">
            <label>Email</label>
            <input type="email" id='email' onChange={(e) => {
              setSignupemail(e.target.value);
            }} required/>
          </div>
          <div className="input-text">
            <label>Password</label>
            <input type="password" id='pass' onChange={(e) => {
              setSignuppass(e.target.value);
            }} required/>
          </div>
          <div className="input-text">
            <label>Confirm Password</label>
            <input type="password" id='signuppass' onChange={(e) => {
              setSignupconfirmpass(e.target.value);
            }} required/>
          </div>
          
          <button onClick={signupSubmit}>Sign up</button>
          <div className='signup'>
            <p>Aready have an account?</p>
            <Link onClick={() => {
              setSignup(false);
              setLogin(true);
            }}>Signin</Link>
          </div>

        </form>
      </section>

    </div>
  )
  : 
  (
    <>
      <div className="user">
        <div className="profile">
          <i className="fa-solid fa-user"></i>
          <p>{localStorage.getItem('user')}</p>
        </div>
        <button onClick={ logoutsubmit }>Logout</button>
      </div>
    </>
  )
}

export default Login