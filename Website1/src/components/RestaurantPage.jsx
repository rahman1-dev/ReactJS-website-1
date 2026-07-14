import React, { useEffect, useState } from "react";
import { MenuAPI } from "../utils/constant";
import { useParams } from "react-router";

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
  } = menu?.data?.cards[2]?.card?.card?.info;

  return <div>{name}</div>;
};

export default RestaurantPage;
