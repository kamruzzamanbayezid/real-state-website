import './Estates.css';
import { IoIosPricetags } from "react-icons/io";
import { MdAreaChart } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";


const Estates = () => {
      return (
            <div className="my-20 py-20 bg-[#f3f4f9]">
                  <div className="max-w-[1170px] mx-auto">
                        <h1 className="flex items-center text-4xl font-medium mb-10"> <hr />Featured Properties</h1>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

                              <div className="bg-white card-style p-5 hover-card">
                                    <div className='relative'>
                                          <img className='card-image -mt-10 transition-all duration-300' src="https://i.ibb.co/WHVwK8f/home-2.jpg" alt="Luxury Townhouse" />
                                          <div className='absolute top-0 right-0 bg-red-600 px-3 py-1'>
                                                <span className='text-white font-medium'>For sale</span>
                                          </div>
                                    </div>
                                    <h2 className='text-2xl font-bold mt-5 mb-2 common-color '>Luxury Townhouse</h2>

                                    <span className='text-sm text-gray-600 flex items-center gap-2 mb-4'><IoLocationSharp className='text-xl common-color' /> 123 Maple Street, Springfield</span>

                                    <span className='text-[#151515] font-medium '>#Apartment</span>
                                    <hr className='my-4' />
                                    <div className='grid grid-cols-2 gap-5'>
                                          <span className='text-sm flex items-center gap-2'><IoIosPricetags className='text-xl common-color' /> $5000\ mo</span>
                                          <span className='text-sm flex items-center gap-2'><MdAreaChart className='text-xl common-color' /> 2500 sq ft</span>

                                    </div>
                              </div>

                        </div>
                  </div>
            </div>
      );
};

export default Estates;