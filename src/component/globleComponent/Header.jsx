import React, { useState } from 'react'
import { NavLink,Link } from 'react-router-dom'
export default function Header() {
  const [Show,SetShow]=useState(false)
  const [Show2,SetShow2]=useState(false)

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
                      <NavLink className="dropdown-item" to="/MyAcccount">my account</NavLink>
                      <NavLink className="dropdown-item" to="/LoginRegister"> login/register</NavLink>
                    </div>
                  </div>
                </li>
                <li>
                  <NavLink to="/Whislist">my wishlist</NavLink>
                </li>
                <li>
                  <NavLink to="/Cart">my cart</NavLink>
                </li>
                <li>
                  <NavLink to="/Checkout">checkout</NavLink>
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
            <NavLink to="/">
              <img className='w-100 img-fluid' src="assets/img/logo/creative-web-logo.png" alt="brand logo" />
            </NavLink>
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
                <div onClick={()=>SetShow2(!Show2)} className="mini-cart-btn">
                  <i className="fa fa-shopping-cart px-2" />
                  <span className="cart-notification">2</span>
                </div>
                <div className="cart-total-price px-2">
                  <span>total</span>
                  $50.00
                </div>
                <ul className="cart-list" style={{display:Show2?"block":"none"}}>
                  <li>
                    <div className="cart-img">
                      <NavLink to="/ProductDetail"><img src="assets/img/cart/cart-1.jpg" alt /></NavLink>
                    </div>
                    <div className="cart-info">
                      <h4><NavLink to="/ProductDetail">simple product 09</NavLink></h4>
                      <span>$60.00</span>
                    </div>
                    <div className="del-icon">
                      <i className="fa fa-times" />
                    </div>
                  </li>
                  <li>
                    <div className="cart-img">
                      <NavLink to="/ProductDetail"><img src="assets/img/cart/cart-2.jpg" alt /></NavLink>
                    </div>
                    <div className="cart-info">
                      <h4><NavLink to="/ProductDetail">virtual product 10</NavLink></h4>
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
                    <NavLink to="/Checkout">checkout</NavLink>
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
                  <li><Link  to="/ShopGirdLeftSidebar"><i className="fa fa-desktop" />
                      computer</Link></li>
                  <li className="menu-item-has-children"><Link  to="/ShopGirdLeftSidebar"><i className="fa fa-camera" /> camera</Link>
                    {/* Mega Category Menu Start */}
                    <ul className="category-mega-menu">
                      <li className="menu-item-has-children">
                        <Link  to="/ShopGirdLeftSidebar">Smartphone</Link>
                        <ul>
                          <li><Link  to="/ShopGirdLeftSidebar">Samsome</Link></li>
                          <li><Link  to="/ShopGirdLeftSidebar">GL Stylus</Link></li>
                          <li><Link  to="/ShopGirdLeftSidebar">Uawei</Link></li>
                          <li><Link  to="/ShopGirdLeftSidebar">Cherry Berry</Link></li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link  to="/ShopGirdLeftSidebar">headphone</Link>
                        <ul>
                          <li><Link  to="/ShopGirdLeftSidebar">Desktop Headphone</Link></li>
                          <li><Link  to="/ShopGirdLeftSidebar">Mobile Headphone</Link></li>
                          <li><Link  to="/ShopGirdLeftSidebar">Wireless
                              Headphone</Link></li>
                          <li><Link  to="/ShopGirdLeftSidebar">LED Headphone</Link></li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link  to="/ShopGirdLeftSidebar">accessories</Link>
                        <ul>
                          <li><Link  to="/ShopGirdLeftSidebar">Power Bank</Link></li>
                          <li><Link  to="/ShopGirdLeftSidebar">Data Cable</Link></li>
                          <li><Link  to="/ShopGirdLeftSidebar">Power Cable</Link></li>
                          <li><Link  to="/ShopGirdLeftSidebar">Battery</Link></li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link  to="/ShopGirdLeftSidebar">headphone</Link>
                        <ul>
                          <li><Link  to="/ShopGirdLeftSidebar">Desktop Headphone</Link></li>
                          <li><Link  to="/ShopGirdLeftSidebar">Mobile Headphone</Link></li>
                          <li><Link  to="/ShopGirdLeftSidebar">Wireless
                              Headphone</Link></li>
                          <li><Link  to="/ShopGirdLeftSidebar">LED Headphone</Link></li>
                        </ul>
                      </li>
                    </ul>{/* Mega Category Menu End */}
                  </li>
                  <li className="menu-item-has-children"><Link  to="/ShopGirdLeftSidebar"><i className="fa fa-book" /> smart phones</Link>
                    {/* Mega Category Menu Start */}
                    <ul className="category-mega-menu">
                      <li className="menu-item-has-children">
                        <Link  to="/ShopGirdLeftSidebar">Smartphone</Link>
                        <ul>
                          <li><Link  to="/ShopGirdLeftSidebar">Samsome</Link></li>
                          <li><Link  to="/ShopGirdLeftSidebar">GL Stylus</Link></li>
                          <li><Link  to="/ShopGirdLeftSidebar">Uawei</Link></li>
                          <li><Link  to="/ShopGirdLeftSidebar">Cherry Berry</Link></li>
                          <li><Link  to="/ShopGirdLeftSidebar">uPhone</Link></li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link  to="/ShopGirdLeftSidebar">headphone</Link>
                        <ul>
                          <li><Link  to="/ShopGirdLeftSidebar">Desktop Headphone</Link></li>
                          <li><Link  to="/ShopGirdLeftSidebar">Mobile Headphone</Link></li>
                          <li><Link  to="/ShopGirdLeftSidebar">Wireless
                              Headphone</Link></li>
                          <li><Link  to="/ShopGirdLeftSidebar">LED Headphone</Link></li>
                          <li><Link  to="/ShopGirdLeftSidebar">Over-ear</Link></li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link  to="/ShopGirdLeftSidebar">accessories</Link>
                        <ul>
                          <li><Link  to="/ShopGirdLeftSidebar">Power Bank</Link></li>
                          <li><Link  to="/ShopGirdLeftSidebar">Data Cable</Link></li>
                          <li><Link  to="/ShopGirdLeftSidebar">Power Cable</Link></li>
                          <li><Link  to="/ShopGirdLeftSidebar">Battery</Link></li>
                          <li><Link  to="/ShopGirdLeftSidebar">OTG Cable</Link></li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <Link  to="/ShopGirdLeftSidebar">accessories</Link>
                        <ul>
                          <li><Link  to="/ShopGirdLeftSidebar">Power Bank</Link></li>
                          <li><Link  to="/ShopGirdLeftSidebar">Data Cable</Link></li>
                          <li><Link  to="/ShopGirdLeftSidebar">Power Cable</Link></li>
                          <li><Link  to="/ShopGirdLeftSidebar">Battery</Link></li>
                          <li><Link  to="/ShopGirdLeftSidebar">OTG Cable</Link></li>
                        </ul>
                      </li>
                    </ul>{/* Mega Category Menu End */}
                  </li>
                  <li><Link  to="/ShopGirdLeftSidebar"><i className="fa fa-clock-o" />
                      watch</Link></li>
                  <li><Link  to="/ShopGirdLeftSidebar"><i className="fa fa-television" />
                      electronic</Link></li>
                  <li><Link  to="/ShopGirdLeftSidebar"><i className="fa fa-tablet" />
                      tablet</Link></li>
                  <li><Link  to="/ShopGirdLeftSidebar"><i className="fa fa-book" /> books</Link></li>
                  <li><Link  to="/ShopGirdLeftSidebar"><i className="fa fa-microchip" />
                      microchip</Link></li>
                  <li><Link  to="/ShopGirdLeftSidebar"><i className="fa fa-bullhorn" />
                      bullhorn</Link></li>
                </ul>
              </nav>
            </div>
            <div className="main-menu d-sm-block d-none" >
              <nav id="mobile-menu">
                <ul>
                  <li className="active"><a href="#"><i className="fa fa-home" />Home <i className="fa fa-angle-down" /></a>
                    <ul className="dropdown">
                      <li><NavLink to="/">Home version 01</NavLink></li>
                      <li><NavLink to="/home2">Home version 02</NavLink></li>
                      <li><NavLink to="/home3">Home version 03</NavLink></li>
                      {/* <li><NavLink to="/home4">Home version 04</NavLink></li> */}
                    </ul>
                  </li>
                  <li className="static"><a href="#">pages <i className="fa fa-angle-down" /></a>
                    <ul className="megamenu dropdown">
                      <li className="mega-title"><a href="#">column 01</a>
                        <ul>
                          <li><NavLink to="/ShopGirdLeftSidebar">shop grid left
                              sidebar</NavLink></li>
                          <li><NavLink to="/ShopGirdRightSidebar">shop grid right
                              sidebar</NavLink></li>
                          <li><NavLink to="/ShopGirdFullCol3">shop grid full 3
                              column</NavLink></li>
                          <li><NavLink to="/ShopGirdFullCol4">shop grid full 4
                              column</NavLink></li>
                        </ul>
                      </li>
                      <li className="mega-title"><a href="#">column 02</a>
                        <ul>
                          <li><NavLink to="/ProductDetail">product details</NavLink></li>
                          <li><NavLink to="/product-details-affiliate">product
                              details
                              affiliate</NavLink></li>
                          <li><NavLink to="/product-details-variable">product details
                              variable</NavLink></li>
                          <li><NavLink to="/ProductDetailGroup">product details
                              group</NavLink></li>
                        </ul>
                      </li>
                      <li className="mega-title"><a href="#">column 03</a>
                        <ul>
                          <li><NavLink to="/Cart">cart</NavLink></li>
                          <li><NavLink to="/Checkout">checkout</NavLink></li>
                          <li><NavLink to="/Compare">compare</NavLink></li>
                          <li><NavLink to="/Whislist">wishlist</NavLink></li>
                        </ul>
                      </li>
                      <li className="mega-title"><a href="#">column 04</a>
                        <ul>
                          <li><NavLink to="/MyAcccount">my-account</NavLink></li>
                          <li><NavLink to="/LoginRegister">login-register</NavLink></li>
                          <li><NavLink to="/AboutUs">about us</NavLink></li>
                          <li><NavLink to="/ContactUs">contact us</NavLink></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li><a href="#">shop <i className="fa fa-angle-down" /></a>
                    <ul className="dropdown">
                      <li><NavLink to="#">shop grid layout <i className="fa fa-angle-right" /></NavLink>
                        <ul className="dropdown">
                          <li><NavLink to="/ShopGirdLeftSidebar">shop grid left
                              sidebar</NavLink></li>
                          {/* <li><NavLink to="/ShopGirdRightSidebar">left
                              sidebar 3 col</NavLink></li> */}
                          <li><NavLink to="/ShopGirdRightSidebar">shop grid right
                              sidebar</NavLink></li>
                          {/* <li><a href="shop-grid-right-sidebar-3-col.html">grid right
                              sidebar 3 col</a></li> */}
                          <li><NavLink to="/ShopGirdFullCol3">shop grid full 3
                              column</NavLink></li>
                          <li><NavLink to="/ShopGirdFullCol4">shop grid full 4
                              column</NavLink></li>
                        </ul>
                      </li>
                      <li><a href="#">shop list layout <i className="fa fa-angle-right" /></a>
                        <ul className="dropdown">
                        <li><NavLink to="/ShopLeftList">shop list left
                              sidebar</NavLink></li>
                          <li><NavLink to="/ShopRightList">shop list right
                              sidebar</NavLink></li>
                          <li><NavLink to="/ShopListFullWidth">shop list full width</NavLink></li>
                        </ul>
                      </li>
                      <li><NavLink to="#">products details <i className="fa fa-angle-right" /></NavLink>
                        <ul className="dropdown">
                          <li><NavLink to="/ProductDetail">product details</NavLink></li>
                          <li><NavLink to="/product-details-affiliate">product
                              details
                              affiliate</NavLink></li>
                          <li><NavLink to="/product-details-variable">product details
                              variable</NavLink></li>
                          <li><NavLink to="/ProductDetailGroup">product details
                              group</NavLink></li>
                          <li><NavLink to="/ProductDetailBox">product details box
                              slider</NavLink></li>
                        </ul>
                      </li>
                  </ul>
                  </li>
                  {/* <li><a href="#">Blog <i className="fa fa-angle-down" /></a>
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
                  </li> */}
                  <li><NavLink to="/AboutUs">About Us</NavLink></li>
                  <li><NavLink to="/ContactUs">Contact us</NavLink></li>

                </ul>
              </nav>
            </div>
        <nav className="navbar navbar-light bg-light shadow  d-sm-none d-block">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">
    <img className='w-100 img-fluid' src="assets/img/logo/creative-web-logo.png" alt="brand logo" />

    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="offcanvas offcanvas-end text-bg-light" tabIndex={-1} id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
        <button type="button" className="btn-close btn-close-dark" data-bs-dismiss="offcanvas" aria-label="Close" />
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
        <li className="nav-item dropdown ">
            <NavLink className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Home
            </NavLink>
            <ul className="dropdown-menu dropdown-menu-light justify-content-center">
              <li><NavLink className="dropdown-item" to="/">Home Version 1</NavLink></li>
              <li><NavLink className="dropdown-item" to="/home2">Home Version 2</NavLink></li>
              <li><NavLink className="dropdown-item" to="/home3">Home Version 3</NavLink></li>

             
            </ul>
          </li>
          <li className="nav-item dropdown">
            <NavLink className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Pages
            </NavLink>
            <ul className="dropdown-menu dropdown-menu-light justify-content-center">
              


              <li ><NavLink className="dropdown-item" to="/ShopGirdLeftSidebar">shop grid left
                              sidebar</NavLink></li>
                          <li ><NavLink className="dropdown-item" to="/ShopGirdRightSidebar">shop grid right
                              sidebar</NavLink></li>
                          <li ><NavLink className="dropdown-item" to="/ShopGirdFullCol3">shop grid full 3
                              column</NavLink></li>
                          <li ><NavLink className="dropdown-item" to="/ShopGirdFullCol4">shop grid full 4
                              column</NavLink></li>
               


                              <li ><NavLink className="dropdown-item" to="/ProductDetail">product details</NavLink></li>
                          <li ><NavLink className="dropdown-item" to="/product-details-affiliate">product
                              details
                              affiliate</NavLink></li>
                          <li ><NavLink className="dropdown-item" to="/product-details-variable">product details
                              variable</NavLink></li>
                          <li ><NavLink className="dropdown-item" to="/ProductDetailGroup">product details
                              group</NavLink></li>




                              <li ><NavLink className="dropdown-item" to="/Cart">cart</NavLink></li>
                          <li ><NavLink className="dropdown-item" to="/Checkout">checkout</NavLink></li>
                          <li ><NavLink className="dropdown-item" to="/Compare">compare</NavLink></li>
                          <li ><NavLink className="dropdown-item" to="/Whislist">wishlist</NavLink></li>




                          <li ><NavLink className="dropdown-item" to="/MyAcccount">my-account</NavLink></li>
                          <li ><NavLink className="dropdown-item" to="/LoginRegister">login-register</NavLink></li>
                          <li ><NavLink className="dropdown-item" to="/AboutUs">about us</NavLink></li>
                          <li ><NavLink className="dropdown-item" to="/ContactUs">contact us</NavLink></li>
 
 
 
            </ul>
          </li>
          
          <li className="nav-item dropdown ">
            <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Shop grid layout
            </NavLink>
            <ul className="dropdown-menu dropdown-menu-light justify-content-center">
            <li><NavLink className="dropdown-item" to="/ShopGirdLeftSidebar">shop grid left
                              sidebar</NavLink></li>
                          
                          <li><NavLink className="dropdown-item" to="/ShopGirdRightSidebar">shop grid right
                              sidebar</NavLink></li>
                   
                          <li><NavLink className="dropdown-item" to="/ShopGirdFullCol3">shop grid full 3
                              column</NavLink></li>
                          <li><NavLink className="dropdown-item" to="/ShopGirdFullCol4">shop grid full 4
                              column</NavLink></li>
             
            </ul>
          </li>

          <li className="nav-item dropdown ">
            <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Shop list layout
            </NavLink>
            <ul className="dropdown-menu dropdown-menu-light justify-content-center">
            <li><NavLink className="dropdown-item" to="/ShopLeftList">shop list left
                              sidebar</NavLink></li>
                          <li><NavLink className="dropdown-item" to="/ShopRightList">shop list right
                              sidebar</NavLink></li>
                          <li><NavLink className="dropdown-item" to="/ShopListFullWidth">shop list full width</NavLink></li>
             
            </ul>
          </li>


          <li className="nav-item dropdown ">
            <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            products details
            </NavLink>
            <ul className="dropdown-menu dropdown-menu-light justify-content-center">
            <li><NavLink className="dropdown-item" to="/ProductDetail">product details</NavLink></li>
                          <li><NavLink className="dropdown-item" to="/product-details-affiliate">product
                              details
                              affiliate</NavLink></li>
                          <li><NavLink className="dropdown-item" to="/product-details-variable">product details
                              variable</NavLink></li>
                          <li><NavLink className="dropdown-item" to="/ProductDetailGroup">product details
                              group</NavLink></li>
                          <li><NavLink className="dropdown-item" to="/ProductDetailBox">product details box
                              slider</NavLink></li>
            </ul>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/AboutUs">About Us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/ContactUs">Contact Us</NavLink>
          </li>
        </ul>
    
      </div>
    </div>
  </div>
</nav>

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
