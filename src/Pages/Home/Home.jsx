import Slider from "../../Components/Slider/Slider";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import Estates from "../../Components/Estates/Estates";
const Home = () => {
      return (
            <div>
                  <Header />
                  <Navbar></Navbar>
                  <Slider />
                  <Estates />
            </div>
      );
};

export default Home;