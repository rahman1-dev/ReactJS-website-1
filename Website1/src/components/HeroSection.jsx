import { useRef } from "react";
import { FoodData } from "../utils/FoodData";
import Cards from "./Cards";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  return (
    <section className="hero-section">
      <div className="food-container">
        <div className="food-container-head">
          <h2>Order Our Best Food Options</h2>

          <div className="left-right-arrows">
            <button className="arrow-btn" onClick={scrollLeft}>
              <FaArrowLeft />
            </button>

            <button className="arrow-btn" onClick={scrollRight}>
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="main-food-cards-container" ref={scrollRef}>
          {FoodData.map((food) => (
            <Cards key={food.id} food={food} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
