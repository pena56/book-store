import React from "react";
import "./Category.css";

function Category({ name, number }) {
  return (
    <div className="category">
      <p className="category__name">{name}</p>
      <p className="category__number">{number}</p>
    </div>
  );
}

export default Category;
