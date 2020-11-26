import React from "react";
import "./CheckoutProduct.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "../../StateProvider";

function CheckoutProduct({ cover, id, desc, title, author, ratings, price }) {
  const [, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        id
      },
    });
  };

  return (
    <div className="checkoutProduct">
      <div className="checkoutProduct__cover">
        <img className="checkoutProduct__image" alt="Cover" src={cover} />
      </div>
      <div className="checkoutProduct__details">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__author">{author}</p>
        <p className="checkoutProduct__price">
          ${price}{" "}
          <span>
            {Array(ratings)
              .fill()
              .map((_) => (
                <StarIcon style={{ color: "#FFDF00", marginTop: "auto" }} />
              ))}
          </span>
        </p>
        <p className="checkoutProduct__desc">{desc}</p>
        <div className="checkoutProduct__actions">
          <button onClick={removeFromCart} className="checkoutProduct__button">
            Remove From Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
