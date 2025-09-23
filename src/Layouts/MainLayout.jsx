import { Outlet } from "react-router-dom";
import ScrollToTop from "../Components/Functions/ScrollToTop";

const MainLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Outlet /> {/* Render the child routes here */}
    </>
  );
};

export default MainLayout;
