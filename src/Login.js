<<<<<<< Updated upstream
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    //firebase auth
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user) {
            navigate("/");
          }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
      });
      setEmail("")
      setPassword("")
  };

  const register = (e) => {
    e.preventDefault();

    //firebase register
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        if (user) {
          navigate("/");
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
        // ..
      });
      setEmail("")
      setPassword("")
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://marka-logo.com/wp-content/uploads/2020/04/Amazon-Logo.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form action="">
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="login__signInButton"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
          voluptate est dolor tempora iusto quasi neque, natus obcaecati eum
          doloremque consequatur commodi, beatae voluptatem id quam fugiat
          maxime eligendi corporis.
        </p>

        <button className="login__registerButton" onClick={register}>
          Create your amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
=======
import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
        e.preventDefault();
        //firebase login\
        auth.signInWithEmailAndPassword(email, password).then(auth => {
            history.push('/');
        }).catch(error => alert(error.message));
    }
    const register = e => {
        e.preventDefault();
        // firebase register
        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            history.push('/');
            //console.log(auth);
        }).catch(error => alert(error.message));
    }
    return (
        <div className="login">
            <Link to='/'>
              <img className='login__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                    <button onClick={signIn} type='submit' className="login__signInButton">Sign in</button>
                </form>
                <p>By signing-in you agree to the Amazon's Contitions of Use & Sale. Please see our Privacy Notice, our Cookie Notice and our Interest-Based Ads Notice</p>

                <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
            </div>
            
        </div>
    )
}

export default Login
>>>>>>> Stashed changes
