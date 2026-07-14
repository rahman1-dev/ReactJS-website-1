import Navbar from "./src/components/Navbar";
import HeroSection from "./src/components/HeroSection";
import Restaurants from "./src/components/Restaurants";
import Footer from "./src/components/Footer";
import Body from "./src/components/Body";
import { Outlet } from "react-router";

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />

      <Footer />
    </div>
  );
};
export default App;
