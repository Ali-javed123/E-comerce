import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Autoplay, Pagination ,Navigation,Scrollbar, A11y} from "swiper/modules";
import { SwiperButtun } from '../globleComponent/SwiperButtun';
export default function Home3Section3() {
  return (
    <>
{/* page wrapper start */}
<div className="main-home-wrapper">
  <div className="container">
    <div className="row">
      <div className="col-lg-3">
        <div className="main-sidebar category-wrapper mb-24 mt-4 mt-md-8 mt-sm-8">
          <div className="section-title-2 d-flex justify-content-between mb-28">
            <h3>best seller</h3>
            <div className="category-append" />
          </div> {/* section title end */}
          <Swiper  loop   autoplay={{
            delay: 2000,
            disableOnInteraction: false
        }}
       modules={[Autoplay,Navigation]} className="category-carousel-active row">
            <SwiperSlide>

            <div className="col">
              <div className="category-item">
                <div className="category-thumb">
                  <a href="product-details.html">
                    <img src="assets/img/product/product-s-1.jpg" alt />
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
                    <img src="assets/img/product/product-s-2.jpg" alt />
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
                    <img src="assets/img/product/product-s-3.jpg" alt />
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
                    <img src="assets/img/product/product-b-1.jpg" alt />
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
                    <img src="assets/img/product/product-b-2.jpg" alt />
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
                    <img src="assets/img/product/product-b-3.jpg" alt />
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
            </SwiperSlide>
            <SwiperSlide>
            <div className="col">
              <div className="category-item">
                <div className="category-thumb">
                  <a href="product-details.html">
                    <img src="assets/img/product/product-b-4.jpg" alt />
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
            <div className="col">
              <div className="category-item">
                <div className="category-thumb">
                  <a href="product-details.html">
                    <img src="assets/img/product/product-f-1.jpg" alt />
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
            <div className="col">
              <div className="category-item">
                <div className="category-thumb">
                  <a href="product-details.html">
                    <img src="assets/img/product/product-s-4.jpg" alt />
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
        {/* best seller area end */}
      </div>
      <div className="col-lg-9">
        {/* banner statistic start */}
        <div className="banner-statistic pt-6 pb-34">
          <div className="img-container fix img-full">
            <a href="#">
              <img src="assets/img/banner/home3_static5.jpg" alt />
            </a>
          </div>
        </div>
        {/* banner statistic end */}
        {/* category tab area start */}
        <div className="category-tab-area mb-30">
          <div className="category-tab">
            <ul className="nav">
              <li>
                <i className="fa fa-flask" />
              </li>
              <li>
                <a className="active" data-toggle="tab" href="#tab_one">featured</a>
              </li>
              <li>
                <a data-toggle="tab" href="#tab_two">new</a>
              </li>
              <li>
                <a data-toggle="tab" href="#tab_three">sale</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="tab-content pb-md-20 pb-sm-20">
          <div className="tab-pane fade show active" id="tab_one">
            <div className="feature-category-carousel-wrapper">
              <Swiper breakpoints={{
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
        }} loop   autoplay={{
            delay: 2000,
            disableOnInteraction: false
        }}
        spaceBetween={10} modules={[Autoplay,Navigation]}  className="featured-carousel-active slick-padding slick-arrow-style arrow-space">

                {/* product single item start */}
                <SwiperSlide>

                <div className="product-item fix">
                  <div className="product-thumb">
                    <a href="product-details.html">
                      <img src="assets/img/product/product-s-1.jpg" className="img-pri" alt />
                      <img src="assets/img/product/product-s-2.jpg" className="img-sec" alt />
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

                {/* product single item start */}

                <div className="product-item fix">
                  <div className="product-thumb">
                    <a href="product-details.html">
                      <img src="assets/img/product/product-s-3.jpg" className="img-pri" alt />
                      <img src="assets/img/product/product-s-4.jpg" className="img-sec" alt />
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
                    <h4><a href="product-details.html">simple product 04</a></h4>
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
                {/* product single item end */}
                </SwiperSlide>
                <SwiperSlide>

                <div className="product-item fix">
                  <div className="product-thumb">
                    <a href="product-details.html">
                      <img src="assets/img/product/product-s-5.jpg" className="img-pri" alt />
                      <img src="assets/img/product/product-s-6.jpg" className="img-sec" alt />
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
                    <h4><a href="product-details.html">grouped product 05</a></h4>
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
                {/* product single item end */}
                {/* product single item start */}
                </SwiperSlide>
                <SwiperSlide>

                <div className="product-item fix">
                  <div className="product-thumb">
                    <a href="product-details.html">
                      <img src="assets/img/product/product-s-6.jpg" className="img-pri" alt />
                      <img src="assets/img/product/product-s-5.jpg" className="img-sec" alt />
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
                    <h4><a href="product-details.html">affiliate product 06</a></h4>
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
                <SwiperSlide>

                <div className="product-item fix">
                  <div className="product-thumb">
                    <a href="product-details.html">
                      <img src="assets/img/product/product-s-2.jpg" className="img-pri" alt />
                      <img src="assets/img/product/product-s-3.jpg" className="img-sec" alt />
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
                <SwiperSlide>

                <div className="product-item fix">
                  <div className="product-thumb">
                    <a href="product-details.html">
                      <img src="assets/img/product/product-s-4.jpg" className="img-pri" alt />
                      <img src="assets/img/product/product-s-6.jpg" className="img-sec" alt />
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
                <SwiperButtun/>
                {/* product single item end */}
                {/* product single item start */}
                {/* product single item end */}
                {/* product single item start */}
                {/* product single item end */}
              </Swiper>
            </div>
          </div>
          <div className="tab-pane fade" id="tab_two">
            <div className="feature-category-carousel-wrapper">
              <Swiper slidesPerView={1}
        loop
        autoplay={{
            delay: 2000,
            disableOnInteraction: false
        }}
        spaceBetween={10}
       
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

        modules={[Autoplay]} className="featured-carousel-active slick-padding slick-arrow-style">
                {/* product single item start */}
                <SwiperSlide>

                <div className="product-item fix">
                  <div className="product-thumb">
                    <a href="product-details.html">
                      <img src="assets/img/product/product-f-1.jpg" className="img-pri" alt />
                      <img src="assets/img/product/product-f-2.jpg" className="img-sec" alt />
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
                <SwiperSlide>

                <div className="product-item fix">
                  <div className="product-thumb">
                    <a href="product-details.html">
                      <img src="assets/img/product/product-f-3.jpg" className="img-pri" alt />
                      <img src="assets/img/product/product-f-4.jpg" className="img-sec" alt />
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
                    <h4><a href="product-details.html">simple product 04</a></h4>
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
                <SwiperSlide>

                <div className="product-item fix">
                  <div className="product-thumb">
                    <a href="product-details.html">
                      <img src="assets/img/product/product-f-2.jpg" className="img-pri" alt />
                      <img src="assets/img/product/product-s-4.jpg" className="img-sec" alt />
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
                    <h4><a href="product-details.html">grouped product 05</a></h4>
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
                <SwiperSlide>

                <div className="product-item fix">
                  <div className="product-thumb">
                    <a href="product-details.html">
                      <img src="assets/img/product/product-f-4.jpg" className="img-pri" alt />
                      <img src="assets/img/product/product-s-2.jpg" className="img-sec" alt />
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
                    <h4><a href="product-details.html">affiliate product 06</a></h4>
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
                <SwiperSlide>
                <div className="product-item fix">
                  <div className="product-thumb">
                    <a href="product-details.html">
                      <img src="assets/img/product/product-f-2.jpg" className="img-pri" alt />
                      <img src="assets/img/product/product-f-3.jpg" className="img-sec" alt />
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
                <SwiperSlide>

                <div className="product-item fix">
                  <div className="product-thumb">
                    <a href="product-details.html">
                      <img src="assets/img/product/product-b-1.jpg" className="img-pri" alt />
                      <img src="assets/img/product/product-b-2.jpg" className="img-sec" alt />
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
                <SwiperButtun/>
              
                {/* product single item end */}
                {/* product single item start */}
                {/* product single item end */}
              </Swiper>
            </div>
          </div>
          <div className="tab-pane fade" id="tab_three">
            <div className="feature-category-carousel-wrapper">
              <Swiper slidesPerView={1}
        loop
        autoplay={{
            delay: 2000,
            disableOnInteraction: false
        }}
        spaceBetween={10}
       
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

        modules={[Autoplay]} className="featured-carousel-active slick-padding slick-arrow-style">
                {/* product single item start */}
                <SwiperSlide>

                <div className="product-item fix">
                  <div className="product-thumb">
                    <a href="product-details.html">
                      <img src="assets/img/product/product-f-1.jpg" className="img-pri" alt />
                      <img src="assets/img/product/product-f-2.jpg" className="img-sec" alt />
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
                <SwiperSlide>

                <div className="product-item fix">
                  <div className="product-thumb">
                    <a href="product-details.html">
                      <img src="assets/img/product/product-f-3.jpg" className="img-pri" alt />
                      <img src="assets/img/product/product-f-4.jpg" className="img-sec" alt />
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
                    <h4><a href="product-details.html">simple product 04</a></h4>
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
                <SwiperSlide>

                <div className="product-item fix">
                  <div className="product-thumb">
                    <a href="product-details.html">
                      <img src="assets/img/product/product-b-2.jpg" className="img-pri" alt />
                      <img src="assets/img/product/product-b-4.jpg" className="img-sec" alt />
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
                    <h4><a href="product-details.html">grouped product 05</a></h4>
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
                <SwiperSlide>

                <div className="product-item fix">
                  <div className="product-thumb">
                    <a href="product-details.html">
                      <img src="assets/img/product/product-f-3.jpg" className="img-pri" alt />
                      <img src="assets/img/product/product-s-1.jpg" className="img-sec" alt />
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
                    <h4><a href="product-details.html">affiliate product 06</a></h4>
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
                <SwiperSlide>

                <div className="product-item fix">
                  <div className="product-thumb">
                    <a href="product-details.html">
                      <img src="assets/img/product/product-b-2.jpg" className="img-pri" alt />
                      <img src="assets/img/product/product-b-3.jpg" className="img-sec" alt />
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
                <SwiperSlide>

                <div className="product-item fix">
                  <div className="product-thumb">
                    <a href="product-details.html">
                      <img src="assets/img/product/product-s-1.jpg" className="img-pri" alt />
                      <img src="assets/img/product/product-s-2.jpg" className="img-sec" alt />
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
                <SwiperButtun/>
              </Swiper>
            </div>
          </div>
        </div>
        {/* category tab area end */}
      </div>
    </div>
  </div>
</div>
{/* page wrapper end */}

    </>
  )
}
