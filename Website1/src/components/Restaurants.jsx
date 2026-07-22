import ResCards, { withDiscountLabel } from "./ResCards";
import { useContext } from "react";
import { Link } from "react-router";
import HotelListContext from "../utils/HotelListContext";

const Restaurants = () => {
  const { hotelList } = useContext(HotelListContext);
  const DiscountedResCards = withDiscountLabel(ResCards);

  return (
    <div className="restaurant">
      <div className="rest-cards-container">
        {hotelList.map((res) => (
          <Link
            className="res-LINK"
            to={`/restaurantmenu/${res?.info?.id}`}
            key={res?.info?.id}
          >
            {res?.info?.aggregatedDiscountInfoV3 ? (
              <DiscountedResCards resData={res?.info} />
            ) : (
              <ResCards resData={res?.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
