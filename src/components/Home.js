import React from "react";
import "../styles/Home.css";

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
    </div>
  );
};

export default Home;
