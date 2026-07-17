import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Cart from "./src/components/Cart";
import Error from "./src/components/Error";
import SignUp from "./src/components/SignUp";
import SignIn from "./src/components/SignIn";
import Auth from "./src/components/Auth";
import RestaurantMenu from "./src/components/RestaurantMenu";
// import Grocery from "./src/components/Grocery";

const Grocery = lazy(() => import("./src/components/Grocery"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/cart", element: <Cart /> },
      { path: "/restaurantmenu/:resId", element: <RestaurantMenu /> },
      {
        path: "/auth",
        element: <Auth />,
        children: [
          { path: "/auth/signin", element: <SignIn /> },
          { path: "/auth/signup", element: <SignUp /> },
        ],
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading....................</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.querySelector("#root")).render(
  <RouterProvider router={appRouter} />,
);
