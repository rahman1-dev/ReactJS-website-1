import React from "react";
import React, { useEffect, useState } from "react";
import { imgBaseURL, MenuAPI } from "../utils/constant";
import { useParams } from "react-router";
import Category from "./RestaurantCategory";
import Shimmer from "./Shimmer";

const RestaurantMenuInfo = ({ menu }) => {
  const {
    name,
    avgRatingString,

    totalRatingsString,
    cuisines,
    cloudinaryImageId,

    costForTwoMessage,
  } = menu?.data?.cards[2]?.card?.card?.info;

  return (
    <div className="rest-page-container">
      <div className="rest-page-det">
        <h2 className="rest-page-name">{name}</h2>
        <img
          className="rest-page-img"
          src={`${imgBaseURL}${cloudinaryImageId}`}
          alt="res-image"
        />

        <div className="res-menu-details">
          <h4>
            ⭐{avgRatingString} ({totalRatingsString})
          </h4>
          <h4>{cuisines?.join(", ")}</h4>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenuInfo;
