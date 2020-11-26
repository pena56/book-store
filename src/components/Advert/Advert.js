import React from "react";
import "./Advert.css";
import ad1 from "../../imgs/ad-1.jpg";
import ad2 from "../../imgs/ad-2.jpg";

function Advert() {
  return (
    <div className="advert">
      <div className="advert__best">
        <div className="advert__bestimage">
          <img className="advert__image" src={ad1} alt="advert 1" />
        </div>
        <div className="advert__bestwriteup">
          <h3 className="advert__bestwriteup-header">Best Books of 2019</h3>
          <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubiliorci porta dapibus.
          </p>
          <button className="advert__bestwriteup-button">
            Learn More
          </button>
        </div>
      </div>

      <div className="advert__best">
        <div className="advert__bestimage2">
          <img className="advert__image" src={ad2} alt="advert 2" />
        </div>
        <div className="advert__bestwriteup2">
          <h3 className="advert__bestwriteup-header">Why you should Read Everyday</h3>
          <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuereis porttitor volutpat.
            Pellentesque in ipsum id orci porta dapibus.
          </p>
          <button className="advert__bestwriteup-button">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Advert;
