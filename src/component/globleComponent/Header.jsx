import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
export default function Header() {
  const [Show,SetShow]=useState(false)
  return (
    <>
{/* header area start */}
<header>
  {/* header top start */}
  <div className="header-top-area bg-gray text-center text-md-left">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-5">
          <div className="header-call-action">
            <a href="#">
              <i className="fa fa-envelope" />
              info@website.com
            </a>
            <a href="#">
              <i className="fa fa-phone" />
              0123456789
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-md-7">
          <div className="header-top-right float-md-right float-none">
            <nav>
              <ul>
                <li>
                  <div className="dropdown header-top-dropdown">
                    <a className="dropdown-toggle" id="myaccount" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      my account
                      <i className="fa fa-angle-down" />
                    </a>
                    <div className="dropdown-menu" aria-labelledby="myaccount">
                      <a className="dropdown-item" href="my-account.html">my account</a>
                      <a className="dropdown-item" href="login-register.html"> login</a>
                      <a className="dropdown-item" href="login-register.html">register</a>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="#">my wishlist</a>
                </li>
                <li>
                  <a href="#">my cart</a>
                </li>
                <li>
                  <a href="#">checkout</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* header top end */}
  {/* header middle start */}
  <div className="header-middle-area pt-20 pb-20">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-3">
          <div className="brand-logo">
            <a href="index.html">
              <img src="assets/img/logo/logo.png" alt="brand logo" />
            </a>
          </div>
        </div> {/* end logo area */}
        <div className="col-lg-9">
          <div className="header-middle-right">
            <div className="header-middle-shipping mb-20">
              <div className="single-block-shipping">
                <div className="shipping-icon">
                  <i className="fa fa-clock-o" />
                </div>
                <div className="shipping-content">
                  <h5>Working time</h5>
                  <span>Mon- Sun: 8.00 - 18.00</span>
                </div>
              </div> {/* end single shipping */}
              <div className="single-block-shipping">
                <div className="shipping-icon">
                  <i className="fa fa-truck" />
                </div>
                <div className="shipping-content">
                  <h5>free shipping</h5>
                  <span>On order over $199</span>
                </div>
              </div> {/* end single shipping */}
              <div className="single-block-shipping">
                <div className="shipping-icon">
                  <i className="fa fa-money" />
                </div>
                <div className="shipping-content">
                  <h5>money back 100%</h5>
                  <span>Within 30 Days after delivery</span>
                </div>
              </div> {/* end single shipping */}
            </div>
            <div className="header-middle-block">
              <div className="header-middle-searchbox">
                <input type="text" placeholder="Search..." />
                <button className="search-btn"><i className="fa fa-search" /></button>
              </div>
              <div className="header-mini-cart">
                <div className="mini-cart-btn">
                  <i className="fa fa-shopping-cart" />
                  <span className="cart-notification">2</span>
                </div>
                <div className="cart-total-price">
                  <span>total</span>
                  $50.00
                </div>
                <ul className="cart-list">
                  <li>
                    <div className="cart-img">
                      <a href="product-details.html"><img src="assets/img/cart/cart-1.jpg" alt /></a>
                    </div>
                    <div className="cart-info">
                      <h4><a href="product-details.html">simple product 09</a></h4>
                      <span>$60.00</span>
                    </div>
                    <div className="del-icon">
                      <i className="fa fa-times" />
                    </div>
                  </li>
                  <li>
                    <div className="cart-img">
                      <a href="product-details.html"><img src="assets/img/cart/cart-2.jpg" alt /></a>
                    </div>
                    <div className="cart-info">
                      <h4><a href="product-details.html">virtual product 10</a></h4>
                      <span>$50.00</span>
                    </div>
                    <div className="del-icon">
                      <i className="fa fa-times" />
                    </div>
                  </li>
                  <li className="mini-cart-price">
                    <span className="subtotal">subtotal : </span>
                    <span className="subtotal-price">$88.66</span>
                  </li>
                  <li className="checkout-btn">
                    <a href="#">checkout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* header middle end */}
  {/* main menu area start */}
  <div className="main-header-wrapper bdr-bottom1">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="main-header-inner">
            <div className="category-toggle-wrap">
              <div className="category-toggle">
                category
                <div className="cat-icon">
                  <i className="fa fa-angle-down" onClick={()=>SetShow(!Show)} />
                </div>
              </div>
              <nav className="category-menu hm-1" style={{display:Show?"block":"none"}}>
                <ul>
                  <li><a href="shop-grid-left-sidebar.html"><i className="fa fa-desktop" />
                      computer</a></li>
                  <li className="menu-item-has-children"><a href="shop-grid-left-sidebar.html"><i className="fa fa-camera" /> camera</a>
                    {/* Mega Category Menu Start */}
                    <ul className="category-mega-menu">
                      <li className="menu-item-has-children">
                        <a href="shop-grid-left-sidebar.html">Smartphone</a>
                        <ul>
                          <li><a href="shop-grid-left-sidebar.html">Samsome</a></li>
                          <li><a href="shop-grid-left-sidebar.html">GL Stylus</a></li>
                          <li><a href="shop-grid-left-sidebar.html">Uawei</a></li>
                          <li><a href="shop-grid-left-sidebar.html">Cherry Berry</a></li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="shop-grid-left-sidebar.html">headphone</a>
                        <ul>
                          <li><a href="shop-grid-left-sidebar.html">Desktop Headphone</a></li>
                          <li><a href="shop-grid-left-sidebar.html">Mobile Headphone</a></li>
                          <li><a href="shop-grid-left-sidebar.html">Wireless
                              Headphone</a></li>
                          <li><a href="shop-grid-left-sidebar.html">LED Headphone</a></li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="shop-grid-left-sidebar.html">accessories</a>
                        <ul>
                          <li><a href="shop-grid-left-sidebar.html">Power Bank</a></li>
                          <li><a href="shop-grid-left-sidebar.html">Data Cable</a></li>
                          <li><a href="shop-grid-left-sidebar.html">Power Cable</a></li>
                          <li><a href="shop-grid-left-sidebar.html">Battery</a></li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="shop-grid-left-sidebar.html">headphone</a>
                        <ul>
                          <li><a href="shop-grid-left-sidebar.html">Desktop Headphone</a></li>
                          <li><a href="shop-grid-left-sidebar.html">Mobile Headphone</a></li>
                          <li><a href="shop-grid-left-sidebar.html">Wireless
                              Headphone</a></li>
                          <li><a href="shop-grid-left-sidebar.html">LED Headphone</a></li>
                        </ul>
                      </li>
                    </ul>{/* Mega Category Menu End */}
                  </li>
                  <li className="menu-item-has-children"><a href="shop-grid-left-sidebar.html"><i className="fa fa-book" /> smart phones</a>
                    {/* Mega Category Menu Start */}
                    <ul className="category-mega-menu">
                      <li className="menu-item-has-children">
                        <a href="shop-grid-left-sidebar.html">Smartphone</a>
                        <ul>
                          <li><a href="shop-grid-left-sidebar.html">Samsome</a></li>
                          <li><a href="shop-grid-left-sidebar.html">GL Stylus</a></li>
                          <li><a href="shop-grid-left-sidebar.html">Uawei</a></li>
                          <li><a href="shop-grid-left-sidebar.html">Cherry Berry</a></li>
                          <li><a href="shop-grid-left-sidebar.html">uPhone</a></li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="shop-grid-left-sidebar.html">headphone</a>
                        <ul>
                          <li><a href="shop-grid-left-sidebar.html">Desktop Headphone</a></li>
                          <li><a href="shop-grid-left-sidebar.html">Mobile Headphone</a></li>
                          <li><a href="shop-grid-left-sidebar.html">Wireless
                              Headphone</a></li>
                          <li><a href="shop-grid-left-sidebar.html">LED Headphone</a></li>
                          <li><a href="shop-grid-left-sidebar.html">Over-ear</a></li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="shop-grid-left-sidebar.html">accessories</a>
                        <ul>
                          <li><a href="shop-grid-left-sidebar.html">Power Bank</a></li>
                          <li><a href="shop-grid-left-sidebar.html">Data Cable</a></li>
                          <li><a href="shop-grid-left-sidebar.html">Power Cable</a></li>
                          <li><a href="shop-grid-left-sidebar.html">Battery</a></li>
                          <li><a href="shop-grid-left-sidebar.html">OTG Cable</a></li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="shop-grid-left-sidebar.html">accessories</a>
                        <ul>
                          <li><a href="shop-grid-left-sidebar.html">Power Bank</a></li>
                          <li><a href="shop-grid-left-sidebar.html">Data Cable</a></li>
                          <li><a href="shop-grid-left-sidebar.html">Power Cable</a></li>
                          <li><a href="shop-grid-left-sidebar.html">Battery</a></li>
                          <li><a href="shop-grid-left-sidebar.html">OTG Cable</a></li>
                        </ul>
                      </li>
                    </ul>{/* Mega Category Menu End */}
                  </li>
                  <li><a href="shop-grid-left-sidebar.html"><i className="fa fa-clock-o" />
                      watch</a></li>
                  <li><a href="shop-grid-left-sidebar.html"><i className="fa fa-television" />
                      electronic</a></li>
                  <li><a href="shop-grid-left-sidebar.html"><i className="fa fa-tablet" />
                      tablet</a></li>
                  <li><a href="shop-grid-left-sidebar.html"><i className="fa fa-book" /> books</a></li>
                  <li><a href="shop-grid-left-sidebar.html"><i className="fa fa-microchip" />
                      microchip</a></li>
                  <li><a href="shop-grid-left-sidebar.html"><i className="fa fa-bullhorn" />
                      bullhorn</a></li>
                </ul>
              </nav>
            </div>
            <div className="main-menu">
              <nav id="mobile-menu">
                <ul>
                  <li className="active"><a href="#"><i className="fa fa-home" />Home <i className="fa fa-angle-down" /></a>
                    <ul className="dropdown">
                      <li><NavLink to="/">Home version 01</NavLink></li>
                      <li><NavLink to="/home2">Home version 02</NavLink></li>
                      <li><a href="index-3.html">Home version 03</a></li>
                      <li><a href="index-4.html">Home version 04</a></li>
                    </ul>
                  </li>
                  <li className="static"><a href="#">pages <i className="fa fa-angle-down" /></a>
                    <ul className="megamenu dropdown">
                      <li className="mega-title"><a href="#">column 01</a>
                        <ul>
                          <li><a href="shop-grid-left-sidebar.html">shop grid left
                              sidebar</a></li>
                          <li><a href="shop-grid-right-sidebar.html">shop grid right
                              sidebar</a></li>
                          <li><a href="shop-grid-full-3-col.html">shop grid full 3
                              column</a></li>
                          <li><a href="shop-grid-full-4-col.html">shop grid full 4
                              column</a></li>
                        </ul>
                      </li>
                      <li className="mega-title"><a href="#">column 02</a>
                        <ul>
                          <li><a href="product-details.html">product details</a></li>
                          <li><a href="product-details-affiliate.html">product
                              details
                              affiliate</a></li>
                          <li><a href="product-details-variable.html">product details
                              variable</a></li>
                          <li><a href="product-details-group.html">product details
                              group</a></li>
                        </ul>
                      </li>
                      <li className="mega-title"><a href="#">column 03</a>
                        <ul>
                          <li><a href="cart.html">cart</a></li>
                          <li><a href="checkout.html">checkout</a></li>
                          <li><a href="compare.html">compare</a></li>
                          <li><a href="wishlist.html">wishlist</a></li>
                        </ul>
                      </li>
                      <li className="mega-title"><a href="#">column 04</a>
                        <ul>
                          <li><a href="my-account.html">my-account</a></li>
                          <li><a href="login-register.html">login-register</a></li>
                          <li><a href="about-us.html">about us</a></li>
                          <li><a href="contact-us.html">contact us</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li><a href="#">shop <i className="fa fa-angle-down" /></a>
                    <ul className="dropdown">
                      <li><a href="#">shop grid layout <i className="fa fa-angle-right" /></a>
                        <ul className="dropdown">
                          <li><a href="shop-grid-left-sidebar.html">shop grid left
                              sidebar</a></li>
                          <li><a href="shop-grid-left-sidebar-3-col.html">left
                              sidebar 3 col</a></li>
                          <li><a href="shop-grid-right-sidebar.html">shop grid right
                              sidebar</a></li>
                          <li><a href="shop-grid-right-sidebar-3-col.html">grid right
                              sidebar 3 col</a></li>
                          <li><a href="shop-grid-full-3-col.html">shop grid full 3
                              column</a></li>
                          <li><a href="shop-grid-full-4-col.html">shop grid full 4
                              column</a></li>
                        </ul>
                      </li>
                      <li><a href="#">shop list layout <i className="fa fa-angle-right" /></a>
                        <ul className="dropdown">
                          <li><a href="shop-list-left-sidebar.html">shop list left
                              sidebar</a></li>
                          <li><a href="shop-list-right-sidebar.html">shop list right
                              sidebar</a></li>
                          <li><a href="shop-list-full.html">shop list full width</a></li>
                        </ul>
                      </li>
                      <li><a href="#">products details <i className="fa fa-angle-right" /></a>
                        <ul className="dropdown">
                          <li><a href="product-details.html">product details</a></li>
                          <li><a href="product-details-affiliate.html">product
                              details
                              affiliate</a></li>
                          <li><a href="product-details-variable.html">product details
                              variable</a></li>
                          <li><a href="product-details-group.html">product details
                              group</a></li>
                          <li><a href="product-details-box.html">product details box
                              slider</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li><a href="#">Blog <i className="fa fa-angle-down" /></a>
                    <ul className="dropdown">
                      <li><a href="blog-left-sidebar.html">blog left sidebar</a></li>
                      <li><a href="blog-left-sidebar-2-col.html">blog left sidebar 2 col</a></li>
                      <li><a href="blog-right-sidebar.html">blog right sidebar</a></li>
                      <li><a href="blog-full-2-column.html">blog full 2 column</a></li>
                      <li><a href="blog-full-3-column.html">blog full 3 column</a></li>
                      <li><a href="blog-details.html">blog details</a></li>
                      <li><a href="blog-details-audio.html">blog details audio</a></li>
                      <li><a href="blog-details-video.html">blog details video</a></li>
                      <li><a href="blog-details-image.html">blog details image</a></li>
                    </ul>
                  </li>
                  <li><a href="contact-us.html">Contact us</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="col-12 d-block d-lg-none">
          <div className="mobile-menu" />
        </div>
      </div>
    </div>
  </div>
  {/* main menu area end */}
</header>
{/* header area end */}

    </>
  )
}
