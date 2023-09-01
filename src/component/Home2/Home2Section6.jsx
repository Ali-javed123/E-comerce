import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Autoplay, Pagination ,Navigation} from "swiper/modules";
import { SwiperButtun } from '../globleComponent/SwiperButtun';
export default function Home2Section6() {
  return (
    <>
 {/* brand area start */}
<div className="brand-area pt-28 pb-30">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="section-title mb-30 text-left">
          <div className="title-icon">
            <i className="fa fa-crop" />
          </div>
          <h3>Popular Brand</h3>
        </div> {/* section title end */}
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <Swiper   
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }} loop   autoplay={{
            delay: 2000,
            disableOnInteraction: false
        }}
        spaceBetween={10} modules={[Autoplay,Navigation]} className="brand-active slick-padding slick-arrow-style">
          <SwiperSlide>

          <div className="brand-item text-center">
            <a href="#"><img src="assets/img/brand/br1.png" alt /></a>
          </div>
          </SwiperSlide>
          <SwiperSlide>

          <div className="brand-item text-center">
            <a href="#"><img src="assets/img/brand/br2.png" alt /></a>
          </div>
          </SwiperSlide>
          <SwiperSlide>

          <div className="brand-item text-center">
            <a href="#"><img src="assets/img/brand/br3.png" alt /></a>
          </div>
          </SwiperSlide>
          <SwiperSlide>

          <div className="brand-item text-center">
            <a href="#"><img src="assets/img/brand/br4.png" alt /></a>
          </div>
          </SwiperSlide>
          <SwiperSlide>

          <div className="brand-item text-center">
            <a href="#"><img src="assets/img/brand/br5.png" alt /></a>
          </div>
          </SwiperSlide>
          <SwiperSlide>

          <div className="brand-item text-center">
            <a href="#"><img src="assets/img/brand/br6.png" alt /></a>
          </div>
          </SwiperSlide>
          <SwiperSlide>

          <div className="brand-item text-center">
            <a href="#"><img src="assets/img/brand/br4.png" alt /></a>
          </div>
          </SwiperSlide>
          <SwiperButtun/>
        </Swiper>
      </div>
    </div>
  </div>
</div>
{/* brand area end */}

    </>
  )
}
