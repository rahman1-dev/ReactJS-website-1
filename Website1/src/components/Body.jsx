import React from "react";
import HeroSection from "./HeroSection";
import Restaurants from "./Restaurants";
import Filter from "./Filter";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { swiggyURL } from "../utils/constant";
import HeroSectionShimmer from "./HeroSectionShimmer";

const Body = () => {
  const [data, setData] = useState(null);
  const heroData =
    data?.data?.cards?.[0]?.card?.card?.imageGridCards?.info || [];

  const fetchApiData = async () => {
    const response = await fetch(swiggyURL);
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  if (data === null) {
    return (
      <div>
        <HeroSectionShimmer />
        <Shimmer />;
      </div>
    );
  }

  return (
    <div>
      <HeroSection childData={heroData} />
      <Restaurants
        childData={
          data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants || []
        }
      />
    </div>
  );
};

export default Body;
