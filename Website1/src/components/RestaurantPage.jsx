import React, { useEffect, useState } from "react";
import { imgBaseURL, MenuAPI } from "../utils/constant";
import { useParams } from "react-router";
import Category from "./Category";

const RestaurantPage = () => {
  const [menu, setMenu] = useState(null);
  console.log(menu);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const rawdata = await fetch(MenuAPI + resId);
    const menu = await rawdata.json();
    setMenu(menu);
    // console.log(menu);
  };

  if (menu === null) {
    return <div>Loading...</div>;
  }

  const {
    name,
    avgRatingString,

    totalRatingsString,
    cuisines,
    cloudinaryImageId,

    costForTwoMessage,
  } = menu?.data?.cards[2]?.card?.card?.info;

  console.log(menu?.data?.cards[2]?.card?.card?.info);

  return (
    <div className="rest-page-container">
      <div className="rest-page-det">
        <h2 className="rest-page-name">{name}</h2>
        <img
          className="rest-page-img"
          src={`${imgBaseURL}${cloudinaryImageId}`}
          alt="res-image"
        />
        <div className="res-page-rating-cost">
          <div className="rest-page-rating">{avgRatingString}</div>
          <div className="rest-page-rating-string">{`(${totalRatingsString})`}</div>
          <div className="rest-page-cost">{costForTwoMessage}</div>
        </div>

        <Category/>
      </div>
    </div>
  );
};

export default RestaurantPage;
