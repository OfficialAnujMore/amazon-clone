import React from "react";
import "../styles/Footer.css";

const Footer = () => {
    const toTop = () =>{
        window.scrollTo(0, 0)
    }
  return (
    <div className="footer">
      <button className="top" onClick={toTop}>
        <h2>Back to top</h2>
      </button>
      <div className="bottom">
        <div className="col">
          <h3 className="footer-title">Get to Know Us</h3>

          <h4 className="footer-sub">About Us</h4>
          <h4 className="footer-sub">Carrers</h4>
          <h4 className="footer-sub">Press Release</h4>
          <h4 className="footer-sub">Amazon Cares</h4>
          <h4 className="footer-sub">Gift a smile</h4>
          <h4 className="footer-sub">Amazon Science</h4>
        </div>
        <div className="col">
          <h3 className="footer-title">Connect with Us</h3>

          <h4 className="footer-sub">Facebook</h4>
          <h4 className="footer-sub">Twitter</h4>
          <h4 className="footer-sub">Instagram</h4>
        </div>
        <div className="col">
          <h3 className="footer-title">Make Money with Us</h3>

          <h4 className="footer-sub">Sell on Amazon</h4>
          <h4 className="footer-sub">Sell under Amazon Accelerator</h4>
          <h4 className="footer-sub">Amazon Global Selh4ng</h4>
          <h4 className="footer-sub">Become an Affih4ate</h4>
          <h4 className="footer-sub">Fulfilment by Amazon</h4>
          <h4 className="footer-sub">Advertise Your Products</h4>
          <h4 className="footer-sub">Amazon Pay on Merchants</h4>
        </div>
        <div className="col">
          <h3 className="footer-title">Let Us Help You</h3>

          <h4 className="footer-sub">COVID-19 and Amazon</h4>
          <h4 className="footer-sub">Your Account</h4>
          <h4 className="footer-sub">Returns Centre</h4>
          <h4 className="footer-sub">Become an Affih4ate</h4>
          <h4 className="footer-sub">100% Purchase Protection</h4>
          <h4 className="footer-sub">Amazon App Download</h4>
          <h4 className="footer-sub">Amazon Assistant Download</h4>
          <h4 className="footer-sub">Help</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
