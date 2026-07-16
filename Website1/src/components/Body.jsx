import React from "react";
import HeroSection from "./HeroSection";
import Restaurants from "./Restaurants";
import Filter from "./Filter";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { swiggyURL } from "../utils/constant";
import HeroSectionShimmer from "./HeroSectionShimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [data, setData] = useState(null);

  const networkStatus = useOnlineStatus();
  console.log("network", networkStatus);

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

  if (!networkStatus) {
    return (
      <div className="body">
        <h1
          style={{
            padding: "10vh 1.5rem",
            textAlign: "center",
            height: "50vh",
          }}
        >
          🔴 You are offline. Please check your internet connection.
        </h1>
      </div>
    );
  }

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
