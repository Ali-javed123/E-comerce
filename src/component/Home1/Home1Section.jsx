import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Autoplay, Pagination ,Navigation} from "swiper/modules";
export default function Home1Section() {
  return (
    <>
  {/* latest product start */}
<div className="latest-product">
  <div className="container">
    <div className="section-title mb-30">
      <div className="title-icon">
        <i className="fa fa-flash" />
      </div>
      <h3>latest product</h3>
    </div> {/* section title end */}
    {/* featured category start */}
    {/* <div className="latest-product-active slick-padding slick-arrow-style"> */}
      {/* product single item start */}
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
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}

        modules={[Pagination,Autoplay]} 
    className="">
        <SwiperSlide>

      <div className="product-item fix">
        <div className="product-thumb">
          <Link to="/ProductDetail">
            <img width={"100%"} style={{height:"30vh"}} src="assets/img/product/product-img1.jpg" className="img-pri" alt />
            <img width={"100%"} style={{height:"30vh"}} src="assets/img/product/product-img2.jpg" className="img-sec" alt />
          </Link>
          <div className="product-label">
            <span>hot</span>
          </div>
          <div className="product-action-link">
            <a href="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" data-placement="left" title="Quick view"><i className="fa fa-search" /></span>
            </a>
            <a href="#" data-toggle="tooltip" data-placement="left" title="Wishlist"><i className="fa fa-heart-o" /></a>
            <a href="#" data-toggle="tooltip" data-placement="left" title="Compare"><i className="fa fa-refresh" /></a>
            <a href="#" data-toggle="tooltip" data-placement="left" title="Add to cart"><i className="fa fa-shopping-cart" /></a>
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
            <img width={"100%"} style={{height:"30vh"}} src="assets/img/product/product-img3.jpg" className="img-pri" alt />
            <img width={"100%"} style={{height:"30vh"}} src="assets/img/product/product-img4.jpg" className="img-sec" alt />
          </Link>
          <div className="product-label">
            <span>hot</span>
          </div>
          <div className="product-action-link">
            <a href="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" data-placement="left" title="Quick view"><i className="fa fa-search" /></span>
            </a>
            <a href="#" data-toggle="tooltip" data-placement="left" title="Wishlist"><i className="fa fa-heart-o" /></a>
            <a href="#" data-toggle="tooltip" data-placement="left" title="Compare"><i className="fa fa-refresh" /></a>
            <a href="#" data-toggle="tooltip" data-placement="left" title="Add to cart"><i className="fa fa-shopping-cart" /></a>
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
            <img width={"100%"} style={{height:"30vh"}} src="assets/img/product/product-img5.jpg" className="img-pri" alt />
            <img width={"100%"} style={{height:"30vh"}} src="assets/img/product/product-img6.jpg" className="img-sec" alt />
          </Link>
          <div className="product-label">
            <span>hot</span>
          </div>
          <div className="product-action-link">
            <a href="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" data-placement="left" title="Quick view"><i className="fa fa-search" /></span>
            </a>
            <a href="#" data-toggle="tooltip" data-placement="left" title="Wishlist"><i className="fa fa-heart-o" /></a>
            <a href="#" data-toggle="tooltip" data-placement="left" title="Compare"><i className="fa fa-refresh" /></a>
            <a href="#" data-toggle="tooltip" data-placement="left" title="Add to cart"><i className="fa fa-shopping-cart" /></a>
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
            <img width={"100%"} style={{height:"30vh"}} src="assets/img/product/product-img7.jpg" className="img-pri" alt />
            <img width={"100%"} style={{height:"30vh"}} src="assets/img/product/product-img8.jpg" className="img-sec" alt />
          </Link>
          <div className="product-label">
            <span>hot</span>
          </div>
          <div className="product-action-link">
            <a href="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" data-placement="left" title="Quick view"><i className="fa fa-search" /></span>
            </a>
            <a href="#" data-toggle="tooltip" data-placement="left" title="Wishlist"><i className="fa fa-heart-o" /></a>
            <a href="#" data-toggle="tooltip" data-placement="left" title="Compare"><i className="fa fa-refresh" /></a>
            <a href="#" data-toggle="tooltip" data-placement="left" title="Add to cart"><i className="fa fa-shopping-cart" /></a>
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
            <img width={"100%"} style={{height:"30vh"}} src="assets/img/product/product-img9.jpg" className="img-pri" alt />
            <img width={"100%"} style={{height:"30vh"}} src="assets/img/product/product-img10.jpg" className="img-sec" alt />
          </Link>
          <div className="product-label">
            <span>hot</span>
          </div>
          <div className="product-action-link">
            <a href="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" data-placement="left" title="Quick view"><i className="fa fa-search" /></span>
            </a>
            <a href="#" data-toggle="tooltip" data-placement="left" title="Wishlist"><i className="fa fa-heart-o" /></a>
            <a href="#" data-toggle="tooltip" data-placement="left" title="Compare"><i className="fa fa-refresh" /></a>
            <a href="#" data-toggle="tooltip" data-placement="left" title="Add to cart"><i className="fa fa-shopping-cart" /></a>
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
            <img width={"100%"} style={{height:"30vh"}} src="assets/img/product/product-img11.jpg" className="img-pri" alt />
            <img  width={"100%"} style={{height:"30vh"}} src="assets/img/product/product-img12.jpg" className="img-sec" alt />
          </Link>
          <div className="product-label">
            <span>hot</span>
          </div>
          <div className="product-action-link">
            <a href="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" data-placement="left" title="Quick view"><i className="fa fa-search" /></span>
            </a>
            <a href="#" data-toggle="tooltip" data-placement="left" title="Wishlist"><i className="fa fa-heart-o" /></a>
            <a href="#" data-toggle="tooltip" data-placement="left" title="Compare"><i className="fa fa-refresh" /></a>
            <a href="#" data-toggle="tooltip" data-placement="left" title="Add to cart"><i className="fa fa-shopping-cart" /></a>
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
    </Swiper>
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
    {/* </div> */}





    {/* featured category end */}
  </div>
</div>
{/* latest product end */}

    </>
  )
}
