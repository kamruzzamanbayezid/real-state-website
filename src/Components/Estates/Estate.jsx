import PropTypes from 'prop-types';
import { IoIosPricetags } from "react-icons/io";
import { MdAreaChart } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import './Estates.css';
import { Link } from 'react-router-dom';
import 'animate.css';


const Estate = ({ estate }) => {

      const { id, estate_title, segment_name, price, status, area, location } = estate;

      return (
            <div className="bg-white card-style p-5 hover-card mb-10 flex flex-col">
                  <div className='relative'>
                        <img className='card-image -mt-10 transition-all duration-300' src="https://i.ibb.co/WHVwK8f/home-2.jpg" alt="Luxury Townhouse" />
                        <div id='view-btn' className='hidden absolute bg-[#BC986B] text-white inset-16 items-center justify-center text-lg font-medium'>
                              <Link to={`/estateDetails/${id}`}><button className='hover:underline'>View Details</button></Link>
                        </div>
                        <div className={`absolute bottom-0 right-0 ${status == 'sale' ? 'bg-red-600' : 'bg-orange-600'}  px-3 py-1`}>
                              <span className='text-white font-medium'>For {status}</span>
                        </div>
                  </div>
                  <h2 className='text-2xl font-bold mt-5 mb-2 common-color flex-1 '>{estate_title}</h2>

                  <span className='text-sm text-gray-600 flex items-center gap-2 mb-4'><IoLocationSharp className='text-xl common-color' /> {location}</span>

                  <span className='text-gray-800 font-medium '>#{segment_name}</span>
                  <hr className='my-4' />
                  <div className='grid grid-cols-2 gap-5'>
                        <span className='text-sm flex items-center gap-2'><IoIosPricetags className='text-xl common-color' /> {price}</span>
                        <span className='text-sm flex items-center gap-2'><MdAreaChart className='text-xl common-color' /> {area}</span>

                  </div>
            </div >
      );
};

Estate.propTypes = {
      estate: PropTypes.object,
};

export default Estate;