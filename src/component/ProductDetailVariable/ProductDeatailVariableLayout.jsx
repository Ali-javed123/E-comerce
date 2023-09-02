import React,{useState} from 'react'
import { Carousel } from 'react-responsive-carousel';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Autoplay, Pagination ,Navigation} from "swiper/modules";
import { SwiperButtun } from '../globleComponent/SwiperButtun';


export default function ProductDetailLayout() {
    let [num, setNum]= useState(0);
    let incNum =()=>{
      if(num<10)
      {
      setNum(Number(num)+1);
      }
    };
    let decNum = () => {
       if(num>0)
       {
        setNum(num - 1);
       }
    }
   let handleChange = (e)=>{
     setNum(e.target.value);
    }
  return (
<div className="product-details-wrapper">
  <div className="container">
    <div className="row">
      <div className="col-lg-9">
        {/* product details inner end */}
        <div className="product-details-inner">
          <div className="row">

            <div className="col-lg-6">
            <div className='carousel-wrappe'>
<Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div className='pro-large-img img-zoom '>
                    <img src="assets/img/product/product-details-img1.jpg" />
                </div>
                <div className='pro-large-img img-zoom '>
                    <img src="assets/img/product/product-details-img2.jpg" />
                </div>
                <div className='pro-large-img img-zoom '>
                    <img src="assets/img/product/product-details-img3.jpg" />
                </div>
                <div className='pro-large-img img-zoom '>
                    <img src="assets/img/product/product-details-img4.jpg" />
                </div>
            </Carousel>
</div>

              
            </div>
            <div className="col-lg-6">
              <div className="product-details-des mt-md-34 mt-sm-34">
                <h3 className='text-start'> <a href="product-details.html">external product 12</a></h3>
                <div className="ratings">
                  <span className="good"><i className="fa fa-star" /></span>
                  <span className="good"><i className="fa fa-star" /></span>
                  <span className="good"><i className="fa fa-star" /></span>
                  <span className="good"><i className="fa fa-star" /></span>
                  <span><i className="fa fa-star" /></span>
                  <div className="pro-review">
                    <span className='text-start' >1 review(s)</span>
                  </div>
                </div>
                <div className="customer-rev text-start">
                  <a className='text-start' href="#">(1 customer review)</a>
                </div>
                <div className="availability mt-10 text-start">
                  <h5>Availability:</h5>
                  <span>1 in stock</span>
                </div>
                <div className="pricebox text-start">
                  <span className="regular-price">$160.00</span>
                </div>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.<br />
                  Phasellus id nisi quis justo tempus mollis sed et dui. In hac habitasse platea dictumst. Suspendisse ultrices mauris diam. Nullam sed aliquet elit. Mauris consequat nisi ut mauris efficitur lacinia.</p>
                  <div class="color-option mt-10">
                                            <h5>color :</h5>
                                            <ul>
                                                <li>
                                                    <a class="c-black" href="#" title="Black"></a>
                                                    
                                                </li>
                                                <li>
                                                    <a class="c-blue" href="#" title="Blue"></a>
                                                </li>
                                                <li>
                                                    <a class="c-brown" href="#" title="Brown"></a>
                                                </li>
                                                <li>
                                                    <a class="c-gray" href="#" title="Gray"></a>
                                                </li>
                                                <li>
                                                    <a class="c-red" href="#" title="Red"></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="pro-size mb-20 mt-20">
                                            <h5>size :</h5>
                                            <select class="nice-select">
                                                <option>S</option>
                                                <option>M</option>
                                                <option>L</option>
                                                <option>XL</option>
                                            </select>
                                        </div>
                <div className="quantity-cart-box d-flex align-items-center">
                  <div className="quantity">
                    <div className='pro-qty'>

                    <span onClick={decNum} className="dec qtybtn">-</span><input type="text"  value={num} onChange={handleChange} /><span onClick={incNum} className="inc qtybtn">+</span>
                    </div>
                  </div>
                  <div className="action_link">
                    <a className="buy-btn" href="#">add to cart<i className="fa fa-shopping-cart" /></a>
                  </div>
                </div>
                <div className="useful-links mt-20">
                  <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" />compare</a>
                  <a href="#" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="fa fa-heart-o" />wishlist</a>
                </div>
                <div className="share-icon mt-20">
                  <a className="facebook" href="#"><i className="fa fa-facebook" />like</a>
                  <a className="twitter" href="#"><i className="fa fa-twitter" />tweet</a>
                  <a className="pinterest" href="#"><i className="fa fa-pinterest" />save</a>
                  <a className="google" href="#"><i className="fa fa-google-plus" />share</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* product details inner end */}
        {/* product details reviews start */}
        <div className="product-details-reviews mt-34">
          <div className="row">
            <div className="col-lg-12">
              <div className="product-review-info">
                <ul className="nav review-tab">
                  <li>
                    <a className="active" data-toggle="tab" href="#tab_one">description</a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#tab_two">information</a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#tab_three">reviews</a>
                  </li>
                </ul>
                <div className="tab-content reviews-tab">
                  <div className="tab-pane fade show active" id="tab_one">
                    <div className="tab-one">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Ipsum metus feugiat sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue nisi non neque.</p>
                      <div className="review-description">
                        <div className="tab-thumb">
                          <img src="assets/img/about/services.jpg" alt />
                        </div>
                        <div className="tab-des mt-sm-24">
                          <h3>Product Information :</h3>
                          <ul>
                            <li>Donec non est at libero vulputate rutrum.</li>
                            <li>Morbi ornare lectus quis justo gravida semper.</li>
                            <li>Pellentesque aliquet, sem eget laoreet ultrices</li>
                            <li>Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla</li>
                            <li>Donec a neque libero.</li>
                            <li>Pellentesque aliquet, sem eget laoreet ultrices</li>
                            <li>Morbi ornare lectus quis justo gravida semper.</li>
                          </ul>
                        </div>
                      </div>
                      <p>Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam erat mi, rutrum at sollicitudin rhoncus, ultricies posuere erat. Duis convallis, arcu nec aliquam consequat, purus felis vehicula felis, a dapibus enim lorem nec augue. Nunc facilisis sagittis ullamcorper.</p>
                      <p>Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lorem nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eleifend laoreet congue. Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt.</p>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tab_two">
                    <table className="table table-bordered">
                      <tbody>
                        <tr>
                          <td>color</td>
                          <td>black, blue, red</td>
                        </tr>
                        <tr>
                          <td>size</td>
                          <td>L, M, S</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="tab-pane fade" id="tab_three">
                    <form action="#" className="review-form">
                      <h5>1 review for Simple product 12</h5>
                      <div className="total-reviews">
                        <div className="rev-avatar">
                          <img src="assets/img/about/avatar.jpg" alt />
                        </div>
                        <div className="review-box">
                          <div className="ratings">
                            <span className="good"><i className="fa fa-star" /></span>
                            <span className="good"><i className="fa fa-star" /></span>
                            <span className="good"><i className="fa fa-star" /></span>
                            <span className="good"><i className="fa fa-star" /></span>
                            <span><i className="fa fa-star" /></span>
                          </div>
                          <div className="post-author">
                            <p><span>admin -</span> 30 Nov, 2018</p>
                          </div>
                          <p>Aliquam fringilla euismod risus ac bibendum. Sed sit amet sem varius ante feugiat lacinia. Nunc ipsum nulla, vulputate ut venenatis vitae, malesuada ut mi. Quisque iaculis, dui congue placerat pretium, augue erat accumsan lacus</p>
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col">
                          <label className="col-form-label"><span className="text-danger">*</span> Your Name</label>
                          <input type="text" className="form-control" required />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col">
                          <label className="col-form-label"><span className="text-danger">*</span> Your Email</label>
                          <input type="email" className="form-control" required />
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col">
                          <label className="col-form-label"><span className="text-danger">*</span> Your Review</label>
                          <textarea className="form-control" required defaultValue={""} />
                          <div className="help-block pt-10"><span className="text-danger">Note:</span> HTML is not translated!</div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col">
                          <label className="col-form-label"><span className="text-danger">*</span> Rating</label>
                          &nbsp;&nbsp;&nbsp; Bad&nbsp;
                          <input type="radio" defaultValue={1} name="rating" />
                          &nbsp;
                          <input type="radio" defaultValue={2} name="rating" />
                          &nbsp;
                          <input type="radio" defaultValue={3} name="rating" />
                          &nbsp;
                          <input type="radio" defaultValue={4} name="rating" />
                          &nbsp;
                          <input type="radio" defaultValue={5} name="rating" defaultChecked />
                          &nbsp;Good
                        </div>
                      </div>
                      <div className="buttons">
                        <button className="sqr-btn" type="submit">Continue</button>
                      </div>
                    </form> {/* end of review-form */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
        {/* product details reviews end */} 
        {/* related products area start */}
        <div className="related-products-area mt-34">
          <div className="section-title mb-30">
            <div className="title-icon">
              <i className="fa fa-desktop" />
            </div>
            <h3>related products</h3>
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
        spaceBetween={10} modules={[Autoplay,Navigation]}  className="featured-carousel-active slick-padding slick-arrow-style">
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
            </div>
            </SwiperSlide>
            <SwiperSlide>

            <div className="product-item fix">
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
            </div>
            </SwiperSlide>
            <SwiperSlide>

            <div className="product-item fix">
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
            </div>
            </SwiperSlide>
            <SwiperSlide>

            <div className="product-item fix">
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
            </div>
            </SwiperSlide>
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

          </Swiper>
          {/* featured category end */}
        </div>
        {/* related products area end */}
      </div>
      {/* sidebar start */}
      <div className="col-lg-3">
        <div className="shop-sidebar-wrap fix mt-md-22 mt-sm-22">
          {/* featured category start */}
          <div className="sidebar-widget mb-22">
            <div className="section-title-2 d-flex justify-content-between mb-28">
              <h3>featured</h3>
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
          {/* featured category end */}
          {/* manufacturer start */}
          <div className="sidebar-widget mb-22">
            <div className="sidebar-title mb-10">
              <h3>Manufacturers</h3>
            </div>
            <div className="sidebar-widget-body">
              <ul>
                <li><i className="fa fa-angle-right" /><a href="#">calvin klein</a><span>(10)</span></li>
                <li><i className="fa fa-angle-right" /><a href="#">diesel</a><span>(12)</span></li>
                <li><i className="fa fa-angle-right" /><a href="#">polo</a><span>(20)</span></li>
                <li><i className="fa fa-angle-right" /><a href="#">Tommy Hilfiger</a><span>(12)</span></li>
                <li><i className="fa fa-angle-right" /><a href="#">Versace</a><span>(16)</span></li>
              </ul>
            </div>
          </div>
          {/* manufacturer end */}
          {/* product tag start */}
          <div className="sidebar-widget mb-22">
            <div className="sidebar-title mb-20">
              <h3>tag</h3>
            </div>
            <div className="sidebar-widget-body">
              <div className="product-tag">
                <a href="#">camera</a>
                <a href="#">computer</a>
                <a href="#">tablet</a>
                <a href="#">watch</a>
                <a href="#">smart phones</a>
                <a href="#">handbag</a>
                <a href="#">shoe</a>
                <a href="#">men</a>
              </div>
            </div>
          </div>
          {/* product tag end */}
          {/* sidebar banner start */}
          <div className="sidebar-widget mb-22">
            <div className="img-container fix img-full mt-30">
              <a href="#"><img src="assets/img/banner/banner_shop.jpg" alt /></a>
            </div>
          </div>
          {/* sidebar banner end */}
        </div>
      </div>
      {/* sidebar end */}
    </div>
  </div>
</div>

  )
}
