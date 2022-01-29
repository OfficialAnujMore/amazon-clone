import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import "../styles/CheckoutProduct.css";
import { useStateValue } from "../dataLayer/StateProvider";

const CheckoutProduct = ({ id, title, image, price, rating }) => {
  const [state, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      item: {
        id: id,
      },
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => {
              return <StarIcon sx={{ color: "#FFA41C" }} />;
            })}
          {rating !== 5 ? (
            <div>
              {Array(5 - rating)
                .fill()
                .map((_) => {
                  return <StarBorderIcon sx={{ color: "#FFA41C" }} />;
                })}
            </div>
          ) : (
            <StarIcon sx={{ color: "#FFA41C" }} />
          )}
        </div>
        <button className="checkoutProduct__btn" onClick={removeFromBasket}>
          Remove to basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
