import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Autoplay, Pagination ,Navigation} from "swiper/modules";
import { SwiperButtun } from '../globleComponent/SwiperButtun';
export default function Home3Section5() {
  return (
    <>
    
{/* page wrapper start */}
{/* blog-testimonial-product area start */}
<div className="section">
  <div className="container">
    <div className="row">
      {/* blog area start */}
      <div className="col-lg-3">
        <div className="main-sidebar blog-area mb-24 mb-md-20 mb-sm-18">
          <div className="section-title-2 d-flex justify-content-between mb-28">
            <h3>latest blog</h3>
            <div className="category-append" />
          </div> {/* section title end */}
          <Swiper  loop   autoplay={{
            delay: 2000,
            disableOnInteraction: false
        }}
  modules={[Autoplay,Navigation]}  className="blog-carousel-active">
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
                <p>Curabitur sed diam enim. Sed varius faucibus lectus, a scelerisque</p>
              </div>
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
                <p>Curabitur sed diam enim. Sed varius faucibus lectus, a scelerisque</p>
              </div>
            </div> {/* end single blog item */}
            </SwiperSlide>
            <SwiperButtun/>
          </Swiper>
        </div>
      </div>
      {/* blog area end */}
      {/* testimonial area start */}
      <div className="col-lg-3">
        <div className="testimonial-area pb-md-64 pb-sm-64">
          <div className="section-title-2 mb-28">
            <h3>Clients Say</h3>
          </div> {/* section title end */}
          <Swiper loop   autoplay={{
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
                <h3><a href="#">Elizabeth Taylor</a></h3>
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
                <h3><a href="#">Elizabeth Taylor</a></h3>
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
                <h3><a href="#">Elizabeth Taylor</a></h3>
                <p>Etiam rhoncus congue arcu sed interdum. Cras dolor diam, accumsan eu aliquam eu, luctus vehicula velit. Nam eget tortor ut felis fermentum sodales ac eu lacus</p>
              </div>
            </div> {/* end single testimonial item */}
    </SwiperSlide>
    <SwiperButtun/>
          </Swiper>
        </div>
      </div>
      {/* testimonial area end */}
      {/* most view area start */}
      <div className="col-lg-3">
        <div className="mostview-wrap">
          <div className="section-title-2 d-flex justify-content-between mb-28">
            <h3>Most viewed</h3>
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
                    <img src="assets/img/product/product-f-1.jpg" alt />
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
                    <img src="assets/img/product/product-f-2.jpg" alt />
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
    </SwiperSlide>
    <SwiperSlide>
            <div className="col">
              <div className="category-item">
                <div className="category-thumb">
                  <a href="product-details.html">
                    <img src="assets/img/product/product-f-3.jpg" alt />
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

            <div className="col">
              <div className="category-item">
                <div className="category-thumb">
                  <a href="product-details.html">
                    <img src="assets/img/product/product-f-4.jpg" alt />
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
                    <img src="assets/img/product/product-s-1.jpg" alt />
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
          <Swiper  loop   autoplay={{
            delay: 2000,
            disableOnInteraction: false
        }}
  modules={[Autoplay,Navigation]} className="category-carousel-active row" >
    <SwiperSlide>

            <div className="col">
              <div className="category-item">
                <div className="category-thumb">
                  <a href="product-details.html">
                    <img src="assets/img/product/product-s-1.jpg" alt />
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
                    <img src="assets/img/product/product-s-2.jpg" alt />
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

    </SwiperSlide>
    <SwiperSlide>

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
                    <img src="assets/img/product/product-s-5.jpg" alt />
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
        {/* end single item column */}
    </SwiperSlide>
    <SwiperSlide>
             <div className="col">
              <div className="category-item">
                <div className="category-thumb">
                  <a href="product-details.html">
                    <img src="assets/img/product/product-s-6.jpg" alt />
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
            </div>
            <div className="col">
              <div className="category-item">
                <div className="category-thumb">
                  <a href="product-details.html">
                    <img src="assets/img/product/product-s-3.jpg" alt />
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
    <SwiperButtun/>
          </Swiper>
        </div>
      </div>
      {/* hot sale area end */}
    </div>
  </div>
</div>
{/* blog-testimonial-product area end */}

{/* page wrapper end */}


    </>
  )
}
