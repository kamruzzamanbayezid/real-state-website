import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useRef } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// custom css
import './Slider.css'
import CommonButton from '../Shared/CommonButton';


const Slider = () => {

      const progressCircle = useRef(null);
      const progressContent = useRef(null);
      const onAutoplayTimeLeft = (s, time, progress) => {
            progressCircle.current.style.setProperty('--progress', 1 - progress);
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
      };

      return (
            <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                  }}
                  pagination={{
                        clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  onAutoplayTimeLeft={onAutoplayTimeLeft}
                  className="mySwiper my-10"
            >
                  <SwiperSlide>
                        <div className='relative'>
                              <div className='absolute inset-0' style={{
                                    backgroundImage: `url('https://i.ibb.co/HgrXvKV/slider-1.webp')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    zIndex: -1,
                                    width: '100%'
                              }}></div>
                              <div className='absolute inset-0 z-0'></div>
                              <div className='sajek relative z-10 home-slider-place flex flex-col  justify-center items-center h-[80vh] md:h-[80vh] w-[100vw]'>
                                    <h1 className='text-white font-medium lg:text-6xl mb-4'>Buy & Sell property Here</h1>
                                    <p className='text-white font-light text-sm lg:text-lg w-[80%] md:w-2/3 mx-auto mb-5 md:mb-7'>Discover your perfect home and sell your current property with ease through our comprehensive residential real estate platform.</p>

                                    <CommonButton text='Get Started' width='200px' height='50px' />
                              </div>
                        </div>
                  </SwiperSlide>
                  <SwiperSlide>
                        <div className='relative'>
                              <div className='absolute inset-0' style={{
                                    backgroundImage: `url('https://i.ibb.co/pwj2T9c/slider-2-jpg.webp')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    zIndex: -1,
                                    width: '100%'
                              }}></div>
                              <div className='absolute inset-0 z-0'></div>
                              <div className='sajek relative z-10 home-slider-place flex flex-col  justify-center items-center h-[80vh] md:h-[80vh] w-[100vw]'>
                                    <h1 className='text-white font-medium lg:text-6xl mb-4'>Buy & Sell property Here</h1>
                                    <p className='text-white font-light text-sm lg:text-lg w-[80%] md:w-2/3 mx-auto mb-5 md:mb-7'>Discover your perfect home and sell your current property with ease through our comprehensive residential real estate platform.</p>

                                    <CommonButton text='Get Started' width='200px' height='50px' />
                              </div>
                        </div>
                  </SwiperSlide>
                  <SwiperSlide>
                        <div className='relative'>
                              <div className='absolute inset-0' style={{
                                    backgroundImage: `url('https://i.ibb.co/xmth6Wd/slider-3.webp')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                    zIndex: -1,
                                    width: '100%'
                              }}></div>
                              <div className='absolute inset-0 z-0'></div>
                              <div className='sajek relative z-10 home-slider-place flex flex-col  justify-center items-center h-[80vh] md:h-[80vh] w-[100vw]'>
                                    <h1 className='text-white font-medium lg:text-6xl mb-4'>Buy & Sell property Here</h1>
                                    <p className='text-white font-light text-sm lg:text-lg w-[80%] md:w-2/3 mx-auto mb-5 md:mb-7'>Discover your perfect home and sell your current property with ease through our comprehensive residential real estate platform.</p>

                                    <CommonButton text='Get Started' width='200px' height='50px' />
                              </div>
                        </div>
                  </SwiperSlide>

                  <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                              <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                  </div>
            </Swiper>
      );
};

export default Slider;