import ResCards from "./ResCards";
import Shimmer from "./Shimmer";
import { useContext, useEffect, useState } from "react";
import { swiggyURL } from "../utils/constant";
import { Link } from "react-router";
import HotelListContext from "../utils/HotelListContext";

const Restaurants = () => {
  const { hotelList } = useContext(HotelListContext);

  // if (!hotelList) {
  //   return <Shimmer />;
  // }

  return (
    <div className="restaurant">
      <div className="rest-cards-container">
        {hotelList.map((res) => (
          <Link
            className="res-LINK"
            to={`/restaurantmenu/${res?.info?.id}`}
            key={res?.info?.id}
          >
            {/* {console.log(res)} */}
            <ResCards resData={res?.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
