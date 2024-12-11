import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Post from "../components/Post";
import GetAndDelete from "../components/GetAndDelete";
import Update from "../components/Update";
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
          loader: () => fetch("http://localhost:5000/users"),
        },
        {
          path: "/getanddelete/:id",
          element: <Update></Update>,
          loader: ({ params }) =>
            fetch(`http://localhost:5000/users/${params.id}`),
        },
      ],
    },
  ]);

  return <RouterProvider router={router}> {children}</RouterProvider>;
};

export default Router;
