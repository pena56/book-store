import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__address">
        <h3>
          Book<span>Store</span>
        </h3>
        <p>Port Harcourt, Rivers State. NG</p>
        <p>PO. BOX: 000567</p>
        <p>Phone: (+234)814 4682 873 </p>
        <p>Mail: support@bookstore.com</p>
      </div>
      <div className="footer__guide">
        <h3 className="footer__title">Shop Guide</h3>
        <p>About Us</p>
        <p>Delivery Information</p>
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
        <p>Service</p>
      </div>
      <div className="footer__account">
        <h3 className="footer__title">Account Info</h3>
        <p>My Account</p>
        <p>My Wishlist</p>
        <p>My Cart</p>
        <p>Sign In</p>
        <p>Check Out</p>
      </div>
      <div className="footer__socials">
        <h3 className="footer__title">Keep in touch with Us</h3>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Instagram</p>
      </div>
    </div>
  );
}

export default Footer;
