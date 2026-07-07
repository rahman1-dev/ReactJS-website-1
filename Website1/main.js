import React from "react";
import ReactDOM from "react-dom/client";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img
          className="logo"
          src="https://ik.imagekit.io/xw4n3bdg9/logo.png"
          alt="logo"
        />
      </div>
      <div className="navElem-conatiner">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      <div className="search-container">
        <input placeholder="Enter Restaurants and Food" />
      </div>
    </div>
  );
};

const Cards = (props) => {
  console.log(props);
  return (
    <div className="card">
      <img src={props.Fooddata[0].img} alt="card" />
      <h3>{props.Fooddata[0].title}</h3>
    </div>
  );
};

const Fooddata = [
  {
    id: 0,
    img: "https://b.zmtcdn.com/data/o2_assets/bf2d0e73add1c206aeeb9fec762438111727708719.png",
    title: "Biryani",
  },
  {
    id: 1,
    img: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
    title: "Pizza",
  },
  {
    id: 2,
    img: "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
    title: "Thali",
  },
  {
    id: 3,
    img: "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
    title: "Chicken",
  },
  {
    id: 4,
    img: "https://b.zmtcdn.com/data/dish_photos/bda/9cdab6d5f275b8d2532e3878134ddbda.jpg",
    title: "Veg Meal",
  },
  {
    id: 5,
    img: "https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png",
    title: "Paneer",
  },
  {
    id: 6,
    img: "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
    title: "Burger",
  },
];

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
          <Cards Fooddata={Fooddata} />
          <Cards Fooddata={Fooddata} />
          <Cards Fooddata={Fooddata} />
          <Cards Fooddata={Fooddata} />
          {/*<Cards />
          <Cards /> */}
        </div>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.querySelector("#root")).render(<App />);
