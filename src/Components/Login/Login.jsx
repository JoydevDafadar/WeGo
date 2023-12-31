import React, { useContext,  useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom';
import { userContext } from '../../App';

// import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { signin, signout, signUp } from "../../api/auth";


const Login = () => {

  const {setAlert, setMsg} = useContext(userContext);

  const [login, setLogin] = useState(false);
  const [signup, setSignup] = useState(false);

  const [signinemail, setSigninemail] = useState('');
  const [signinpass, setSigninpass] = useState('');

  const [signupemail, setSignupemail] = useState('');
  const [signuppass, setSignuppass] = useState('');
  const [signupconfirmpass, setSignupconfirmpass] = useState('');

  const[profilelist, setProfileList] = useState(false);


  const obj = {
    top: "20vh"
  }


  const signupSubmit = async (e) => {
    e.preventDefault();
    if (signuppass === signupconfirmpass) {
      try {
        const userCredential = await signUp(signupemail, signuppass);
        setSignup(false);
        setMsg('signUp Successfull');
        setAlert(true);
        setisSignin("true");
        localStorage.setItem('useron', 'true');
        localStorage.setItem('user', userCredential.user.email);
      } catch (error) {
        setMsg(error.message)
        setAlert(true);
      }
    }
    else {
      setMsg('Entered Password and Confirm Password does not matched.')
      setAlert(true);
    }

  }

  const signinSubmit = async (e) => {
    e.preventDefault();
    try {
      await signin(signinemail, signinpass);
      setisSignin("true");
      setMsg('signin Successfull');
      setAlert(true);
      setLogin(false);
    } catch (error) {
      setMsg(error.message);
      setAlert(true);
    }

  }

  const logoutsubmit = async (e) => {
    e.preventDefault();
    try {
      await signout();
      setisSignin("false");
      setMsg('Signout Successfull');
      setAlert(true);
    } catch (error) {
      setMsg(error.message);
      setAlert(true);
    }
  }


  const [isSignin, setisSignin] = useState(localStorage.getItem('useron'))


  return (isSignin !== "true") ?
    (
      <div className="btn">
        <button
          onClick={() => {
            setLogin(true);
            setSignup(false);
          }}
        >Login</button>

        <button
          onClick={() => {
            setSignup(true);
            setLogin(false);
          }}
        >Signup</button>

        <section style={(login) ? obj : {}} className="login">
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
              }} required />
            </div>
            <div className="input-text">
              <label>Password</label>
              <input type="password" id='signinpass' onChange={(e) => {
                setSigninpass(e.target.value);
              }} required />
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

        <section style={(signup) ? obj : {}} className="login">
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
              }} required />
            </div>
            <div className="input-text">
              <label>Password</label>
              <input type="password" id='pass' onChange={(e) => {
                setSignuppass(e.target.value);
              }} required />
            </div>
            <div className="input-text">
              <label>Confirm Password</label>
              <input type="password" id='signuppass' onChange={(e) => {
                setSignupconfirmpass(e.target.value);
              }} required />
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
          <div className="profile" onClick={() => {
            if(profilelist){
              setProfileList(false);
            }
            else{ setProfileList(true);}
          }}>
            <i className="fa-solid fa-user"></i>
          </div>
          <div className="profile-list" style={profilelist===false? {right : "-500px"}:{}}>
              <div className='items'><i className="fa-solid fa-user"></i>{localStorage.getItem('user')}</div>
              <div className="extra items"><Link to='/'>Home</Link></div>
              <div className="extra items"><Link to='/Book'>Book</Link></div>
              <div className="extra items"><Link to='/Share'>Share</Link></div>
              <div className="extra items"><Link to='/About'>About Us</Link></div>
              <Link to="/confirmation"><div className="items"><i className="fa-solid fa-car"></i>Your Confirmation</div></Link>
              <div onClick={logoutsubmit} className='items'><i className="fa-solid fa-right-from-bracket"></i>Logout</div>
          </div>
        </div>
      </>
    )
}

export default Login