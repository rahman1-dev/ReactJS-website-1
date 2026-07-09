import { FoodData } from "../utils/FoodData";
import Cards from "./Cards";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="food-container">
        <div className="food-container-head">
          <h2>Order our best food options</h2>
          <div className="left-right-arrows">
            <div>
              <FaArrowLeft />
            </div>
            <div>
              <FaArrowRight />
            </div>
          </div>
        </div>

        <div className="main-food-cards-container">
          {FoodData.map((food) => {
            return <Cards food={food} key={food.id} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
