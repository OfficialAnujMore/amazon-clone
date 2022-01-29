import React from "react";
import "../styles/Headers.css";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useStateValue } from "../dataLayer/StateProvider";

const Headers = () => {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);


  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchOutlinedIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello User</span>
            <span className="header__optionLineTwo">Sign in</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo"> & Orders</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
      </div>

      <Link to="checkout" className="header__link">
        <div className="header__optionBasket">
          <ShoppingCartIcon />
          <span className="header__optionLineTwo header__basketCount">
            {basket?.length}
          </span>
        </div>
      </Link>
    </nav>
  );
};

export default Headers;
