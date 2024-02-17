import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import InvalidRoute from "../pages/InvalidRoute";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <InvalidRoute />,
  },
]);

export default AppRoutes;
