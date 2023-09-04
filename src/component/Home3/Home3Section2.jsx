import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Link } from 'react-router-dom';

// import required modules
import { Autoplay, Pagination ,Navigation} from "swiper/modules";
import { SwiperButtun } from '../globleComponent/SwiperButtun';
export default function Home3Section2() {
  return (
    <>
{/* product wrapper area strat */}
<div className="product-feature-wrapper mb-lg-6">
  <div className="container">
    <div className="row">
      {/* hot deals area start */}
      <div className="col-lg-6">
        <div className="hot-deals-wrap3 mb-30 mb-md-36 mb-sm-22 mt-xs-28">
          <div className="section-title-2 d-flex justify-content-between mb-28">
            <h3>hot deals</h3>
            <div className="category-append" />
          </div> {/* section title end */}
          <Swiper   breakpoints={{
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
        }} loop   autoplay={{
            delay: 2000,
            disableOnInteraction: false
        }}
        spaceBetween={10} modules={[Autoplay,Navigation]} className="deals-carousel-active2 slick-padding slick-arrow-style">
            <SwiperSlide>

            <div className="product-item fix">
              <div className="product-thumb">
                <Link to="/ProductDetaill">
                  <img src="assets/img/product/product-f-1.jpg" className="img-pri" alt />
                  <img src="assets/img/product/product-f-2.jpg" className="img-sec" alt />
                </Link>
                <div className="product-label">
                  <span>hot</span>
                </div>
                <div className="product-action-link">
                  <Link to="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" data-placement="left" title="Quick view"><i className="fa fa-search" /></span> </Link>
                  <Link to="#" data-toggle="tooltip" data-placement="left" title="Wishlist"><i className="fa fa-heart-o" /></Link>
                  <Link to="#" data-toggle="tooltip" data-placement="left" title="Compare"><i className="fa fa-refresh" /></Link>
                  <Link to="#" data-toggle="tooltip" data-placement="left" title="Add to cart"><i className="fa fa-shopping-cart" /></Link>
                </div>
              </div>
              <div className="product-content">
                <h4><Link to="/ProductDetaill">vertual product 01</Link></h4>
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
                <Link to="/ProductDetaill">
                  <img src="assets/img/product/product-f-3.jpg" className="img-pri" alt />
                  <img src="assets/img/product/product-f-4.jpg" className="img-sec" alt />
                </Link>
                <div className="product-label">
                  <span>hot</span>
                </div>
                <div className="product-action-link">
                  <Link to="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" data-placement="left" title="Quick view"><i className="fa fa-search" /></span> </Link>
                  <Link to="#" data-toggle="tooltip" data-placement="left" title="Wishlist"><i className="fa fa-heart-o" /></Link>
                  <Link to="#" data-toggle="tooltip" data-placement="left" title="Compare"><i className="fa fa-refresh" /></Link>
                  <Link to="#" data-toggle="tooltip" data-placement="left" title="Add to cart"><i className="fa fa-shopping-cart" /></Link>
                </div>
              </div>
              <div className="product-content">
                <h4><Link to="/ProductDetaill">vertual product 01</Link></h4>
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
                <Link to="/ProductDetaill">
                  <img src="assets/img/product/product-f-2.jpg" className="img-pri" alt />
                  <img src="assets/img/product/product-f-1.jpg" className="img-sec" alt />
                </Link>
                <div className="product-label">
                  <span>hot</span>
                </div>
                <div className="product-action-link">
                  <Link to="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" data-placement="left" title="Quick view"><i className="fa fa-search" /></span> </Link>
                  <Link to="#" data-toggle="tooltip" data-placement="left" title="Wishlist"><i className="fa fa-heart-o" /></Link>
                  <Link to="#" data-toggle="tooltip" data-placement="left" title="Compare"><i className="fa fa-refresh" /></Link>
                  <Link to="#" data-toggle="tooltip" data-placement="left" title="Add to cart"><i className="fa fa-shopping-cart" /></Link>
                </div>
              </div>
              <div className="product-content">
                <h4><Link to="/ProductDetaill">vertual product 01</Link></h4>
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
            <SwiperButtun/>
            {/* product single item start */}
            {/* product single item end */}
            {/* product single item start */}
            {/* product single item end */}
            {/* product single item start */}
            {/* product single item end */}
          </Swiper>
        </div>
      </div>
      {/* hot deals area end */}
      {/* most view area start */}
      <div className="col-lg-6">
        <div className="hot-deals-wrap3 mb-30 mb-md-22 mb-sm-22 mt-sm-14">
          <div className="section-title-2 d-flex justify-content-between mb-28">
            <h3>featured</h3>
            <div className="category-append" />
          </div> {/* section title end */}
          <Swiper  breakpoints={{
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
        }} loop   autoplay={{
            delay: 2000,
            disableOnInteraction: false
        }}
        Navigation={true}
        
    modules={[Autoplay,Navigation]} className="deals-carousel-active2 slick-padding slick-arrow-style">
            {/* product single item start */}
            <SwiperSlide>

            <div className="product-item fix">
              <div className="product-thumb">
                <Link to="/ProductDetaill">
                  <img src="assets/img/product/product-s-5.jpg" className="img-pri" alt />
                  <img src="assets/img/product/product-s-6.jpg" className="img-sec" alt />
                </Link>
                <div className="product-label">
                  <span>hot</span>
                </div>
                <div className="product-action-link">
                  <Link to="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" data-placement="left" title="Quick view"><i className="fa fa-search" /></span> </Link>
                  <Link to="#" data-toggle="tooltip" data-placement="left" title="Wishlist"><i className="fa fa-heart-o" /></Link>
                  <Link to="#" data-toggle="tooltip" data-placement="left" title="Compare"><i className="fa fa-refresh" /></Link>
                  <Link to="#" data-toggle="tooltip" data-placement="left" title="Add to cart"><i className="fa fa-shopping-cart" /></Link>
                </div>
              </div>
              <div className="product-content">
                <h4><Link to="/ProductDetaill">vertual product 01</Link></h4>
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
                <Link to="/ProductDetaill">
                  <img src="assets/img/product/product-s-3.jpg" className="img-pri" alt />
                  <img src="assets/img/product/product-s-4.jpg" className="img-sec" alt />
                </Link>
                <div className="product-label">
                  <span>hot</span>
                </div>
                <div className="product-action-link">
                  <Link to="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" data-placement="left" title="Quick view"><i className="fa fa-search" /></span> </Link>
                  <Link to="#" data-toggle="tooltip" data-placement="left" title="Wishlist"><i className="fa fa-heart-o" /></Link>
                  <Link to="#" data-toggle="tooltip" data-placement="left" title="Compare"><i className="fa fa-refresh" /></Link>
                  <Link to="#" data-toggle="tooltip" data-placement="left" title="Add to cart"><i className="fa fa-shopping-cart" /></Link>
                </div>
              </div>
              <div className="product-content">
                <h4><Link to="/ProductDetaill">vertual product 01</Link></h4>
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
                <Link to="/ProductDetaill">
                  <img src="assets/img/product/product-s-1.jpg" className="img-pri" alt />
                  <img src="assets/img/product/product-s-2.jpg" className="img-sec" alt />
                </Link>
                <div className="product-label">
                  <span>hot</span>
                </div>
                <div className="product-action-link">
                  <Link to="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" data-placement="left" title="Quick view"><i className="fa fa-search" /></span> </Link>
                  <Link to="#" data-toggle="tooltip" data-placement="left" title="Wishlist"><i className="fa fa-heart-o" /></Link>
                  <Link to="#" data-toggle="tooltip" data-placement="left" title="Compare"><i className="fa fa-refresh" /></Link>
                  <Link to="#" data-toggle="tooltip" data-placement="left" title="Add to cart"><i className="fa fa-shopping-cart" /></Link>
                </div>
              </div>
              <div className="product-content">
                <h4><Link to="/ProductDetaill">vertual product 01</Link></h4>
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
            <SwiperButtun/>
            {/* product single item end */}
            {/* product single item start */}
            {/* product single item end */}
          </Swiper>
        </div>
      </div>
      {/* most view area end */}
    </div>
  </div>
</div>
{/* product wrapper area end */}
 
    </>
  )
}
