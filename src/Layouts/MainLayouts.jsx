import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";

const MainLayouts = () => {
      return (
            <div>
                  <Header />
                  <Navbar />
                  <Outlet />
            </div>
      );
};

export default MainLayouts;