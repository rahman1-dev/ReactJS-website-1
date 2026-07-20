import react from "react";
import { createContext } from "react";

const userContext = createContext({
  name: "defaultName",
  email: "defaul@gmail.com",
});

export default userContext;
