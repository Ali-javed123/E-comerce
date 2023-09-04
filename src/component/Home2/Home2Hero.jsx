import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Autoplay, EffectFade, Navigation, Pagination} from "swiper/modules";
export default function Home2Hero() {
  return (
    <>
{/* hero slider start */}
<div className="hero-slider-area">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="slider-wrapper-area2 mt-30">
          <Swiper   spaceBetween={30}
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
            modules={[EffectFade, Autoplay, Navigation, Pagination]} className="hero-slider-active hero__2 slick-dot-style hero-dot">
            <SwiperSlide className="single-slider d-flex align-items-center" style={{backgroundImage: 'url(assets/img/slider/slider21_bg.jpg)'}}>
              <div className="container">
                <div className="slider-main-content">
                  <div className="slider-text text-center">
                    <h2>new camera products</h2>
                    <h3>get up to 50% sale</h3>
                    <p>This is photoshop's version of lorem ipsum. Proin gravida nibh vel velit auctor aliquet. </p>
                    <a className="home-btn" href="#">shop now</a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="single-slider d-flex align-items-center" style={{backgroundImage: 'url(assets/img/slider/slider22_bg.jpg)'}}>
              <div className="container">
                <div className="slider-main-content">
                  <div className="slider-text text-center">
                    <h2>new smart tv products</h2>
                    <h3>get up to 50% sale</h3>
                    <p>This is photoshop's version of lorem ipsum. Proin gravida nibh vel velit auctor aliquet. </p>
                    <a className="home-btn" href="#">shop now</a>
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
