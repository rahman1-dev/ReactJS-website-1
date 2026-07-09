import React from "react";
import HeroSection from "./HeroSection";
import Restaurants from "./Restaurants";
import Filter from "./Filter";

const Body = () => {
  return (
    <div>
      <Restaurants />
      <HeroSection />
    </div>
  );
};

export default Body;
