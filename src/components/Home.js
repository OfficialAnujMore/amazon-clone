import React from "react";
import "../styles/Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <img
        // src="https://m.media-amazon.com/images/I/51LVRbVTqvL._SX3000_.jpg" // iphone image
        src="https://m.media-amazon.com/images/I/61aUfpZteZL._SX3000_.jpg" // Prime image
        // Actual image
        // src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="homeBanner"
        className="home__banner"
      />

      <Product
        id="1213"
        title="OnePlus Smart Band: 13 Exercise Modes, Blood Oxygen Saturation (SpO2), Heart Rate & Sleep Tracking, 5ATM+Water & Dust Resistant( Android & iOS Compatible)"
        price={1799.00}
        rating={4}
        image="https://images-eu.ssl-images-amazon.com/images/I/61XPTRJZcCL._AC_UL450_SR450,320_.jpg"
      />
    </div>
  );
};

export default Home;
