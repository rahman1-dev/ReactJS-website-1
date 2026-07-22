import { useContext, useRef } from "react";
import { FoodData } from "../utils/FoodData";
import Cards from "./Cards";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import HeroSectionShimmer from "./HeroSectionShimmer";
import HotelListContext from "../utils/HotelListContext";
import { CiLight } from "react-icons/ci";
import heroSectionContext from "../utils/heroSectionContext";

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

  const { data } = useContext(HotelListContext);
  const { heroSectionData, setHeroSectionData } =
    useContext(heroSectionContext);

  setHeroSectionData(data?.cards?.[0]?.card?.card?.imageGridCards?.info);
  console.log("Hero data", heroSectionData);

  // const heroData = data?.cards?.[0]?.card?.card?.imageGridCards?.info || [];
  // const heroData = heroSectionData;

  // console.log("data from hero", data?.cards?.[0]?.card?.card?.imageGridCards?.info)

  return (
    <div>
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
            {heroData.map((food) => (
              <Cards key={food.id} food={food} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
