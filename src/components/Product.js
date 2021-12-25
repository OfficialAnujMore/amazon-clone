import React from "react";
import "../styles/Product.css";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const Product = ({ id, title, price, image, rating }) => {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
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
      </div>
      <img src={image} alt="product_image" />
      <button>Add to basket</button>
    </div>
  );
};

export default Product;
