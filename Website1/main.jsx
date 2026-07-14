import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Cart from "./src/components/Cart";
import Error from "./src/components/Error";
import RestaurantPage from "./src/components/RestaurantPage";
import SignUp from "./src/components/SignUp";
import SignIn from "./src/components/SignIn";
import Auth from "./src/components/Auth";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/cart", element: <Cart /> },
      { path: "/restaurantpage/:resId", element: <RestaurantPage /> },
      {
        path: "/auth",
        element: <Auth />,
        children: [
          { path: "/auth/signin", element: <SignIn /> },
          { path: "/auth/signup", element: <SignUp /> },
        ],
      },
    ],
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.querySelector("#root")).render(
  <RouterProvider router={appRouter} />,
);
