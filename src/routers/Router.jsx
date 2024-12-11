import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Post from "../components/Post";
import GetAndDelete from "../components/GetAndDelete";
const Router = ({ children }) => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children: [
        {
          path: "/",
          element: <Post></Post>,
        },
        {
          path: "/getanddelete",
          element: <GetAndDelete></GetAndDelete>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}> {children}</RouterProvider>;
};

export default Router;
