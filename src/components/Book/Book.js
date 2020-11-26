import React from "react";
import "./Book.css";
import StarIcon from "@material-ui/icons/Star";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";
import { useStateValue } from "../../StateProvider";

function Book({ id, cover, title, author, price, ratings, desc }) {
  const [, dispatch] = useStateValue();
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id,
        cover,
        title,
        author,
        price,
        ratings,
        desc,
      },
    });
  };
  return (
    <div className="book">
      <div className="book__cover">
        <img alt="Cover" src={cover} />
      </div>
      <div className="book__details">
        <p className="book__title">{title}</p>
        <p className="book__author">{author}</p>
        <p className="book__price">
          ${price}{" "}
          <span>
            {Array(ratings)
              .fill()
              .map((_) => (
                <StarIcon style={{ color: "#FFDF00", marginTop: "auto" }} />
              ))}
          </span>
        </p>
        <p className="book__desc">{desc}</p>
        <div className="book__actions">
          <button onClick={addToCart} className="book__button">
            Add to Cart
          </button>
          <TurnedInNotIcon style={{ fontSize: "35" }} className="bookmark" />
        </div>
      </div>
    </div>
  );
}

export default Book;
