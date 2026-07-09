import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./src/components/Navbar";
import HeroSection from "./src/components/HeroSection";
import Restaurants from "./src/components/Restaurants";
import Footer from "./src/components/Footer";
import Body from "./src/components/Body";

import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const App = () => {
  return (
    <div>
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
};

// const Navbar = () => {
//   import Footer from "./src/components/Footer";
//   import Navbar from "./src/components/Navbar";
//   import Body from "./src/components/Body";

//   const App = () => {
//     return (
//       <div>
//         <Navbar />
//         <Body />
//         <Footer />
//       </div>
//     );
//   };
// };

// const HeroSection = () => {
//   return (
//     <div className="hero-section">
//       <div className="food-container">
//         <div className="food-container-head">
//           <h2>Order our best food options</h2>
//           <div className="left-right-arrows">
//             <div>
//               <FaArrowLeft />
//             </div>
//             <div>
//               <FaArrowRight />
//             </div>
//           </div>
//         </div>

//         <div className="main-food-cards-container">
//           {Fooddata.map((food) => {
//             return <Cards food={food} />;
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// const Cards = ({ food }) => {
//   return (
//     <div className="card">
//       <img src={food.img} alt="card" />
//       <h3>{food.title}</h3>
//     </div>
//   );
// };

// const Restaurants = () => {
//   return (
//     <div className="restaurant">
//       <div className="rest-cards-container">
//         {restaurantsDetails.map((res) => {
//           return <ResCards resData={res} />;
//         })}
//       </div>
//     </div>
//   );
// };

// const ResCards = ({ resData }) => {
//   console.log(resData.name);
//   return (
//     <div className="res-card">
//       <div className="res-logo">
//         <img src={resData.img} alt="res-img" />
//       </div>
//       <div className="res-det">
//         <h2 className="res-name">{resData.name}</h2>
//         <h3 className="price">{resData.rupeesForPerson}</h3>
//         <h4 className="rating">⭐Rating:{resData.rating}</h4>
//         <h2 className="location">{resData.location}</h2>
//       </div>
//     </div>
//   );
// };

// const Footer = () => {
//   return (
//     <div className="footer">
//       <h3>© 2026 Rahman Limited</h3>
//     </div>
//   );
// };
// const Fooddata = [
//   {
//     id: 0,
//     img: "https://b.zmtcdn.com/data/o2_assets/bf2d0e73add1c206aeeb9fec762438111727708719.png",
//     title: "Biryani",
//   },
//   {
//     id: 1,
//     img: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
//     title: "Pizza",
//   },
//   {
//     id: 2,
//     img: "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
//     title: "Thali",
//   },
//   {
//     id: 3,
//     img: "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
//     title: "Chicken",
//   },
//   {
//     id: 4,
//     img: "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
//     title: "Rolls",
//   },
//   {
//     id: 5,
//     img: "https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png",
//     title: "Paneer",
//   },
//   {
//     id: 6,
//     img: "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
//     title: "Burger",
//   },
// ];
// const restaurantsDetails = [
//   {
//     id: 0,
//     img: "https://b.zmtcdn.com/data/pictures/0/19011060/7e49c2d5efc8c85e4e26153745bbeb64_o2_featured_v2.jpg?output-format=webp",
//     name: "Satkar Restaurant",
//     rating: 4,
//     rupeesForPerson: "₹600 for two",
//     location: "Chandrayan Gutta",
//   },
//   {
//     id: 1,
//     img: "https://b.zmtcdn.com/data/pictures/4/19011054/45703d43e25917e03fd3bf1c26b2dd11_o2_featured_v2.jpg?output-format=webp",
//     name: "Raimen's Café79",
//     rating: 4,
//     rupeesForPerson: "₹600 for two",
//     location: "Abids",
//   },
//   {
//     id: 2,
//     img: "https://b.zmtcdn.com/data/pictures/0/20448300/69668812bfb59b99bebdca7f017b9428_o2_featured_v2.jpg?output-format=webp",
//     name: "Kathi Junction",
//     rating: 4,
//     rupeesForPerson: "₹600 for two",
//     location: "Attapure",
//   },
//   {
//     id: 4,
//     img: "https://b.zmtcdn.com/data/pictures/0/20660560/bf396605f61974f6204a5a2a88bbf422_o2_featured_v2.jpg?output-format=webp",
//     name: "Hotel Sarkar",
//     rating: 4,
//     rupeesForPerson: "₹600 for two",
//     location: "Jubli Hills",
//   },
//   {
//     id: 5,
//     img: "https://b.zmtcdn.com/data/pictures/5/21784575/0ed73f18b3e78d53ddcc750364f30645_o2_featured_v2.jpg",
//     name: "Top N Town Ice Cream",
//     rating: 4,
//     rupeesForPerson: "₹600 for two",
//     location: "Barkas",
//   },
//   {
//     id: 6,
//     img: "https://b.zmtcdn.com/data/pictures/8/19094738/d4b868a2f44c4bfc6a920b4793d89f71_o2_featured_v2.jpg",
//     name: "Biryani Hotel",
//     rating: 4,
//     rupeesForPerson: "₹600 for two",
//     location: "Banjara Hills",
//   },
// ];

ReactDOM.createRoot(document.querySelector("#root")).render(<App />);
