import ResCards from "./ResCards";
import { RestaurantsDetails } from "../utils/RestaurantsDetails";
import Shimmer from "./Shimmer";

const Restaurants = () => {
  const fethData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const data = await response.json();
    console.log(data);
  };
  fethData();

  return (
    <div className="restaurant">
      <div className="rest-cards-container">
        {/* <Shimmer /> */}
        {RestaurantsDetails.map((res) => {
          return <ResCards resData={res} key={res.id} />;
        })}
      </div>
    </div>
  );
};
export default Restaurants;
