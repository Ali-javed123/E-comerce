import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Link } from 'react-router-dom';
// import required modules
import { Autoplay, Pagination ,Navigation} from "swiper/modules";
import { SwiperButtun } from '../globleComponent/SwiperButtun';
export default function Home2Section4() {
  return (
    <>
    
{/* latest product start */}
<div className="latest-product latest-pro-2 pt-14 pt-lg-0 pt-md-0 pt-sm-0">
  <div className="container">
    <div className="section-title mb-30">
      <div className="title-icon">
        <i className="fa fa-flash" />
      </div>
      <h3>latest product</h3>
    </div> {/* section title end */}
    {/* featured category start */}
    <Swiper   breakpoints={{
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
        spaceBetween={10} modules={[Autoplay,Navigation]} className="latest-product-active slick-padding slick-arrow-style">
      {/* product single item start */}
      <SwiperSlide>

      <div className="product-item fix">
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
          <h4><Link to="/ProductDetail">vertual product 01</Link></h4>
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
          <h4><Link to="/ProductDetail">simple product 04</Link></h4>
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
          <h4><Link to="/ProductDetail">grouped product 05</Link></h4>
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
          <h4><Link to="/ProductDetail">affiliate product 06</Link></h4>
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
          <h4><Link to="/ProductDetail">vertual product 01</Link></h4>
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
          <h4><Link to="/ProductDetail">simple product 01</Link></h4>
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
      {/* product single item start */}
      {/* product single item end */}
      {/* product single item start */}
      {/* product single item end */}
      {/* product single item start */}
      {/* product single item end */}
    </Swiper>
    {/* featured category end */}
  </div>
</div>
{/* latest product end */}

    </>
  )
}
