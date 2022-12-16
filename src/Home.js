import React from "react";
import "./Home.css";
import Product from "./Product";
import { ToastContainer } from "react-toastify";
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="1"
            title="Lenovo Legion 5 15 Gaming Laptop, 15.6' FHD 165Hz Display, AMD Ryzen 7 5800H,NVIDIA GeForce RTX 3050Ti,RGB Backlight, 32GB RAM, 1TB PCIe SSD, Windows 11H /ES 32GB USB"
            price={1559}
            image="https://m.media-amazon.com/images/I/717f5biEgPL._AC_UY218_.jpg"
            rating={4}
          />
          <Product
            id="2"
            title="Runpu HD 1080P Webcam with Built-in Microphone Laptop USB PC Computer Streaming Wecam for Video Calling Conferencing Recording Gaming Zoom YouTube Facetime"
            price={15.99}
            image="https://m.media-amazon.com/images/I/51tjfpm71iL._AC_UY218_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="3"
            title="Acer Predator Helios 300 PH315-54-760S Gaming Laptop | Intel i7-11800H | NVIDIA GeForce RTX 3060 Laptop GPU | 15.6' Full HD 144Hz 3ms IPS Display | 16GB DDR4 | 512GB SSD | Killer WiFi 6 | RGB Keyboard"
            price={1499}
            image="https://m.media-amazon.com/images/I/71nz3cIcFOL._AC_SX569_.jpg"
            rating={5}
          />
          <Product
            id="4"
            title="JBL Clip 4 - Portable Mini Bluetooth Speaker, Big Audio and Punchy bass, Integrated Carabiner, IP67 Waterproof and dustproof, 10 Hours of Playtime, Speaker for Home, Outdoor and Travel - (Red)"
            price={46.95}
            image="https://m.media-amazon.com/images/I/71+0EFi2hVL._AC_SX569_.jpg"
            rating={5}
          />
          <Product
            id="5"
            title="Yootech Wireless Charger,10W Max Fast Wireless Charging Pad Compatible with iPhone 13/13 Pro/13 Mini/13 Pro Max/SE 2022/12/SE 2020/11/X/8,Samsung Galaxy S22/S21/S20/S10,AirPods Pro(No AC Adapter)"
            price={11.04}
            image="https://m.media-amazon.com/images/I/61oIAKY9s1L._AC_SX679_.jpg"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="6"
            title="Toshiba 55-inch Class C350 Series LED 4K UHD Smart Fire TV (55C350KU, 2021 Model)"
            price={399.99}
            image="https://m.media-amazon.com/images/I/81QvlthwGRS._AC_SX425_.jpg"
            rating={4}
          />
        </div>
      </div>
      <ToastContainer
        position="top-right"
        transition={Flip}
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default Home;
