import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import Product from "./Product";
import colRef from "../dataLayer/firebase-config";
import { getDocs } from "firebase/firestore";
import { CircularProgress } from "@mui/material";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getDocs(colRef).then((snapshot) => {
      setData(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,
          price: doc.data().price,
          rating: doc.data().rating,
          image: doc.data().image,
        }))
      );

      data.map((item) => {
        console.log(item);
      });
    });

    // productData.map((item) => {});
  }, []);

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

      {data.length === 0 ? (
        <div className="loader">
          <CircularProgress color="warning" size="4rem" />
        </div>
      ) : (
        <div className="home__row">
          {data.map((item) => {
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
      )}
    </div>
  );
};

export default Home;
