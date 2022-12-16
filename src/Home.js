<<<<<<< Updated upstream
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
=======
import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" 
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt="" />

                <div className="home__row">
                    <Product 
                        id="12321341" 
                        title='AlienWare' price={49.99} 
                        image="https://m.media-amazon.com/images/I/51HzG7dwAHL._AC_SY200_.jpg" 
                        rating={3} />
                    <Product             
                        id="49538094"
                        title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                        price={239.0}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                    />
                    <Product                      
                        id="3254354345"
                        title="SkyTech Blaze II Gaming Computer PC Desktop – Ryzen 5 2600 6-Core 3.4 GHz, NVIDIA GeForce GTX 1650 4G, 500G SSD, 8GB DDR4, RGB, AC WiFi, Windows 10 Home 64-bit"
                        price={598.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/81PeBrTfhnL._AC_UY218_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="4903850"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={199.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                     <Product
                        
                        id="3254354345"
                        title="Beexcellent Gaming Headset for PS4 Xbox One PC Mac Controller Gaming Headphone with Crystal Stereo Bass Surround Sound, LED Light & Noise-Isolation Microphone"
                        price={598.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/41R+VaxAEbL._AC_SY200_.jpg"
                    />
                    

                </div>

                <div className="home__row">
                    <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
                    <Product
                        id="90829332"
                        title="iBUYPOWER Gaming PC Computer Desktop Element Mini 9300 (AMD Ryzen 3 3100 3.6GHz, AMD Radeon RX 550 2GB, 8GB DDR4 RAM, 240GB SSD, WiFi Ready, Windows 10 Home)"
                        price={529.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/712irbqWpeL._AC_UY218_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="90829332"
                        title=" Redragon S107-BA Gaming Keyboard and Mouse Combo Wired Mechanical Feel RGB LED Backlit Keyboard 3200 DPI Gaming Mouse for Windows PC (Keyboard Mouse Combo)
                        4.6 out of 5 stars 409
                        "
                        price={1094.98}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71xcJdhmGgL._AC_UY218_.jpg"
                    />
                    <Product
                        id="90829332"
                        title="Fossil Men's Machine Stainless Steel Chronograph Quartz Watch"
                        price={59.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/81zTMhnFZOL._AC_UL320_.jpg"
                    />
                      <Product
                        id="90829332"
                        title=" [Ryzen & GTX 1050 Ti Edition] SkyTech Archangel Gaming Computer Desktop PC Ryzen 1200 3.1GHz Quad-Core, GTX 1050 Ti 4GB, 8GB DDR4 2400, 1TB HDD, 24X DVD, Wi-Fi USB, Windows 10 Home 64-bit "
                        price={649.99}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/81aVtkFWenL._AC_UL320_.jpg"
                    />
                </div>
            </div>
        </div>
    )
>>>>>>> Stashed changes
}

export default Home;
