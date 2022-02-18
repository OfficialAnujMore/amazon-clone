import React, { useState } from "react";
import { useStateValue } from "../dataLayer/StateProvider";
import "../styles/Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";


const Checkout = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/D23947948_IN_CEPC_Clearance-store_May21_rush_1500x300.jpg"
          alt="ad"
          className="checkout_ad"
        />
        {basket?.length === 0 ? (
          <div>
            <h1 className="checkout_title">Your Amazon Cart is empty.</h1>
            <p className="checkout_p">Check your Saved for later items below or continue shopping.</p>
          </div>
        ) : (
          <div>
            <h2 className="checkout_title">Your shopping basket</h2>
            {basket?.map((item) => {
              {
                // console.log(item);
              }
              return (
                <CheckoutProduct
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
      {basket.length > 0 && (
        <div className="checkout_right">
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
