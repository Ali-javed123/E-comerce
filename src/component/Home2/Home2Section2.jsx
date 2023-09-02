import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Autoplay, Pagination ,Navigation} from "swiper/modules";
import { SwiperButtun } from '../globleComponent/SwiperButtun';
export default function Home2Section2() {
  return (
    <>
{/* product wrapper area strat */}
<div className="product-feature-wrapper mb-lg-6">
  <div className="container">
    <div className="row">
      {/* hot deals area start */}
      <div className="col-lg-6">
        <div className="hot-deals-wrap2 mb-30 mb-md-22 mb-sm-22 mt-xs-28">
          <div className="section-title-2 d-flex justify-content-between mb-28">
            <h3>hot deals</h3>
            <div className="category-append" />
          </div> {/* section title end */}
          <Swiper  slidesPerView={1}
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
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}

        modules={[Pagination,Autoplay,Navigation]}  className="deals-carousel-active2 slick-padding">
            {/* product single item start */}
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
            {/* product single item end */}
            {/* product single item start */}
          
            </SwiperSlide>
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
            {/* product single item start */}
            {/* product single item end */}
          </Swiper>
        </div>
      </div>
      {/* hot deals area end */}
      {/* most view area start */}
      <div className="col-lg-3">
        <div className="mostview-wrap">
          <div className="section-title-2 d-flex justify-content-between mb-28">
            <h3>Most viewed</h3>
            <div className="category-append" />
          </div> {/* section title end */}
          <Swiper loop={true}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false
        }} modules={[Pagination,Autoplay,Navigation]} className="category-carousel-active row" >
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
                  <h4><a href="product-details.html">simple Product 01</a></h4>
                  <div className="price-box">
                    <div className="regular-price">
                      $100.00
                    </div>
                    <div className="old-price">
                      <del>$110.00</del>
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
                  <h4><a href="product-details.html">smart Product 10</a></h4>
                  <div className="price-box">
                    <div className="regular-price">
                      $210.00
                    </div>
                    <div className="old-price">
                      <del>$260.00</del>
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
            <div className="col">
              <div className="category-item">
                <div className="category-thumb">
                  <a href="product-details.html">
                    <img src="assets/img/product/product-img5.jpg" alt />
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
            </SwiperSlide>
            <SwiperSlide>

            <div className="col">
              <div className="category-item">
                <div className="category-thumb">
                  <a href="product-details.html">
                    <img src="assets/img/product/product-img14.jpg" alt />
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
                    <img src="assets/img/product/product-img15.jpg" alt />
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
                    <img src="assets/img/product/product-img16.jpg" alt />
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
      {/* most view area end */}
      {/* hot sale area start */}
      <div className="col-lg-3">
        <div className="hotsale-wrap mt-md-22 mt-sm-22">
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
                    <img src="assets/img/product/product-img7.jpg" alt />
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
                    <img src="assets/img/product/product-img8.jpg" alt />
                  </a>
                </div>
                <div className="category-content">
                  <h4><a href="product-details.html">group Product 01</a></h4>
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
                    <img src="assets/img/product/product-img9.jpg" alt />
                  </a>
                </div>
                <div className="category-content">
                  <h4><a href="product-details.html">trend Product 01</a></h4>
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
                    <img src="assets/img/product/product-img10.jpg" alt />
                  </a>
                </div>
                <div className="category-content">
                  <h4><a href="product-details.html">Virtual Product 01</a></h4>
                  <div className="price-box">
                    <div className="regular-price">
                      $120.00
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
                    <img src="assets/img/product/product-img11.jpg" alt />
                  </a>
                </div>
                <div className="category-content">
                  <h4><a href="product-details.html">smart Product 01</a></h4>
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
                    <img src="assets/img/product/product-img12.jpg" alt />
                  </a>
                </div>
                <div className="category-content">
                  <h4><a href="product-details.html">Virtual Product 01</a></h4>
                  <div className="price-box">
                    <div className="regular-price">
                      $120.00
                    </div>
                    <div className="old-price">
                      <del>$130.00</del>
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
                  <h4><a href="product-details.html">trend Product 01</a></h4>
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
                  <h4><a href="product-details.html">Virtual Product 01</a></h4>
                  <div className="price-box">
                    <div className="regular-price">
                      $120.00
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
                  <h4><a href="product-details.html">Virtual Product 01</a></h4>
                  <div className="price-box">
                    <div className="regular-price">
                      $120.00
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
      </div>
      {/* hot sale area end */}
    </div>
  </div>
</div>
{/* product wrapper area end */}

    </>
  )
}
