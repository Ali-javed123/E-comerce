import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Link } from 'react-router-dom';

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
          <Link to="#">
            <img src="assets/img/blog/img_blog1.jpg" alt />
          </Link>
        </div>
        <div className="blog-content">
          <h3><Link to="#">post format audio</Link></h3>
          <div className="blog-meta">
            <span className="posted-author">by: admin</span>
            <span className="post-date">25 Nov, 2018</span>
          </div>
          <p>Curabitur sed diam enim. Sed varius faucibus lectus, a scelerisque massa posuere ac. Quisque dapibus, est ac...</p>
        </div>
        <Link to="#">read more <i className="fa fa-long-arrow-right" /></Link>
      </div> {/* end single blog item */}
        </SwiperSlide>
        <SwiperSlide>

      <div className="blog-item">
        <div className="blog-thumb img-full fix">
          <Link to="#">
            <img src="assets/img/blog/img_blog2.jpg" alt />
          </Link>
        </div>
        <div className="blog-content">
          <h3><Link to="#">post format image</Link></h3>
          <div className="blog-meta">
            <span className="posted-author">by: admin</span>
            <span className="post-date">25 Nov, 2018</span>
          </div>
          <p>Curabitur sed diam enim. Sed varius faucibus lectus, a scelerisque massa posuere ac. Quisque dapibus, est ac...</p>
        </div>
        <Link to="#">read more <i className="fa fa-long-arrow-right" /></Link>
      </div> {/* end single blog item */}
        </SwiperSlide>
        <SwiperSlide>

      <div className="blog-item">
        <div className="blog-thumb img-full fix">
          <Link to="#">
            <img src="assets/img/blog/img_blog3.jpg" alt />
          </Link>
        </div>
        <div className="blog-content">
          <h3><Link to="#">post format audio</Link></h3>
          <div className="blog-meta">
            <span className="posted-author">by: admin</span>
            <span className="post-date">25 Nov, 2018</span>
          </div>
          <p>Curabitur sed diam enim. Sed varius faucibus lectus, a scelerisque massa posuere ac. Quisque dapibus, est ac...</p>
        </div>
        <Link to="#">read more <i className="fa fa-long-arrow-right" /></Link>
      </div> {/* end single blog item */}
        </SwiperSlide>
        <SwiperSlide>

      <div className="blog-item">
        <div className="blog-thumb img-full fix">
          <Link to="#">
            <img src="assets/img/blog/img_blog4.jpg" alt />
          </Link>
        </div>
        <div className="blog-content">
          <h3><Link to="#">post format image</Link></h3>
          <div className="blog-meta">
            <span className="posted-author">by: admin</span>
            <span className="post-date">25 Nov, 2018</span>
          </div>
          <p>Curabitur sed diam enim. Sed varius faucibus lectus, a scelerisque massa posuere ac. Quisque dapibus, est ac...</p>
        </div>
        <Link to="#">read more <i className="fa fa-long-arrow-right" /></Link>
      </div> {/* end single blog item */}
        </SwiperSlide>
        <SwiperSlide>

      <div className="blog-item">
        <div className="blog-thumb img-full fix">
          <Link to="#">
            <img src="assets/img/blog/img_blog3.jpg" alt />
          </Link>
        </div>
        <div className="blog-content">
          <h3><Link to="#">post format audio</Link></h3>
          <div className="blog-meta">
            <span className="posted-author">by: admin</span>
            <span className="post-date">25 Nov, 2018</span>
          </div>
          <p>Curabitur sed diam enim. Sed varius faucibus lectus, a scelerisque massa posuere ac. Quisque dapibus, est ac...</p>
        </div>
        <Link to="#">read more <i className="fa fa-long-arrow-right" /></Link>
      </div> {/* end single blog item */}
        </SwiperSlide>
        <SwiperSlide>

      <div className="blog-item">
        <div className="blog-thumb img-full fix">
          <Link to="#">
            <img src="assets/img/blog/img_blog2.jpg" alt />
          </Link>
        </div>
        <div className="blog-content">
          <h3><Link to="#">post format image</Link></h3>
          <div className="blog-meta">
            <span className="posted-author">by: admin</span>
            <span className="post-date">25 Nov, 2018</span>
          </div>
          <p>Curabitur sed diam enim. Sed varius faucibus lectus, a scelerisque massa posuere ac. Quisque dapibus, est ac...</p>
        </div>
        <Link to="#">read more <i className="fa fa-long-arrow-right" /></Link>
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
