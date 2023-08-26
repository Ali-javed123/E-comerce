import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Autoplay, EffectFade, Navigation, Pagination} from "swiper/modules";
export default function Home3Hero() {
  return (
    <>
{/* hero slider start */}
<div className="hero-slider-area">
  <div className="slider-wrapper-area3">
    <Swiper spaceBetween={30}
            effect={"fade"}
            speed={600}
            parallax={true}
            navigation={true}
            scrollbar={{ draggable: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
            pagination={{
              clickable: true,
              // dynamicBullets: true,

            }}

            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[EffectFade, Autoplay, Navigation, Pagination]} className="hero-slider-active hero__3 slick-dot-style hero-dot">
      <SwiperSlide className="single-slider d-flex align-items-center" style={{backgroundImage: 'url(assets/img/slider/slider3_bg1.jpg)'}}>
        <div className="container">
          <div className="slider-main-content">
            <div className="slider-text text-left">
              <h2>our new range of</h2>
              <h1>woman</h1>
              <h5>for less than $199.00</h5>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="single-slider d-flex align-items-center" style={{backgroundImage: 'url(assets/img/slider/slider3_bg2.jpg)'}}>
        <div className="container">
          <div className="slider-main-content">
            <div className="slider-text text-left">
              <h2>shopping bag</h2>
              <h4>fashion collection 2018</h4>
              <p>for less than $199.00</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</div>

{/* hero slider end */}

    
    </>
  )
}
