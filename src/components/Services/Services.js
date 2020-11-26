import React from "react";
import "./Services.css";
import LocalShippingOutlinedIcon from "@material-ui/icons/LocalShippingOutlined";
import RedeemIcon from "@material-ui/icons/Redeem";
import QuestionAnswerOutlinedIcon from "@material-ui/icons/QuestionAnswerOutlined";
import PaymentIcon from "@material-ui/icons/Payment";

function Services() {
  return (
    <div className="services">
      <div className="services__list">
        <div className="service__item">
          <LocalShippingOutlinedIcon style={{ fontSize: 70 }} />
          <h5 className="service__item-header">Free Shipping</h5>
          <p className="service__item-desc">Delivery in 3 days.</p>
        </div>
        <div className="service__item">
          <RedeemIcon style={{ fontSize: 70 }} />
          <h5 className="service__item-header">Gifts and Sales</h5>
          <p className="service__item-desc">Gift with every order.</p>
        </div>
        <div className="service__item">
          <QuestionAnswerOutlinedIcon style={{ fontSize: 70 }} />
          <h5 className="service__item-header">Online Support</h5>
          <p className="service__item-desc">Online Support 24/7.</p>
        </div>
        <div className="service__item">
          <PaymentIcon style={{ fontSize: 70 }} />
          <h5 className="service__item-header">Secure Payment</h5>
          <p className="service__item-desc">Fast and Secure Payments.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
