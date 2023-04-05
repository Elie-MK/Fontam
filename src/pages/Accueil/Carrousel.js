import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";

export default function Carrouse() {
    return (
      <>
      <div className="">
        <div className="relative">
          <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                    <SwiperSlide>
                      <img src="1.jpg" className="w-screen md:h-screen h-[400px]"/>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="2.jpg" className="w-screen md:h-screen h-[400px]"/>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="3.jpg" className="w-screen md:h-screen h-[400px]"/>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="4.jpg" className="w-screen md:h-screen h-[400px]"/>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="5.jpg" className="w-screen md:h-screen h-[400px]"/>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="6.jpg" className="w-screen md:h-screen h-[400px]"/>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="7.jpg" className="w-screen md:h-screen h-[400px]"/>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="8.jpg" className="w-screen md:h-screen h-[400px]"/>
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src="9.jpg" className="w-screen md:h-screen h-[400px]"/>
                    </SwiperSlide>

                </Swiper>
        </div>

            <div className="md:mt-[-500px] -mt-72 z-10  absolute">
              <div className="md:ml-20 ml-14">
                <div className="bg-black opacity-70 rounded ">
                  <h1 className="md:text-7xl font-Jost mb-5 text-white p-5">FONDATION <br/> TAYLOR MUANZA</h1>
                </div>
                <button className="bg-blue-900 text-white p-2 rounded-xl font-bold"><Link to='/mon-don'>FAIRE UN DON</Link></button>
              </div>
            </div>

      </div>
      </>
    );
  }
  