import { createBrowserRouter } from "react-router-dom";
import { DefaultLayout } from "./components/layouts";
import {
  About,
  Cart,
  Collections,
  Contact,
  Home,
  Men,
  NotFound,
  ProductPage,
  Profile,
  Women,
} from "./components";

const myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/collections",
        element: <Collections />,
      },
      {
        path: "/men",
        element: <Men />,
      },
      {
        path: "/women",
        element: <Women />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      // Dynamic route for item details on collections page
      {
        path: "/collections/:id",
        element: <ProductPage />,
      },
      {
        path: "/men/:id",
        element: <ProductPage />,
      },
      {
        path: "/women/:id",
        element: <ProductPage />,
      },
      {
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
]);

export default myRoutes;
