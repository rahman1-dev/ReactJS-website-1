import { useParams } from "react-router";
import RestaurantCategory from "./RestaurantCategory";
import RestaurantMenuInfo from "./RestaurantMenuInfo";
import { MenuAPI } from "../utils/constant";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [menu, setMenu] = useState(null);

  const [openIndex, setOpenIndex] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    getMenuData();
  }, []);

  const getMenuData = async () => {
    const rawMenu = await fetch(MenuAPI + resId);
    const data = await rawMenu.json();
    setMenu(data);
  };

  if (menu === null) {
    return <Shimmer />;
  }

  const categories =
    menu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) => {
        if (
          category?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        ) {
          return true;
        } else {
          return false;
        }
      },
    );

  const {
    name,
    avgRatingString,
    totalRatingsString,
    cuisines,
    cloudinaryImageId,
  } = menu?.data?.cards[2]?.card?.card?.info;

  return (
    <div className="rest-menu-container">
      <RestaurantMenuInfo menu={menu} />

      {categories.map((category, index) => {
        return (
          <RestaurantCategory
            isOpen={openIndex === index ? true : false}
            setIndex={() => {
              setOpenIndex(index === openIndex ? null : index);
            }}
            onToggle={() => {
              setOpenIndex(index);
            }}
            key={category.card.card.categoryId}
            categoryInfo={category.card.card}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
