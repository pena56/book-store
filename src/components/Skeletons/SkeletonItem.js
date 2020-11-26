import React from "react";
import "./Skeleton.css";
import Skeleton from "./SkeletonElement";
import Shimer from "./Shimer";

function SkeletonItem() {
  return (
    <div className="skeleton__wrapper">
      <div className="skeleton__item">
        <Skeleton
          style={{ width: "30%", marginRight: "20px" }}
          type="thumbnail"
        />
        <div style={{ width: "60%" }} className="skeleton__details">
          <Skeleton type="title" />
          <Skeleton type="author" />
          <Skeleton type="price" />
          <Skeleton type="text" />
          <Skeleton type="text" />
          <Skeleton type="text" />
        </div>
      </div>

      <Shimer />
    </div>
  );
}

export default SkeletonItem;
