import React from 'react'
import { Link } from 'react-router-dom'
export default function Home3Section4() {
  return (
    <>
{/* home banner area start */}
<div className="banner-area mt-3 mt-lg-28 mb-34 mb-md-0 mb-sm-0 mt-xs-0">
  <div className="container">
    <div className="row">
      <div className="col-lg-4">
        <div className="img-container img-full fix mb-md-30 mb-sm-30">
          <Link to="/ProductDetail">
            <img src="assets/img/banner/home3_static6.jpg" alt />
          </Link>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="img-container img-full fix mb-md-30 mb-sm-30">
          <Link to="/ProductDetail">
            <img src="assets/img/banner/home3_static7.jpg" alt />
          </Link>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="img-container img-full fix mb-md-30 mb-sm-30">
          <Link to="/ProductDetail">
            <img src="assets/img/banner/home3_static8.jpg" alt />
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>
{/* home banner area end */}

      
    </>
  )
}
