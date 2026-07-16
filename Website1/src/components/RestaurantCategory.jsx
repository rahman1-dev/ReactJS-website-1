import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import MenuItem from "./MenuItem";

const RestaurantCategory = ({ categoryInfo }) => {
  const [isVisible, setIsVisible] = useState(false);

  const Visibility = () => {
    setIsVisible(!isVisible);
    // console.log(isVisible);
  };

  const { title, itemCards } = categoryInfo;

  return (
    <div className="rest-category-container">
      <div className="category-header" onClick={Visibility}>
        <div>
          {title} ({itemCards.length})
        </div>
        <div>
          <FaAngleDown />
        </div>
      </div>
      {/* 
      <div className="category-body">
        {itemCards.map((singleMenu) => {
          return (
            <MenuItem
              details={singleMenu.card.info}
              key={singleMenu.card.info.id}
            />
          );
        })}
      </div> */}

      {isVisible ? (
        <div className="category-body">
          {itemCards.map((singleMenu) => {
            return (
              <MenuItem
                details={singleMenu.card.info}
                key={singleMenu.card.info.id}
              />
            );
          })}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default RestaurantCategory;
