import { Link, NavLink } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import toast from "react-hot-toast";
import CommonButton from "../Shared/CommonButton";

const Navbar = () => {

      const { user, logOut } = UseAuth();

      const handleLogOut = () => {
            logOut()
                  .then(() => {
                        toast.success('Successfully Logged out!!')
                  })
                  .catch(error => {
                        toast.error(error.message)
                  })
      }

      const navLinks = <div className="flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-6">
            <li>
                  <NavLink
                        to='/'
                        className={({ isActive }) => isActive ? 'common-color text-xl font-medium' : 'text-xl font-medium'}
                  >Home</NavLink>
            </li>
            <li>
                  <NavLink
                        to='/updateProfile'
                        className={({ isActive }) => isActive ? 'common-color text-xl font-medium' : 'text-xl font-medium'}
                  >Update Profile</NavLink>
            </li>
            <li>
                  <NavLink
                        to='/userProfile'
                        className={({ isActive }) => isActive ? 'common-color text-xl font-medium' : 'text-xl font-medium'}
                  >User Profile</NavLink>
            </li>
      </div>

      return (
            <div className="set-width pt-4">
                  <div className="navbar">
                        <div className="navbar-start">
                              <div className="dropdown relative z-50">
                                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                    </div>
                                    <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                          {navLinks}
                                          <li className="mt-2">
                                                <NavLink
                                                      to='/register'
                                                      className={({ isActive }) => isActive ? 'common-color text-xl font-medium' : 'text-xl font-medium'}
                                                >Register</NavLink>
                                          </li>
                                    </ul>
                              </div>
                              <Link to='/' className="font-bold text-2xl md:text-3xl">LegacyEstates</Link>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                              <ul className="px-1">
                                    {navLinks}
                              </ul>
                        </div>
                        <div className="navbar-end">
                              <div className="tooltip tooltip-bottom" data-tip={`${user?.displayName}`} >
                                    {
                                          user && <img className='w-12 h-12 rounded-full mr-2 object-cover' src={user?.photoURL} alt="" />
                                    }
                              </div>
                              {
                                    user ?
                                          <div onClick={handleLogOut}><CommonButton text='Log out' /></div>
                                          :
                                          <Link to='/login'>
                                                <CommonButton
                                                      text='Login'
                                                />
                                          </Link>
                              }

                        </div>
                  </div>
            </div>
      );
};

export default Navbar;