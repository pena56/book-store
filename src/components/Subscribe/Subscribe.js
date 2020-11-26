import React from "react";
import "./Subscribe.css";
import img from "../../imgs/newsletter.png";

function Subscribe() {
  return (
    <div className="subscribe">
      <div className="subscribe__image">
        <img src={img} alt="newsletter" className="subscribe__image-cls" />
      </div>
      <div className="subscribe__form">
        <p>Subscribe to our Newsletter</p>
        <div className="subscribe__formdetails">
          <div className="subscribe__form-inputs">
            <input type="text" placeholder="example@email.com" />
            <p>No spam, We promise.</p>
          </div>
          <button className="subscribe__form-button">Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
