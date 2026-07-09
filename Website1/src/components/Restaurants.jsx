import ResCards from "./ResCards";
import { RestaurantsDetails } from "../utils/RestaurantsDetails";
import Shimmer from "./Shimmer";

const Restaurants = () => {
  return (
    <div className="restaurant">
      <div className="rest-cards-container">
        <Shimmer />
        {/* {RestaurantsDetails.map((res) => {
          return <ResCards resData={res} key={res.id} />;
        })} */}
      </div>
    </div>
  );
};
export default Restaurants;
