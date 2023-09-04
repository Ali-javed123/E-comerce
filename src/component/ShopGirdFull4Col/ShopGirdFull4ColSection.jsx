import React,{useState} from 'react'
import { NavLink,Link } from 'react-router-dom'
export default function ShopGirdFull4ColSection() {
    const [mode,setmode]=useState("")

  return (
<div className="page-main-wrapper">
  <div className="container">
    <div className="row">
      {/* product main wrap start */}
      <div className="col-12">
        <div className="shop-banner img-full">
          <img src="assets/img/banner/banner_static1.jpg" alt />
        </div>
        {/* product view wrapper area start */}
        <div className="shop-product-wrapper pt-34">
          {/* shop product top wrap start */}
          <div className="shop-top-bar">
            <div className="row">
              <div className="col-lg-7 col-md-6">
                <div className="top-bar-left">
                <div className="product-view-mode mr-70 mr-sm-0">
                <NavLink onClick={()=>setmode("col-4")} className="active" to="#" data-target="col-4"><i className="fa fa-th" /></NavLink>
                    <NavLink onClick={()=>setmode("list")} to="#" data-target="list"><i className="fa fa-list" /></NavLink>
                  <NavLink onClick={()=>setmode("col-3")} className="active" to="#" data-target="col-3"><i className="fa fa-th" /></NavLink>
                  </div>
                  <div className="product-amount">
                    <p>Showing 1–16 of 21 results</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-6">
                <div className="top-bar-right">
                  <div className="product-short">
                    <p>Sort By : </p>
                    <select className="nice-select" name="sortby">
                      <option value="trending">Relevance</option>
                      <option value="sales">Name (A - Z)</option>
                      <option value="sales">Name (Z - A)</option>
                      <option value="rating">Price (Low &gt; High)</option>
                      <option value="date">Rating (Lowest)</option>
                      <option value="price-asc">Model (A - Z)</option>
                      <option value="price-asc">Model (Z - A)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* shop product top wrap start */}
          {/* product item start */}
          <div className={mode=="list"?"shop-product-wrap row list":"shop-product-wrap grid row "}>
            <div className={mode=='col-3'?"col-lg-3 col-md-3 col-sm-6":"col-lg-4 col-md-4 col-sm-6"}>
              {/* product single grid item start */}
              <div className="product-item fix mb-30">
                <div className="product-thumb">
                  <Link  to="/ProductDetail">
                    <img src="assets/img/product/product-img1.jpg" className="img-pri" alt />
                    <img src="assets/img/product/product-img2.jpg" className="img-sec" alt />
                  </Link>
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
                  <h4><Link  to="/ProductDetail">vertual product 01</Link></h4>
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
              {/* product single grid item end */}
              {/* product single list item start */}
              <div className="product-list-item mb-30">
                <div className="product-thumb">
                  <Link  to="/ProductDetail">
                    <img src="assets/img/product/product-img1.jpg" className="img-pri" alt />
                    <img src="assets/img/product/product-img2.jpg" className="img-sec" alt />
                  </Link>
                  <div className="product-label">
                    <span>hot</span>
                  </div>
                </div>
                <div className="product-list-content">
                  <h3><Link  to="/ProductDetail">virtual product 02</Link></h3>
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
                  <div className="pricebox">
                    <span className="regular-price">$70.00</span>
                    <span className="old-price"><del>$90.00</del></span>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                  <p>Phasellus id nisi quis justo tempus mollis sed et dui. In hac habitasse platea dictumst. Suspendisse ultrices mauris diam. Nullam sed aliquet elit. Mauris consequat nisi ut mauris efficitur lacinia.</p>
                  <div className="product-list-action-link">
                    <a className="buy-btn" href="#" data-toggle="tooltip" data-placement="top" title="Add to cart">go to buy <i className="fa fa-shopping-cart" /> </a>
                    <a href="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" data-placement="top" title="Quick view"><i className="fa fa-search" /></span> </a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="fa fa-heart-o" /></a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" /></a>
                  </div>
                </div>
              </div>
              {/* product single list item start */}
            </div> {/* product single column end */}
            <div className={mode=='col-3'?"col-lg-3 col-md-3 col-sm-6":"col-lg-4 col-md-4 col-sm-6"}>
              {/* product single grid item start */}
              <div className="product-item fix mb-30">
                <div className="product-thumb">
                  <Link  to="/ProductDetail">
                    <img src="assets/img/product/product-img3.jpg" className="img-pri" alt />
                    <img src="assets/img/product/product-img4.jpg" className="img-sec" alt />
                  </Link>
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
                  <h4><Link  to="/ProductDetail">simple product 01</Link></h4>
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
              {/* product single grid item end */}
              {/* product single list item start */}
              <div className="product-list-item mb-30">
                <div className="product-thumb">
                  <Link  to="/ProductDetail">
                    <img src="assets/img/product/product-img3.jpg" className="img-pri" alt />
                    <img src="assets/img/product/product-img4.jpg" className="img-sec" alt />
                  </Link>
                  <div className="product-label">
                    <span>hot</span>
                  </div>
                </div>
                <div className="product-list-content">
                  <h3><Link  to="/ProductDetail">simple product 02</Link></h3>
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
                  <div className="pricebox">
                    <span className="regular-price">$70.00</span>
                    <span className="old-price"><del>$90.00</del></span>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                  <p>Phasellus id nisi quis justo tempus mollis sed et dui. In hac habitasse platea dictumst. Suspendisse ultrices mauris diam. Nullam sed aliquet elit. Mauris consequat nisi ut mauris efficitur lacinia.</p>
                  <div className="product-list-action-link">
                    <a className="buy-btn" href="#" data-toggle="tooltip" data-placement="top" title="Add to cart">go to buy <i className="fa fa-shopping-cart" /> </a>
                    <a href="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" data-placement="top" title="Quick view"><i className="fa fa-search" /></span> </a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="fa fa-heart-o" /></a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" /></a>
                  </div>
                </div>
              </div>
              {/* product single list item start */}
            </div> {/* product single column end */}
            <div className={mode=='col-3'?"col-lg-3 col-md-3 col-sm-6":"col-lg-4 col-md-4 col-sm-6"}>
              {/* product single grid item start */}
              <div className="product-item fix mb-30">
                <div className="product-thumb">
                  <Link  to="/ProductDetail">
                    <img src="assets/img/product/product-img5.jpg" className="img-pri" alt />
                    <img src="assets/img/product/product-img6.jpg" className="img-sec" alt />
                  </Link>
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
                  <h4><Link  to="/ProductDetail">group product 01</Link></h4>
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
              {/* product single grid item end */}
              {/* product single list item start */}
              <div className="product-list-item mb-30">
                <div className="product-thumb">
                  <Link  to="/ProductDetail">
                    <img src="assets/img/product/product-img5.jpg" className="img-pri" alt />
                    <img src="assets/img/product/product-img6.jpg" className="img-sec" alt />
                  </Link>
                  <div className="product-label">
                    <span>hot</span>
                  </div>
                </div>
                <div className="product-list-content">
                  <h3><Link  to="/ProductDetail">group product 02</Link></h3>
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
                  <div className="pricebox">
                    <span className="regular-price">$70.00</span>
                    <span className="old-price"><del>$90.00</del></span>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                  <p>Phasellus id nisi quis justo tempus mollis sed et dui. In hac habitasse platea dictumst. Suspendisse ultrices mauris diam. Nullam sed aliquet elit. Mauris consequat nisi ut mauris efficitur lacinia.</p>
                  <div className="product-list-action-link">
                    <a className="buy-btn" href="#" data-toggle="tooltip" data-placement="top" title="Add to cart">go to buy <i className="fa fa-shopping-cart" /> </a>
                    <a href="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" data-placement="top" title="Quick view"><i className="fa fa-search" /></span> </a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="fa fa-heart-o" /></a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" /></a>
                  </div>
                </div>
              </div>
              {/* product single list item start */}
            </div> {/* product single column end */}
            <div className={mode=='col-3'?"col-lg-3 col-md-3 col-sm-6":"col-lg-4 col-md-4 col-sm-6"}>
              {/* product single grid item start */}
              <div className="product-item fix mb-30">
                <div className="product-thumb">
                  <Link  to="/ProductDetail">
                    <img src="assets/img/product/product-img7.jpg" className="img-pri" alt />
                    <img src="assets/img/product/product-img8.jpg" className="img-sec" alt />
                  </Link>
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
                  <h4><Link  to="/ProductDetail">external product</Link></h4>
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
              {/* product single grid item end */}
              {/* product single list item start */}
              <div className="product-list-item mb-30">
                <div className="product-thumb">
                  <Link  to="/ProductDetail">
                    <img src="assets/img/product/product-img7.jpg" className="img-pri" alt />
                    <img src="assets/img/product/product-img8.jpg" className="img-sec" alt />
                  </Link>
                  <div className="product-label">
                    <span>hot</span>
                  </div>
                </div>
                <div className="product-list-content">
                  <h3><Link  to="/ProductDetail">external product</Link></h3>
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
                  <div className="pricebox">
                    <span className="regular-price">$70.00</span>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                  <p>Phasellus id nisi quis justo tempus mollis sed et dui. In hac habitasse platea dictumst. Suspendisse ultrices mauris diam. Nullam sed aliquet elit. Mauris consequat nisi ut mauris efficitur lacinia.</p>
                  <div className="product-list-action-link">
                    <a className="buy-btn" href="#" data-toggle="tooltip" data-placement="top" title="Add to cart">go to buy <i className="fa fa-shopping-cart" /> </a>
                    <a href="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" data-placement="top" title="Quick view"><i className="fa fa-search" /></span> </a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="fa fa-heart-o" /></a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" /></a>
                  </div>
                </div>
              </div>
              {/* product single list item start */}
            </div> {/* product single column end */}
            <div className={mode=='col-3'?"col-lg-3 col-md-3 col-sm-6":"col-lg-4 col-md-4 col-sm-6"}>
              {/* product single grid item start */}
              <div className="product-item fix mb-30">
                <div className="product-thumb">
                  <Link  to="/ProductDetail">
                    <img src="assets/img/product/product-img9.jpg" className="img-pri" alt />
                    <img src="assets/img/product/product-img10.jpg" className="img-sec" alt />
                  </Link>
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
                  <h4><Link  to="/ProductDetail">simple product 01</Link></h4>
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
              {/* product single grid item end */}
              {/* product single list item start */}
              <div className="product-list-item mb-30">
                <div className="product-thumb">
                  <Link  to="/ProductDetail">
                    <img src="assets/img/product/product-img9.jpg" className="img-pri" alt />
                    <img src="assets/img/product/product-img10.jpg" className="img-sec" alt />
                  </Link>
                  <div className="product-label">
                    <span>hot</span>
                  </div>
                </div>
                <div className="product-list-content">
                  <h3><Link  to="/ProductDetail">simple product 02</Link></h3>
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
                  <div className="pricebox">
                    <span className="regular-price">$70.00</span>
                    <span className="old-price"><del>$90.00</del></span>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                  <p>Phasellus id nisi quis justo tempus mollis sed et dui. In hac habitasse platea dictumst. Suspendisse ultrices mauris diam. Nullam sed aliquet elit. Mauris consequat nisi ut mauris efficitur lacinia.</p>
                  <div className="product-list-action-link">
                    <a className="buy-btn" href="#" data-toggle="tooltip" data-placement="top" title="Add to cart">go to buy <i className="fa fa-shopping-cart" /> </a>
                    <a href="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" data-placement="top" title="Quick view"><i className="fa fa-search" /></span> </a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="fa fa-heart-o" /></a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" /></a>
                  </div>
                </div>
              </div>
              {/* product single list item start */}
            </div> {/* product single column end */}
            <div className={mode=='col-3'?"col-lg-3 col-md-3 col-sm-6":"col-lg-4 col-md-4 col-sm-6"}>
              {/* product single grid item start */}
              <div className="product-item fix mb-30">
                <div className="product-thumb">
                  <Link  to="/ProductDetail">
                    <img src="assets/img/product/product-img11.jpg" className="img-pri" alt />
                    <img src="assets/img/product/product-img12.jpg" className="img-sec" alt />
                  </Link>
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
                  <h4><Link  to="/ProductDetail">smart product 01</Link></h4>
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
              {/* product single grid item end */}
              {/* product single list item start */}
              <div className="product-list-item mb-30">
                <div className="product-thumb">
                  <Link  to="/ProductDetail">
                    <img src="assets/img/product/product-img11.jpg" className="img-pri" alt />
                    <img src="assets/img/product/product-img12.jpg" className="img-sec" alt />
                  </Link>
                  <div className="product-label">
                    <span>hot</span>
                  </div>
                </div>
                <div className="product-list-content">
                  <h3><Link  to="/ProductDetail">smart product 02</Link></h3>
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
                  <div className="pricebox">
                    <span className="regular-price">$70.00</span>
                    <span className="old-price"><del>$90.00</del></span>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                  <p>Phasellus id nisi quis justo tempus mollis sed et dui. In hac habitasse platea dictumst. Suspendisse ultrices mauris diam. Nullam sed aliquet elit. Mauris consequat nisi ut mauris efficitur lacinia.</p>
                  <div className="product-list-action-link">
                    <a className="buy-btn" href="#" data-toggle="tooltip" data-placement="top" title="Add to cart">go to buy <i className="fa fa-shopping-cart" /> </a>
                    <a href="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" data-placement="top" title="Quick view"><i className="fa fa-search" /></span> </a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="fa fa-heart-o" /></a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" /></a>
                  </div>
                </div>
              </div>
              {/* product single list item start */}
            </div> {/* product single column end */}
            <div className={mode=='col-3'?"col-lg-3 col-md-3 col-sm-6":"col-lg-4 col-md-4 col-sm-6"}>
              {/* product single grid item start */}
              <div className="product-item fix mb-30">
                <div className="product-thumb">
                  <Link  to="/ProductDetail">
                    <img src="assets/img/product/product-img13.jpg" className="img-pri" alt />
                    <img src="assets/img/product/product-img14.jpg" className="img-sec" alt />
                  </Link>
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
                  <h4><Link  to="/ProductDetail">vertual product 01</Link></h4>
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
              {/* product single grid item end */}
              {/* product single list item start */}
              <div className="product-list-item mb-30">
                <div className="product-thumb">
                  <Link  to="/ProductDetail">
                    <img src="assets/img/product/product-img13.jpg" className="img-pri" alt />
                    <img src="assets/img/product/product-img14.jpg" className="img-sec" alt />
                  </Link>
                  <div className="product-label">
                    <span>hot</span>
                  </div>
                </div>
                <div className="product-list-content">
                  <h3><Link  to="/ProductDetail">virtual product 02</Link></h3>
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
                  <div className="pricebox">
                    <span className="regular-price">$70.00</span>
                    <span className="old-price"><del>$90.00</del></span>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                  <p>Phasellus id nisi quis justo tempus mollis sed et dui. In hac habitasse platea dictumst. Suspendisse ultrices mauris diam. Nullam sed aliquet elit. Mauris consequat nisi ut mauris efficitur lacinia.</p>
                  <div className="product-list-action-link">
                    <a className="buy-btn" href="#" data-toggle="tooltip" data-placement="top" title="Add to cart">go to buy <i className="fa fa-shopping-cart" /> </a>
                    <a href="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" data-placement="top" title="Quick view"><i className="fa fa-search" /></span> </a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="fa fa-heart-o" /></a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" /></a>
                  </div>
                </div>
              </div>
              {/* product single list item start */}
            </div> {/* product single column end */}
            <div className={mode=='col-3'?"col-lg-3 col-md-3 col-sm-6":"col-lg-4 col-md-4 col-sm-6"}>
              {/* product single grid item start */}
              <div className="product-item fix mb-30">
                <div className="product-thumb">
                  <Link  to="/ProductDetail">
                    <img src="assets/img/product/product-img15.jpg" className="img-pri" alt />
                    <img src="assets/img/product/product-img16.jpg" className="img-sec" alt />
                  </Link>
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
                  <h4><Link  to="/ProductDetail">external product</Link></h4>
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
              {/* product single grid item end */}
              {/* product single list item start */}
              <div className="product-list-item mb-30">
                <div className="product-thumb">
                  <Link  to="/ProductDetail">
                    <img src="assets/img/product/product-img15.jpg" className="img-pri" alt />
                    <img src="assets/img/product/product-img16.jpg" className="img-sec" alt />
                  </Link>
                  <div className="product-label">
                    <span>hot</span>
                  </div>
                </div>
                <div className="product-list-content">
                  <h3><Link  to="/ProductDetail">external product</Link></h3>
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
                  <div className="pricebox">
                    <span className="regular-price">$70.00</span>
                    <span className="old-price"><del>$90.00</del></span>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                  <p>Phasellus id nisi quis justo tempus mollis sed et dui. In hac habitasse platea dictumst. Suspendisse ultrices mauris diam. Nullam sed aliquet elit. Mauris consequat nisi ut mauris efficitur lacinia.</p>
                  <div className="product-list-action-link">
                    <a className="buy-btn" href="#" data-toggle="tooltip" data-placement="top" title="Add to cart">go to buy <i className="fa fa-shopping-cart" /> </a>
                    <a href="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" data-placement="top" title="Quick view"><i className="fa fa-search" /></span> </a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="fa fa-heart-o" /></a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" /></a>
                  </div>
                </div>
              </div>
              {/* product single list item start */}
            </div> {/* product single column end */}
            <div className={mode=='col-3'?"col-lg-3 col-md-3 col-sm-6":"col-lg-4 col-md-4 col-sm-6"}>
              {/* product single grid item start */}
              <div className="product-item fix mb-30">
                <div className="product-thumb">
                  <Link  to="/ProductDetail">
                    <img src="assets/img/product/product-img2.jpg" className="img-pri" alt />
                    <img src="assets/img/product/product-img3.jpg" className="img-sec" alt />
                  </Link>
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
                  <h4><Link  to="/ProductDetail">vertual product 01</Link></h4>
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
              {/* product single grid item end */}
              {/* product single list item start */}
              <div className="product-list-item mb-30">
                <div className="product-thumb">
                  <Link  to="/ProductDetail">
                    <img src="assets/img/product/product-img2.jpg" className="img-pri" alt />
                    <img src="assets/img/product/product-img3.jpg" className="img-sec" alt />
                  </Link>
                  <div className="product-label">
                    <span>hot</span>
                  </div>
                </div>
                <div className="product-list-content">
                  <h3><Link  to="/ProductDetail">virtual product 02</Link></h3>
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
                  <div className="pricebox">
                    <span className="regular-price">$70.00</span>
                    <span className="old-price"><del>$90.00</del></span>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                  <p>Phasellus id nisi quis justo tempus mollis sed et dui. In hac habitasse platea dictumst. Suspendisse ultrices mauris diam. Nullam sed aliquet elit. Mauris consequat nisi ut mauris efficitur lacinia.</p>
                  <div className="product-list-action-link">
                    <a className="buy-btn" href="#" data-toggle="tooltip" data-placement="top" title="Add to cart">go to buy <i className="fa fa-shopping-cart" /> </a>
                    <a href="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" data-placement="top" title="Quick view"><i className="fa fa-search" /></span> </a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="fa fa-heart-o" /></a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" /></a>
                  </div>
                </div>
              </div>
              {/* product single list item start */}
            </div> {/* product single column end */}
            <div className={mode=='col-3'?"col-lg-3 col-md-3 col-sm-6":"col-lg-4 col-md-4 col-sm-6"}>
              {/* product single grid item start */}
              <div className="product-item fix mb-30">
                <div className="product-thumb">
                  <Link  to="/ProductDetail">
                    <img src="assets/img/product/product-img4.jpg" className="img-pri" alt />
                    <img src="assets/img/product/product-img5.jpg" className="img-sec" alt />
                  </Link>
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
                  <h4><Link  to="/ProductDetail">group product 01</Link></h4>
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
              {/* product single grid item end */}
              {/* product single list item start */}
              <div className="product-list-item mb-30">
                <div className="product-thumb">
                  <Link  to="/ProductDetail">
                    <img src="assets/img/product/product-img4.jpg" className="img-pri" alt />
                    <img src="assets/img/product/product-img5.jpg" className="img-sec" alt />
                  </Link>
                  <div className="product-label">
                    <span>hot</span>
                  </div>
                </div>
                <div className="product-list-content">
                  <h3><Link  to="/ProductDetail">group product 02</Link></h3>
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
                  <div className="pricebox">
                    <span className="regular-price">$70.00</span>
                    <span className="old-price"><del>$90.00</del></span>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                  <p>Phasellus id nisi quis justo tempus mollis sed et dui. In hac habitasse platea dictumst. Suspendisse ultrices mauris diam. Nullam sed aliquet elit. Mauris consequat nisi ut mauris efficitur lacinia.</p>
                  <div className="product-list-action-link">
                    <a className="buy-btn" href="#" data-toggle="tooltip" data-placement="top" title="Add to cart">go to buy <i className="fa fa-shopping-cart" /> </a>
                    <a href="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" data-placement="top" title="Quick view"><i className="fa fa-search" /></span> </a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="fa fa-heart-o" /></a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" /></a>
                  </div>
                </div>
              </div>
              {/* product single list item start */}
            </div> {/* product single column end */}
            <div className={mode=='col-3'?"col-lg-3 col-md-3 col-sm-6":"col-lg-4 col-md-4 col-sm-6"}>
              {/* product single grid item start */}
              <div className="product-item fix mb-30">
                <div className="product-thumb">
                  <Link  to="/ProductDetail">
                    <img src="assets/img/product/product-img6.jpg" className="img-pri" alt />
                    <img src="assets/img/product/product-img7.jpg" className="img-sec" alt />
                  </Link>
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
                  <h4><Link  to="/ProductDetail">simple product 01</Link></h4>
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
              {/* product single grid item end */}
              {/* product single list item start */}
              <div className="product-list-item mb-30">
                <div className="product-thumb">
                  <Link  to="/ProductDetail">
                    <img src="assets/img/product/product-img8.jpg" className="img-pri" alt />
                    <img src="assets/img/product/product-img9.jpg" className="img-sec" alt />
                  </Link>
                  <div className="product-label">
                    <span>hot</span>
                  </div>
                </div>
                <div className="product-list-content">
                  <h3><Link  to="/ProductDetail">simple product 02</Link></h3>
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
                  <div className="pricebox">
                    <span className="regular-price">$70.00</span>
                    <span className="old-price"><del>$90.00</del></span>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                  <p>Phasellus id nisi quis justo tempus mollis sed et dui. In hac habitasse platea dictumst. Suspendisse ultrices mauris diam. Nullam sed aliquet elit. Mauris consequat nisi ut mauris efficitur lacinia.</p>
                  <div className="product-list-action-link">
                    <a className="buy-btn" href="#" data-toggle="tooltip" data-placement="top" title="Add to cart">go to buy <i className="fa fa-shopping-cart" /> </a>
                    <a href="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" data-placement="top" title="Quick view"><i className="fa fa-search" /></span> </a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="fa fa-heart-o" /></a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" /></a>
                  </div>
                </div>
              </div>
              {/* product single list item start */}
            </div> {/* product single column end */}
            <div className={mode=='col-3'?"col-lg-3 col-md-3 col-sm-6":"col-lg-4 col-md-4 col-sm-6"}>
              {/* product single grid item start */}
              <div className="product-item fix mb-30">
                <div className="product-thumb">
                  <Link  to="/ProductDetail">
                    <img src="assets/img/product/product-img10.jpg" className="img-pri" alt />
                    <img src="assets/img/product/product-img11.jpg" className="img-sec" alt />
                  </Link>
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
                  <h4><Link  to="/ProductDetail">vertual product 01</Link></h4>
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
              {/* product single grid item end */}
              {/* product single list item start */}
              <div className="product-list-item mb-30">
                <div className="product-thumb">
                  <Link  to="/ProductDetail">
                    <img src="assets/img/product/product-img10.jpg" className="img-pri" alt />
                    <img src="assets/img/product/product-img11.jpg" className="img-sec" alt />
                  </Link>
                  <div className="product-label">
                    <span>hot</span>
                  </div>
                </div>
                <div className="product-list-content">
                  <h3><Link  to="/ProductDetail">virtual product 02</Link></h3>
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
                  <div className="pricebox">
                    <span className="regular-price">$90.00</span>
                    <span className="old-price"><del>$100.00</del></span>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                  <p>Phasellus id nisi quis justo tempus mollis sed et dui. In hac habitasse platea dictumst. Suspendisse ultrices mauris diam. Nullam sed aliquet elit. Mauris consequat nisi ut mauris efficitur lacinia.</p>
                  <div className="product-list-action-link">
                    <a className="buy-btn" href="#" data-toggle="tooltip" data-placement="top" title="Add to cart">go to buy <i className="fa fa-shopping-cart" /> </a>
                    <a href="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" data-placement="top" title="Quick view"><i className="fa fa-search" /></span> </a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="fa fa-heart-o" /></a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" /></a>
                  </div>
                </div>
              </div>
              {/* product single list item start */}
            </div> {/* product single column end */}
            <div className={mode=='col-3'?"col-lg-3 col-md-3 col-sm-6":"col-lg-4 col-md-4 col-sm-6"}>
              {/* product single grid item start */}
              <div className="product-item fix mb-30">
                <div className="product-thumb">
                  <Link  to="/ProductDetail">
                    <img src="assets/img/product/product-img12.jpg" className="img-pri" alt />
                    <img src="assets/img/product/product-img13.jpg" className="img-sec" alt />
                  </Link>
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
                  <h4><Link  to="/ProductDetail">vertual product 01</Link></h4>
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
              {/* product single grid item end */}
              {/* product single list item start */}
              <div className="product-list-item mb-30">
                <div className="product-thumb">
                  <Link  to="/ProductDetail">
                    <img src="assets/img/product/product-img12.jpg" className="img-pri" alt />
                    <img src="assets/img/product/product-img13.jpg" className="img-sec" alt />
                  </Link>
                  <div className="product-label">
                    <span>hot</span>
                  </div>
                </div>
                <div className="product-list-content">
                  <h3><Link  to="/ProductDetail">virtual product 02</Link></h3>
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
                  <div className="pricebox">
                    <span className="regular-price">$70.00</span>
                    <span className="old-price"><del>$90.00</del></span>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                  <p>Phasellus id nisi quis justo tempus mollis sed et dui. In hac habitasse platea dictumst. Suspendisse ultrices mauris diam. Nullam sed aliquet elit. Mauris consequat nisi ut mauris efficitur lacinia.</p>
                  <div className="product-list-action-link">
                    <a className="buy-btn" href="#" data-toggle="tooltip" data-placement="top" title="Add to cart">go to buy <i className="fa fa-shopping-cart" /> </a>
                    <a href="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" data-placement="top" title="Quick view"><i className="fa fa-search" /></span> </a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="fa fa-heart-o" /></a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" /></a>
                  </div>
                </div>
              </div>
              {/* product single list item start */}
            </div> {/* product single column end */}
            <div className={mode=='col-3'?"col-lg-3 col-md-3 col-sm-6":"col-lg-4 col-md-4 col-sm-6"}>
              {/* product single grid item start */}
              <div className="product-item fix mb-30">
                <div className="product-thumb">
                  <Link  to="/ProductDetail">
                    <img src="assets/img/product/product-img14.jpg" className="img-pri" alt />
                    <img src="assets/img/product/product-img15.jpg" className="img-sec" alt />
                  </Link>
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
                  <h4><Link  to="/ProductDetail">smart product 01</Link></h4>
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
              {/* product single grid item end */}
              {/* product single list item start */}
              <div className="product-list-item mb-30">
                <div className="product-thumb">
                  <Link  to="/ProductDetail">
                    <img src="assets/img/product/product-img14.jpg" className="img-pri" alt />
                    <img src="assets/img/product/product-img15.jpg" className="img-sec" alt />
                  </Link>
                  <div className="product-label">
                    <span>hot</span>
                  </div>
                </div>
                <div className="product-list-content">
                  <h3><Link  to="/ProductDetail">virtual product 02</Link></h3>
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
                  <div className="pricebox">
                    <span className="regular-price">$70.00</span>
                    <span className="old-price"><del>$90.00</del></span>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                  <p>Phasellus id nisi quis justo tempus mollis sed et dui. In hac habitasse platea dictumst. Suspendisse ultrices mauris diam. Nullam sed aliquet elit. Mauris consequat nisi ut mauris efficitur lacinia.</p>
                  <div className="product-list-action-link">
                    <a className="buy-btn" href="#" data-toggle="tooltip" data-placement="top" title="Add to cart">go to buy <i className="fa fa-shopping-cart" /> </a>
                    <a href="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" data-placement="top" title="Quick view"><i className="fa fa-search" /></span> </a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="fa fa-heart-o" /></a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" /></a>
                  </div>
                </div>
              </div>
              {/* product single list item start */}
            </div> {/* product single column end */}
            <div className={mode=='col-3'?"col-lg-3 col-md-3 col-sm-6":"col-lg-4 col-md-4 col-sm-6"}>
              {/* product single grid item start */}
              <div className="product-item fix mb-30">
                <div className="product-thumb">
                  <Link  to="/ProductDetail">
                    <img src="assets/img/product/product-img16.jpg" className="img-pri" alt />
                    <img src="assets/img/product/product-img1.jpg" className="img-sec" alt />
                  </Link>
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
                  <h4><Link  to="/ProductDetail">simple product 01</Link></h4>
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
              {/* product single grid item end */}
              {/* product single list item start */}
              <div className="product-list-item mb-30">
                <div className="product-thumb">
                  <Link  to="/ProductDetail">
                    <img src="assets/img/product/product-img16.jpg" className="img-pri" alt />
                    <img src="assets/img/product/product-img1.jpg" className="img-sec" alt />
                  </Link>
                  <div className="product-label">
                    <span>hot</span>
                  </div>
                </div>
                <div className="product-list-content">
                  <h3><Link  to="/ProductDetail">simple product 02</Link></h3>
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
                  <div className="pricebox">
                    <span className="regular-price">$70.00</span>
                    <span className="old-price"><del>$90.00</del></span>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                  <p>Phasellus id nisi quis justo tempus mollis sed et dui. In hac habitasse platea dictumst. Suspendisse ultrices mauris diam. Nullam sed aliquet elit. Mauris consequat nisi ut mauris efficitur lacinia.</p>
                  <div className="product-list-action-link">
                    <a className="buy-btn" href="#" data-toggle="tooltip" data-placement="top" title="Add to cart">go to buy <i className="fa fa-shopping-cart" /> </a>
                    <a href="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" data-placement="top" title="Quick view"><i className="fa fa-search" /></span> </a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="fa fa-heart-o" /></a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" /></a>
                  </div>
                </div>
              </div>
              {/* product single list item start */}
            </div> {/* product single column end */}
            <div className={mode=='col-3'?"col-lg-3 col-md-3 col-sm-6":"col-lg-4 col-md-4 col-sm-6"}>
              {/* product single grid item start */}
              <div className="product-item fix mb-30">
                <div className="product-thumb">
                  <Link  to="/ProductDetail">
                    <img src="assets/img/product/product-img4.jpg" className="img-pri" alt />
                    <img src="assets/img/product/product-img6.jpg" className="img-sec" alt />
                  </Link>
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
                  <h4><Link  to="/ProductDetail">vertual product 01</Link></h4>
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
              {/* product single grid item end */}
              {/* product single list item start */}
              <div className="product-list-item mb-30">
                <div className="product-thumb">
                  <Link  to="/ProductDetail">
                    <img src="assets/img/product/product-img8.jpg" className="img-pri" alt />
                    <img src="assets/img/product/product-img8.jpg" className="img-sec" alt />
                  </Link>
                  <div className="product-label">
                    <span>hot</span>
                  </div>
                </div>
                <div className="product-list-content">
                  <h3><Link  to="/ProductDetail">virtual product 02</Link></h3>
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
                  <div className="pricebox">
                    <span className="regular-price">$70.00</span>
                    <span className="old-price"><del>$90.00</del></span>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                  <p>Phasellus id nisi quis justo tempus mollis sed et dui. In hac habitasse platea dictumst. Suspendisse ultrices mauris diam. Nullam sed aliquet elit. Mauris consequat nisi ut mauris efficitur lacinia.</p>
                  <div className="product-list-action-link">
                    <a className="buy-btn" href="#" data-toggle="tooltip" data-placement="top" title="Add to cart">go to buy <i className="fa fa-shopping-cart" /> </a>
                    <a href="#" data-toggle="modal" data-target="#quick_view"> <span data-toggle="tooltip" data-placement="top" title="Quick view"><i className="fa fa-search" /></span> </a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Wishlist"><i className="fa fa-heart-o" /></a>
                    <a href="#" data-toggle="tooltip" data-placement="top" title="Compare"><i className="fa fa-refresh" /></a>
                  </div>
                </div>
              </div>
              {/* product single list item start */}
            </div> {/* product single column end */}
          </div>
          {/* product item end */}
        </div>
        {/* product view wrapper area end */}
        {/* start pagination area */}
        <div className="paginatoin-area text-center pt-28">
          <div className="row">
            <div className="col-12">
              <ul className="pagination-box">
                <li><a className="Previous" href="#">Previous</a></li>
                <li className="active"><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a className="Next" href="#"> Next </a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* end pagination area */}
      </div>
      {/* product main wrap end */}
    </div>
  </div>
</div>

  )
}
