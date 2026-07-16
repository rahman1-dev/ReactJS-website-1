import React from "react";
import { imgBaseURL } from "../utils/constant";

const MenuItem = ({ details }) => {
  // console.log("details", details);

  const {
    id,
    name,
    defaultPrice,
    finalPrice,
    category,
    description,
    imageId,
    ratings,
  } = details;

  return (
    <div className="menu-item-conatiner">
      <div className="menu-item-details">
        <h3>{name}</h3>
        <h4>₹{finalPrice / 100}</h4>
        <h5>
          ⭐{ratings.aggregatedRating.rating}(
          {ratings.aggregatedRating.ratingCount})
        </h5>
        <p>{description}</p>
      </div>

      <div className="menu-image">
        <img src={imgBaseURL + imageId} alt={name} />
        <button>Add Cart</button>
      </div>
    </div>
  );
};

export default MenuItem;
