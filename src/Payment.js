<<<<<<< Updated upstream
import React, { useEffect, useState } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useNavigate } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";
import { doc, getFirestore, setDoc } from "firebase/firestore";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    //generate the special stripe secret which allows us to charge a customer

    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  const handleSubmit = async (event) => {
    // do all the fancy stripe stuff
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //paymentIntent = payment confirmation
        const db = getFirestore();
        const paymentRef = doc(
          db,
          "users",
          user?.uid,
          "orders",
          paymentIntent.id
        );
        setDoc(paymentRef, {
          basket: basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        navigate("/orders", { replace: true });
      });
  };

  const handleChange = (event) => {
    // Listen for changes inside CardElement
    //and display errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>

        {/* Payment Delivery Address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>

        {/* Checkout Product */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__item">
            {basket.map((item, index) => (
              <CheckoutProduct
                key={index}
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* Payment Method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* Stripe */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total : {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>
                    {processing ? (
                      <p>Processing</p>
                    ) : succeeded ? (
                      <p>Succsess</p>
                    ) : (
                      "Buy Now"
                    )}
                  </span>
                </button>
              </div>

              {/* Error */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
=======
import React, { useState, useEffect} from 'react';
import './Payment.css'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios'
import { db } from './firebase';


function Payment() {
    const [{basket, user}, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();
    
    const [error, setError] = useState(null);
    const [disabled, setDesabled] = useState(true);
    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);
    const [clientSecret, setclientSecret] = useState(true);

    useEffect(() => {
        //Stripe secret to charge the customer

        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `payments/create?total=${getBasketTotal(basket) * 100}`
            })
            setclientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

    console.log('THE SECRET IS >>>', clientSecret)


    const handleSubmit = async (e) => {
        // stripe stuff
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method:{
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent}) => {
            //PaymentIntent = Payment Confirmation

            db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })

            setSucceeded(true);
            setError(null);
            setProcessing(false);
            
            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/orders')
        })
    }

    const handleChange =e => {
        setDesabled(e.empty);
        setError(e.error ? e.error.message: "");
    }
    return (
        <div className='payment'>
            <div className="payment__container">
                <h1>Checkout ( <Link to="/checkout"> { basket?.length} items</Link> )</h1>
                <div className='payment__section'>
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>+254 React Lane</p>
                        <p>React Flip-Move</p>
                    </div>

                </div>
                <div className='payment__section'>
                   <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct 
                                id = {item.id}
                                title = {item.title}
                                image = {item.image}
                                price = {item.price}
                                rating = {item.rating}
                            />
                        ))}
                    </div>
                </div>
                <div className='payment__section'>
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        {/*payment stripe magic */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment__priceContainer">
                                <CurrencyFormat 
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2} 
                                    value={getBasketTotal(basket)} displayType={"text"}
                                    thousandSeparator={true} prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now" } </span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
                    
            </div>
        </div>
    )
>>>>>>> Stashed changes
}

export default Payment;
