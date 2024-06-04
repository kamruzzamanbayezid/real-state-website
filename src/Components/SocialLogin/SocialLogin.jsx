import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import UseAuth from "../../Hooks/UseAuth";


const SocialLogin = () => {

      const { googleLogin, githubLogin } = UseAuth();
      const location = useLocation();
      const navigate = useNavigate();

      const socialLogin = (media) => {
            media()
                  .then(() => {
                        toast.success('Successfully Logged in!!')
                        navigate(location?.state ? location?.state : '/')

                  })
                  .catch(error => {
                        toast.error(error.message)
                  })
      }

      return (
            <div>
                  <div className="my-6 gap-0 flex items-center">
                        <button onClick={() => socialLogin(googleLogin)} aria-label="Login with Google" type="button" className=" flex items-center justify-center w-full py-2 space-x-4 border bg-[#E75854] focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                              <FaGoogle className="text-3xl text-white" />

                        </button>

                        <button onClick={() => socialLogin(githubLogin)} aria-label="Login with GitHub" role="button" className="flex items-center justify-center w-full py-2 space-x-4 border focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600 bg-[#547abb]">
                              <FaGithub className="text-3xl text-white" />

                        </button>

                  </div>
            </div>
      );
};

export default SocialLogin;