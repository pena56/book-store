import React from "react";
import "./Banner.css";
import background from "../../imgs/banner.png";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__details">
        <h1 className="banner__header">It Starts Here</h1>
        <p className="banner__text">
          The Independent bookshop with traditional values
        </p>
        <button className="banner__button">Browse Books</button>
      </div>
      <div className="banner__image">
        <img className="banner__image-cls" alt="banner" src={background} />
      </div>
    </div>
  );
}

export default Banner;
