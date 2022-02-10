import React from "react";
import "../styles/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../dataLayer/StateProvider";
import { getBasketTotal } from "../dataLayer/reducer";

import { Link } from "react-router-dom";

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();
  const placed = () => {
    dispatch({
      type: "PLACE_ORDER",
      
    });
  };
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal {basket.length} items:
              <strong>{` ${value}`}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This is a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />{" "}
      <Link to="orderPlacement" className="subTotal_placeorder">
        <button onClick={placed}>Place order</button>
      </Link>
    </div>
  );
};

export default Subtotal;
