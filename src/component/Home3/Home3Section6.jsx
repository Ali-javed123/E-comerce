import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Autoplay, Pagination ,Navigation} from "swiper/modules";
import { SwiperButtun } from '../globleComponent/SwiperButtun';
export default function Home3Section6() {
  return (
    <>
{/* latest product start */}
<div className="latest-product pt-md-30 pt-lg-30 pt-sm-30">
  <div className="container">
    <div className="section-title mb-30">
      <div className="title-icon">
        <i className="fa fa-flash" />
      </div>
      <h3>latest product</h3>
    </div> {/* section title end */}
    {/* featured category start */}
    <Swiper loop breakpoints={{
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
        }}    autoplay={{
            delay: 2000,
            disableOnInteraction: false
        }}
  modules={[Autoplay,Navigation,Pagination]}  className="latest-product-active slick-padding slick-arrow-style">
        <SwiperSlide>

      {/* product single item start */}
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
      {/* product single item end */}
        </SwiperSlide>
        <SwiperSlide>

      {/* product single item start */}
      <div className="product-item fix">
        <div className="product-thumb">
          <a href="product-details.html">
            <img src="assets/img/product/product-s-1.jpg" className="img-pri" alt />
            <img src="assets/img/product/product-s-2.jpg" className="img-sec" alt />
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

      {/* product single item start */}
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

        </SwiperSlide>
        <SwiperSlide>

      {/* product single item start */}
      <div className="product-item fix">
        <div className="product-thumb">
          <a href="product-details.html">
            <img src="assets/img/product/product-b-1.jpg" className="img-pri" alt />
            <img src="assets/img/product/product-b-2.jpg" className="img-sec" alt />
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
      {/* product single item end */}
        </SwiperSlide>
        <SwiperSlide>

      {/* product single item start */}
      <div className="product-item fix">
        <div className="product-thumb">
          <a href="product-details.html">
            <img src="assets/img/product/product-s-3.jpg" className="img-pri" alt />
            <img src="assets/img/product/product-s-4.jpg" className="img-sec" alt />
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
      {/* product single item end */}
        </SwiperSlide>
        <SwiperSlide>

      {/* product single item start */}
      <div className="product-item fix">
        <div className="product-thumb">
          <a href="product-details.html">
            <img src="assets/img/product/product-s-5.jpg" className="img-pri" alt />
            <img src="assets/img/product/product-s-6.jpg" className="img-sec" alt />
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
      {/* product single item end */}
        </SwiperSlide>
        <SwiperButtun/>
    </Swiper>
    {/* featured category end */}
  </div>
</div>
{/* latest product end */}

    </>
  )
}
