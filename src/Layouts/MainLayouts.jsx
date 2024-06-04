import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";


const MainLayouts = () => {
      return (
            <div>
                  <div className="min-h-[calc(100vh-273px)]">
                        <Outlet />
                  </div>
                  <Footer />
            </div>
      );
};

export default MainLayouts;