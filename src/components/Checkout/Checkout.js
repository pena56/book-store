import React from "react";
import "./Checkout.css";
import checkout from "../../imgs/checkout.png";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { getCartTotal } from "../../reducer";

function Checkout() {
  const [{ cart }] = useStateValue();
  return (
    <div>
      <div
        style={{
          marginTop: "80px",
          width: "100%",
          height: "200px",
          backgroundSize: "contain",
          backgroundImage: `url(${checkout})`,
          backgroundPosition: "center center",
        }}
      ></div>
      <div className="checkout">
        <div className="checkout__products">
          {cart?.length === 0 ? (
            <div className="checkout__empty">
              <h3>Your Shopping Cart is Empty</h3>
              <p>
                You have no item in your cart, To buy one click on the "Add to
                Cart" button next to an item
              </p>
            </div>
          ) : (
            <div>
              <h2>Your Shopping Cart</h2>
              <hr />
              {cart?.map((product) => (
                <CheckoutProduct
                  key={product.id}
                  id={product.id}
                  cover={product.cover}
                  title={product.title}
                  author={product.author}
                  desc={product.desc}
                  price={product.price}
                  ratings={product.ratings}
                />
              ))}
            </div>
          )}
        </div>
        {cart?.length > 0 ? (
          <div className="checkout__subtotal">
            <p>
              Subtotal ({cart?.length} items):
              <strong>${getCartTotal(cart)}</strong>
            </p>
            <button className="checkout__subtotal-button">
              Proceed to Checkout
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Checkout;
