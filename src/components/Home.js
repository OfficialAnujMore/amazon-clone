import React, { useEffect } from "react";
import "../styles/Home.css";
import Product from "./Product";

const Home = () => {
  const productData = [
    {
      id: "1454646",
      title:
        "2020 Apple MacBook Pro (13.3-inch/33.78 cm, Apple M1 chip with 8‑core CPU and 8‑core GPU, 8GB RAM, 512GB SSD) - Space Grey",
      price: 131990,
      rating: 4,
      image: "https://m.media-amazon.com/images/I/71an9eiBxpL._SL1500_.jpg",
    },
    {
      id: "8986234544",
      title: "Samsung Galaxy M52 5G (Blazing Black, 6GB RAM, 128GB Storage) Latest Snapdragon 778G 5G | sAMOLED 120Hz Display",
      price: 37999,
      rating: 4,
      image: "https://m.media-amazon.com/images/I/71QT7dSK4BL._SL1500_.jpg",
    },
    {
      id: "1113454564",
      title:
        "Apple Watch Series 7 (GPS + Cellular, 45mm) - Blue Aluminium Case with Abyss Blue Sport Band - Regular",
      price: 53900,
      rating: 4,
      image: "https://m.media-amazon.com/images/I/71SFsTBSJgL._SL1500_.jpg",
    },
    {
      id: "4654645465",
      title:
        "Oneplus Bullets Wireless Z Bass Edition Bluetooth in Ear Earphones with mic (Black)",
      price: 1999,
      rating: 4,
      image:
        "https://m.media-amazon.com/images/I/510Ns+URsGS._SL1500_.jpg",
    },
    {
      id: "45784132123",
      title:
        "Samsung Galaxy M52 5G (Blazing Black, 6GB RAM, 128GB Storage) Latest Snapdragon 778G 5G | sAMOLED 120Hz Display",
      price: 24999,
      rating: 4,
      image:
        "https://m.media-amazon.com/images/I/71b5BwTCcZL._SL1500_.jpg",
    },
    {
      id: "781213232",
      title:
        "Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!",
      price: 1099.0,
      rating: 4,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51u8ZRDCVoL._SX330_BO1,204,203,200_.jpg",
    },
    {
      id: "87412132121",
      title:
        "OnePlus 9RT 5G (Nano Silver, 8GB RAM, 128GB Storage)+Alexa hands-free capable",
      price: 37999.0,
      rating: 4,
      image:
        "https://m.media-amazon.com/images/I/61NC3RS4RXL._SL1500_.jpg",
    },
  ];

  useEffect(() => {
    productData.map((item) => {
      console.log("Data", item);
    });
  }, [productData]);
  return (
    <div className="home">
      <img
        // src="https://m.media-amazon.com/images/I/51LVRbVTqvL._SX3000_.jpg" // iphone image
        // src="https://m.media-amazon.com/images/I/61aUfpZteZL._SX3000_.jpg" // Prime image
        // Actual image
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="homeBanner"
        className="home__banner"
      />

      <div className="home__row">
        {productData.map((item) => {
          console.log("Datsasasasaa", item);
          return (
            <Product
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
