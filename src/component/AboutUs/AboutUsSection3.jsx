import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Autoplay, EffectFade, Navigation, Pagination} from "swiper/modules";
export default function AboutUsSection3() {
  return (
    <>
{/* testimonial area start */}
<div className="testimonial-area2">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="testimonial-title text-center mb-28">
          <h3>happy customer</h3>
        </div> {/* section title end */}
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <Swiper  loop 
            effect={"fade"}
            speed={600}
            parallax={true}
            navigation={true}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
           
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            modules={[EffectFade, Autoplay, Navigation, Pagination]} className="testimonial-carousel-active testimonial-style-2 slick-dot-style">
               

          <SwiperSlide className="testimonial-item text-center">
            <div className="testimonial-thumb">
              <img src="assets/img/testimonial/team_member1.jpg" alt />
            </div>
            <div className="testimonial-content">
              <p>Etiam rhoncus congue arcu sed interdum. Cras dolor diam, accumsan eu aliquam eu, luctus vehicula velit. Nam eget tortor ut felis fermentum sodales ac eu lacus</p>
              <h3><a href="#">Elizabeth Taylor</a></h3>
            </div>
          </SwiperSlide> {/* end single testimonial item */}
             

          <SwiperSlide className="testimonial-item text-center">
            <div className="testimonial-thumb">
              <img src="assets/img/testimonial/team_member2.jpg" alt />
            </div>
            <div className="testimonial-content">
              <p>Etiam rhoncus congue arcu sed interdum. Cras dolor diam, accumsan eu aliquam eu, luctus vehicula velit. Nam eget tortor ut felis fermentum sodales ac eu lacus</p>
              <h3><a href="#">Elizabeth Taylor</a></h3>
            </div>
          </SwiperSlide> {/* end single testimonial item */}

          <SwiperSlide className="testimonial-item text-center">
            <div className="testimonial-thumb">
              <img src="assets/img/testimonial/team_member3.jpg" alt />
            </div>
            <div className="testimonial-content">
              <p>Etiam rhoncus congue arcu sed interdum. Cras dolor diam, accumsan eu aliquam eu, luctus vehicula velit. Nam eget tortor ut felis fermentum sodales ac eu lacus</p>
              <h3><a href="#">Elizabeth Taylor</a></h3>
            </div>
          </SwiperSlide> {/* end single testimonial item */}
        </Swiper>
      </div>
    </div>
  </div>
</div>
{/* testimonial area end */}


    </>
  )
}
