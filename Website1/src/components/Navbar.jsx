import { Link } from "react-router";
import userContext from "../utils/userContext";
import { useContext, useEffect } from "react";
import resCardDataContext from "../utils/HotelListContext";

const Navbar = () => {
  const { name, email } = useContext(userContext);
  const { data, setData, hotelList, setHotelList } =
    useContext(resCardDataContext);

  // console.log(
  //   data?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants,
  // );

  // const restaurants = data;

  // console.log(
  //   data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
  // );

  return (
    <div className="navbar">
      <Link to="/">
        <div className="logo-container">
          <img
            className="logo"
            src="https://ik.imagekit.io/xw4n3bdg9/logo.png"
            alt="logo"
          />
        </div>
      </Link>

      <div className="navElem-conatiner">
        <ul className="nav-links">
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/grocery">
              Grocery
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/cart">
              Cart
            </Link>
          </li>
          <li className="nav-link">{name}</li>
        </ul>
      </div>

      <div className="search-container">
        <input type="text" placeholder="Enter Restaurants and Food" />
      </div>

      <button
        className="top-restaurant-btn"
        onClick={() => {
          const filteredList = hotelList.filter((resObj) => {
            if (resObj.info.avgRating > 4.3) {
              return true;
            } else {
              return false;
            }
          });
          setHotelList(filteredList);

          // console.log(hotelList); Why is this not dynamically changing the hotel list
          console.log(filteredList);
        }}
      >
        Show top restaurant
      </button>
    </div>
  );
};

export default Navbar;
