import ResCards from "./ResCards";
import { RestaurantsDetails } from "../utils/RestaurantsDetails";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const Restaurants = () => {
  let [hotelList, setHotelList] = useState([]);

  const fetchApiData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7038628&lng=77.1023104&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const data = await response.json();
    // console.log(
    //   data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    // );
    setHotelList(
      data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    );
  };

  useEffect(() => {
    fethApiData();
  }, []);

  return (
    <div className="restaurant">
      <div className="rest-cards-container">
        {/* <Shimmer /> */}
        {hotelList.map((res) => {
          return <ResCards resData={res.info} key={res.info.id} />;
        })}
      </div>
    </div>
  );
};
export default Restaurants;
