import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import InvalidRoute from "../pages/InvalidRoute";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} index />
        <Route path="*" element={<InvalidRoute />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
