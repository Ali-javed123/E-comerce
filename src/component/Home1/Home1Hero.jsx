import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Autoplay, EffectFade, Navigation, Pagination} from "swiper/modules";
export default function Home1Hero() {
  return (
    <>
    
    {/* hero slider start */}
<div className="container">
  <div className="row">
    <div className="col-lg-12">
      <div className="slider-wrapper-area">
        <Swiper     spaceBetween={30}
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
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[EffectFade, Autoplay, Navigation, Pagination]}  className="hero-slider-active hero__1 slick-dot-style hero-dot">
          <SwiperSlide className="single-slider" style={{backgroundImage: 'url(assets/img/slider/slider11_bg.jpg)'}}>
            <div className="container p-0">
              <div className="slider-main-content">
                <div className="slider-content-img">
                  <img src="assets/img/slider/slider11_lable1.png" alt />
                  <img src="assets/img/slider/slider11_lable2.png" alt />
                  <img src="assets/img/slider/slider11_lable3.png" alt />
                </div>
                <div className="slider-text">
                  <div className="slider-label">
                    <img src="assets/img/slider/slider11_lable4.png" alt />
                  </div>
                  <h1>headphones az12</h1>
                  <p>Typi Non Habent Claritatem Insitam; Est Usus Legentis</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="single-slider" style={{backgroundImage: 'url(assets/img/slider/slider12_bg.jpg)'}}>
            <div className="container p-0">
              <div className="slider-main-content">
                <div className="slider-content-img">
                  <img src="assets/img/slider/slider11_lable1.png" alt />
                  <img src="assets/img/slider/slider11_lable2.png" alt />
                  <img src="assets/img/slider/slider11_lable3.png" alt />
                </div>
                <div className="slider-text">
                  <div className="slider-label">
                    <img src="assets/img/slider/slider11_lable4.png" alt />
                  </div>
                  <h1>samson s90</h1>
                  <p>Typi Non Habent Claritatem Insitam; Est Usus Legentis</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      

  
    </div>
  </div>
</div>
{/* hero slider end */}

    </>
  )
}
