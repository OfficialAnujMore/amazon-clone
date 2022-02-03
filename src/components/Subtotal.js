import React from "react";
import "../styles/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../dataLayer/StateProvider";
import {getBasketTotal} from "../dataLayer/reducer";

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();
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
                <input type="checkbox"/>This is a gift
              </small>
            </>
          )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
