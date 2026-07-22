import Navbar from "./src/components/Navbar";
import HeroSection from "./src/components/HeroSection";
import Restaurants from "./src/components/Restaurants";
import Footer from "./src/components/Footer";
import Body from "./src/components/Body";
import { Outlet } from "react-router";
import HotelListContext from "./src/utils/HotelListContext";
import userContext from "./src/utils/userContext";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./src/components/Shimmer";
import heroSectionContext from "./src/utils/heroSectionContext";

const App = () => {
  const [name, setName] = useState("default user");
  const [email, setEmail] = useState("default email");

  useEffect(() => {
    const randomTrue = Math.random() * 10 < 3;

    if (!randomTrue) {
      setName("guest");
      setEmail("guest@gmail.com");
    }

    const LoggedInUser = {
      name: "Rahman",
      email: "mdrahman5422@gmail.com",
    };

    if (randomTrue) {
      setName(LoggedInUser.name);
    }
  }, []);

  const [data, setData] = useState([]); //Card data //Master Copy
  const [hotelList, setHotelList] = useState([]); // UI copy

  const [heroSectionData, setHeroSectionData] = useState(null);

  return (
    <div>
      <userContext.Provider value={{ name, email }}>
        <HotelListContext.Provider
          value={{
            data,
            setData,
            hotelList,
            setHotelList,
          }}
        >
          <heroSectionContext.Provider
            value={{ heroSectionData, setHeroSectionData }}
          >
            <Navbar />
            <Outlet />
            <Footer />
          </heroSectionContext.Provider>
        </HotelListContext.Provider>
      </userContext.Provider>
    </div>
  );
};
export default App;
