import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Link } from 'react-router-dom';
// import required modules
import { Autoplay, Pagination ,Navigation} from "swiper/modules";
import { SwiperButtun } from '../globleComponent/SwiperButtun';
export default function Home2Section3() {
  return (
    <>
    
{/* page wrapper start */}
<div className="main-home-wrapper">
  <div className="container">
    <div className="row">
      <div className="col-lg-3">
        <div className="main-sidebar category-wrapper mb-24 pt-20 mt-md-8">
          <div className="section-title-2 d-flex justify-content-between mb-28">
            <h3>best seller</h3>
            <div className="category-append" />
          </div> {/* section title end */}
          <Swiper  loop   autoplay={{
            delay: 2000,
            disableOnInteraction: false
        }}
         modules={[Autoplay,Navigation]} className="category-carousel-active row" >
            <SwiperSlide>

            <div className="col">
              <div className="category-item">
                <div className="category-thumb">
                  <Link to="/ProductDetail">
                    <img src="assets/img/product/product-img1.jpg" alt />
                  </Link>
                </div>
                <div className="category-content">
                  <h4><Link to="/ProductDetail">Virtual Product 01</Link></h4>
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
                  <Link to="/ProductDetail">
                    <img src="assets/img/product/product-img2.jpg" alt />
                  </Link>
                </div>
                <div className="category-content">
                  <h4><Link to="/ProductDetail">Virtual Product 01</Link></h4>
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
                  <Link to="/ProductDetail">
                    <img src="assets/img/product/product-img3.jpg" alt />
                  </Link>
                </div>
                <div className="category-content">
                  <h4><Link to="/ProductDetail">Virtual Product 01</Link></h4>
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
                  <Link to="/ProductDetail">
                    <img src="assets/img/product/product-img4.jpg" alt />
                  </Link>
                </div>
                <div className="category-content">
                  <h4><Link to="/ProductDetail">Virtual Product 01</Link></h4>
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
                  <Link to="/ProductDetail">
                    <img src="assets/img/product/product-img5.jpg" alt />
                  </Link>
                </div>
                <div className="category-content">
                  <h4><Link to="/ProductDetail">Virtual Product 01</Link></h4>
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
                  <Link to="/ProductDetail">
                    <img src="assets/img/product/product-img6.jpg" alt />
                  </Link>
                </div>
                <div className="category-content">
                  <h4><Link to="/ProductDetail">Virtual Product 01</Link></h4>
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
                  <Link to="/ProductDetail">
                    <img src="assets/img/product/product-img10.jpg" alt />
                  </Link>
                </div>
                <div className="category-content">
                  <h4><Link to="/ProductDetail">simple Product 01</Link></h4>
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
                  <Link to="/ProductDetail">
                    <img src="assets/img/product/product-img12.jpg" alt />
                  </Link>
                </div>
                <div className="category-content">
                  <h4><Link to="/ProductDetail">external Product 01</Link></h4>
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
                  <Link to="/ProductDetail">
                    <img src="assets/img/product/product-img13.jpg" alt />
                  </Link>
                </div>
                <div className="category-content">
                  <h4><Link to="/ProductDetail">external Product 01</Link></h4>
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
        {/* testimonial area start */}
        <div className="main-sidebar testimonial-area pb-sm-48 mb-lg-34 mb-md-48">
          <div className="section-title-2 mb-28">
            <h3>Clients Say</h3>
          </div> {/* section title end */}
          <Swiper  loop   autoplay={{
            delay: 2000,
            disableOnInteraction: false
        }}
         modules={[Autoplay,Navigation]} className="testimonial-carousel-active slick-dot-style">
            <SwiperSlide>

            <div className="testimonial-item text-center">
              <div className="testimonial-thumb">
                <img src="assets/img/testimonial/team_member1.jpg" alt />
              </div>
              <div className="testimonial-content">
                <h3><Link to="#">Elizabeth Taylor</Link></h3>
                <p>Etiam rhoncus congue arcu sed interdum. Cras dolor diam, accumsan eu aliquam eu, luctus vehicula velit. Nam eget tortor ut felis fermentum sodales ac eu lacus</p>
              </div>
            </div> {/* end single testimonial item */}
            </SwiperSlide>
            <SwiperSlide>

            <div className="testimonial-item text-center">
              <div className="testimonial-thumb">
                <img src="assets/img/testimonial/team_member2.jpg" alt />
              </div>
              <div className="testimonial-content">
                <h3><Link to="#">Elizabeth Taylor</Link></h3>
                <p>Etiam rhoncus congue arcu sed interdum. Cras dolor diam, accumsan eu aliquam eu, luctus vehicula velit. Nam eget tortor ut felis fermentum sodales ac eu lacus</p>
              </div>
            </div> {/* end single testimonial item */}
            </SwiperSlide>
            <SwiperSlide>

            <div className="testimonial-item text-center">
              <div className="testimonial-thumb">
                <img src="assets/img/testimonial/team_member3.jpg" alt />
              </div>
              <div className="testimonial-content">
                <h3><Link to="#">Elizabeth Taylor</Link></h3>
                <p>Etiam rhoncus congue arcu sed interdum. Cras dolor diam, accumsan eu aliquam eu, luctus vehicula velit. Nam eget tortor ut felis fermentum sodales ac eu lacus</p>
              </div>
            </div> {/* end single testimonial item */}
            </SwiperSlide>
            <SwiperButtun/>
          </Swiper>
        </div>
        {/* testimonial area end */}
      </div>
      <div className="col-lg-9">
        {/* banner statistic start */}
        <div className="banner-statistic pt-22 pb-36">
          <div className="img-container fix img-full">
            <Link to="#">
              <img src="assets/img/banner/banner_static1.jpg" alt />
            </Link>
          </div>
        </div>
        {/* banner statistic end */}
        {/* featured category area start */}
        <div className="feature-category-area">
          <div className="section-title mb-30">
            <div className="title-icon">
              <i className="fa fa-bookmark" />
            </div>
            <h3>featured</h3>
          </div> {/* section title end */}
          {/* featured category start */}
          <div className="container">
            <Swiper       loop={true}
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
            slidesPerView: 3,
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
        }} className="featured-carousel-active2 row slick-arrow-style" data-row={2}>
              {/* product single item start */}
              <SwiperSlide>
                
              <div className="col">
                <div className="product-item fix mb-30">
                  <div className="product-thumb">
                    <Link to="/ProductDetail">
                      <img src="assets/img/product/product-img1.jpg" className="img-pri" alt />
                      <img src="assets/img/product/product-img2.jpg" className="img-sec" alt />
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
                    <h4><Link to="/ProductDetail">affiliate product</Link></h4>
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
              </div>
           
              </SwiperSlide>
              <SwiperSlide>
              <div className="col">
                <div className="product-item fix mb-30">
                  <div className="product-thumb">
                    <Link to="/ProductDetail">
                      <img src="assets/img/product/product-img3.jpg" className="img-pri" alt />
                      <img src="assets/img/product/product-img4.jpg" className="img-sec" alt />
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
                    <h4><Link to="/ProductDetail">simple product 01</Link></h4>
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
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="col">
                <div className="product-item fix mb-30">
                  <div className="product-thumb">
                    <Link to="/ProductDetail">
                      <img src="assets/img/product/product-img5.jpg" className="img-pri" alt />
                      <img src="assets/img/product/product-img6.jpg" className="img-sec" alt />
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
                    <h4><Link to="/ProductDetail">vertual product</Link></h4>
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
              </div>
              </SwiperSlide>
              <SwiperSlide>

              {/* product single item start */}
              <div className="col">
                <div className="product-item fix mb-30">
                  <div className="product-thumb">
                    <Link to="/ProductDetail">
                      <img src="assets/img/product/product-img7.jpg" className="img-pri" alt />
                      <img src="assets/img/product/product-img8.jpg" className="img-sec" alt />
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
                    <h4><Link to="/ProductDetail">grouped product</Link></h4>
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
                </div>
              </div>
              {/* product single item end */}
              {/* product single item start */}
            
              {/* product single item end */}
              {/* product single item start */}
              {/* product single item end */}
              </SwiperSlide>
              <SwiperSlide>
              <div className="col">
                <div className="product-item fix mb-30">
                  <div className="product-thumb">
                    <Link to="/ProductDetail">
                      <img src="assets/img/product/product-img9.jpg" className="img-pri" alt />
                      <img src="assets/img/product/product-img10.jpg" className="img-sec" alt />
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
                    <h4><Link to="/ProductDetail">simple product 10</Link></h4>
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
              </div>
              </SwiperSlide>
              <SwiperSlide>

              <div className="col">
                <div className="product-item fix mb-30">
                  <div className="product-thumb">
                    <Link to="/ProductDetail">
                      <img src="assets/img/product/product-img11.jpg" className="img-pri" alt />
                      <img src="assets/img/product/product-img12.jpg" className="img-sec" alt />
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
                    <h4><Link to="/ProductDetail">affiliate product</Link></h4>
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
              </div>
              </SwiperSlide>
              <SwiperSlide>

             
              {/* product single item end */}
              {/* product single item start */}
          
              {/* product single item end */}
              {/* product single item start */}
              <div className="col">
                <div className="product-item fix mb-30">
                  <div className="product-thumb">
                    <Link to="/ProductDetail">
                      <img src="assets/img/product/product-img15.jpg" className="img-pri" alt />
                      <img src="assets/img/product/product-img16.jpg" className="img-sec" alt />
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
                    <h4><Link to="/ProductDetail">simple product 10</Link></h4>
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
              </div>
          
              </SwiperSlide>
              <SwiperSlide>
              <div className="col">
                <div className="product-item fix mb-30">
                  <div className="product-thumb">
                    <Link to="/ProductDetail">
                      <img src="assets/img/product/product-img13.jpg" className="img-pri" alt />
                      <img src="assets/img/product/product-img14.jpg" className="img-sec" alt />
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
                    <h4><Link to="/ProductDetail">affiliate product</Link></h4>
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
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="col">
                <div className="product-item fix mb-30">
                  <div className="product-thumb">
                    <Link to="/ProductDetail">
                      <img src="assets/img/product/product-img11.jpg" className="img-pri" alt />
                      <img src="assets/img/product/product-img12.jpg" className="img-sec" alt />
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
                    <h4><Link to="/ProductDetail">simple product 10</Link></h4>
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
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className="col">
                <div className="product-item fix mb-30">
                  <div className="product-thumb">
                    <Link to="/ProductDetail">
                      <img src="assets/img/product/product-img6.jpg" className="img-pri" alt />
                      <img src="assets/img/product/product-img8.jpg" className="img-sec" alt />
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
                    <h4><Link to="/ProductDetail">affiliate product</Link></h4>
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
          {/* featured category end */}
        </div>
        {/* featured category area end */}
      </div>
    </div>
  </div>
</div>
{/* page wrapper end */}

    
    </>
  )
}
