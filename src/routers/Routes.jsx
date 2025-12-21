import App from "../App"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import ProjectDetails from "../components/ProjectDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,  
    children: [
      {
        path: "/",   
        element: <Home />,
      },
      {
        path:"/project-details/:id",
        element:<ProjectDetails/>
      }
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
