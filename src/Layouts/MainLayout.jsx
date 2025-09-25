import { Outlet } from "react-router-dom";
import ScrollToTop from "../Components/Functions/ScrollToTop";

const MainLayout = () => {
  return (
    <>
      <ScrollToTop />
            <div className="overflow-x-hidden m-0 p-0">
        <Outlet /> {/* Render the child routes here */}
      </div>
    </>
  );
};

export default MainLayout;
