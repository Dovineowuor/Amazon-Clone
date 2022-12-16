<<<<<<< Updated upstream
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Orders from "./Orders";
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';

const promise = loadStripe('pk_test_51KqSMEHog0SfCp7yLje5vw7VjuSdA4dMRPw0Z94pB51ku2hWSWGhTk1PIupGRrk3FnrJw4f7WWjq9XLSTMx2Spar009JftVjnw');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run one when component loads..
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        // User logged in
        console.log("The user is __> ", authUser);

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
        // ...
      } else {
        // User is logged out
        // ...
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        />
        <Route
          path="/orders"
          element={
            <>
              <Header />
              <Orders />
            </>
          }
        />
        <Route
          path="/payment"
          element={
            <>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </>
          }
        />
      </Routes>
    </div>
=======
import React, { useEffect } from 'react';
import './App.css';
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login'
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import Orders from './Orders'

const promise = loadStripe('pk_test_51HeJNDK860DkztEzJf2UqGmoGNfg4sRh5fSP8OqrTU1hz9tPSsIHVjvDONFHfPrIxBHm1Pp0ANVqJrHnG1WxCu5k00Rh4sPENp')

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //run once when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if(authUser){
        //The user just logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else{
        //User is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, []);

  return (
    <Router>
      <div className="app">
        

        <Switch>
          <Route path="/login">      
            <Login/>
          </Route>
          <Route path="/orders">
            <Header />     
            <Orders/>
          </Route>
          <Route path="/checkout">  
            <Header />     
            <Checkout />
          </Route>
          <Route path="/payment">  
            <Header /> 
            <Elements stripe= {promise}>
               <Payment />
            </Elements>                
          </Route>

          <Route path="/">
            <Header />
            <Home />  
          </Route>
        </Switch>        
      </div>
    </Router>

    
>>>>>>> Stashed changes
  );
}

export default App;
