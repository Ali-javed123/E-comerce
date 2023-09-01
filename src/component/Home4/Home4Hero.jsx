import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Autoplay, EffectFade, Navigation, Pagination} from "swiper/modules";
export default function Home4Hero() {
  return (
    <>
{/* hero slider start */}
<div className="hero-slider-area">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="slider-wrapper-area4 mt-18 mt-md-0 mt-sm-0">
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
            modules={[EffectFade, Autoplay, Navigation, Pagination]}  className="hero-slider-active hero__4 slick-dot-style hero-dot">
            <SwiperSlide className="single-slider d-flex align-items-center" style={{backgroundImage: 'url(assets/img/slider/slider4_bg1.jpg)'}}>
              <div className="container">
                <div className="slider-main-content">
                  <div className="slider-text">
                    <h2><span>fashion new 2018</span></h2>
                    <h1><span>collection 2018</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
                    <a className="home-btn hm4-btn" href="#">shop now</a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="single-slider d-flex align-items-center" style={{backgroundImage: 'url(assets/img/slider/slider4_bg2.jpg)'}}>
              <div className="container">
                <div className="slider-main-content">
                  <div className="slider-text">
                    <h2><span>fashion new 2018</span></h2>
                    <h1><span>collection 2018</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
                    <a className="home-btn hm4-btn" href="#">shop now</a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</div>
{/* hero slider end */}

    
    </>
  )
}
