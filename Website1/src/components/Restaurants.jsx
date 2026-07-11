import ResCards from "./ResCards";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { swiggyURL } from "../utils/constant";

const Restaurants = () => {
  const [hotelList, setHotelList] = useState([]);

  const fetchApiData = async () => {
    const response = await fetch(swiggyURL);
    const data = await response.json();

    setHotelList(
      data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [],
    );
  };

  useEffect(() => {
    fetchApiData();
  }, []);

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
