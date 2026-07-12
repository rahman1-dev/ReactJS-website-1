import ResCards from "./ResCards";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { swiggyURL } from "../utils/constant";

const Restaurants = ({ childData }) => {
  const hotelList = childData;

  return (
    <div className="restaurant">
      <div className="rest-cards-container">
        {hotelList.length === 0 ? (
          <Shimmer />
        ) : (
          hotelList.map((res) => (
            <ResCards resData={res.info} key={res.info.id} />
          ))
        )}
      </div>
    </div>
  );
};

export default Restaurants;
