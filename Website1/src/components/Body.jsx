import React, { useContext } from "react";
import HeroSection from "./HeroSection";
import Restaurants from "./Restaurants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { swiggyURL } from "../utils/constant";
import HeroSectionShimmer from "./HeroSectionShimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { IoCloudOfflineOutline } from "react-icons/io5";
import ResCardContext from "../utils/HotelListContext";

const Body = () => {
  const { data, setData, hotelList, setHotelList } = useContext(ResCardContext);

  const networkStatus = useOnlineStatus();

  // if (data === null) {
  //   return (
  //     <div>
  //       {/* <HeroSectionShimmer /> */}
  //       <Shimmer />;
  //     </div>
  //   );
  // }

  const fetchApiData = async () => {
    const response = await fetch(swiggyURL);
    const data = await response.json();

    setData(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setHotelList(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
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
          <IoCloudOfflineOutline />
          You are offline. Please check your internet connection.
        </h1>
      </div>
    );
  }

  // if (data === null) {
  //   return (
  //     <div>
  //       <HeroSectionShimmer />
  //       <Shimmer />;
  //     </div>
  //   );
  // }

  return (
    <div>
      <HeroSection />
      <Restaurants
        // childData={
        //   data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
        //     ?.restaurants || []
        // }
        childData={hotelList}
      />
    </div>
  );
};

export default Body;
