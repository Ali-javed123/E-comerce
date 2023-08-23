import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Autoplay, Pagination ,Navigation} from "swiper/modules";
import { SwiperButtun } from '../globleComponent/SwiperButtun';
export default function Home2Section5() {
  return (
    <>
{/* latest blog area start */}
<div className="latest-blog-area pt-28">
  <div className="container">
    <div className="section-title mb-30">
      <div className="title-icon">
        <i className="fa fa-book" />
      </div>
      <h3>latest news</h3>
    </div> {/* section title end */}
    {/* blog wrapper start */}
    <Swiper breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }} loop   autoplay={{
            delay: 2000,
            disableOnInteraction: false
        }}
        spaceBetween={10} modules={[Autoplay,Navigation]} className="blog-carousel-active2 slick-padding slick-arrow-style">
        <SwiperSlide>

      <div className="blog-item">
        <div className="blog-thumb img-full fix">
          <a href="blog-details.html">
            <img src="assets/img/blog/img_blog1.jpg" alt />
          </a>
        </div>
        <div className="blog-content">
          <h3><a href="blog-details.html">post format audio</a></h3>
          <div className="blog-meta">
            <span className="posted-author">by: admin</span>
            <span className="post-date">25 Nov, 2018</span>
          </div>
          <p>Curabitur sed diam enim. Sed varius faucibus lectus, a scelerisque massa posuere ac. Quisque dapibus, est ac...</p>
        </div>
        <a href="blog-details.html">read more <i className="fa fa-long-arrow-right" /></a>
      </div> {/* end single blog item */}
        </SwiperSlide>
        <SwiperSlide>

      <div className="blog-item">
        <div className="blog-thumb img-full fix">
          <a href="blog-details.html">
            <img src="assets/img/blog/img_blog2.jpg" alt />
          </a>
        </div>
        <div className="blog-content">
          <h3><a href="blog-details.html">post format image</a></h3>
          <div className="blog-meta">
            <span className="posted-author">by: admin</span>
            <span className="post-date">25 Nov, 2018</span>
          </div>
          <p>Curabitur sed diam enim. Sed varius faucibus lectus, a scelerisque massa posuere ac. Quisque dapibus, est ac...</p>
        </div>
        <a href="blog-details.html">read more <i className="fa fa-long-arrow-right" /></a>
      </div> {/* end single blog item */}
        </SwiperSlide>
        <SwiperSlide>

      <div className="blog-item">
        <div className="blog-thumb img-full fix">
          <a href="blog-details.html">
            <img src="assets/img/blog/img_blog3.jpg" alt />
          </a>
        </div>
        <div className="blog-content">
          <h3><a href="blog-details.html">post format audio</a></h3>
          <div className="blog-meta">
            <span className="posted-author">by: admin</span>
            <span className="post-date">25 Nov, 2018</span>
          </div>
          <p>Curabitur sed diam enim. Sed varius faucibus lectus, a scelerisque massa posuere ac. Quisque dapibus, est ac...</p>
        </div>
        <a href="blog-details.html">read more <i className="fa fa-long-arrow-right" /></a>
      </div> {/* end single blog item */}
        </SwiperSlide>
        <SwiperSlide>

      <div className="blog-item">
        <div className="blog-thumb img-full fix">
          <a href="blog-details.html">
            <img src="assets/img/blog/img_blog4.jpg" alt />
          </a>
        </div>
        <div className="blog-content">
          <h3><a href="blog-details.html">post format image</a></h3>
          <div className="blog-meta">
            <span className="posted-author">by: admin</span>
            <span className="post-date">25 Nov, 2018</span>
          </div>
          <p>Curabitur sed diam enim. Sed varius faucibus lectus, a scelerisque massa posuere ac. Quisque dapibus, est ac...</p>
        </div>
        <a href="blog-details.html">read more <i className="fa fa-long-arrow-right" /></a>
      </div> {/* end single blog item */}
        </SwiperSlide>
        <SwiperSlide>

      <div className="blog-item">
        <div className="blog-thumb img-full fix">
          <a href="blog-details.html">
            <img src="assets/img/blog/img_blog3.jpg" alt />
          </a>
        </div>
        <div className="blog-content">
          <h3><a href="blog-details.html">post format audio</a></h3>
          <div className="blog-meta">
            <span className="posted-author">by: admin</span>
            <span className="post-date">25 Nov, 2018</span>
          </div>
          <p>Curabitur sed diam enim. Sed varius faucibus lectus, a scelerisque massa posuere ac. Quisque dapibus, est ac...</p>
        </div>
        <a href="blog-details.html">read more <i className="fa fa-long-arrow-right" /></a>
      </div> {/* end single blog item */}
        </SwiperSlide>
        <SwiperSlide>

      <div className="blog-item">
        <div className="blog-thumb img-full fix">
          <a href="blog-details.html">
            <img src="assets/img/blog/img_blog2.jpg" alt />
          </a>
        </div>
        <div className="blog-content">
          <h3><a href="blog-details.html">post format image</a></h3>
          <div className="blog-meta">
            <span className="posted-author">by: admin</span>
            <span className="post-date">25 Nov, 2018</span>
          </div>
          <p>Curabitur sed diam enim. Sed varius faucibus lectus, a scelerisque massa posuere ac. Quisque dapibus, est ac...</p>
        </div>
        <a href="blog-details.html">read more <i className="fa fa-long-arrow-right" /></a>
      </div> {/* end single blog item */}
        </SwiperSlide>
        <SwiperButtun/>
    </Swiper>
    {/* blog wrapper end */}
  </div>
</div>
{/* latest blog area end */}

    </>
  )
}
