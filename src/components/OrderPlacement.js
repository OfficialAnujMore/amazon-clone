import React from "react";
import '../styles/OrderPlacement.css'

const OrderPlacement = () => {
  return (
    <div className="confirm">
      <img
        className="confirm_logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG13.png"
        alt="Amazon"
      />
      <h2>Your order has been placed </h2>
      <p>Thank you for shopping</p>
    </div>
  );
};

export default OrderPlacement;
