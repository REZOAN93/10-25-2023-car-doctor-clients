import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import About from "../About/About";
import Service from "../Service/Service";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/service",
          element: <Service />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);