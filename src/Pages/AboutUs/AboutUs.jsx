import { Helmet } from "react-helmet-async";
import Navbar from '../../Components/Navbar/Navbar'
import { useLoaderData } from "react-router-dom";
import CommonButton from "../../Components/Shared/CommonButton";
import Agents from "../../Components/Agents/Agents";


const AboutUs = () => {

      const estatesData = useLoaderData();

      return (
            <div className="mb-20">
                  <Helmet>
                        <title>STATE | ABOUT US</title>
                  </Helmet>
                  <div>
                        <Navbar />
                        <div className='relative mt-5 mb-10 lg:my-16'>
                              <div className='absolute inset-0' style={{
                                    backgroundImage: `url('https://i.ibb.co/vwrR4bg/2149346627.jpg)`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    zIndex: -1,
                                    width: '100%',
                                    objectFit: 'cover'
                              }}></div>
                              <div className='absolute inset-0 z-0'></div>
                              <div className='location relative z-10 home-slider-place flex flex-col justify-center items-center h-[30vh] md:h-[50vh] w-[100vw] mx-auto'>
                                    <h1 className='text-white text-center font-medium lg:text-5xl mb-4 animate__animated animate__zoomIn'>ABOUT US</h1>

                              </div>
                        </div>
                  </div>

                  <div className="set-width">
                        <div className="flex flex-col lg:flex-row justify-between h-fit">
                              <div className="lg:w-[48%] h-[450px] border">
                                    <img className="w-full h-full" src="https://i.ibb.co/fxdcypH/2148039865.jpg" alt="" />
                              </div>
                              <div className="lg:w-[48%] border bg-[#31323c] p-10">
                                    <h2 className="text-center text-white md:text-start font-sans font-medium text-4xl">Experience since 2013</h2>
                                    <hr className="w-[30%] text-gray-400 mt-7 mb-10" />
                                    <p className="text-white">We have been working since 2013 to be sure you are getting the best <strong>LegacyState</strong> service possible.</p>
                                    <p className="text-white mt-6 mb-14"><strong>LegacyState</strong> aims to unite MyHome brokers to provide their clients and partners with the top-notch level of brokerage services.</p>

                                    <CommonButton text='Get In Touch' width="180px" />
                              </div>
                        </div>

                        <div className="p-4 lg:p-0">
                              {/* agents */}
                              <h2 className=" text-center text-[#0D1128] md:text-start font-sans font-medium border-l-8 border-[#BC986B] pl-3 border-b-2 w-fit pb-1 rounded text-5xl mt-16 mb-10">Our Agents</h2>
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 ">
                                    {
                                          estatesData?.map(agent => <Agents key={agent?.id} agent={agent}></Agents>)
                                    }
                              </div>
                        </div>
                  </div>
                  <div className="w-full dark:bg-gray-500" style={{
                        backgroundImage: `url('https://i.ibb.co/qF2nfwJ/651.jpg')`,
                        backgroundPosition: 'center center',
                        backgroundBlendMode: 'multiply',
                        backgroundSize: 'cover'
                  }}>
                        <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10 mt-20">
                              <h1 className="text-5xl antialiased font-semibold leading-none text-center dark:text-gray-800 text-white md:mt-14">Subscribe to Our Newsletter</h1>
                              <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-800 text-white">Find out about events and other news</p>
                              <div className="flex flex-row md:mb-14">
                                    <input type="text" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
                                    <button type="button" className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 dark:bg-violet-600 dark:text-gray-50 text-white bg-[#BC986B]">Subscribe</button>
                              </div>
                        </div>
                  </div>
            </div >
      );
};

export default AboutUs;