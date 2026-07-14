import ResCards from "./ResCards";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { swiggyURL } from "../utils/constant";
import { Link } from "react-router";

const Restaurants = ({ childData }) => {
  const hotelList = childData;

  return (
    <div className="restaurant">
      <div className="rest-cards-container">
        {hotelList.length === 0 ? (
          <Shimmer />
        ) : (
          hotelList.map((res) => (
            <Link className="res-LINK" to={`/restaurantpage/${res?.info?.id}`} key={res?.info?.id}>
              {console.log(res)}
              <ResCards resData={res?.info} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Restaurants;
