import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Autoplay, Pagination ,Navigation,Scrollbar, A11y} from "swiper/modules";
import { SwiperButtun } from '../globleComponent/SwiperButtun';
export default function Home1Section4() {
  return (
    <>
     {/* page wrapper start */}
<div className="page-wrapper pt-6 pb-28 pb-md-6 pb-sm-6 pt-xs-36">
  <div className="container">
    <div className="row">
      {/* start home sidebar */}
      <div className="col-lg-3">
        <div className="home-sidebar">
          {/* hot deals area start */}
          <div className="main-sidebar hot-deals-wrap mb-30">
            <div className="section-title-2 d-flex justify-content-between mb-28">
              <h3>hot deals</h3>
              <div className="slick-append" />
            </div> {/* section title end */}
            <Swiper loop className="deals-carousel-active slick-padding slick-arrow-style">
              {/* product single item start */}
              <SwiperButtun/>
              <SwiperSlide>

              <div className="product-item fix">
                <div className="product-thumb">
                  <a href="product-details.html">
                    <img src="assets/img/product/product-img7.jpg" className="img-pri" alt />
                    <img src="assets/img/product/product-img13.jpg" className="img-sec" alt />
                  </a>
                  <div className="product-label">
                    <span>hot</span>
                  </div>
                  <div className="product-action-link">
                    <a href="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" data-placement="left" title="Quick view"><i className="fa fa-search" /></span> </a>
                    <a href="#" data-toggle="tooltip" data-placement="left" title="Wishlist"><i className="fa fa-heart-o" /></a>
                    <a href="#" data-toggle="tooltip" data-placement="left" title="Compare"><i className="fa fa-refresh" /></a>
                    <a href="#" data-toggle="tooltip" data-placement="left" title="Add to cart"><i className="fa fa-shopping-cart" /></a>
                  </div>
                </div>
                <div className="product-content">
                  <h4><a href="product-details.html">vertual product 01</a></h4>
                  <div className="pricebox">
                    <span className="regular-price">$70.00</span>
                    <div className="ratings">
                      <span className="good"><i className="fa fa-star" /></span>
                      <span className="good"><i className="fa fa-star" /></span>
                      <span className="good"><i className="fa fa-star" /></span>
                      <span className="good"><i className="fa fa-star" /></span>
                      <span><i className="fa fa-star" /></span>
                      <div className="pro-review">
                        <span>1 review(s)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </SwiperSlide>
              {/* product single item end */}
              {/* product single item start */}
              <SwiperSlide>

              <div className="product-item fix">
                <div className="product-thumb">
                  <a href="product-details.html">
                    <img src="assets/img/product/product-img3.jpg" className="img-pri" alt />
                    <img src="assets/img/product/product-img4.jpg" className="img-sec" alt />
                  </a>
                  <div className="product-label">
                    <span>hot</span>
                  </div>
                  <div className="product-action-link">
                    <a href="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" data-placement="left" title="Quick view"><i className="fa fa-search" /></span> </a>
                    <a href="#" data-toggle="tooltip" data-placement="left" title="Wishlist"><i className="fa fa-heart-o" /></a>
                    <a href="#" data-toggle="tooltip" data-placement="left" title="Compare"><i className="fa fa-refresh" /></a>
                    <a href="#" data-toggle="tooltip" data-placement="left" title="Add to cart"><i className="fa fa-shopping-cart" /></a>
                  </div>
                </div>
                <div className="product-content">
                  <h4><a href="product-details.html">vertual product 01</a></h4>
                  <div className="pricebox">
                    <span className="regular-price">$70.00</span>
                    <div className="ratings">
                      <span className="good"><i className="fa fa-star" /></span>
                      <span className="good"><i className="fa fa-star" /></span>
                      <span className="good"><i className="fa fa-star" /></span>
                      <span className="good"><i className="fa fa-star" /></span>
                      <span><i className="fa fa-star" /></span>
                      <div className="pro-review">
                        <span>1 review(s)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </SwiperSlide>
              {/* product single item end */}
              {/* product single item start */}
              <SwiperSlide>
              <div className="product-item fix">
                <div className="product-thumb">
                  <a href="product-details.html">
                    <img src="assets/img/product/product-img5.jpg" className="img-pri" alt />
                    <img src="assets/img/product/product-img1.jpg" className="img-sec" alt />
                  </a>
                  <div className="product-label">
                    <span>hot</span>
                  </div>
                  <div className="product-action-link">
                    <a href="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" data-placement="left" title="Quick view"><i className="fa fa-search" /></span> </a>
                    <a href="#" data-toggle="tooltip" data-placement="left" title="Wishlist"><i className="fa fa-heart-o" /></a>
                    <a href="#" data-toggle="tooltip" data-placement="left" title="Compare"><i className="fa fa-refresh" /></a>
                    <a href="#" data-toggle="tooltip" data-placement="left" title="Add to cart"><i className="fa fa-shopping-cart" /></a>
                  </div>
                </div>
                <div className="product-content">
                  <h4><a href="product-details.html">vertual product 01</a></h4>
                  <div className="pricebox">
                    <span className="regular-price">$70.00</span>
                    <div className="ratings">
                      <span className="good"><i className="fa fa-star" /></span>
                      <span className="good"><i className="fa fa-star" /></span>
                      <span className="good"><i className="fa fa-star" /></span>
                      <span className="good"><i className="fa fa-star" /></span>
                      <span><i className="fa fa-star" /></span>
                      <div className="pro-review">
                        <span>1 review(s)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </SwiperSlide>
              {/* product single item end */}
            </Swiper>
          </div>
          {/* hot deals area end */}
          {/* best seller area start */}
          <div className="main-sidebar category-wrapper mb-24">
            <div className="section-title-2 d-flex justify-content-between mb-28">
              <h3>best seller</h3>
              <div className="category-append" />
            </div> {/* section title end */}
            <Swiper loop modules={[Pagination,Autoplay,Navigation]} className="category-carousel-active row" >
              <SwiperSlide>

              <div className="col">
                <div className="category-item">
                  <div className="category-thumb">
                    <a href="product-details.html">
                      <img src="assets/img/product/product-img1.jpg" alt />
                    </a>
                  </div>
                  <div className="category-content">
                    <h4><a href="product-details.html">Virtual Product 01</a></h4>
                    <div className="price-box">
                      <div className="regular-price">
                        $150.00
                      </div>
                      <div className="old-price">
                        <del>$180.00</del>
                      </div>
                    </div>
                    <div className="ratings">
                      <span className="good"><i className="fa fa-star" /></span>
                      <span className="good"><i className="fa fa-star" /></span>
                      <span className="good"><i className="fa fa-star" /></span>
                      <span className="good"><i className="fa fa-star" /></span>
                      <span><i className="fa fa-star" /></span>
                      <div className="pro-review">
                        <span>1 review(s)</span>
                      </div>
                    </div>
                  </div>
                </div> {/* end single item */}
              </div> {/* end single item column */}
              <div className="col">
                <div className="category-item">
                  <div className="category-thumb">
                    <a href="product-details.html">
                      <img src="assets/img/product/product-img2.jpg" alt />
                    </a>
                  </div>
                  <div className="category-content">
                    <h4><a href="product-details.html">Virtual Product 01</a></h4>
                    <div className="price-box">
                      <div className="regular-price">
                        $150.00
                      </div>
                      <div className="old-price">
                        <del>$180.00</del>
                      </div>
                    </div>
                    <div className="ratings">
                      <span className="good"><i className="fa fa-star" /></span>
                      <span className="good"><i className="fa fa-star" /></span>
                      <span className="good"><i className="fa fa-star" /></span>
                      <span className="good"><i className="fa fa-star" /></span>
                      <span><i className="fa fa-star" /></span>
                      <div className="pro-review">
                        <span>1 review(s)</span>
                      </div>
                    </div>
                  </div>
                </div> {/* end single item */}
              </div> {/* end single item column */}
              <div className="col">
                <div className="category-item">
                  <div className="category-thumb">
                    <a href="product-details.html">
                      <img src="assets/img/product/product-img3.jpg" alt />
                    </a>
                  </div>
                  <div className="category-content">
                    <h4><a href="product-details.html">Virtual Product 01</a></h4>
                    <div className="price-box">
                      <div className="regular-price">
                        $150.00
                      </div>
                      <div className="old-price">
                        <del>$180.00</del>
                      </div>
                    </div>
                    <div className="ratings">
                      <span className="good"><i className="fa fa-star" /></span>
                      <span className="good"><i className="fa fa-star" /></span>
                      <span className="good"><i className="fa fa-star" /></span>
                      <span className="good"><i className="fa fa-star" /></span>
                      <span><i className="fa fa-star" /></span>
                      <div className="pro-review">
                        <span>1 review(s)</span>
                      </div>
                    </div>
                  </div>
                </div> {/* end single item */}
              </div> {/* end single item column */}
              <div className="col">
                <div className="category-item">
                  <div className="category-thumb">
                    <a href="product-details.html">
                      <img src="assets/img/product/product-img4.jpg" alt />
                    </a>
                  </div>
                  <div className="category-content">
                    <h4><a href="product-details.html">Virtual Product 01</a></h4>
                    <div className="price-box">
                      <div className="regular-price">
                        $150.00
                      </div>
                      <div className="old-price">
                        <del>$180.00</del>
                      </div>
                    </div>
                    <div className="ratings">
                      <span className="good"><i className="fa fa-star" /></span>
                      <span className="good"><i className="fa fa-star" /></span>
                      <span className="good"><i className="fa fa-star" /></span>
                      <span className="good"><i className="fa fa-star" /></span>
                      <span><i className="fa fa-star" /></span>
                      <div className="pro-review">
                        <span>1 review(s)</span>
                      </div>
                    </div>
                  </div>
                </div> {/* end single item */}
              </div> {/* end single item column */}
              </SwiperSlide>
              <SwiperSlide>

              <div className="col">
                <div className="category-item">
                  <div className="category-thumb">
                    <a href="product-details.html">
                      <img src="assets/img/product/product-img5.jpg" alt />
                    </a>
                  </div>
                  <div className="category-content">
                    <h4><a href="product-details.html">Virtual Product 01</a></h4>
                    <div className="price-box">
                      <div className="regular-price">
                        $150.00
                      </div>
                      <div className="old-price">
                        <del>$180.00</del>
                      </div>
                    </div>
                    <div className="ratings">
                      <span className="good"><i className="fa fa-star" /></span>
                      <span className="good"><i className="fa fa-star" /></span>
                      <span className="good"><i className="fa fa-star" /></span>
                      <span className="good"><i className="fa fa-star" /></span>
                      <span><i className="fa fa-star" /></span>
                      <div className="pro-review">
                        <span>1 review(s)</span>
                      </div>
                    </div>
                  </div>
                </div> {/* end single item */}
              </div> {/* end single item column */}
              <div className="col">
                <div className="category-item">
                  <div className="category-thumb">
                    <a href="product-details.html">
                      <img src="assets/img/product/product-img6.jpg" alt />
                    </a>
                  </div>
                  <div className="category-content">
                    <h4><a href="product-details.html">Virtual Product 01</a></h4>
                    <div className="price-box">
                      <div className="regular-price">
                        $150.00
                      </div>
                      <div className="old-price">
                        <del>$180.00</del>
                      </div>
                    </div>
                    <div className="ratings">
                      <span className="good"><i className="fa fa-star" /></span>
                      <span className="good"><i className="fa fa-star" /></span>
                      <span className="good"><i className="fa fa-star" /></span>
                      <span className="good"><i className="fa fa-star" /></span>
                      <span><i className="fa fa-star" /></span>
                      <div className="pro-review">
                        <span>1 review(s)</span>
                      </div>
                    </div>
                  </div>
                </div> {/* end single item */}
              </div> {/* end single item column */}
              <div className="col">
                <div className="category-item">
                  <div className="category-thumb">
                    <a href="product-details.html">
                      <img src="assets/img/product/product-img10.jpg" alt />
                    </a>
                  </div>
                  <div className="category-content">
                    <h4><a href="product-details.html">simple Product 01</a></h4>
                    <div className="price-box">
                      <div className="regular-price">
                        $150.00
                      </div>
                      <div className="old-price">
                        <del>$180.00</del>
                      </div>
                    </div>
                    <div className="ratings">
                      <span className="good"><i className="fa fa-star" /></span>
                      <span className="good"><i className="fa fa-star" /></span>
                      <span className="good"><i className="fa fa-star" /></span>
                      <span className="good"><i className="fa fa-star" /></span>
                      <span><i className="fa fa-star" /></span>
                      <div className="pro-review">
                        <span>1 review(s)</span>
                      </div>
                    </div>
                  </div>
                </div> {/* end single item */}
              </div> {/* end single item column */}
              <div className="col">
                <div className="category-item">
                  <div className="category-thumb">
                    <a href="product-details.html">
                      <img src="assets/img/product/product-img12.jpg" alt />
                    </a>
                  </div>
                  <div className="category-content">
                    <h4><a href="product-details.html">external Product 01</a></h4>
                    <div className="price-box">
                      <div className="regular-price">
                        $140.00
                      </div>
                      <div className="old-price">
                        <del>$160.00</del>
                      </div>
                    </div>
                    <div className="ratings">
                      <span className="good"><i className="fa fa-star" /></span>
                      <span className="good"><i className="fa fa-star" /></span>
                      <span className="good"><i className="fa fa-star" /></span>
                      <span className="good"><i className="fa fa-star" /></span>
                      <span><i className="fa fa-star" /></span>
                      <div className="pro-review">
                        <span>1 review(s)</span>
                      </div>
                    </div>
                  </div>
                </div> {/* end single item */}
              </div> {/* end single item column */}
              </SwiperSlide>

              <SwiperButtun/>
            </Swiper>
          </div>
          {/* best seller area end */}
          {/* blog area start */}
          <div className="main-sidebar blog-area mb-24">
            <div className="section-title-2 d-flex justify-content-between mb-28">
              <h3>latest blog</h3>
              <div className="category-append" />
            </div> {/* section title end */}
            {/* blog wrapper start */}
            <Swiper  loop   modules={[Pagination,Autoplay,Navigation,Pagination]} className="blog-carousel-active">
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
                  <p>Curabitur sed diam enim. Sed varius faucibus lectus, a scelerisque massa
                    posuere ac. Quisque dapibus, est ac...</p>
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
                  <p>Curabitur sed diam enim. Sed varius faucibus lectus, a scelerisque massa
                    posuere ac. Quisque dapibus, est ac...</p>
                </div>
                <a href="blog-details.html">read more <i className="fa fa-long-arrow-right" /></a>
              </div> {/* end single blog item */}

              </SwiperSlide>
              <SwiperButtun/>
            </Swiper>
            {/* blog wrapper end */}
          </div>
          {/* blog area end */}
          {/* testimonial area start */}
          <div className="main-sidebar testimonial-area pb-sm-70">
            <div className="section-title-2 mb-28">
              <h3>Clients Say</h3>
            </div> {/* section title end */}
            <Swiper  loop   modules={[Pagination,Autoplay,Navigation,Pagination]} className="testimonial-carousel-active slick-dot-style">
              <SwiperButtun/>
              <SwiperSlide>

              <div className="testimonial-item text-center">
                <div className="testimonial-thumb">
                  <img src="assets/img/testimonial/team_member1.jpg" alt />
                </div>
                <div className="testimonial-content">
                  <h3><a href="#">Elizabeth Taylor</a></h3>
                  <p>Etiam rhoncus congue arcu sed interdum. Cras dolor diam, accumsan eu
                    aliquam eu, luctus vehicula velit. Nam eget tortor ut felis fermentum
                    sodales ac eu lacus</p>
                </div>
              </div> {/* end single testimonial item */}
              </SwiperSlide>
              <SwiperSlide>
              <div className="testimonial-item text-center">
                <div className="testimonial-thumb">
                  <img src="assets/img/testimonial/team_member2.jpg" alt />
                </div>
                <div className="testimonial-content">
                  <h3><a href="#">Elizabeth Taylor</a></h3>
                  <p>Etiam rhoncus congue arcu sed interdum. Cras dolor diam, accumsan eu
                    aliquam eu, luctus vehicula velit. Nam eget tortor ut felis fermentum
                    sodales ac eu lacus</p>
                </div>
              </div> {/* end single testimonial item */}

              </SwiperSlide>
              <SwiperSlide>
              <div className="testimonial-item text-center">
                <div className="testimonial-thumb">
                  <img src="assets/img/testimonial/team_member3.jpg" alt />
                </div>
                <div className="testimonial-content">
                  <h3><a href="#">Elizabeth Taylor</a></h3>
                  <p>Etiam rhoncus congue arcu sed interdum. Cras dolor diam, accumsan eu
                    aliquam eu, luctus vehicula velit. Nam eget tortor ut felis fermentum
                    sodales ac eu lacus</p>
                </div>
              </div> {/* end single testimonial item */}

              </SwiperSlide>
            </Swiper>
          
          </div>
          {/* testimonial area end */}
        </div>
      </div>
      {/* end home sidebar */}
      <div className="col-lg-9">
        {/* featured category area start */}
        <div className="feature-category-area mt-md-70">
          <div className="section-title mb-30">
            <div className="title-icon">
              <i className="fa fa-bookmark" />
            </div>
            <h3>featured</h3>
          </div> {/* section title end */}
          {/* featured category start */}
          <Swiper slidesPerView={1}
        loop={true}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false
        }}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}

        modules={[Pagination,Autoplay]}  className="featured-carousel-active slick-padding slick-arrow-style">
            {/* product single item start */}
            <SwiperSlide>

            <div className="product-item fix">
              <div className="product-thumb">
                <a href="product-details.html">
                  <img src="assets/img/product/product-img1.jpg" className="img-pri" alt />
                  <img src="assets/img/product/product-img2.jpg" className="img-sec" alt />
                </a>
                <div className="product-label">
                  <span>hot</span>
                </div>
                <div className="product-action-link">
                  <a href="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" data-placement="left" title="Quick view"><i className="fa fa-search" /></span> </a>
                  <a href="#" data-toggle="tooltip" data-placement="left" title="Wishlist"><i className="fa fa-heart-o" /></a>
                  <a href="#" data-toggle="tooltip" data-placement="left" title="Compare"><i className="fa fa-refresh" /></a>
                  <a href="#" data-toggle="tooltip" data-placement="left" title="Add to cart"><i className="fa fa-shopping-cart" /></a>
                </div>
              </div>
              <div className="product-content">
                <h4><a href="product-details.html">affiliate product</a></h4>
                <div className="pricebox">
                  <span className="regular-price">$90.00</span>
                  <div className="ratings">
                    <span className="good"><i className="fa fa-star" /></span>
                    <span className="good"><i className="fa fa-star" /></span>
                    <span className="good"><i className="fa fa-star" /></span>
                    <span className="good"><i className="fa fa-star" /></span>
                    <span><i className="fa fa-star" /></span>
                    <div className="pro-review">
                      <span>1 review(s)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </SwiperSlide>
            {/* product single item end */}
            {/* product single item start */}
            <SwiperSlide className="product-item fix">
              <div className="product-thumb">
                <a href="product-details.html">
                  <img src="assets/img/product/product-img3.jpg" className="img-pri" alt />
                  <img src="assets/img/product/product-img4.jpg" className="img-sec" alt />
                </a>
                <div className="product-label">
                  <span>hot</span>
                </div>
                <div className="product-action-link">
                  <a href="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" data-placement="left" title="Quick view"><i className="fa fa-search" /></span> </a>
                  <a href="#" data-toggle="tooltip" data-placement="left" title="Wishlist"><i className="fa fa-heart-o" /></a>
                  <a href="#" data-toggle="tooltip" data-placement="left" title="Compare"><i className="fa fa-refresh" /></a>
                  <a href="#" data-toggle="tooltip" data-placement="left" title="Add to cart"><i className="fa fa-shopping-cart" /></a>
                </div>
              </div>
              <div className="product-content">
                <h4><a href="product-details.html">simple product 01</a></h4>
                <div className="pricebox">
                  <span className="regular-price">$120.00</span>
                  <div className="ratings">
                    <span className="good"><i className="fa fa-star" /></span>
                    <span className="good"><i className="fa fa-star" /></span>
                    <span className="good"><i className="fa fa-star" /></span>
                    <span className="good"><i className="fa fa-star" /></span>
                    <span><i className="fa fa-star" /></span>
                    <div className="pro-review">
                      <span>1 review(s)</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* product single item end */}
            {/* product single item start */}
            <SwiperSlide className="product-item fix">
              <div className="product-thumb">
                <a href="product-details.html">
                  <img src="assets/img/product/product-img5.jpg" className="img-pri" alt />
                  <img src="assets/img/product/product-img6.jpg" className="img-sec" alt />
                </a>
                <div className="product-label">
                  <span>hot</span>
                </div>
                <div className="product-action-link">
                  <a href="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" data-placement="left" title="Quick view"><i className="fa fa-search" /></span> </a>
                  <a href="#" data-toggle="tooltip" data-placement="left" title="Wishlist"><i className="fa fa-heart-o" /></a>
                  <a href="#" data-toggle="tooltip" data-placement="left" title="Compare"><i className="fa fa-refresh" /></a>
                  <a href="#" data-toggle="tooltip" data-placement="left" title="Add to cart"><i className="fa fa-shopping-cart" /></a>
                </div>
              </div>
              <div className="product-content">
                <h4><a href="product-details.html">vertual product 05</a></h4>
                <div className="pricebox">
                  <span className="regular-price">$60.00</span>
                  <div className="ratings">
                    <span className="good"><i className="fa fa-star" /></span>
                    <span className="good"><i className="fa fa-star" /></span>
                    <span className="good"><i className="fa fa-star" /></span>
                    <span className="good"><i className="fa fa-star" /></span>
                    <span><i className="fa fa-star" /></span>
                    <div className="pro-review">
                      <span>1 review(s)</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* product single item end */}
            {/* product single item start */}
            <SwiperSlide className="product-item fix">
              <div className="product-thumb">
                <a href="product-details.html">
                  <img src="assets/img/product/product-img7.jpg" className="img-pri" alt />
                  <img src="assets/img/product/product-img8.jpg" className="img-sec" alt />
                </a>
                <div className="product-label">
                  <span>hot</span>
                </div>
                <div className="product-action-link">
                  <a href="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" data-placement="left" title="Quick view"><i className="fa fa-search" /></span> </a>
                  <a href="#" data-toggle="tooltip" data-placement="left" title="Wishlist"><i className="fa fa-heart-o" /></a>
                  <a href="#" data-toggle="tooltip" data-placement="left" title="Compare"><i className="fa fa-refresh" /></a>
                  <a href="#" data-toggle="tooltip" data-placement="left" title="Add to cart"><i className="fa fa-shopping-cart" /></a>
                </div>
              </div>
              <div className="product-content">
                <h4><a href="product-details.html">grouped product</a></h4>
                <div className="pricebox">
                  <span className="regular-price">$10.00</span>
                  <div className="ratings">
                    <span className="good"><i className="fa fa-star" /></span>
                    <span className="good"><i className="fa fa-star" /></span>
                    <span className="good"><i className="fa fa-star" /></span>
                    <span className="good"><i className="fa fa-star" /></span>
                    <span><i className="fa fa-star" /></span>
                    <div className="pro-review">
                      <span>1 review(s)</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* product single item end */}
            {/* product single item start */}
            <SwiperSlide className="product-item fix">
              <div className="product-thumb">
                <a href="product-details.html">
                  <img src="assets/img/product/product-img9.jpg" className="img-pri" alt />
                  <img src="assets/img/product/product-img10.jpg" className="img-sec" alt />
                </a>
                <div className="product-label">
                  <span>hot</span>
                </div>
                <div className="product-action-link">
                  <a href="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" data-placement="left" title="Quick view"><i className="fa fa-search" /></span> </a>
                  <a href="#" data-toggle="tooltip" data-placement="left" title="Wishlist"><i className="fa fa-heart-o" /></a>
                  <a href="#" data-toggle="tooltip" data-placement="left" title="Compare"><i className="fa fa-refresh" /></a>
                  <a href="#" data-toggle="tooltip" data-placement="left" title="Add to cart"><i className="fa fa-shopping-cart" /></a>
                </div>
              </div>
              <div className="product-content">
                <h4><a href="product-details.html">simple product 10</a></h4>
                <div className="pricebox">
                  <span className="regular-price">$70.00</span>
                  <div className="ratings">
                    <span className="good"><i className="fa fa-star" /></span>
                    <span className="good"><i className="fa fa-star" /></span>
                    <span className="good"><i className="fa fa-star" /></span>
                    <span className="good"><i className="fa fa-star" /></span>
                    <span><i className="fa fa-star" /></span>
                    <div className="pro-review">
                      <span>1 review(s)</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            {/* product single item end */}
            {/* product single item start */}

            <SwiperSlide>

            <div className="product-item fix">
              <div className="product-thumb">
                <a href="product-details.html">
                  <img src="assets/img/product/product-img11.jpg" className="img-pri" alt />
                  <img src="assets/img/product/product-img12.jpg" className="img-sec" alt />
                </a>
                <div className="product-label">
                  <span>hot</span>
                </div>
                <div className="product-action-link">
                  <a href="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" data-placement="left" title="Quick view"><i className="fa fa-search" /></span> </a>
                  <a href="#" data-toggle="tooltip" data-placement="left" title="Wishlist"><i className="fa fa-heart-o" /></a>
                  <a href="#" data-toggle="tooltip" data-placement="left" title="Compare"><i className="fa fa-refresh" /></a>
                  <a href="#" data-toggle="tooltip" data-placement="left" title="Add to cart"><i className="fa fa-shopping-cart" /></a>
                </div>
              </div>
              <div className="product-content">
                <h4><a href="product-details.html">affiliate product</a></h4>
                <div className="pricebox">
                  <span className="regular-price">$70.00</span>
                  <div className="ratings">
                    <span className="good"><i className="fa fa-star" /></span>
                    <span className="good"><i className="fa fa-star" /></span>
                    <span className="good"><i className="fa fa-star" /></span>
                    <span className="good"><i className="fa fa-star" /></span>
                    <span><i className="fa fa-star" /></span>
                    <div className="pro-review">
                      <span>1 review(s)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </SwiperSlide>
            {/* product single item end */}
          </Swiper>
          {/* featured category end */}
        </div>
        {/* featured category area end */}
        {/* banner statistic start */}
        <div className="banner-statistic pt-28 pb-36">
          <div className="img-container fix img-full">
            <a href="#">
              <img src="assets/img/banner/banner_static1.jpg" alt />
            </a>
          </div>
        </div>
        {/* banner statistic end */}
        {/* featured category area start */}
        <div className="feature-category-area">
          <div className="section-title mb-30">
            <div className="title-icon">
              <i className="fa fa-flask" />
            </div>
            <h3>New Arrivals</h3>
          </div> {/* section title end */}
          {/* featured category start */}
          <Swiper slidesPerView={1}
        loop={true}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false
        }}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}

        modules={[Pagination,Autoplay]}  className="featured-carousel-active slick-padding slick-arrow-style">
            {/* product single item start */}
            <SwiperSlide>

            <div className="product-item fix">
              <div className="product-thumb">
                <a href="product-details.html">
                  <img src="assets/img/product/product-img1.jpg" className="img-pri" alt />
                  <img src="assets/img/product/product-img2.jpg" className="img-sec" alt />
                </a>
                <div className="product-label">
                  <span>new</span>
                </div>
                <div className="product-action-link">
                  <a href="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" data-placement="left" title="Quick view"><i className="fa fa-search" /></span> </a>
                  <a href="#" data-toggle="tooltip" data-placement="left" title="Wishlist"><i className="fa fa-heart-o" /></a>
                  <a href="#" data-toggle="tooltip" data-placement="left" title="Compare"><i className="fa fa-refresh" /></a>
                  <a href="#" data-toggle="tooltip" data-placement="left" title="Add to cart"><i className="fa fa-shopping-cart" /></a>
                </div>
              </div>
              <div className="product-content">
                <h4><a href="product-details.html">vertual product 01</a></h4>
                <div className="pricebox">
                  <span className="regular-price">$70.00</span>
                  <div className="ratings">
                    <span className="good"><i className="fa fa-star" /></span>
                    <span className="good"><i className="fa fa-star" /></span>
                    <span className="good"><i className="fa fa-star" /></span>
                    <span className="good"><i className="fa fa-star" /></span>
                    <span><i className="fa fa-star" /></span>
                    <div className="pro-review">
                      <span>1 review(s)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </SwiperSlide>
            {/* product single item end */}
            {/* product single item start */}
            <SwiperSlide>

            <div className="product-item fix">
              <div className="product-thumb">
                <a href="product-details.html">
                  <img src="assets/img/product/product-img3.jpg" className="img-pri" alt />
                  <img src="assets/img/product/product-img4.jpg" className="img-sec" alt />
                </a>
                <div className="product-label">
                  <span>new</span>
                </div>
                <div className="product-action-link">
                  <a href="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" data-placement="left" title="Quick view"><i className="fa fa-search" /></span> </a>
                  <a href="#" data-toggle="tooltip" data-placement="left" title="Wishlist"><i className="fa fa-heart-o" /></a>
                  <a href="#" data-toggle="tooltip" data-placement="left" title="Compare"><i className="fa fa-refresh" /></a>
                  <a href="#" data-toggle="tooltip" data-placement="left" title="Add to cart"><i className="fa fa-shopping-cart" /></a>
                </div>
              </div>
              <div className="product-content">
                <h4><a href="product-details.html">simple product 02</a></h4>
                <div className="pricebox">
                  <span className="regular-price">$100.00</span>
                  <div className="ratings">
                    <span className="good"><i className="fa fa-star" /></span>
                    <span className="good"><i className="fa fa-star" /></span>
                    <span className="good"><i className="fa fa-star" /></span>
                    <span className="good"><i className="fa fa-star" /></span>
                    <span><i className="fa fa-star" /></span>
                    <div className="pro-review">
                      <span>1 review(s)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </SwiperSlide>
            {/* product single item end */}
            {/* product single item start */}
            <SwiperSlide>

            <div className="product-item fix">
              <div className="product-thumb">
                <a href="product-details.html">
                  <img src="assets/img/product/product-img5.jpg" className="img-pri" alt />
                  <img src="assets/img/product/product-img6.jpg" className="img-sec" alt />
                </a>
                <div className="product-label">
                  <span>new</span>
                </div>
                <div className="product-action-link">
                  <a href="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" data-placement="left" title="Quick view"><i className="fa fa-search" /></span> </a>
                  <a href="#" data-toggle="tooltip" data-placement="left" title="Wishlist"><i className="fa fa-heart-o" /></a>
                  <a href="#" data-toggle="tooltip" data-placement="left" title="Compare"><i className="fa fa-refresh" /></a>
                  <a href="#" data-toggle="tooltip" data-placement="left" title="Add to cart"><i className="fa fa-shopping-cart" /></a>
                </div>
              </div>
              <div className="product-content">
                <h4><a href="product-details.html">affiliate product</a></h4>
                <div className="pricebox">
                  <span className="regular-price">$60.00</span>
                  <div className="ratings">
                    <span className="good"><i className="fa fa-star" /></span>
                    <span className="good"><i className="fa fa-star" /></span>
                    <span className="good"><i className="fa fa-star" /></span>
                    <span className="good"><i className="fa fa-star" /></span>
                    <span><i className="fa fa-star" /></span>
                    <div className="pro-review">
                      <span>1 review(s)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </SwiperSlide>
            {/* product single item end */}
            {/* product single item start */}
            <SwiperSlide>

            <div className="product-item fix">
              <div className="product-thumb">
                <a href="product-details.html">
                  <img src="assets/img/product/product-img7.jpg" className="img-pri" alt />
                  <img src="assets/img/product/product-img8.jpg" className="img-sec" alt />
                </a>
                <div className="product-label">
                  <span>new</span>
                </div>
                <div className="product-action-link">
                  <a href="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" data-placement="left" title="Quick view"><i className="fa fa-search" /></span> </a>
                  <a href="#" data-toggle="tooltip" data-placement="left" title="Wishlist"><i className="fa fa-heart-o" /></a>
                  <a href="#" data-toggle="tooltip" data-placement="left" title="Compare"><i className="fa fa-refresh" /></a>
                  <a href="#" data-toggle="tooltip" data-placement="left" title="Add to cart"><i className="fa fa-shopping-cart" /></a>
                </div>
              </div>
              <div className="product-content">
                <h4><a href="product-details.html">trendy product 03</a></h4>
                <div className="pricebox">
                  <span className="regular-price">$50.00</span>
                  <div className="ratings">
                    <span className="good"><i className="fa fa-star" /></span>
                    <span className="good"><i className="fa fa-star" /></span>
                    <span className="good"><i className="fa fa-star" /></span>
                    <span className="good"><i className="fa fa-star" /></span>
                    <span><i className="fa fa-star" /></span>
                    <div className="pro-review">
                      <span>1 review(s)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </SwiperSlide>
            {/* product single item end */}
            {/* product single item start */}
            <SwiperSlide>

            <div className="product-item fix">
              <div className="product-thumb">
                <a href="product-details.html">
                  <img src="assets/img/product/product-img9.jpg" className="img-pri" alt />
                  <img src="assets/img/product/product-img10.jpg" className="img-sec" alt />
                </a>
                <div className="product-label">
                  <span>new</span>
                </div>
                <div className="product-action-link">
                  <a href="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" data-placement="left" title="Quick view"><i className="fa fa-search" /></span> </a>
                  <a href="#" data-toggle="tooltip" data-placement="left" title="Wishlist"><i className="fa fa-heart-o" /></a>
                  <a href="#" data-toggle="tooltip" data-placement="left" title="Compare"><i className="fa fa-refresh" /></a>
                  <a href="#" data-toggle="tooltip" data-placement="left" title="Add to cart"><i className="fa fa-shopping-cart" /></a>
                </div>
              </div>
              <div className="product-content">
                <h4><a href="product-details.html">simple product 20</a></h4>
                <div className="pricebox">
                  <span className="regular-price">$80.00</span>
                  <div className="ratings">
                    <span className="good"><i className="fa fa-star" /></span>
                    <span className="good"><i className="fa fa-star" /></span>
                    <span className="good"><i className="fa fa-star" /></span>
                    <span className="good"><i className="fa fa-star" /></span>
                    <span><i className="fa fa-star" /></span>
                    <div className="pro-review">
                      <span>1 review(s)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </SwiperSlide>
            {/* product single item end */}
            {/* product single item start */}
            <SwiperSlide>

            <div className="product-item fix">
              <div className="product-thumb">
                <a href="product-details.html">
                  <img src="assets/img/product/product-img11.jpg" className="img-pri" alt />
                  <img src="assets/img/product/product-img12.jpg" className="img-sec" alt />
                </a>
                <div className="product-label">
                  <span>new</span>
                </div>
                <div className="product-action-link">
                  <a href="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" data-placement="left" title="Quick view"><i className="fa fa-search" /></span> </a>
                  <a href="#" data-toggle="tooltip" data-placement="left" title="Wishlist"><i className="fa fa-heart-o" /></a>
                  <a href="#" data-toggle="tooltip" data-placement="left" title="Compare"><i className="fa fa-refresh" /></a>
                  <a href="#" data-toggle="tooltip" data-placement="left" title="Add to cart"><i className="fa fa-shopping-cart" /></a>
                </div>
              </div>
              <div className="product-content">
                <h4><a href="product-details.html">grouped product</a></h4>
                <div className="pricebox">
                  <span className="regular-price">$70.00</span>
                  <div className="ratings">
                    <span className="good"><i className="fa fa-star" /></span>
                    <span className="good"><i className="fa fa-star" /></span>
                    <span className="good"><i className="fa fa-star" /></span>
                    <span className="good"><i className="fa fa-star" /></span>
                    <span><i className="fa fa-star" /></span>
                    <div className="pro-review">
                      <span>1 review(s)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </SwiperSlide>
            {/* product single item end */}
          </Swiper>
          {/* featured category end */}
        </div>
        {/* featured category area end */}
        {/* banner statistic start */}
        <div className="banner-statistic pt-28 pb-30 pb-sm-0">
          <div className="row">
            <div className="col-lg-7 col-md-7">
              <div className="img-container fix img-full mb-sm-30">
                <a href="#">
                  <img src="assets/img/banner/banner_static2.jpg" alt />
                </a>
              </div>
            </div>
            <div className="col-lg-5 col-md-5">
              <div className="img-container fix img-full mb-sm-30">
                <a href="#">
                  <img src="assets/img/banner/banner_static3.jpg" alt />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* banner statistic end */}
        {/* category features area start */}
        <div className="category-feature-area">
          <div className="row">
            {/* New Products area start */}
            <div className="col-lg-4">
              <div className="category-wrapper mb-md-24 mb-sm-24">
                <div className="section-title-2 d-flex justify-content-between mb-28">
                  <h3>New Products</h3>
                  <div className="category-append" />
                </div> {/* section title end */}
                <Swiper loop modules={[Pagination,Autoplay,Navigation]} className="category-carousel-active row" >
                  <SwiperSlide>

                  <div className="col">
                    <div className="category-item">
                      <div className="category-thumb">
                        <a href="product-details.html">
                          <img src="assets/img/product/product-img1.jpg" alt />
                        </a>
                      </div>
                      <div className="category-content">
                        <h4><a href="product-details.html">Virtual Product 01</a></h4>
                        <div className="price-box">
                          <div className="regular-price">
                            $150.00
                          </div>
                          <div className="old-price">
                            <del />
                          </div>
                        </div>
                        <div className="ratings">
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span><i className="fa fa-star" /></span>
                          <div className="pro-review">
                            <span>1 review(s)</span>
                          </div>
                        </div>
                      </div>
                    </div> {/* end single item */}
                  </div> {/* end single item column */}
                  <div className="col">
                    <div className="category-item">
                      <div className="category-thumb">
                        <a href="product-details.html">
                          <img src="assets/img/product/product-img2.jpg" alt />
                        </a>
                      </div>
                      <div className="category-content">
                        <h4><a href="product-details.html">grouped Product</a></h4>
                        <div className="price-box">
                          <div className="regular-price">
                            $100.00
                          </div>
                          <div className="old-price">
                            <del />
                          </div>
                        </div>
                        <div className="ratings">
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span><i className="fa fa-star" /></span>
                          <div className="pro-review">
                            <span>1 review(s)</span>
                          </div>
                        </div>
                      </div>
                    </div> {/* end single item */}
                  </div> {/* end single item column */}
                  <div className="col">
                    <div className="category-item">
                      <div className="category-thumb">
                        <a href="product-details.html">
                          <img src="assets/img/product/product-img3.jpg" alt />
                        </a>
                      </div>
                      <div className="category-content">
                        <h4><a href="product-details.html">simple Product 05</a></h4>
                        <div className="price-box">
                          <div className="regular-price">
                            $155.00
                          </div>
                          <div className="old-price">
                            <del>$160.00</del>
                          </div>
                        </div>
                        <div className="ratings">
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span><i className="fa fa-star" /></span>
                          <div className="pro-review">
                            <span>1 review(s)</span>
                          </div>
                        </div>
                      </div>
                    </div> {/* end single item */}
                  </div> {/* end single item column */}
                  <div className="col">
                    <div className="category-item">
                      <div className="category-thumb">
                        <a href="product-details.html">
                          <img src="assets/img/product/product-img4.jpg" alt />
                        </a>
                      </div>
                      <div className="category-content">
                        <h4><a href="product-details.html">demandable Product</a></h4>
                        <div className="price-box">
                          <div className="regular-price">
                            $210.00
                          </div>
                          <div className="old-price">
                            <del>$240.00</del>
                          </div>
                        </div>
                        <div className="ratings">
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span><i className="fa fa-star" /></span>
                          <div className="pro-review">
                            <span>1 review(s)</span>
                          </div>
                        </div>
                      </div>
                    </div> {/* end single item */}
                  </div> {/* end single item column */}
                  </SwiperSlide>
                  <SwiperSlide>

                  <div className="col">
                    <div className="category-item">
                      <div className="category-thumb">
                        <a href="product-details.html">
                          <img src="assets/img/product/product-img5.jpg" alt />
                        </a>
                      </div>
                      <div className="category-content">
                        <h4><a href="product-details.html">Virtual Product 01</a></h4>
                        <div className="price-box">
                          <div className="regular-price">
                            $150.00
                          </div>
                          <div className="old-price">
                            <del>$180.00</del>
                          </div>
                        </div>
                        <div className="ratings">
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span><i className="fa fa-star" /></span>
                          <div className="pro-review">
                            <span>1 review(s)</span>
                          </div>
                        </div>
                      </div>
                    </div> {/* end single item */}
                  </div> {/* end single item column */}
                  <div className="col">
                    <div className="category-item">
                      <div className="category-thumb">
                        <a href="product-details.html">
                          <img src="assets/img/product/product-img6.jpg" alt />
                        </a>
                      </div>
                      <div className="category-content">
                        <h4><a href="product-details.html">simple Product 12</a></h4>
                        <div className="price-box">
                          <div className="regular-price">
                            $150.00
                          </div>
                          <div className="old-price">
                            <del>$180.00</del>
                          </div>
                        </div>
                        <div className="ratings">
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span><i className="fa fa-star" /></span>
                          <div className="pro-review">
                            <span>1 review(s)</span>
                          </div>
                        </div>
                      </div>
                    </div> {/* end single item */}
                  </div> {/* end single item column */}
                  <div className="col">
                    <div className="category-item">
                      <div className="category-thumb">
                        <a href="product-details.html">
                          <img src="assets/img/product/product-img7.jpg" alt />
                        </a>
                      </div>
                      <div className="category-content">
                        <h4><a href="product-details.html">Virtual Product 01</a></h4>
                        <div className="price-box">
                          <div className="regular-price">
                            $150.00
                          </div>
                          <div className="old-price">
                            <del>$180.00</del>
                          </div>
                        </div>
                        <div className="ratings">
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span><i className="fa fa-star" /></span>
                          <div className="pro-review">
                            <span>1 review(s)</span>
                          </div>
                        </div>
                      </div>
                    </div> {/* end single item */}
                  </div> {/* end single item column */}
                  <div className="col">
                    <div className="category-item">
                      <div className="category-thumb">
                        <a href="product-details.html">
                          <img src="assets/img/product/product-img8.jpg" alt />
                        </a>
                      </div>
                      <div className="category-content">
                        <h4><a href="product-details.html">grouped Product</a></h4>
                        <div className="price-box">
                          <div className="regular-price">
                            $90.00
                          </div>
                          <div className="old-price">
                            <del>$115.00</del>
                          </div>
                        </div>
                        <div className="ratings">
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span><i className="fa fa-star" /></span>
                          <div className="pro-review">
                            <span>1 review(s)</span>
                          </div>
                        </div>
                      </div>
                    </div> {/* end single item */}
                  </div> {/* end single item column */}
                  </SwiperSlide>
                  <SwiperButtun/>
                </Swiper>
              </div>
            </div>
            {/* New Products area end */}
            {/* Most viewed area start */}
            <div className="col-lg-4">
              <div className="category-wrapper mb-md-24 mb-sm-24">
                <div className="section-title-2 d-flex justify-content-between mb-28">
                  <h3>Most viewed</h3>
                  <div className="category-append" />
                </div> {/* section title end */}
                <Swiper loop modules={[Pagination,Autoplay,Navigation]} className="category-carousel-active row" >
                  <SwiperSlide>

                  <div className="col">
                    <div className="category-item">
                      <div className="category-thumb">
                        <a href="product-details.html">
                          <img src="assets/img/product/product-img14.jpg" alt />
                        </a>
                      </div>
                      <div className="category-content">
                        <h4><a href="product-details.html">simple Product 06</a></h4>
                        <div className="price-box">
                          <div className="regular-price">
                            $190.00
                          </div>
                          <div className="old-price">
                            <del>$210.00</del>
                          </div>
                        </div>
                        <div className="ratings">
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span><i className="fa fa-star" /></span>
                          <div className="pro-review">
                            <span>1 review(s)</span>
                          </div>
                        </div>
                      </div>
                    </div> {/* end single item */}
                  </div> {/* end single item column */}
                  <div className="col">
                    <div className="category-item">
                      <div className="category-thumb">
                        <a href="product-details.html">
                          <img src="assets/img/product/product-img13.jpg" alt />
                        </a>
                      </div>
                      <div className="category-content">
                        <h4><a href="product-details.html">affiliate Product</a></h4>
                        <div className="price-box">
                          <div className="regular-price">
                            $45.00
                          </div>
                          <div className="old-price">
                            <del>$650.00</del>
                          </div>
                        </div>
                        <div className="ratings">
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span><i className="fa fa-star" /></span>
                          <div className="pro-review">
                            <span>1 review(s)</span>
                          </div>
                        </div>
                      </div>
                    </div> {/* end single item */}
                  </div> {/* end single item column */}
                  <div className="col">
                    <div className="category-item">
                      <div className="category-thumb">
                        <a href="product-details.html">
                          <img src="assets/img/product/product-img12.jpg" alt />
                        </a>
                      </div>
                      <div className="category-content">
                        <h4><a href="product-details.html">grouped Product</a></h4>
                        <div className="price-box">
                          <div className="regular-price">
                            $120.00
                          </div>
                          <div className="old-price">
                            <del>$170.00</del>
                          </div>
                        </div>
                        <div className="ratings">
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span><i className="fa fa-star" /></span>
                          <div className="pro-review">
                            <span>1 review(s)</span>
                          </div>
                        </div>
                      </div>
                    </div> {/* end single item */}
                  </div> {/* end single item column */}
                  <div className="col">
                    <div className="category-item">
                      <div className="category-thumb">
                        <a href="product-details.html">
                          <img src="assets/img/product/product-img10.jpg" alt />
                        </a>
                      </div>
                      <div className="category-content">
                        <h4><a href="product-details.html">Virtual Product 01</a></h4>
                        <div className="price-box">
                          <div className="regular-price">
                            $180.00
                          </div>
                          <div className="old-price">
                            <del />
                          </div>
                        </div>
                        <div className="ratings">
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span><i className="fa fa-star" /></span>
                          <div className="pro-review">
                            <span>1 review(s)</span>
                          </div>
                        </div>
                      </div>
                    </div> {/* end single item */}
                  </div> {/* end single item column */}
                  </SwiperSlide>
                  <SwiperSlide>

                  <div className="col">
                    <div className="category-item">
                      <div className="category-thumb">
                        <a href="product-details.html">
                          <img src="assets/img/product/product-img9.jpg" alt />
                        </a>
                      </div>
                      <div className="category-content">
                        <h4><a href="product-details.html">external Product</a></h4>
                        <div className="price-box">
                          <div className="regular-price">
                            $150.00
                          </div>
                          <div className="old-price">
                            <del>$180.00</del>
                          </div>
                        </div>
                        <div className="ratings">
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span><i className="fa fa-star" /></span>
                          <div className="pro-review">
                            <span>1 review(s)</span>
                          </div>
                        </div>
                      </div>
                    </div> {/* end single item */}
                  </div> {/* end single item column */}
                  <div className="col">
                    <div className="category-item">
                      <div className="category-thumb">
                        <a href="product-details.html">
                          <img src="assets/img/product/product-img8.jpg" alt />
                        </a>
                      </div>
                      <div className="category-content">
                        <h4><a href="product-details.html">Virtual Product 01</a></h4>
                        <div className="price-box">
                          <div className="regular-price">
                            $150.00
                          </div>
                          <div className="old-price">
                            <del>$180.00</del>
                          </div>
                        </div>
                        <div className="ratings">
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span><i className="fa fa-star" /></span>
                          <div className="pro-review">
                            <span>1 review(s)</span>
                          </div>
                        </div>
                      </div>
                    </div> {/* end single item */}
                  </div> {/* end single item column */}
                  <div className="col">
                    <div className="category-item">
                      <div className="category-thumb">
                        <a href="product-details.html">
                          <img src="assets/img/product/product-img6.jpg" alt />
                        </a>
                      </div>
                      <div className="category-content">
                        <h4><a href="product-details.html">download Product</a></h4>
                        <div className="price-box">
                          <div className="regular-price">
                            $150.00
                          </div>
                          <div className="old-price">
                            <del>$180.00</del>
                          </div>
                        </div>
                        <div className="ratings">
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span><i className="fa fa-star" /></span>
                          <div className="pro-review">
                            <span>1 review(s)</span>
                          </div>
                        </div>
                      </div>
                    </div> {/* end single item */}
                  </div> {/* end single item column */}
                  <div className="col">
                    <div className="category-item">
                      <div className="category-thumb">
                        <a href="product-details.html">
                          <img src="assets/img/product/product-img5.jpg" alt />
                        </a>
                      </div>
                      <div className="category-content">
                        <h4><a href="product-details.html">Virtual Product 01</a></h4>
                        <div className="price-box">
                          <div className="regular-price">
                            $150.00
                          </div>
                          <div className="old-price">
                            <del>$180.00</del>
                          </div>
                        </div>
                        <div className="ratings">
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span><i className="fa fa-star" /></span>
                          <div className="pro-review">
                            <span>1 review(s)</span>
                          </div>
                        </div>
                      </div>
                    </div> {/* end single item */}
                  </div> {/* end single item column */}
                  </SwiperSlide>
                  <SwiperButtun/>
                </Swiper>
              </div>
            </div>
            {/* Most viewed area end */}
            {/* Most viewed area start */}
            <div className="col-lg-4">
              <div className="category-wrapper mb-md-24 mb-sm-24">
                <div className="section-title-2 d-flex justify-content-between mb-28">
                  <h3>hot sale</h3>
                  <div className="category-append" />
                </div> {/* section title end */}
                <Swiper loop modules={[Pagination,Autoplay,Navigation]} className="category-carousel-active row" >
                  <SwiperSlide>

                  <div className="col">
                    <div className="category-item">
                      <div className="category-thumb">
                        <a href="product-details.html">
                          <img src="assets/img/product/product-img6.jpg" alt />
                        </a>
                      </div>
                      <div className="category-content">
                        <h4><a href="product-details.html">Virtual Product 01</a></h4>
                        <div className="price-box">
                          <div className="regular-price">
                            $120.00
                          </div>
                          <div className="old-price">
                            <del>$150.00</del>
                          </div>
                        </div>
                        <div className="ratings">
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span><i className="fa fa-star" /></span>
                          <div className="pro-review">
                            <span>1 review(s)</span>
                          </div>
                        </div>
                      </div>
                    </div> {/* end single item */}
                  </div> {/* end single item column */}
                  <div className="col">
                    <div className="category-item">
                      <div className="category-thumb">
                        <a href="product-details.html">
                          <img src="assets/img/product/product-img15.jpg" alt />
                        </a>
                      </div>
                      <div className="category-content">
                        <h4><a href="product-details.html">grouped Product</a></h4>
                        <div className="price-box">
                          <div className="regular-price">
                            $160.00
                          </div>
                          <div className="old-price">
                            <del />
                          </div>
                        </div>
                        <div className="ratings">
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span><i className="fa fa-star" /></span>
                          <div className="pro-review">
                            <span>1 review(s)</span>
                          </div>
                        </div>
                      </div>
                    </div> {/* end single item */}
                  </div> {/* end single item column */}
                  <div className="col">
                    <div className="category-item">
                      <div className="category-thumb">
                        <a href="product-details.html">
                          <img src="assets/img/product/product-img11.jpg" alt />
                        </a>
                      </div>
                      <div className="category-content">
                        <h4><a href="product-details.html">download Product</a></h4>
                        <div className="price-box">
                          <div className="regular-price">
                            $140.00
                          </div>
                          <div className="old-price">
                            <del>$160.00</del>
                          </div>
                        </div>
                        <div className="ratings">
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span><i className="fa fa-star" /></span>
                          <div className="pro-review">
                            <span>1 review(s)</span>
                          </div>
                        </div>
                      </div>
                    </div> {/* end single item */}
                  </div> {/* end single item column */}
                  <div className="col">
                    <div className="category-item">
                      <div className="category-thumb">
                        <a href="product-details.html">
                          <img src="assets/img/product/product-img16.jpg" alt />
                        </a>
                      </div>
                      <div className="category-content">
                        <h4><a href="product-details.html">simple Product 01</a></h4>
                        <div className="price-box">
                          <div className="regular-price">
                            $80.00
                          </div>
                          <div className="old-price">
                            <del>$100.00</del>
                          </div>
                        </div>
                        <div className="ratings">
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span><i className="fa fa-star" /></span>
                          <div className="pro-review">
                            <span>1 review(s)</span>
                          </div>
                        </div>
                      </div>
                    </div> {/* end single item */}
                  </div> {/* end single item column */}
                  </SwiperSlide>
                  <SwiperSlide>

                  <div className="col">
                    <div className="category-item">
                      <div className="category-thumb">
                        <a href="product-details.html">
                          <img src="assets/img/product/product-img15.jpg" alt />
                        </a>
                      </div>
                      <div className="category-content">
                        <h4><a href="product-details.html">affiliate Product</a></h4>
                        <div className="price-box">
                          <div className="regular-price">
                            $120.00
                          </div>
                          <div className="old-price">
                            <del />
                          </div>
                        </div>
                        <div className="ratings">
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span><i className="fa fa-star" /></span>
                          <div className="pro-review">
                            <span>1 review(s)</span>
                          </div>
                        </div>
                      </div>
                    </div> {/* end single item */}
                  </div> {/* end single item column */}
                  <div className="col">
                    <div className="category-item">
                      <div className="category-thumb">
                        <a href="product-details.html">
                          <img src="assets/img/product/product-img1.jpg" alt />
                        </a>
                      </div>
                      <div className="category-content">
                        <h4><a href="product-details.html">external Product</a></h4>
                        <div className="price-box">
                          <div className="regular-price">
                            $130.00
                          </div>
                          <div className="old-price">
                            <del>$140.00</del>
                          </div>
                        </div>
                        <div className="ratings">
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span><i className="fa fa-star" /></span>
                          <div className="pro-review">
                            <span>1 review(s)</span>
                          </div>
                        </div>
                      </div>
                    </div> {/* end single item */}
                  </div> {/* end single item column */}
                  <div className="col">
                    <div className="category-item">
                      <div className="category-thumb">
                        <a href="product-details.html">
                          <img src="assets/img/product/product-img13.jpg" alt />
                        </a>
                      </div>
                      <div className="category-content">
                        <h4><a href="product-details.html">Virtual Product 01</a></h4>
                        <div className="price-box">
                          <div className="regular-price">
                            $150.00
                          </div>
                          <div className="old-price">
                            <del>$180.00</del>
                          </div>
                        </div>
                        <div className="ratings">
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span><i className="fa fa-star" /></span>
                          <div className="pro-review">
                            <span>1 review(s)</span>
                          </div>
                        </div>
                      </div>
                    </div> {/* end single item */}
                  </div> {/* end single item column */}
                  <div className="col">
                    <div className="category-item">
                      <div className="category-thumb">
                        <a href="product-details.html">
                          <img src="assets/img/product/product-img3.jpg" alt />
                        </a>
                      </div>
                      <div className="category-content">
                        <h4><a href="product-details.html">variable Product 01</a></h4>
                        <div className="price-box">
                          <div className="regular-price">
                            $70.00
                          </div>
                          <div className="old-price">
                            <del>$90.00</del>
                          </div>
                        </div>
                        <div className="ratings">
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span className="good"><i className="fa fa-star" /></span>
                          <span><i className="fa fa-star" /></span>
                          <div className="pro-review">
                            <span>1 review(s)</span>
                          </div>
                        </div>
                      </div>
                    </div> {/* end single item */}
                  </div> {/* end single item column */}
                  </SwiperSlide>
                  <SwiperButtun/>
                </Swiper>
              </div>
            </div>
            {/* Most viewed area end */}
          </div>
        </div>
        {/* category features area end */}
      </div>
    </div>
  
  </div>
</div>

      {/* <!-- page wrapper end --> */}
    </>
  )
}
