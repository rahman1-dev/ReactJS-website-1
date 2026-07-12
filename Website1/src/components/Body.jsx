import React from "react";
import HeroSection from "./HeroSection";
import Restaurants from "./Restaurants";
import Filter from "./Filter";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { swiggyURL } from "../utils/constant";

const Body = () => {
  const [data, setData] = useState(null);
  const heroData =
    data?.data?.cards?.[0]?.card?.card?.imageGridCards?.info || [];

  const fetchApiData = async () => {
    const response = await fetch(swiggyURL);
    const data = await response.json();

    // console.log("data: ", data);
    // console.log(
    //   " HeroSection data: ",
    //   data?.data?.cards?.[0]?.card?.card?.imageGridCards?.info,
    // );

    setData(data);
    // setHeroData(data?.data?.cards?.[0]?.card?.card?.imageGridCards?.info);
  };
  // console.log(Herodata);

  useEffect(() => {
    fetchApiData();
  }, []);

  if (data === null) {
    return <Shimmer />;
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
