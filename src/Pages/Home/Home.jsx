import Slider from "../../Components/Slider/Slider";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import Estates from "../../Components/Estates/Estates";
import { Helmet } from "react-helmet-async";
import Testimonials from "../../Components/Testimonials/Testimonials";
const Home = () => {
      return (
            <div>
                  <Helmet>
                        <title>ESTATE | HOME</title>
                  </Helmet>
                  <Header />
                  <Navbar></Navbar>
                  <Slider />
                  <Estates />
                  <Testimonials />
            </div>
      );
};

export default Home;