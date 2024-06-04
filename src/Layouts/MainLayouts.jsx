import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";


const MainLayouts = () => {
      return (
            <div>
                  <Outlet />
                  <Footer />
            </div>
      );
};

export default MainLayouts;