import { useLoaderData, useParams } from "react-router-dom";
import { IoIosPricetags } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdAreaChart } from "react-icons/md";
import CommonButton from "../Shared/CommonButton";
import NavbarForEstateDetails from "../NavbarForEstateDetails/NavbarForEstateDetails";
import { Helmet } from "react-helmet-async";

const EstateDetails = () => {

      const estatesData = useLoaderData();
      const { estateId } = useParams();

      const findEstate = estatesData?.find(estate => estate?.id === estateId);

      const { image, cover_image, estate_title, segment_name, description, price, status, area, location, facilities, author } = findEstate;

      return (
            <div>
                  <Helmet>
                        <title>STATE | ESTATE DETAILS</title>
                  </Helmet>
                  <div>
                        <NavbarForEstateDetails />
                        <div className='relative -mt-20'>
                              <div className='absolute inset-0' style={{
                                    backgroundImage: `url('${cover_image}')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    zIndex: -1,
                                    width: '100%'
                              }}></div>
                              <div className='absolute inset-0 z-0'></div>
                              <div className='location relative z-10 home-slider-place flex flex-col justify-center items-center h-[70vh] md:h-[60vh] w-[100vw] mx-auto'>
                                    <h1 className='text-white text-center font-medium lg:text-5xl mb-4'>{estate_title}</h1>
                                    <span className='text-base text-white flex items-center gap-2 mb-4'><IoLocationSharp className='text-xl common-color' /> {location}</span>

                              </div>
                        </div>
                  </div>

                  <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 justify-between my-10 max-w-[1170px] mx-auto">
                        <div className="lg:w-[49%]">
                              <img className="w-full h-full object-cover" src={image} alt="" />
                        </div>
                        <div className="lg:w-[49%] p-4 lg:p-0">
                              <div className="flex items-center justify-between mb-5">
                                    <h2 className="text-center text-[#0D1128] md:text-start font-sans font-medium text-xl md:text-3xl border-l-4 border-[#BC986B] pl-1 md:pl-3 border-b w-fit pb-1 rounded">PROPERTY DETAILS</h2>
                                    <div className={`flex items-center gap-3 px-3 py-1 md:px-7 md:py-3 ${status == 'sale' ? 'bg-red-600' : 'bg-orange-600'}`}>
                                          <IoIosPricetags className='text-2xl md:text-4xl text-white' />

                                          <div className="">
                                                <p className='text-white font-medium text-xs md:text-sm'>For {status}</p>
                                                <p className='text-white font-medium md:text-2xl'>{price}</p>
                                          </div>
                                    </div>
                              </div>
                              <div className="mt-8">
                                    <h2 className='text-2xl font-medium mb-1'>{segment_name}</h2>
                                    <div className="mb-5 flex flex-col md:flex-row md:items-center md:gap-10">
                                          <span className='text-sm text-gray-600 flex items-center gap-2'><IoLocationSharp className='text-xl common-color' /> {location}</span>
                                          <span className='text-lg font-medium text-gray-500 flex items-center gap-2'><MdAreaChart className='text-2xl common-color' /> {area}</span>
                                    </div>
                                    <div className="flex items-center gap-2 flex-wrap mb-6">
                                          {
                                                facilities.map((facilitie, idx) => <span className="text-white bg-[#BC986B] py-1  px-4 rounded text-sm"
                                                      key={idx}
                                                >{facilitie}</span>)
                                          }
                                    </div>
                                    <span className=" text-gray-500">{description}</span>

                                    <div className="my-6">
                                          <CommonButton text='Buy Property' width="150px" />
                                    </div>

                                    {/* author */}
                                    <div className="flex flex-col items-center lg:items-start text-center lg:text-start">
                                          <img className="w-40 h-40 rounded-full object-cover mb-5" src={author?.author_image} alt="" />
                                          <h4 className="text-2xl font-medium">{author?.name}</h4>
                                          <p className="text-gray-500">{author?.position}</p>
                                          <p className="mt-4">{author?.short_description}</p>

                                          <div className="mt-6">
                                                <CommonButton text='Contact Agent' width="170px" />
                                          </div>
                                    </div>
                              </div>
                        </div>

                  </div>
            </div>
      );
};

export default EstateDetails;