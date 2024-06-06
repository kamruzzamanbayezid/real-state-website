// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Testimonials.css';

// import required modules
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';

export default function Testimonials() {

      const [testimonials, setTestimonials] = useState([]);

      useEffect(() => {
            const data = async () => {
                  try {
                        const res = await fetch('/testimonials.json');
                        const testimonialsData = await res.json();
                        setTestimonials(testimonialsData)
                  } catch (error) {
                        console.log(error);
                  }
            };

            data()
      }, []);

      return (
            <div className='mb-10 lg:mb-20 max-w-[1170px] mx-auto'>
                  <h2 className="text-[#0D1128] font-sans font-medium border-l-8 border-[#BC986B] pl-3 border-b-2 w-fit pb-1 rounded text-4xl md:text-5xl">Testimonials!</h2>

                  <Swiper
                        slidesPerView={3}
                        spaceBetween={40}
                        freeMode={true}
                        pagination={{
                              clickable: true,
                        }}
                        autoplay
                        modules={[FreeMode, Pagination, Autoplay]}
                        className="mySwiper"
                  >
                        {
                              testimonials?.map(testimonial => <SwiperSlide key={testimonial?.id}>
                                    <div className='flex flex-col items-start'>
                                          <div className='w-20 h-20 mb-5'>
                                                <img className='w-20 h-20 rounded-full' src={testimonial?.image} alt="" />
                                          </div>
                                          <h4 className='common-color text-start text-xl font-medium'>{testimonial?.name}</h4>
                                          <span className='text-start'>{testimonial?.position}</span>
                                          <p className='mt-5 text-sm text-gray-600 text-start'>{testimonial?.description}</p>
                                    </div>

                              </SwiperSlide>)
                        }
                        {/* <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide> */}
                  </Swiper>
            </div>
      );
}
