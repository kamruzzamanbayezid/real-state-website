import { CiMail } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Header = () => {
      return (
            <div className="set-width md:flex items-center justify-between pt-7 pb-4 border-b hidden md:px-4 lg:px-0">
                  <div className="flex items-center gap-6">
                        <span className="flex items-center gap-2"><FaPhone className="text-[#BC986B] text-xl" /> <span className="text-base hover:text-[#BC986B]">01882888860</span></span>
                        <span className="flex items-center gap-2"><CiMail className="text-[#BC986B] text-2xl" /> <span className="text-base hover:text-[#BC986B]">kmbayezid955@gmail.com</span></span>
                  </div>
                  <div>
                        <p className="flex items-center gap-2">
                              <FaArrowRightFromBracket className="text-[#BC986B] text-xl" />
                              <Link to='/register'>
                                    <span className="text-base hover:text-[#BC986B] font-medium hover:underline cursor-pointer">Registration for update</span>
                              </Link>
                        </p>
                  </div>
            </div>
      );
};

export default Header;