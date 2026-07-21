import { Link } from "react-router";
import userContext from "../utils/userContext";
import { useContext, useEffect, useState } from "react";
import resCardDataContext from "../utils/HotelListContext";

const Navbar = () => {
  const { name, email } = useContext(userContext);

  const { data, setData, hotelList, setHotelList } =
    useContext(resCardDataContext);
  console.log(data);

  const [filterToggle, setFilterToggle] = useState(false);

  // console.log(
  //   data?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants,
  // );

  // const restaurants = data;

  // console.log(
  //   data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
  // );
  function SearchFunc(e) {
    const searchedRes = data.filter((restaurant) => {
      if (
        restaurant.info.name
          .toLowerCase()
          .includes(e.target.value.toLowerCase()) === true
      ) {
        return true;
      } else {
        return false;
      }
    });
    setHotelList(searchedRes);
  }

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
        <input
          onChange={SearchFunc}
          type="text"
          placeholder="Enter Restaurants and Food"
        />
      </div>

      <button
        className="top-restaurant-btn"
        onClick={() => {
          if (!filterToggle) {
            const filteredList = hotelList.filter((resObj) => {
              if (resObj.info.avgRating > 4.3) {
                return true;
              } else {
                return false;
              }
            });
            setHotelList(filteredList);
            setFilterToggle(!filterToggle);
          } else {
            setHotelList(data);
            setFilterToggle(!filterToggle);
          }
        }}
      >
        {!filterToggle ? "Show top restaurant" : "Show all"}
      </button>
    </div>
  );
};

export default Navbar;
