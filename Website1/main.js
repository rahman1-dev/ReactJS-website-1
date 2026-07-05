import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return <Navbar />;
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

ReactDOM.createRoot(document.querySelector("#root")).render(<App />);
