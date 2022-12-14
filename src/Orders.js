<<<<<<< Updated upstream
import React, { useEffect, useState } from "react";
import "./Orders.css";
import { useStateValue } from "./StateProvider";
import {
  getFirestore,
  onSnapshot,
  query,
  collection,
  orderBy,
} from "firebase/firestore";
import Order from "./Order";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);


  useEffect(() => {
    if (user) {
      const db = getFirestore();
      const ref = query(collection(db, "users", user?.uid, "orders"), orderBy("created", "desc"));
      onSnapshot(ref, (snapshot) => {
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
=======
import React, { useState, useEffect } from 'react';
import './Orders.css'
import { db } from './firebase';
import { useStateValue } from './StateProvider';
import Order from './Order'


function Orders() {
    const [{basket, user}, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if(user){
            db.collection('users').doc(user?.uid).collection('orders').orderBy('created', 'desc').onSnapshot(snapshot => (
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            ))
        } else{
            setOrders([]);
        }
       
    }, [user]);
    return (
        <div className="orders">
            <h1>Your Orders</h1>
            <div className="orders__order">
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
>>>>>>> Stashed changes
}

export default Orders;
