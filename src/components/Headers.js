import React from "react";
import "../styles/Headers.css";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";

Headers = () => {
  return (
    <nav className="header">
      {/* Image */}
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon"
        />
      </Link>

      {/* Search box */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchOutlinedIcon className="header__searchIcon" />
      </div>
      {/* Links */}
      {/* Cart icon */}
    </nav>
  );
};

export default Headers;
