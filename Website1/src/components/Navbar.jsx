import { Link } from "react-router";

const Navbar = () => {
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
            <Link className="nav-link" to="/cart">
              Cart
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/grocery">
              Grocery
            </Link>
          </li>
        </ul>
      </div>

      <div className="search-container">
        <input type="text" placeholder="Enter Restaurants and Food" />
      </div>
    </div>
  );
};

export default Navbar;
