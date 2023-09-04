import React from 'react'
import { Link } from 'react-router-dom'
export default function Home1Section3() {
  return (
    <>
{/* home banner area start */}
<div className="banner-area mt-30 d-sm-none">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-3 col-sm-6 order-1">
        <div className="img-container img-full fix imgs-res mb-sm-30">
          <Link to="#">
            <img width={"100%"} className='img-fluid' src="assets/img/banner/banner_left.jpg" alt />
          </Link>
        </div>
      </div>
      <div className="col-lg-5 col-md-5 order-sm-3">
        <div className="img-container img-full fix mb-30">
          <Link to="#">
            <img width={"100%"} className='img-fluid' src="assets/img/banner/banner_static_top1.jpg" alt />
          </Link>
        </div>
        <div className="img-container img-full fix mb-30">
          <Link to="#">
            <img width={"100%"} className='img-fluid' src="assets/img/banner/banner_static_top2.jpg" alt />
          </Link>
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-6 order-2 order-md-3">
        <div className="img-container img-full fix">
          <Link to="#">
            <img width={"100%"} className='img-fluid' src="assets/img/banner/banner_static_top3.jpg" alt />
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
